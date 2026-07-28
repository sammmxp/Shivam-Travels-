import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { AboutSection, ServicesSection, FleetSection, DestinationsSection, WhyChooseUsSection, ReviewsSection, FAQSection } from './Sections';
import { BookingSection, EnquirySection, ContactSection, Footer, ContactAction } from './Forms';

function NavButton({ children, href }: { children: React.ReactNode, href?: string }) {
  return (
    <a href={href} className="nav-link bg-transparent border-none cursor-pointer font-sans text-[15px] font-medium uppercase text-wandor-text tracking-[0.04em] no-underline">
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <div className="relative w-full">
      {/* Fixed Background video */}
      <video
        src="https://pollen-batch-41236914.figma.site/_components/v2/f0ee2dae7671c170c34f12e31c4cb41418976c98/769c564298c132f7919405cd9f17c1b1231f341d.769c5642.mp4"
        className="fixed inset-0 w-full h-full object-cover -z-20"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Fixed Top gradient overlay */}
      <div
        className="fixed inset-x-0 top-0 h-[687px] pointer-events-none -z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-0">
        {/* Navigation bar - Sticky */}
        <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/40 border-b border-white/20 shadow-sm transition-all">
          <nav className="max-w-[1360px] mx-auto px-6 md:px-20 flex items-center justify-between py-4">
            <motion.span 
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 5, 
                ease: "linear", 
                repeat: Infinity 
              }}
              className="font-display text-[28px] md:text-[36px] leading-none select-none bg-gradient-to-r from-black via-wandor-prompt to-black bg-[length:200%_auto] text-transparent bg-clip-text cursor-default"
            >
              Shivam Travels
            </motion.span>

            <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 max-md:hidden">
              <NavButton href="#about">About</NavButton>
              <NavButton href="#services">Services</NavButton>
              <NavButton href="#fleet">Fleet</NavButton>
              <NavButton href="#contact">Contact</NavButton>
            </div>

            <div className="flex items-center gap-4 md:gap-8">
              <a href="tel:+919726858670" className="nav-link bg-transparent border-none cursor-pointer font-sans text-[15px] font-semibold uppercase text-[#292929] tracking-[0.04em] max-md:hidden no-underline flex items-center gap-2 hover:text-wandor-prompt transition-colors">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href="https://wa.me/919726858670" target="_blank" rel="noopener noreferrer" className="btn-primary bg-[#25D366] text-[#fafafa] border-none cursor-pointer font-sans text-[15px] font-medium uppercase tracking-[0.04em] px-5 py-3.5 rounded-full no-underline flex items-center gap-2 hover:bg-[#20b858] transition-colors shadow-md">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </nav>
        </header>

        <div className="max-w-[1360px] mx-auto px-6 md:px-20 pb-0">
          {/* Main Body content replacing previous single-hero */}
          <main className="flex flex-col gap-24 mt-16 md:mt-24">
          
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center">
            <h1 className="font-sans text-[clamp(40px,6vw,68px)] font-medium text-wandor-text leading-[1.05] tracking-[-0.04em] max-w-[900px] mb-5">
              Your Trusted Travel Partner for Every Journey
            </h1>
            <p className="font-sans text-xl font-medium text-wandor-muted leading-relaxed max-w-[700px] mb-10">
              From comfortable passenger transport and airport transfers to city tours, round trips, outstation journeys, and spiritual travel, Shivam Tour and Travels helps you travel safely and comfortably across Gujarat and beyond.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#booking" className="btn-primary bg-wandor-dark text-[#fafafa] border-none cursor-pointer font-sans text-[15px] font-medium uppercase tracking-[0.04em] px-8 py-4 rounded-full no-underline">
                Book Your Ride
              </a>
              <a href="https://wa.me/919726858670" target="_blank" rel="noopener noreferrer" className="glass-card text-wandor-text border-none cursor-pointer font-sans text-[15px] font-medium uppercase tracking-[0.04em] px-8 py-4 rounded-full no-underline transition-transform hover:scale-105 flex items-center gap-2 shadow-[0_0_2px_0_rgba(0,0,0,0.05)]">
                <MessageCircle className="w-5 h-5" /> WhatsApp Booking
              </a>
            </div>
            <p className="mt-8 font-sans text-wandor-prompt font-medium tracking-wide uppercase text-sm bg-white/20 px-6 py-2 rounded-full backdrop-blur-sm border border-white/50">
              Reliable Travel • Comfortable Vehicles • Professional Service
            </p>
          </section>

          <AboutSection />
          <ServicesSection />
          <FleetSection />
          <DestinationsSection />
          <WhyChooseUsSection />
          <BookingSection />
          <EnquirySection />
          <ReviewsSection />
          <FAQSection />
          <ContactSection />

        </main>
      </div>
      </div>
      
      {/* Full width footer at the very bottom */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-20">
        <Footer />
      </div>

      <ContactAction />
    </div>
  );
}
