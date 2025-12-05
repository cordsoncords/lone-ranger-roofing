import React, { useEffect, useState } from 'react';
import { Shield, TrendingUp, Zap, Hammer } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Boost Curb Appeal",
      desc: "Give your home a facelift that turns heads. New siding is the fastest way to increase property value."
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Cut Energy Bills",
      desc: "Stop throwing away your hard earned money. Our insulated siding keeps the cool in and the heat out."
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Ironclad Warranty",
      desc: "We stand behind our work. Get comprehensive protection on materials and labor."
    },
    {
      icon: <Hammer className="w-8 h-8 text-white" />,
      title: "Built Tough",
      desc: "Materials engineered to withstand high winds, hail, and whatever else Mother Nature throws."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-brand-900 sm:text-4xl mb-4">
            Why Choose Lone Ranger Roofing?
          </h2>
          <p className="text-xl text-gray-600">
            We're obsessed with providing unmatched quality work and an unparalleled customer experience to all of our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group bg-white rounded-xl p-8 hover:-translate-y-1 transition-transform border-b-4 border-gray-100 hover:border-accent-500 hover:shadow-xl">
              <div className="bg-brand-600 w-14 h-14 rounded-lg flex items-center justify-center shadow-md mb-6 group-hover:bg-accent-500 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};