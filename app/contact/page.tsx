import { ContactInfo } from '@/components/ContactInfo';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us - Company Introduction Website',
  description: 'Get in touch with us. Provide your contact details and send us a message.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
