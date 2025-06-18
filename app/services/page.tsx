import Header from '@/components/Header';
import ServiceList from '@/components/ServiceList';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Services - Company Introduction',
  description: '회사가 제공하는 서비스에 대한 상세 정보를 제공합니다.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <ServiceList />
      </main>
      <Footer />
    </div>
  );
}
