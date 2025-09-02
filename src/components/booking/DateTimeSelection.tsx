import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Clock, Calendar as CalendarIcon } from "lucide-react";

interface DateTimeSelectionProps {
  selectedDate?: Date;
  selectedTime?: string;
  onDateTimeSelect: (date: Date, timeSlot: string) => void;
  onBack: () => void;
}

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

const DateTimeSelection = ({ selectedDate, selectedTime, onDateTimeSelect, onBack }: DateTimeSelectionProps) => {
  const [date, setDate] = useState<Date | undefined>(selectedDate);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(selectedTime);
  const [flexibility, setFlexibility] = useState<"specific" | "flexible">("specific");

  const handleContinue = () => {
    if (flexibility === "flexible") {
      onDateTimeSelect(new Date(), "flexible");
      return;
    }

    if (!date || !timeSlot) {
      return;
    }
    onDateTimeSelect(date, timeSlot);
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  return (
    <div className="space-y-6">
      {/* Flexibility Options */}
      <div className="grid grid-cols-2 gap-4">
        <Card
          className={cn(
            "cursor-pointer transition-all duration-200 border-2",
            flexibility === "specific" ? "border-primary shadow-soft" : "hover:border-primary/50"
          )}
          onClick={() => setFlexibility("specific")}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Specific Date & Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Choose your preferred date and time
            </p>
          </CardContent>
        </Card>

        <Card
          className={cn(
            "cursor-pointer transition-all duration-200 border-2",
            flexibility === "flexible" ? "border-primary shadow-soft" : "hover:border-primary/50"
          )}
          onClick={() => setFlexibility("flexible")}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="w-5 h-5" />
              I'm Flexible
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Let professionals suggest times
            </p>
          </CardContent>
        </Card>
      </div>

      {flexibility === "specific" && (
        <>
          {/* Date Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Select Date</h3>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date() || date < new Date(Date.now() - 86400000)}
                className={cn("rounded-md border pointer-events-auto")}
                modifiers={{
                  weekend: isWeekend,
                }}
                modifiersStyles={{
                  weekend: { color: '#059669' }
                }}
              />
            </div>
          </div>

          {/* Time Selection */}
          {date && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Select Time</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={timeSlot === time ? "default" : "outline"}
                    onClick={() => setTimeSlot(time)}
                    className={cn(
                      "h-auto py-3",
                      timeSlot === time && "bg-gradient-primary hover:opacity-90"
                    )}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {flexibility === "flexible" && (
        <div className="text-center py-8">
          <Badge variant="secondary" className="text-base px-4 py-2">
            You've chosen to be flexible with timing
          </Badge>
          <p className="text-muted-foreground mt-2">
            Professionals will suggest available times when they respond to your request.
          </p>
        </div>
      )}

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          onClick={handleContinue}
          disabled={flexibility === "specific" && (!date || !timeSlot)}
          className="bg-gradient-primary hover:opacity-90"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default DateTimeSelection;