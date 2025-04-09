import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History, HeartHandshake, Users, Target, CalendarClock } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

type Milestone = {
  year: string;
  event: string;
  description: string;
};

export default function AboutPage() {
  const teamMembers: TeamMember[] = [
    {
      name: "Gurpreet Singh",
      role: "Head Seva Coordinator",
      bio: "With 15 years of experience in community service, Gurpreet oversees all langar operations and volunteer coordination.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
    },
    {
      name: "Harleen Kaur",
      role: "Kitchen Manager",
      bio: "A professional chef who left the restaurant industry to dedicate herself to serving the community through langar.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
    },
    {
      name: "Rajinder Singh",
      role: "Logistics Coordinator",
      bio: "Manages the procurement and distribution of ingredients and supplies to ensure smooth operations.",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200"
    },
    {
      name: "Amandeep Kaur",
      role: "Volunteer Coordinator",
      bio: "Connects with community members and organizes volunteer schedules to keep the langar running.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200"
    }
  ];

  const milestones: Milestone[] = [
    {
      year: "2005",
      event: "Foundation",
      description: "Started as a small community kitchen serving 50 meals daily"
    },
    {
      year: "2010",
      event: "First Expansion",
      description: "Moved to larger facility to serve 300 meals daily"
    },
    {
      year: "2015",
      event: "Mobile Langar",
      description: "Launched mobile service to reach homebound seniors"
    },
    {
      year: "2020",
      event: "Pandemic Response",
      description: "Scaled up to serve 2000 meals daily during COVID-19 crisis"
    },
    {
      year: "2023",
      event: "New Kitchen",
      description: "Inaugurated state-of-the-art community kitchen facility"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&q=80&w=2070"
          alt="Community Kitchen"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold">About Our Langar Seva</h1>
            <p className="text-lg md:text-xl">
              Serving meals with love and equality since 2005
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
              <HeartHandshake className="h-8 w-8 text-amber-600" />
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              To provide nutritious meals to all who hunger, regardless of background, religion, or social status, 
              while fostering community spirit through the sacred tradition of langar - where everyone sits together 
              as equals to share a meal.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-amber-600" />
                    Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Building bridges between people from all walks of life through shared meals and service</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-amber-600" />
                    Sustainability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Minimizing food waste and using locally-sourced ingredients whenever possible</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarClock className="h-6 w-6 text-amber-600" />
                    Consistency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Serving meals 365 days a year, through all circumstances</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-2">
            <History className="h-8 w-8 text-amber-600" />
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 h-full w-0.5 bg-amber-200 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Dot */}
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-amber-600 border-4 border-amber-100 transform -translate-x-1/2 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{milestone.year}</span>
                    </div>
                    
                    {/* Content */}
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle>{milestone.event}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-amber-600">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">18+</p>
              <p className="text-xl">Years of Service</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">2M+</p>
              <p className="text-xl">Meals Served</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">5K+</p>
              <p className="text-xl">Volunteers</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">365</p>
              <p className="text-xl">Days a Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether through volunteering, donations, or simply sharing a meal with us, there are many ways to 
              be part of this sacred tradition of service and equality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Volunteer With Us
              </Button>
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Make a Donation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}