import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download } from "lucide-react";

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspectRatio: "square" | "portrait" | "landscape";
};

export default function GalleryPage() {
  // Gallery images from Unsplash (random food/community service related)
  const images: GalleryImage[] = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
      alt: "Vegetable preparation for langar",
      category: "food-preparation",
      aspectRatio: "square"
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
      alt: "Community dining area",
      category: "serving",
      aspectRatio: "landscape"
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
      alt: "Fresh ingredients for langar",
      category: "food-preparation",
      aspectRatio: "portrait"
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600",
      alt: "Volunteers serving food",
      category: "serving",
      aspectRatio: "landscape"
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
      alt: "Traditional cooking utensils",
      category: "equipment",
      aspectRatio: "square"
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
      alt: "Chef preparing meals",
      category: "food-preparation",
      aspectRatio: "portrait"
    },
    {
      id: "7",
      src: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600",
      alt: "People eating together",
      category: "community",
      aspectRatio: "landscape"
    },
    {
      id: "8",
      src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
      alt: "Fresh vegetables for langar",
      category: "food-preparation",
      aspectRatio: "square"
    },
    {
      id: "9",
      src: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600",
      alt: "Vegetable cutting",
      category: "food-preparation",
      aspectRatio: "portrait"
    },
    {
      id: "10",
      src: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=600",
      alt: "People serving food",
      category: "serving",
      aspectRatio: "landscape"
    },
    {
      id: "11",
      src: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=600",
      alt: "Fresh bread preparation",
      category: "food-preparation",
      aspectRatio: "square"
    },
    {
      id: "12",
      src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600",
      alt: "Healthy food buffet",
      category: "serving",
      aspectRatio: "landscape"
    }
  ];

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "food-preparation", name: "Food Preparation" },
    { id: "serving", name: "Serving" },
    { id: "community", name: "Community" },
    { id: "equipment", name: "Equipment" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=2070"
          alt="Gallery Header"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4 max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Langar Seva Gallery</h1>
            <p className="text-lg md:text-xl">
              Witness the spirit of selfless service through our community kitchen
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search images..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="h-5 w-5 text-gray-600" />
              <select className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none">
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div 
                key={image.id} 
                className={`relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                  image.aspectRatio === "portrait" ? "row-span-2" : 
                  image.aspectRatio === "landscape" ? "col-span-2" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium text-lg">{image.alt}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-amber-200 bg-amber-900/30 px-2 py-1 rounded">
                      {image.category.replace("-", " ")}
                    </span>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <Button className="bg-amber-600 hover:bg-amber-700 px-8 py-6 text-lg">
              Load More Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Langar Moments</h2>
          <p className="text-gray-600 mb-8">
            We welcome photos from our volunteers and community members. Share your experiences of serving in the langar
            to inspire others to join this noble cause. Selected photos will be featured in our gallery and social media.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Submit Your Photos
            </Button>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              View Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}