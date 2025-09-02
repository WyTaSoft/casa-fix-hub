import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Clock, Euro, CheckCircle } from "lucide-react";
import { BookingData } from "@/pages/BookService";

interface ProfessionalResponsesProps {
  bookingData: BookingData;
  onSelectProfessional: (professional: any) => void;
  onBack: () => void;
}

// Mock data for demonstration
const mockResponses = [
  {
    id: 1,
    name: "Marie Dubois",
    avatar: "",
    rating: 4.8,
    reviewCount: 127,
    distance: "2.3 km",
    responseTime: "2 hours ago",
    price: "€45-65",
    proposedTime: "Tomorrow 10:00 AM",
    message: "Bonjour! I have 5+ years of experience with furniture assembly, especially IKEA pieces. I can help you with your wardrobe and bring all necessary tools. Available tomorrow morning!",
    verified: true,
    completedJobs: 89,
  },
  {
    id: 2,
    name: "Jean-Pierre Martin",
    avatar: "",
    rating: 4.9,
    reviewCount: 203,
    distance: "1.8 km",
    responseTime: "1 hour ago",
    price: "€50-70",
    proposedTime: "Today 4:00 PM",
    message: "Hello! Professional handyman with 8 years experience. I specialize in furniture assembly and have assembled hundreds of IKEA pieces. Can come today afternoon if urgent.",
    verified: true,
    completedJobs: 156,
  },
  {
    id: 3,
    name: "Sophie Chen",
    avatar: "",
    rating: 4.7,
    reviewCount: 84,
    distance: "3.1 km",
    responseTime: "30 minutes ago",
    price: "€40-55",
    proposedTime: "This weekend",
    message: "Hi! I love assembling furniture and have great attention to detail. I'm available this weekend and can guarantee a perfect assembly. Let me know what works for you!",
    verified: false,
    completedJobs: 52,
  },
];

const ProfessionalResponses = ({ bookingData, onSelectProfessional, onBack }: ProfessionalResponsesProps) => {
  const [responses, setResponses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading responses
    const timer = setTimeout(() => {
      setResponses(mockResponses);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold mb-2">Finding professionals near you...</h3>
          <p className="text-muted-foreground">
            We're matching you with qualified professionals in your area.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">
          {responses.length} professionals responded to your request
        </h3>
        <p className="text-muted-foreground">
          Review their profiles and messages, then select the one that best fits your needs.
        </p>
      </div>

      <div className="space-y-4">
        {responses.map((professional) => (
          <Card key={professional.id} className="hover:shadow-soft transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Professional Info */}
                <div className="flex items-start gap-4 flex-1">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={professional.avatar} />
                    <AvatarFallback className="bg-gradient-primary text-white text-lg">
                      {professional.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-lg">{professional.name}</h4>
                      {professional.verified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{professional.rating}</span>
                        <span>({professional.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{professional.distance} away</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{professional.responseTime}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-4">{professional.message}</p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Euro className="w-4 h-4" />
                        <span className="font-medium">{professional.price}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Available: {professional.proposedTime}</span>
                      </div>
                      <Badge variant="outline">
                        {professional.completedJobs} jobs completed
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex flex-col justify-center">
                  <Button
                    onClick={() => onSelectProfessional(professional)}
                    className="bg-gradient-primary hover:opacity-90 whitespace-nowrap"
                  >
                    Accept & Book
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack}>
          Back to Edit Request
        </Button>
        <Button variant="ghost" className="text-muted-foreground">
          Wait for more responses
        </Button>
      </div>
    </div>
  );
};

export default ProfessionalResponses;