import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Avatar className="w-24 h-24 mb-4 border-4 border-primary-foreground">
        <AvatarImage src={member.image} alt={member.name} />
        <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
      </Avatar>
      <CardHeader className="p-0 mb-2">
        <CardTitle className="text-xl font-semibold text-gray-900">{member.name}</CardTitle>
        <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="p-0 text-gray-700 text-sm leading-relaxed">
        {member.bio}
      </CardContent>
      {member.socialLinks && (
        <div className="mt-4 flex space-x-3">
          {member.socialLinks.linkedin && (
            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label={`LinkedIn profile of ${member.name}`}>
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.297V9.77h3.418v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm-.011 13.012H2.288V9.77h3.038v10.675zM22.227 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.456c.98 0 1.772-.773 1.772-1.729V1.729C24 .774 23.207 0 22.227 0z"/></svg>
            </a>
          )}
          {member.socialLinks.twitter && (
            <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors" aria-label={`Twitter profile of ${member.name}`}>
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.564-2.005.974-3.127 1.195a4.953 4.953 0 00-8.464 4.516A13.937 13.937 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.06a4.923 4.923 0 003.947 4.827 4.994 4.994 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.16-.069a13.937 13.937 0 007.548 2.212c9.142 0 14.077-7.112 14.077-13.384 0-.2-.005-.4-.012-.602A10.038 10.038 0 0024 4.59z"/></svg>
            </a>
          )}
          {member.socialLinks.github && (
            <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label={`GitHub profile of ${member.name}`}>
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.835 2.804 1.305 3.49.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.28-1.23 3.28-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          )}
        </div>
      )}
    </Card>
  );
}