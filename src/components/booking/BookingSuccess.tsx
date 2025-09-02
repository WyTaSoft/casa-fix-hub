import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, MessageSquare, Star } from "lucide-react";
import { BookingData } from "@/pages/BookService";

interface BookingSuccessProps {
  bookingData: BookingData;
  onViewBookings: () => void;
  onNewBooking: () => void;
}

const BookingSuccess = ({ bookingData, onViewBookings, onNewBooking }: BookingSuccessProps) => {
  return (
    <div className="space-y-6 text-center">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
      </div>

      {/* Success Message */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Your booking is confirmed!
        </h3>
        <p className="text-muted-foreground text-lg">
          You'll receive confirmation details and reminders by email/SMS.
        </p>
      </div>

      {/* Booking Details Summary */}
      <Card className="bg-accent/30">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-medium mb-1">Service</h4>
              <p className="text-muted-foreground">{bookingData.serviceName}</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Professional</h4>
              <p className="text-muted-foreground">{bookingData.selectedProfessional?.name}</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Booking ID</h4>
              <p className="text-muted-foreground font-mono">#{bookingData.bookingId}</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Estimated Price</h4>
              <p className="text-muted-foreground">{bookingData.selectedProfessional?.price}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardContent className="p-6">
          <h4 className="font-semibold mb-4">What happens next?</h4>
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Professional will contact you</p>
                <p className="text-sm text-muted-foreground">
                  {bookingData.selectedProfessional?.name} will reach out to confirm details and coordinate timing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Service appointment</p>
                <p className="text-sm text-muted-foreground">
                  Complete your {bookingData.serviceName?.toLowerCase()} service at the scheduled time.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Rate your experience</p>
                <p className="text-sm text-muted-foreground">
                  Help other users by leaving a review after the service is completed.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
        <Button onClick={onViewBookings} className="bg-gradient-primary hover:opacity-90">
          Go to My Bookings
        </Button>
        <Button variant="outline" onClick={onNewBooking}>
          Book Another Service
        </Button>
      </div>
    </div>
  );
};

export default BookingSuccess;