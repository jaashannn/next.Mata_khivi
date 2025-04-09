import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Users, Clock, MapPin, Phone, CheckCircle2 } from "lucide-react";

const sevaOpportunities = [
  "Food preparation (vegetable cutting, dough making)",
  "Serving meals to visitors",
  "Cleaning and washing dishes",
  "Managing inventory and supplies",
  "Helping with distribution to needy families",
  "Organizing community dining area",
];

const langarTimings = [
  {
    day: "Monday - Friday",
    timing: "7:00 AM - 9:00 PM",
    description: "Continuous service with peak hours during meal times"
  },
  {
    day: "Saturday - Sunday",
    timing: "6:00 AM - 10:00 PM",
    description: "Extended hours for weekend devotees"
  },
  {
    day: "Special Occasions",
    timing: "24 Hours",
    description: "During Gurpurabs and festivals"
  }
];

const contactInfo = {
  coordinator: "Gurpreet Singh",
  phone: "+91 987 654 3210",
  email: "langarseva@faridkotgurudwara.com",
  address: "Gurudwara Sahib, Main Road, Faridkot, Punjab - 151203"
};

export default function LangarSevaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=2070"
          alt="Langar Seva"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Langar Seva</h1>
            <p className="text-lg md:text-xl">
              Join us in serving free meals to all, regardless of caste, creed, or social status
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Seva Opportunities */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-amber-600" />
                Seva Opportunities
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="mb-4 text-gray-600">
                  We welcome volunteers for various seva activities in our community kitchen:
                </p>
                <ul className="space-y-4">
                  {sevaOpportunities.map((opportunity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 mt-1" />
                      <span>{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Langar Timings */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-amber-600" />
                Langar Timings
              </h2>
              <div className="space-y-4">
                {langarTimings.map((time, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{time.day}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-amber-600" />
                        <span className="font-medium">{time.timing}</span>
                      </div>
                      <p className="text-gray-600">{time.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Phone className="h-6 w-6 text-amber-600" />
              Contact Information
            </h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium">Seva Coordinator</p>
                    <p>{contactInfo.coordinator}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="text-amber-600 hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Utensils className="h-5 w-5 text-amber-600 mt-1" />
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-amber-600 hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                  <address className="not-italic">{contactInfo.address}</address>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether through seva (volunteer service) or donations, your support helps us serve thousands daily.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Volunteer Sign Up
              </Button>
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Donate Groceries
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}