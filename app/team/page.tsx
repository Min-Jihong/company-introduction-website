import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamMemberList } from "@/components/TeamMemberList";

export const metadata = {
  title: "Our Team - CompanyCo",
  description: "Meet the dedicated and talented individuals who make CompanyCo successful.",
};

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Dedicated Team</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Behind every great company is a great team. We are proud of the diverse talents and passion our members bring to CompanyCo.
            </p>
          </div>
        </section>
        <TeamMemberList />
      </main>
      <Footer />
    </div>
  );
}