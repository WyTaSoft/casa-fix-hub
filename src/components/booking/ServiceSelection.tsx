import { Card, CardContent } from "@/components/ui/card";

interface ServiceSelectionProps {
  onServiceSelect: (serviceId: number, serviceName: string) => void;
}

const services = [
  {
    id: 1,
    name: "Cleaning",
    icon: "🧹",
    description: "House cleaning, deep cleaning, regular maintenance"
  },
  {
    id: 2,
    name: "Ironing",
    icon: "👕",
    description: "Ironing clothes, laundry services"
  },
  {
    id: 3,
    name: "Small Repairs",
    icon: "🛠️",
    description: "Fix broken items, minor repairs, maintenance"
  },
  {
    id: 4,
    name: "Furniture Assembly",
    icon: "📦",
    description: "IKEA furniture, assembly services, installation"
  }
];

const ServiceSelection = ({ onServiceSelect }: ServiceSelectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service) => (
        <Card
          key={service.id}
          className="cursor-pointer hover:shadow-soft transition-all duration-200 hover:scale-105 border-2 hover:border-primary"
          onClick={() => onServiceSelect(service.id, service.name)}
        >
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-muted-foreground text-sm">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceSelection;