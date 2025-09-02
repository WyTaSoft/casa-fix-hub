import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import ServiceSelection from "@/components/booking/ServiceSelection";
import LocationInput from "@/components/booking/LocationInput";
import DateTimeSelection from "@/components/booking/DateTimeSelection";
import RequestForm from "@/components/booking/RequestForm";
import ProfessionalResponses from "@/components/booking/ProfessionalResponses";
import BookingConfirmation from "@/components/booking/BookingConfirmation";
import BookingSuccess from "@/components/booking/BookingSuccess";

export interface BookingData {
  serviceId?: number;
  serviceName?: string;
  location?: string;
  preferredDate?: Date;
  timeSlot?: string;
  title?: string;
  details?: string;
  duration?: string;
  budget?: string;
  photos?: File[];
  selectedProfessional?: any;
  bookingId?: number;
}

const BookService = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({});

  const totalSteps = 7;
  const progress = (currentStep / totalSteps) * 100;

  // Redirect to auth if not logged in
  if (!user) {
    navigate("/auth");
    return null;
  }

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ServiceSelection
            onServiceSelect={(serviceId, serviceName) => {
              updateBookingData({ serviceId, serviceName });
              nextStep();
            }}
          />
        );
      case 2:
        return (
          <LocationInput
            location={bookingData.location}
            onLocationChange={(location) => updateBookingData({ location })}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <DateTimeSelection
            selectedDate={bookingData.preferredDate}
            selectedTime={bookingData.timeSlot}
            onDateTimeSelect={(date, timeSlot) => {
              updateBookingData({ preferredDate: date, timeSlot });
              nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <RequestForm
            title={bookingData.title}
            details={bookingData.details}
            duration={bookingData.duration}
            budget={bookingData.budget}
            serviceName={bookingData.serviceName}
            onSubmit={(formData) => {
              updateBookingData(formData);
              nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 5:
        return (
          <ProfessionalResponses
            bookingData={bookingData}
            onSelectProfessional={(professional) => {
              updateBookingData({ selectedProfessional: professional });
              nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 6:
        return (
          <BookingConfirmation
            bookingData={bookingData}
            onConfirm={(bookingId) => {
              updateBookingData({ bookingId });
              nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 7:
        return (
          <BookingSuccess
            bookingData={bookingData}
            onViewBookings={() => navigate("/my-bookings")}
            onNewBooking={() => {
              setCurrentStep(1);
              setBookingData({});
            }}
          />
        );
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Choose a Service";
      case 2: return "Enter Location";
      case 3: return "Select Date & Time";
      case 4: return "Describe Your Request";
      case 5: return "Professional Responses";
      case 6: return "Review & Confirm";
      case 7: return "Booking Confirmed";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold text-foreground">CasaFix</span>
          </div>
          <Button variant="ghost" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress indicator */}
        {currentStep < 7 && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Step {currentStep} of {totalSteps - 1}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Step content */}
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">{getStepTitle()}</CardTitle>
            {currentStep === 1 && (
              <CardDescription>
                Select the service you need help with
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {renderStep()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookService;