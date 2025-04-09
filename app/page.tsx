import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Calendar, Shirt } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
          alt="Langar Seva - Community Kitchen"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Serving Humanity Through Langar
            </h1>
            <p className="text-lg md:text-xl">
              Join us in continuing Mata Khivi Ji's legacy of selfless service through
              the divine tradition of Langar Seva
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-orange-600 border-orange-600 hover:bg-orange-50">
                <Link href="/volunteer">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-orange-600" />
                  Langar Seva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Daily langar service providing meals to hundreds of people in need
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shirt className="h-5 w-5 text-orange-600" />
                  Cloth Donation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Collection and distribution of clothes to those in need
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  Volunteer Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join our team of dedicated volunteers in serving the community
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  Special Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Organization of special events during Gurpurabs and festivals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Mata Khivi Ji Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1604605801370-3396f9bd9ba0?auto=format&fit=crop&q=80"
                alt="Mata Khivi Ji"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Mata Khivi Ji</h2>
              <p className="text-gray-600 mb-4">
                Mata Khivi Ji played a pivotal role in establishing the tradition of
                langar in Sikhism. She served langar to the congregation for 40 years
                under Guru Angad Dev Ji's guidance.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we continue her legacy of selfless service through our
                community kitchen, serving all people regardless of caste, creed,
                or religion.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">Learn More About Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">50,000+</h3>
              <p className="text-lg">Meals Served Monthly</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">1,000+</h3>
              <p className="text-lg">Active Volunteers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">10+</h3>
              <p className="text-lg">Years of Service</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}