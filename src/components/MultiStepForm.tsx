import React, { useState } from 'react';
import { Check, ChevronRight, Lock, MapPin, BadgeCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { FormData, Step } from '../types';

export const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    zipCode: '',
    projectType: '',
    timeframe: '',
    homeowner: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4) as Step);
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1) as Step);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xovglpqg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Progress Bar Calculation
  const progress = (step / 4) * 100;

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-green-500 fade-in h-full flex flex-col justify-center items-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <BadgeCheck className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-black text-brand-900 mb-3">You're All Set!</h3>
        <p className="text-gray-600 mb-8 text-lg">
          Thanks, {formData.firstName}. We've received your request. A Lone Ranger specialist is reviewing your details and will reach out shortly to verify your project.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg w-full">
           <p className="text-sm text-gray-400 font-mono uppercase tracking-widest">Confirmation Badge</p>
           <p className="text-xl font-bold text-brand-800">#LR-{Math.floor(Math.random() * 10000)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative z-10">
      {/* Header - Simplified as requested */}
      <div className="bg-brand-50 p-6 border-b border-gray-100 text-center">
        <h3 className="text-2xl font-black text-brand-900 tracking-tight">
          Schedule Free Inspection
        </h3>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1.5">
        <div 
          className="bg-gold-500 h-1.5 transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 min-h-[420px] flex flex-col justify-between">
        
        {/* Step 1: Zip & Location */}
        {step === 1 && (
          <div className="fade-in space-y-6">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-gray-800">Where is the project located?</h4>
              <p className="text-gray-500 text-sm mt-2">Enter your zip code to see available incentives.</p>
            </div>
            
            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  pattern="[0-9]*"
                  maxLength={5}
                  placeholder="Enter Zip Code"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-500 focus:ring-0 text-lg font-semibold transition-colors text-center"
                  value={formData.zipCode}
                  onChange={(e) => updateField('zipCode', e.target.value)}
                  autoFocus
                />
              </div>

              <div className="bg-gray-50 p-3 rounded-lg flex items-start gap-3 border border-gray-200">
                <Lock className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                <p className="text-xs text-gray-600 font-medium">
                  Your information is secure. We use 256-bit encryption.
                </p>
              </div>
            </div>

            <Button 
              type="button" 
              fullWidth 
              onClick={nextStep}
              disabled={formData.zipCode.length < 5}
            >
              Next Step <ChevronRight className="ml-1 w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Step 2: Project Details */}
        {step === 2 && (
          <div className="fade-in space-y-6">
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-gray-800">What kind of project is this?</h4>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Service Needed:</label>
              <div className="grid grid-cols-1 gap-3">
                {['Full Replacement', 'Repair Section', 'New Construction'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      updateField('projectType', opt);
                      setTimeout(nextStep, 150);
                    }}
                    className={`p-4 border-2 rounded-lg text-left font-bold transition-all ${
                      formData.projectType === opt 
                        ? 'border-brand-600 bg-brand-50 text-brand-800 shadow-sm' 
                        : 'border-gray-200 hover:border-brand-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      {opt}
                      {formData.projectType === opt && <Check className="w-5 h-5 text-brand-600" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

             <div className="flex justify-between items-center mt-4">
                <button type="button" onClick={prevStep} className="text-sm font-medium text-gray-500 hover:text-gray-800">Back</button>
             </div>
          </div>
        )}

        {/* Step 3: Qualification */}
        {step === 3 && (
          <div className="fade-in space-y-6">
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-gray-800">Just a few details...</h4>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">When do you need this done?</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white font-medium"
                  value={formData.timeframe}
                  onChange={(e) => updateField('timeframe', e.target.value)}
                >
                  <option value="">Select timeframe...</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-month">Within the next month</option>
                  <option value="3-months">Within three months</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Do you own the home?</label>
                <div className="flex gap-4">
                  {['Yes', 'No'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => updateField('homeowner', opt.toLowerCase())}
                      className={`flex-1 p-3 border rounded-lg font-bold transition-all ${
                        formData.homeowner === opt.toLowerCase()
                          ? 'bg-brand-600 text-white border-brand-600 shadow-md'
                          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4">
              <button type="button" onClick={prevStep} className="text-sm font-medium text-gray-500 hover:text-gray-800">Back</button>
              <Button 
                type="button" 
                onClick={nextStep}
                disabled={!formData.timeframe || !formData.homeowner}
              >
                Last Step <ChevronRight className="ml-1 w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Contact Info */}
        {step === 4 && (
          <div className="fade-in space-y-4">
             <div className="text-center mb-2">
              <h4 className="text-xl font-bold text-gray-800">Where do we send the quote?</h4>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                value={formData.firstName}
                onChange={(e) => updateField('firstName', e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                value={formData.lastName}
                onChange={(e) => updateField('lastName', e.target.value)}
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              required
            />
            
            <input
              type="text"
              placeholder="Street Address (Optional)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
              value={formData.address}
              onChange={(e) => updateField('address', e.target.value)}
            />

            <Button 
              type="submit" 
              fullWidth 
              variant="primary"
              isLoading={isSubmitting}
              className="mt-2 text-lg py-4 uppercase tracking-wide"
            >
              Get My Free Quote
            </Button>
            
            <p className="text-[10px] text-gray-400 text-center leading-snug px-2">
              By submitting this form, you authorize Lone Ranger Roofing to contact you via text message regarding your estimate request and project needs. We will never share your personal information with third parties for marketing purposes. Messaging frequency varies based on your project needs. You can opt out at any time by replying STOP. Message and data rates may apply. Consent is not a condition of purchase.{' '}
              <a href="/terms" className="underline hover:text-gray-600">Terms &amp; Conditions</a> | <a href="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</a>
            </p>

            <div className="flex justify-center pt-2">
               <button type="button" onClick={prevStep} className="text-sm font-medium text-gray-500 hover:text-gray-800">Back</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};