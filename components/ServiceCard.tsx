import { Service } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Rocket, Users, ShieldCheck, TrendingUp, Code } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const IconMap: { [key: string]: React.ElementType } = {
  Lightbulb: Lightbulb,
  Rocket: Rocket,
  Users: Users,
  ShieldCheck: ShieldCheck,
  TrendingUp: TrendingUp,
  Code: Code,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon ? IconMap[service.icon] : null;

  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-lg hover:scale-[1.02]">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        {IconComponent && <IconComponent className="h-8 w-8 text-primary" aria-hidden="true" />}
        <CardTitle className="text-xl font-semibold">{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base leading-relaxed">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
