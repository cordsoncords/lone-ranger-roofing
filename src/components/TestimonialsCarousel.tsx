import { useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Sarah Jenkins',
    loc: 'Temple, TX',
    quote: "After the storm last spring, Lone Ranger was out the next day. They handled everything with our insurance adjuster and the roof was done in a single day. Zero mess. Zero stress.",
    project: 'Storm Damage + Full Replacement',
  },
  {
    name: 'Michael Torres',
    loc: 'Killeen, TX',
    quote: "As a veteran I appreciate a company that runs a tight ship. They showed up on time, worked hard, and finished my full roof replacement before dinner. Outstanding crew.",
    project: 'Full Roof Replacement',
  },
  {
    name: 'David & Emily Chen',
    loc: 'Harker Heights, TX',
    quote: "We got quotes from 4 companies including a couple of out-of-state crews after the hailstorm. Lone Ranger beat everyone on price AND quality. Local makes a real difference.",
    project: 'Hail Damage Repair',
  },
  {
    name: 'Robert & Lisa M.',
    loc: 'Salado, TX',
    quote: "They found damage we didn't even know about and fixed everything properly. The warranty on labor AND materials gave us real peace of mind. Would not use anyone else.",
    project: 'Roof Inspection + Repair',
  },
  {
    name: 'James Wilson',
    loc: 'Georgetown, TX',
    quote: "My entire neighborhood got hit by hail. Lone Ranger was the only local company I saw out there. The storm chasers came and went. These guys stayed and did it right.",
    project: 'Storm Damage Repair',
  },
  {
    name: 'Amanda Lewis',
    loc: 'Belton, TX',
    quote: "They walked me through the insurance claim start to finish. I didn't have to fight the adjuster alone. They've done this a thousand times and it shows.",
    project: 'Insurance Claim + Replacement',
  },
  {
    name: 'The Henderson Family',
    loc: 'Temple, TX',
    quote: "One day. My entire roof was replaced in one single day. I didn't believe it was possible until I watched it happen. Incredible crew, incredible result.",
    project: 'Full Roof Replacement',
  },
  {
    name: 'Gary P.',
    loc: 'Burnet, TX',
    quote: "Found hail damage I'd been told wasn't 'bad enough' by another contractor. Turns out it was. Lone Ranger got it all covered under insurance. Honest and thorough.",
    project: 'Hail Inspection + Insurance Claim',
  },
];

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-gold-400 text-gold-400" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const QuoteIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 30" fill="currentColor">
    <path d="M0 30V18.667C0 8.444 6.222 2.333 18.667 0L21.333 3.333C15.111 4.889 11.111 8.444 10.222 14h7.111V30H0zm21.333 0V18.667C21.333 8.444 27.556 2.333 40 0l2.667 3.333C36.444 4.889 32.444 8.444 31.556 14h7.111V30H21.333z"/>
  </svg>
);

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const next = () => setCurrentIndex(prev => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex(prev => (prev - 1 + reviews.length) % reviews.length);
  const getReview = (offset: number) => reviews[(currentIndex + offset) % reviews.length];

  return (
    <section className="relative py-24 bg-brand-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(199,54,50,0.12)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(225,181,68,0.07)_0%,_transparent_60%)]" />
        <QuoteIcon className="absolute -top-6 right-12 w-64 h-64 text-white/[0.03] rotate-180" />
        <QuoteIcon className="absolute -bottom-10 left-8 w-48 h-48 text-white/[0.03]" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          {/* Google badge */}
          <div className="bg-white rounded-full px-5 py-2 flex items-center gap-3 shadow-lg mb-8">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex items-center gap-2">
              <Stars count={5} />
              <p className="text-xs text-gray-700 font-bold">180+ Google Reviews</p>
            </div>
          </div>

          <p className="text-gold-400 text-sm font-bold uppercase tracking-widest mb-3">WHAT YOUR NEIGHBORS ARE SAYING</p>
          <h2 className="text-3xl md:text-5xl font-black text-center">5-Star Roofing Reviews from Central Texas Homeowners</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Mobile: single card */}
          <div className="md:hidden">
            <div key={currentIndex} className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-gold-400/40">
              <QuoteIcon className="absolute top-5 right-6 w-10 h-10 text-gold-400/20" />
              <Stars />
              <p className="text-lg text-gray-100 leading-relaxed my-5">"{reviews[currentIndex].quote}"</p>
              <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                <div>
                  <p className="font-bold text-lg">{reviews[currentIndex].name}</p>
                  <p className="text-sm text-brand-200">{reviews[currentIndex].loc}</p>
                </div>
                <span className="text-xs font-mono uppercase tracking-wide text-gold-400 text-right max-w-[120px]">
                  {reviews[currentIndex].project}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop: three cards — center is featured */}
          <div className="hidden md:grid grid-cols-3 gap-5 items-start">
            {[0, 1, 2].map(offset => {
              const item = getReview(offset);
              const isFeatured = offset === 1;
              return (
                <div
                  key={`${currentIndex}-${offset}`}
                  className={`relative flex flex-col justify-between rounded-2xl transition-all duration-500 ${
                    isFeatured
                      ? 'bg-white text-brand-900 p-8 shadow-2xl scale-[1.04] border-2 border-gold-400 z-10'
                      : 'bg-white/8 backdrop-blur-sm p-7 border border-white/15 text-white opacity-80'
                  }`}
                >
                  {/* decorative quote */}
                  <QuoteIcon className={`absolute top-5 right-6 w-10 h-10 ${isFeatured ? 'text-gold-400/25' : 'text-white/10'}`} />

                  <div>
                    <div className="mb-4">
                      <Stars />
                    </div>
                    <p className={`leading-relaxed mb-6 ${isFeatured ? 'text-brand-800 text-base' : 'text-gray-200 text-sm'}`}>
                      "{item.quote}"
                    </p>
                  </div>

                  <div className={`border-t pt-4 ${isFeatured ? 'border-brand-100' : 'border-white/10'}`}>
                    <p className={`font-black text-base ${isFeatured ? 'text-brand-900' : 'text-white'}`}>{item.name}</p>
                    <p className={`text-sm mt-0.5 ${isFeatured ? 'text-brand-500' : 'text-brand-300'}`}>{item.loc}</p>
                    <span className={`inline-block mt-2 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${isFeatured ? 'bg-gold-400/15 text-gold-600' : 'bg-white/10 text-gold-400'}`}>
                      {item.project}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-10">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-gold-400 w-6 h-2'
                    : 'bg-white/25 w-2 h-2 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute top-1/2 -left-4 md:-left-14 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-gold-400 text-white transition-colors border border-white/20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute top-1/2 -right-4 md:-right-14 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-gold-400 text-white transition-colors border border-white/20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
