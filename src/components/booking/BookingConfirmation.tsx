import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, MapPin, Clock, Euro, User, MessageSquare, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { BookingData } from "@/pages/BookService";
import { useToast } from "@/hooks/use-toast";

interface BookingConfirmationProps {
  bookingData: BookingData;
  onConfirm: (bookingId: number) => void;
  onBack: () => void;
}

const BookingConfirmation = ({ bookingData, onConfirm, onBack }: BookingConfirmationProps) => {
  const [confirming, setConfirming] = useState(false);
  const { toast } = useToast();

  const handleConfirm = async () => {
    setConfirming(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const bookingId = Math.floor(Math.random() * 10000);
      
      toast({
        title: "Booking confirmed!",
        description: "You'll receive confirmation details by email.",
      });
      
      onConfirm(bookingId);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to confirm booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setConfirming(false);
    }
  };

  const professional = bookingData.selectedProfessional;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Review & Confirm Your Booking</h3>
        <p className="text-muted-foreground">
          Please review all details before confirming your booking.
        </p>
      </div>

      {/* Service Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Service Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-1">Service</h4>
              <p className="text-muted-foreground">{bookingData.serviceName}</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Request Title</h4>
              <p className="text-muted-foreground">{bookingData.title}</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Location</h4>
              <p className="text-muted-foreground flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {bookingData.location}
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Date & Time</h4>
              <p className="text-muted-foreground flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {bookingData.timeSlot === "flexible" ? (
                  "Flexible timing"
                ) : (
                  `${bookingData.preferredDate ? format(bookingData.preferredDate, "MMM dd, yyyy") : ""} at ${bookingData.timeSlot}`
                )}
              </p>
            </div>
          </div>
          
          {bookingData.details && (
            <>
              <Separator />
              <div>
                <h4 className="font-medium mb-1">Details</h4>
                <p className="text-muted-foreground text-sm">{bookingData.details}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Professional Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Your Professional
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={professional?.avatar} />
              <AvatarFallback className="bg-gradient-primary text-white text-lg">
                {professional?.name.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-semibold text-lg">{professional?.name}</h4>
                {professional?.verified && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span>⭐ {professional?.rating} ({professional?.reviewCount} reviews)</span>
                <span>{professional?.completedJobs} jobs completed</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Euro className="w-4 h-4" />
                  <span className="font-medium">{professional?.price}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Available: {professional?.proposedTime}</span>
                </div>
              </div>
            </div>
          </div>
          
          {professional?.message && (
            <>
              <Separator className="my-4" />
              <div className="bg-accent/50 p-4 rounded-lg">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message from {professional.name}
                </h5>
                <p className="text-sm text-muted-foreground">{professional.message}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Important Information */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4">
          <h4 className="font-medium mb-2">Important Information</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• You'll receive confirmation details by email and SMS</li>
            <li>• The professional will contact you to coordinate the final details</li>
            <li>• Payment is made directly to the professional after service completion</li>
            <li>• You can cancel or reschedule up to 24 hours before the appointment</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack} disabled={confirming}>
          Back to Responses
        </Button>
        <Button
          onClick={handleConfirm}
          disabled={confirming}
          className="bg-gradient-primary hover:opacity-90 min-w-[150px]"
        >
          {confirming ? "Confirming..." : "Confirm Booking"}
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmation;