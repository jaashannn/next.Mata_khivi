import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormInput, CalendarDays, Clock, User, Shield, Mail, Phone, CheckCircle2 } from "lucide-react";

type VolunteerRole = {
  id: string;
  title: string;
  description: string;
  timeCommitment: string;
  skillsRequired: string[];
};

type VolunteerTestimonial = {
  name: string;
  role: string;
  quote: string;
  duration: string;
};

export default function VolunteerPage() {
  const volunteerRoles: VolunteerRole[] = [
    {
      id: "1",
      title: "Kitchen Helper",
      description: "Assist with food preparation, vegetable cutting, and basic kitchen tasks",
      timeCommitment: "2-4 hour shifts",
      skillsRequired: ["Basic cooking skills", "Teamwork", "Physical stamina"]
    },
    {
      id: "2",
      title: "Serving Volunteer",
      description: "Serve meals to visitors and maintain the dining area",
      timeCommitment: "1-3 hour shifts during meal times",
      skillsRequired: ["Customer service", "Friendly demeanor", "Ability to stand for long periods"]
    },
    {
      id: "3",
      title: "Cleaning Crew",
      description: "Help with washing dishes, cleaning kitchen and dining areas",
      timeCommitment: "Flexible 2-hour shifts",
      skillsRequired: ["Attention to detail", "Physical ability", "Hygiene awareness"]
    },
    {
      id: "4",
      title: "Delivery Volunteer",
      description: "Help deliver meals to elderly or homebound community members",
      timeCommitment: "2-3 hours weekly",
      skillsRequired: ["Valid driver's license", "Punctuality", "Compassion"]
    }
  ];

  const testimonials: VolunteerTestimonial[] = [
    {
      name: "Harpreet Kaur",
      role: "Kitchen Volunteer",
      quote: "Serving in langar has brought immense peace to my life. The gratitude in people's eyes is priceless.",
      duration: "Volunteering for 3 years"
    },
    {
      name: "Rajinder Singh",
      role: "Delivery Volunteer",
      quote: "The connections I've made through this seva have enriched my life more than I ever imagined.",
      duration: "Volunteering for 1.5 years"
    },
    {
      name: "Amandeep Kaur",
      role: "Weekend Coordinator",
      quote: "Managing volunteers has taught me leadership skills I use in my professional life too.",
      duration: "Volunteering for 5 years"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080"
          alt="Volunteer for Langar Seva"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Volunteer With Us</h1>
            <p className="text-lg md:text-xl">
              Join our community of selfless service and make a difference through Langar Seva
            </p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 mt-4">
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Volunteer With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle>Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect with like-minded individuals and strengthen community bonds through selfless service.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle>Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Gain valuable skills in teamwork, leadership, and organization while serving others.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle>Flexible Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We appreciate any time you can give - whether it's regular service or occasional help.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {volunteerRoles.map((role) => (
              <Card key={role.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{role.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-amber-600" />
                    <span className="font-medium">{role.timeCommitment}</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Skills/Requirements:</h4>
                    <ul className="space-y-1">
                      {role.skillsRequired.map((skill, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-100">
                    Apply for this role
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Volunteers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-amber-200">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-amber-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.duration}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Volunteer Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex items-center gap-2 font-medium">
                      <User className="h-4 w-4 text-amber-600" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center gap-2 font-medium">
                      <Mail className="h-4 w-4 text-amber-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="flex items-center gap-2 font-medium">
                      <Phone className="h-4 w-4 text-amber-600" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="role" className="flex items-center gap-2 font-medium">
                      <FormInput className="h-4 w-4 text-amber-600" />
                      Preferred Role
                    </label>
                    <select
                      id="role"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                      required
                    >
                      <option value="">Select a role</option>
                      {volunteerRoles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.title}
                        </option>
                      ))}
                      <option value="other">Other (specify in comments)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="availability" className="flex items-center gap-2 font-medium">
                      <CalendarDays className="h-4 w-4 text-amber-600" />
                      Availability
                    </label>
                    <select
                      id="availability"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                      required
                    >
                      <option value="">Select availability</option>
                      <option value="weekday-mornings">Weekday Mornings</option>
                      <option value="weekday-evenings">Weekday Evenings</option>
                      <option value="weekends">Weekends</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="commitment" className="flex items-center gap-2 font-medium">
                      <Clock className="h-4 w-4 text-amber-600" />
                      Time Commitment
                    </label>
                    <select
                      id="commitment"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                      required
                    >
                      <option value="">Select commitment level</option>
                      <option value="one-time">One-time</option>
                      <option value="weekly">Weekly</option>
                      <option value="bi-weekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center gap-2 font-medium">
                    <FormInput className="h-4 w-4 text-amber-600" />
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    placeholder="Tell us about your skills, experience, or any special requirements"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="agree" required className="h-4 w-4" />
                  <label htmlFor="agree" className="text-sm">
                    I agree to the terms of volunteering and understand this is a selfless service opportunity
                  </label>
                </div>

                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}