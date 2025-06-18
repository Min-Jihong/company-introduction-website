import { TeamMemberCard } from "@/components/TeamMemberCard";
import { TeamMember } from "@/types";

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Jane Doe",
    role: "CEO & Founder",
    image: "https://via.placeholder.com/150/F0F0F0/000000?text=JD",
    bio: "Jane is the visionary behind CompanyCo, leading the team with her extensive experience in tech and business development. She is passionate about innovation and creating impactful solutions.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/janedoe",
      twitter: "https://twitter.com/janedoe",
    },
  },
  {
    id: "2",
    name: "John Smith",
    role: "Chief Technology Officer",
    image: "https://via.placeholder.com/150/F0F0F0/000000?text=JS",
    bio: "John is responsible for all technological aspects of CompanyCo. With a background in software architecture and AI, he ensures our products are cutting-edge and robust.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/johnsmith",
      github: "https://github.com/johnsmith",
    },
  },
  {
    id: "3",
    name: "Emily White",
    role: "Head of Marketing",
    image: "https://via.placeholder.com/150/F0F0F0/000000?text=EW",
    bio: "Emily drives our brand strategy and market presence. Her creative approach and deep understanding of consumer behavior help us connect with our audience effectively.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/emilywhite",
      twitter: "https://twitter.com/emilywhite",
    },
  },
  {
    id: "4",
    name: "David Green",
    role: "Lead Product Designer",
    image: "https://via.placeholder.com/150/F0F0F0/000000?text=DG",
    bio: "David crafts intuitive and beautiful user experiences. He believes in user-centric design and works closely with development teams to bring ideas to life.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/davidgreen",
    },
  },
];

export function TeamMemberList() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">Meet Our Team</h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Our diverse team of experts is dedicated to delivering excellence. Get to know the people behind CompanyCo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}