import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reviews = [
    {
      name: "Sarah Jenkins",
      loc: "Temple, TX",
      quote: "Our new Hardie Board siding looks absolutely incredible! The team at Lone Ranger was professional, clean, and the financing options made it incredibly affordable. Highly recommend for any exterior work!",
      project: "Hardie Board Siding"
    },
    {
      name: "Michael Torres",
      loc: "Belton, TX",
      quote: "I was skeptical about the cost of vinyl siding, but the energy savings have already started paying for themselves. The installation took only 3 days and the crew was fantastic.",
      project: "Vinyl Siding"
    },
    {
      name: "David & Emily Chen",
      loc: "Harker Heights, TX",
      quote: "Lone Ranger Roofing gave us the best quote out of 4 companies for our siding replacement, but the quality of work was what really impressed us. A+ service from start to finish.",
      project: "Full Replacement"
    },
    {
      name: "Robert & Lisa M.",
      loc: "Salado, TX",
      quote: "We needed to replace our old wood siding before listing our home. Lone Ranger got it done in record time and we sold for above asking price. The curb appeal difference was night and day.",
      project: "Siding Replacement"
    },
    {
      name: "James Wilson",
      loc: "Killeen, TX",
      quote: "Being a veteran myself, I appreciate supporting veteran-owned businesses. These guys run a tight ship. No mess left behind, straight shooting on the price, and excellent workmanship.",
      project: "Vinyl Siding"
    },
    {
      name: "Amanda Lewis",
      loc: "Nolanville, TX",
      quote: "They helped us navigate the insurance claim after the hail storm damaged our siding. I didn't have to do a thing. They handled the adjuster and got everything approved.",
      project: "Insurance Restoration"
    },
    {
      name: "The Henderson Family",
      loc: "Morgan's Point Resort, TX",
      quote: "Living near the lake, we needed something durable. The composite siding they installed is beautiful and holding up perfectly against the wind.",
      project: "Composite Siding"
    },
    {
      name: "Gary P.",
      loc: "Troy, TX",
      quote: "Fast, professional, and honest. They found some rot behind my old siding and fixed it properly instead of just covering it up. That's integrity.",
      project: "Repair & Replace"
    },
    {
      name: "Patricia Ross",
      loc: "Little River-Academy, TX",
      quote: "I love the new color! The design team helped me pick the perfect shade of blue. My house looks brand new.",
      project: "Vinyl Siding"
    },
    {
      name: "Thomas K.",
      loc: "Temple, TX",
      quote: "Communication was excellent. They texted me updates every day. The crew was polite and worked hard from sunrise to sunset.",
      project: "Siding Replacement"
    }
  ];

  // Auto scroll every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  // Calculate visible slides for desktop (show 3 at a time, loop around)
  const getVisibleReview = (offset: number) => {
    return reviews[(currentIndex + offset) % reviews.length];
  };

  return (
    <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Google Reviews Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full px-6 py-2 flex items-center gap-3 shadow-lg transform hover:scale-105 transition-transform cursor-default">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-gold-500 text-gold-500" />)}
              </div>
              <p className="text-[10px] text-gray-800 font-bold leading-none mt-0.5">170+ 5-Star Reviews</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Rated 5/5 by Your Neighbors</h2>
        
        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Mobile View (1 card) */}
          <div className="md:hidden relative min-h-[300px]">
            <div key={currentIndex} className="fade-in">
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 text-gold-500 mb-4">
                      {[...Array(5)].map((_, r) => (
                        <Star key={r} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-100 italic mb-6 leading-relaxed">"{reviews[currentIndex].quote}"</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-bold text-xl">{reviews[currentIndex].name}</p>
                        <p className="text-sm text-brand-200 font-medium">{reviews[currentIndex].loc}</p>
                      </div>
                      <span className="text-xs bg-brand-800 px-2 py-1 rounded text-brand-200 border border-brand-700">
                        {reviews[currentIndex].project}
                      </span>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* Desktop View (3 cards) */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const item = getVisibleReview(offset);
              return (
                <div key={`${currentIndex}-${offset}`} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex gap-1 text-gold-500 mb-4">
                      {[...Array(5)].map((_, r) => (
                        <Star key={r} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-100 italic mb-6 leading-relaxed">"{item.quote}"</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-end border-t border-white/10 pt-4">
                      <div>
                        <p className="font-bold text-lg">{item.name}</p>
                        <p className="text-sm text-brand-200 font-medium">{item.loc}</p>
                      </div>
                    </div>
                    <p className="text-xs text-brand-300 mt-2 font-mono uppercase tracking-wide">{item.project}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-gold-500 w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      </div>
    </section>
  );
};
