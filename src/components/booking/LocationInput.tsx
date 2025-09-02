import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LocationInputProps {
  location?: string;
  onLocationChange: (location: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const LocationInput = ({ location, onLocationChange, onNext, onBack }: LocationInputProps) => {
  const [currentLocation, setCurrentLocation] = useState(location || "");
  const [detecting, setDetecting] = useState(false);
  const { toast } = useToast();

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Location not supported",
        description: "Your browser doesn't support location detection.",
        variant: "destructive",
      });
      return;
    }

    setDetecting(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          // In a real app, you'd use a geocoding service here
          // For demo purposes, we'll use a mock location
          const mockLocation = "Paris, France";
          setCurrentLocation(mockLocation);
          onLocationChange(mockLocation);
          
          toast({
            title: "Location detected",
            description: `Using location: ${mockLocation}`,
          });
        } catch (error) {
          toast({
            title: "Error",
            description: "Couldn't get location details. Please enter manually.",
            variant: "destructive",
          });
        } finally {
          setDetecting(false);
        }
      },
      (error) => {
        setDetecting(false);
        toast({
          title: "Location access denied",
          description: "Please enter your location manually.",
          variant: "destructive",
        });
      }
    );
  };

  const handleNext = () => {
    if (!currentLocation.trim()) {
      toast({
        title: "Location required",
        description: "Please enter your location to continue.",
        variant: "destructive",
      });
      return;
    }
    onLocationChange(currentLocation);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="location" className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Address or Zip Code
          </Label>
          <Input
            id="location"
            type="text"
            placeholder="Enter your address or zip code"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
            className="text-base"
          />
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={handleDetectLocation}
            disabled={detecting}
            className="flex items-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            {detecting ? "Detecting..." : "Auto-detect via GPS"}
          </Button>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={handleNext} className="bg-gradient-primary hover:opacity-90">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default LocationInput;