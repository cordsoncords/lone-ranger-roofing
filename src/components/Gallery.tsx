import React from 'react';

export const Gallery: React.FC = () => {
  const images = [
    {
      src: "/gallery1.webp",
      title: "Premium Vinyl Siding"
    },
    {
      src: "/gallery2.webp",
      title: "Premium Vinyl Installation"
    },
    {
      src: "/gallery3.webp",
      title: "Hardie Board Plank Siding"
    },
    {
      src: "/gallery4.webp",
      title: "Premium Vinyl Installation"
    },
    {
      src: "/gallery5.webp",
      title: "Hardie Board Plank Siding"
    },
    {
      src: "/gallery6.webp",
      title: "Premium Vinyl Installation"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-brand-900 sm:text-4xl mb-4">
            Recent Siding Projects
          </h2>
          <p className="text-xl text-gray-600">
            Browse our gallery of recent siding projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-bold p-6 text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};