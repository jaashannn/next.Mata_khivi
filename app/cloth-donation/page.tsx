import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shirt, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

const guidelines = [
  "Clean and gently used clothes in good condition",
  "All sizes of clothing are welcome",
  "Seasonal clothing (especially winter wear)",
  "New undergarments only",
  "School uniforms and children's clothing",
  "Traditional wear in good condition",
];

const dropoffPoints = [
  {
    name: "Main Collection Center",
    address: "Mata Khivi Langar Hall, Near Main Gurudwara, Faridkot",
    timing: "9:00 AM - 6:00 PM (Daily)",
    phone: "+91 123 456 7890",
  },
  {
    name: "Community Center",
    address: "Sector 4, Near Post Office, Faridkot",
    timing: "10:00 AM - 5:00 PM (Mon-Sat)",
    phone: "+91 098 765 4321",
  },
];

export default function ClothDonationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80"
          alt="Cloth Donation"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Cloth Donation Drive</h1>
            <p className="text-lg md:text-xl">
              Your donated clothes can bring warmth and dignity to those in need
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Guidelines */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shirt className="h-6 w-6 text-orange-600" />
                Donation Guidelines
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <ul className="space-y-4">
                  {guidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-orange-600 mt-1" />
                      <span>{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Drop-off Points */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-orange-600" />
                Drop-off Points
              </h2>
              <div className="space-y-4">
                {dropoffPoints.map((point, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{point.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-orange-600 mt-1" />
                        <span>{point.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-orange-600" />
                        <span>{point.timing}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-orange-600" />
                        <a
                          href={`tel:${point.phone}`}
                          className="text-orange-600 hover:underline"
                        >
                          {point.phone}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Pickup?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For large donations or if you're unable to visit our drop-off points,
              we can arrange a pickup from your location.
            </p>
            <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
              <a href="tel:+911234567890">Contact Us for Pickup</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}