import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mata Khivi Langar Seva - Community Kitchen in Faridkot',
  description: 'Join us in serving the community through langar seva, cloth donations, and volunteer work. A community kitchen initiative based in Faridkot, Punjab.',
  keywords: ['langar seva', 'community kitchen', 'faridkot', 'punjab', 'mata khivi ji', 'seva', 'donations', 'volunteer'],
  openGraph: {
    title: 'Mata Khivi Langar Seva - Community Kitchen in Faridkot',
    description: 'Join us in serving the community through langar seva, cloth donations, and volunteer work.',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mata Khivi Langar Seva - Community Kitchen in Faridkot',
    description: 'Join us in serving the community through langar seva, cloth donations, and volunteer work.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Mata Khivi Langar Seva",
              "description": "Community kitchen and charitable organization in Faridkot, Punjab",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Faridkot",
                "addressRegion": "Punjab",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://facebook.com/mataKhiviLangarSeva",
                "https://instagram.com/mataKhiviLangarSeva"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}