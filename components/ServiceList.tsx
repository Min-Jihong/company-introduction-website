import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/data';

export default function ServiceList() {
  return (
    <section className="py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary-foreground">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
