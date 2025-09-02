import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RequestFormProps {
  title?: string;
  details?: string;
  duration?: string;
  budget?: string;
  serviceName?: string;
  onSubmit: (data: {
    title: string;
    details: string;
    duration: string;
    budget: string;
    photos: File[];
  }) => void;
  onBack: () => void;
}

const RequestForm = ({ title, details, duration, budget, serviceName, onSubmit, onBack }: RequestFormProps) => {
  const [formData, setFormData] = useState({
    title: title || "",
    details: details || "",
    duration: duration || "",
    budget: budget || "",
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const { toast } = useToast();

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (photos.length + files.length > 5) {
      toast({
        title: "Too many photos",
        description: "You can upload a maximum of 5 photos.",
        variant: "destructive",
      });
      return;
    }

    const validFiles = files.filter(file => {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: `${file.name} is too large. Maximum size is 5MB.`,
          variant: "destructive",
        });
        return false;
      }
      return true;
    });

    setPhotos(prev => [...prev, ...validFiles]);
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!formData.title.trim() || !formData.details.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in the title and details.",
        variant: "destructive",
      });
      return;
    }

    onSubmit({
      ...formData,
      photos,
    });
  };

  return (
    <div className="space-y-6">
      {/* Chat-like interface header */}
      <Card className="bg-accent/50">
        <CardHeader>
          <CardTitle className="text-lg">Tell professionals about your {serviceName} request</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The more details you provide, the better professionals can understand your needs and provide accurate quotes.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title">Request Title</Label>
          <Input
            id="title"
            placeholder={`e.g., "Assemble IKEA wardrobe in bedroom"`}
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          />
        </div>

        {/* Details */}
        <div className="space-y-2">
          <Label htmlFor="details">Detailed Description</Label>
          <Textarea
            id="details"
            placeholder="Describe what you need help with. Include any specific requirements, location details, or preferences..."
            value={formData.details}
            onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
            rows={4}
            className="resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Duration */}
          <div className="space-y-2">
            <Label>Estimated Duration</Label>
            <Select value={formData.duration} onValueChange={(value) => setFormData(prev => ({ ...prev, duration: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="How long do you think this will take?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1h">1 hour</SelectItem>
                <SelectItem value="2h">2 hours</SelectItem>
                <SelectItem value="half-day">Half day (4 hours)</SelectItem>
                <SelectItem value="full-day">Full day (8 hours)</SelectItem>
                <SelectItem value="multiple-days">Multiple days</SelectItem>
                <SelectItem value="not-sure">Not sure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <Label htmlFor="budget">Budget (Optional)</Label>
            <Input
              id="budget"
              placeholder="e.g., €50-100"
              value={formData.budget}
              onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
            />
          </div>
        </div>

        {/* Photo Upload */}
        <div className="space-y-4">
          <Label>Photos (Optional)</Label>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
              id="photo-upload"
            />
            <label htmlFor="photo-upload" className="cursor-pointer">
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Click to upload photos of the area or items that need work
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Up to 5 photos, max 5MB each
              </p>
            </label>
          </div>

          {/* Photo previews */}
          {photos.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                    onClick={() => removePhoto(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          className="bg-gradient-primary hover:opacity-90"
        >
          Post My Request
        </Button>
      </div>
    </div>
  );
};

export default RequestForm;