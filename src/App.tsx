import React from 'react';
import { Header } from './components/Header';
import { MultiStepForm } from './components/MultiStepForm';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { CheckCircle2, ArrowRight, Shield, Star, Award } from 'lucide-react';

function App() {
  const scrollToForm = () => {
    document.getElementById('get-quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        {/* Increased padding-top significantly (pt-48 mobile / pt-72 desktop) to clear the larger logo */}
        <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-start pt-48 lg:pt-72 pb-12 overflow-hidden bg-brand-900">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              src="/header.webp" 
              alt="Luxury home siding" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-900 via-brand-900/95 to-brand-900/40"></div>

          <div className="container mx-auto px-4 relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 lg:pt-4">
              
              {/* Left Column: Copy */}
              <div className="w-full lg:w-1/2 text-white space-y-6 pt-4 lg:pt-0 text-center lg:text-left">
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                  Get <span className="text-gold-500">$5,000 Trade In Value</span> For Your Old Siding
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-200 font-medium max-w-2xl mx-auto lg:mx-0">
                  Bell County's #1 Trusted Company for siding repairs and replacement
                </p>

                <div className="hidden lg:flex flex-col gap-4 text-sm font-bold text-white mt-4">
                   <div className="flex items-center gap-3">
                     <div className="bg-accent-600 p-2 rounded-full"><Shield className="w-5 h-5 text-white" /></div>
                     <p>Licensed, Bonded & Insured</p>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="bg-accent-600 p-2 rounded-full"><Award className="w-5 h-5 text-white" /></div>
                     <p>Veteran Owned & Operated</p>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="bg-accent-600 p-2 rounded-full"><Star className="w-5 h-5 text-white" /></div>
                     <p>Lifetime Material Warranty</p>
                   </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0 lg:ml-auto" id="get-quote">
                <MultiStepForm />
                <p className="text-gray-400 text-xs text-center mt-6">
                  <span className="font-bold text-gray-300">No Cost. No Obligation.</span> Just honest answers.
                </p>
              </div>

            </div>
          </div>
        </section>

        <Features />
        
        <Gallery />
        
        {/* Interactive "Visualizer" Teaser Section */}
        <section className="bg-white py-16 border-y border-gray-100">
           <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gold-500 rounded-2xl rotate-3 opacity-20 transform scale-95 translate-y-4"></div>
                <img 
                  src="/feature.webp" 
                  alt="Completed Siding Project" 
                  className="relative rounded-2xl shadow-2xl border-4 border-brand-900"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-black text-brand-900">Your Local, Siding Expert</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're local,  <strong>veteran-owned</strong>, and we're here for YOU. When you choose Lone Ranger Roofing, you are choosing one of Central Texas’ most trusted and committed roofing and siding companies. It’s a responsibility we don’t take lightly, and we are grateful to have the opportunity to serve the community we work, live, and play in each and every day.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-600 flex-shrink-0" />
                    <span className="text-gray-800 font-bold">James Hardie Elite Preferred</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-600 flex-shrink-0" />
                    <span className="text-gray-800 font-bold">Vinyl, Fiber Cement, & Composite Options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-600 flex-shrink-0" />
                    <span className="text-gray-800 font-bold">Full Cleanup - No Nail Left Behind</span>
                  </li>
                </ul>
                <button 
                  onClick={scrollToForm}
                  className="group inline-flex items-center text-brand-900 font-black text-lg hover:text-accent-600 transition-colors uppercase tracking-wide mt-4"
                >
                  Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
           </div>
        </section>

        <Testimonials />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 lg:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <button 
          onClick={scrollToForm}
          className="w-full bg-accent-600 text-white font-bold py-3.5 rounded-lg shadow-lg text-lg uppercase tracking-wide"
        >
          Get My Estimate
        </button>
      </div>
    </div>
  );
}

export default App;