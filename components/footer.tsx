import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-orange-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">
              Mata Khivi Langar Seva is dedicated to serving the community through
              the sacred tradition of langar, following the teachings of Mata Khivi Ji.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/langar-seva" className="text-gray-600 hover:text-orange-600">Langar Seva</Link></li>
              <li><Link href="/donate" className="text-gray-600 hover:text-orange-600">Donate</Link></li>
              <li><Link href="/volunteer" className="text-gray-600 hover:text-orange-600">Volunteer</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-orange-600">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-600" />
                <span className="text-gray-600">Faridkot, Punjab, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-orange-600" />
                <a href="tel:+911234567890" className="text-gray-600 hover:text-orange-600">+91 123 456 7890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-orange-600" />
                <a href="mailto:info@matakhivilangarseva.org" className="text-gray-600 hover:text-orange-600">
                  info@matakhivilangarseva.org
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/mataKhiviLangarSeva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-600"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/mataKhiviLangarSeva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-600"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Mata Khivi Langar Seva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}