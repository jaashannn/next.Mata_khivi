"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const routes = [
  { href: "/langar-seva", label: "Langar Seva" },
  { href: "/cloth-donation", label: "Cloth Donation" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About Us" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              href="/"
              className="flex items-center gap-2 mb-8"
              onClick={() => setIsOpen(false)}
            >
              <Utensils className="h-6 w-6 text-orange-600" />
              <span className="font-bold text-lg">Mata Khivi Langar Seva</span>
            </Link>
            <nav className="flex flex-col space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`text-lg font-medium ${
                    pathname === route.href ? "text-orange-600" : "text-foreground/60"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex-1 flex items-center justify-between md:grid md:grid-cols-3">
          <div className="hidden md:flex items-center gap-6">
            {routes.slice(0, 3).map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  pathname === route.href ? "text-orange-600" : "text-foreground/60"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 justify-center"
          >
            <Utensils className="h-6 w-6 text-orange-600" />
            <span className="font-bold text-lg hidden md:inline">Mata Khivi Langar Seva</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 justify-end">
            {routes.slice(3, 6).map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  pathname === route.href ? "text-orange-600" : "text-foreground/60"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 md:ml-4">
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}