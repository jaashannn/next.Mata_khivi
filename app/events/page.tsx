import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample events data - in a real app, this would come from a database
const events = [
  {
    id: 1,
    title: "Monthly Langar Seva Special",
    date: "Last Sunday of every month",
    time: "10:00 AM - 2:00 PM",
    location: "Main Gurudwara, Faridkot",
    description: "Join us for our monthly special langar seva where we serve a variety of traditional dishes to the community.",
  },
  {
    id: 2,
    title: "Guru Nanak Dev Ji's Gurpurab",
    date: "November 27, 2024",
    time: "4:00 AM - 10:00 PM",
    location: "Mata Khivi Langar Hall",
    description: "Special langar seva and kirtan program on the auspicious occasion of Guru Nanak Dev Ji's Prakash Utsav.",
  },
  {
    id: 3,
    title: "Winter Clothes Distribution",
    date: "December 15, 2024",
    time: "11:00 AM - 4:00 PM",
    location: "Community Center, Faridkot",
    description: "Annual winter clothes distribution drive. We welcome donations of new and gently used warm clothing.",
  },
  {
    id: 4,
    title: "Vaisakhi Celebration",
    date: "April 14, 2024",
    time: "5:00 AM - 9:00 PM",
    location: "City Ground, Faridkot",
    description: "Grand celebration with continuous langar seva, kirtan, and community activities throughout the day.",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-orange-50/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-gray-600">
            Join us in our upcoming events and be a part of our seva journey. All events
            are open to everyone, and we welcome volunteers to participate.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-medium">{event.date}</p>
                    <div className="flex items-center gap-2 text-gray-600 mt-1">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  <span>{event.location}</span>
                </div>

                <p className="text-gray-600 mt-2">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}