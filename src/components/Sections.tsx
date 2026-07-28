import React, { useState } from 'react';
import { Users, Plane, Map, Navigation, MapPin, Briefcase, Star, Car, CheckCircle2, ShieldCheck, HeartHandshake, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};


export function AboutSection() {
  return (
    <motion.section 
      variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      id="about" className="glass-card rounded-[44px] p-8 md:p-12"
    >
      <h2 className="font-sans text-3xl md:text-4xl font-medium text-wandor-text mb-6">Your Journey, Our Responsibility</h2>
      <div className="font-sans text-lg text-wandor-text/80 space-y-4 leading-relaxed max-w-4xl">
        <p>Shivam Tour and Travels is a trusted travel service based in Rajkot, Gujarat, providing comfortable and reliable transportation for individuals, families, businesses, and groups.</p>
        <p>Whether you need a local city ride, airport pickup or drop, a one-way journey, a round trip, an outstation cab, or a memorable tour across Gujarat, we are here to make your journey smooth and stress-free.</p>
        <p>With a range of comfortable vehicles and professional travel services, we focus on providing a safe, convenient, and enjoyable travel experience for every customer. From short city journeys to long-distance road trips, travel with confidence with Shivam Tour and Travels.</p>
      </div>
    </motion.section>
  );
}

export function ServicesSection() {
  const services = [
    { title: "Passenger Transport", desc: "Comfortable and reliable transportation for individuals, families, groups, and corporate travelers.", icon: Users },
    { title: "Airport Pickup & Drop", desc: "Convenient airport pickup and drop services with timely transportation to and from the airport.", icon: Plane },
    { title: "City Tours", desc: "Explore Rajkot and other cities comfortably with convenient city sightseeing and local travel services.", icon: Map },
    { title: "Round Trip", desc: "Plan your journey with convenient round-trip transportation for personal, family, business travel, and sightseeing.", icon: Navigation },
    { title: "One-Way Travel", desc: "Travel comfortably to your destination with reliable one-way transportation services.", icon: Navigation },
    { title: "Outstation Cab", desc: "Travel from Rajkot to Ahmedabad, Surat, Vadodara, Udaipur, Mumbai, and beyond.", icon: MapPin },
    { title: "Corporate Travel", desc: "Professional transportation solutions for meetings, business trips, conferences, and corporate requirements.", icon: Briefcase },
    { title: "Pilgrimage Tours", desc: "Comfortable travel to Somnath and major spiritual and religious destinations across Gujarat.", icon: Star },
    { title: "Customized Travel", desc: "Plan your journey according to your destination, schedule, group size, and travel requirements.", icon: MapPin },
  ];

  return (
    <motion.section 
      variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      id="services" className="space-y-8"
    >
      <div className="text-center">
        <h2 className="font-sans text-3xl md:text-5xl font-medium text-wandor-text mb-4">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="glass-card rounded-3xl p-6 transition-transform hover:scale-[1.02]">
            <s.icon className="w-8 h-8 text-wandor-prompt mb-4" />
            <h3 className="font-sans text-xl font-medium text-wandor-text mb-2">{s.title}</h3>
            <p className="font-sans text-wandor-muted leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export function FleetSection() {
  const fleet = [
    { title: "4-Seater Vehicles", desc: "Perfect for individuals, couples, and small families looking for a comfortable and convenient journey." },
    { title: "7-Seater Vehicles", desc: "Ideal for families and small groups who want extra space and comfortable travel." },
    { title: "17-Seater Tempo Traveller", desc: "A convenient option for larger groups, family tours, pilgrimage trips, corporate travel, and group sightseeing." },
  ];
  const features = [
    "Comfortable Seating", "Air Conditioning", "Spacious Interior",
    "Large Luggage Capacity", "Clean & Well-Maintained Vehicles", 
    "Professional Drivers", "Comfortable Long-Distance Travel"
  ];

  return (
    <motion.section 
      variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      id="fleet" className="space-y-8"
    >
      <div className="text-center">
        <h2 className="font-sans text-3xl md:text-5xl font-medium text-wandor-text mb-4">Choose the Right Vehicle for Your Journey</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fleet.map((f, i) => (
          <div key={i} className="glass-card rounded-3xl p-6 text-center">
            <Car className="w-12 h-12 text-wandor-prompt mx-auto mb-4" />
            <h3 className="font-sans text-xl font-medium text-wandor-text mb-3">{f.title}</h3>
            <p className="font-sans text-wandor-muted leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="glass-card rounded-[32px] p-8 mt-8">
        <h3 className="font-sans text-2xl font-medium text-wandor-text mb-6 text-center">Vehicle Features</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/50">
              <CheckCircle2 className="w-5 h-5 text-wandor-prompt" />
              <span className="font-sans font-medium text-wandor-text">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export function DestinationsSection() {
  const routes = ["Rajkot to Ahmedabad", "Rajkot to Surat", "Rajkot to Vadodara", "Rajkot to Udaipur", "Rajkot to Mumbai", "Rajkot to Somnath", "Rajkot to Dwarka", "Rajkot to Gir", "Rajkot to Diu", "Rajkot to Statue of Unity", "Rajkot to Saputara", "Rajkot to Rann of Kutch"];
  const spiritual = ["Somnath Temple", "Dwarkadhish Temple", "Nageshwar Jyotirlinga", "Ambaji Temple", "Pavagadh", "Palitana", "Akshardham"];
  
  return (
    <motion.section 
      variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      id="destinations" className="space-y-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card rounded-[44px] p-8 md:p-10">
          <h2 className="font-sans text-3xl font-medium text-wandor-text mb-4">Travel Beyond Rajkot</h2>
          <p className="font-sans text-lg text-wandor-muted mb-6">Enjoy comfortable outstation travel from Rajkot to major cities and destinations. We also provide travel services from Ahmedabad, Surat, Vadodara, and other Gujarat cities to Mumbai and return.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {routes.map((r, i) => (
              <div key={i} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-wandor-prompt flex-shrink-0" />
                <span className="font-sans text-wandor-text">{r}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-card rounded-[44px] p-8 md:p-10">
          <h2 className="font-sans text-3xl font-medium text-wandor-text mb-4">Spiritual & Pilgrimage Tours</h2>
          <p className="font-sans text-lg text-wandor-muted mb-6">Experience peaceful and convenient travel to Gujarat's famous spiritual destinations for individuals, families, and groups.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {spiritual.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <Star className="w-4 h-4 text-wandor-prompt flex-shrink-0" />
                <span className="font-sans text-wandor-text">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="glass-card rounded-[44px] p-8 text-center">
        <h2 className="font-sans text-2xl md:text-3xl font-medium text-wandor-text mb-4">Explore Every Corner of Gujarat</h2>
        <p className="font-sans text-lg text-wandor-muted max-w-4xl mx-auto">
          Shivam Tour and Travels provides travel services across Gujarat, covering major cities, districts, tourist destinations, airports, railway stations, and spiritual destinations. All major cities and districts of Gujarat are covered.
        </p>
      </div>
    </motion.section>
  );
}

export function WhyChooseUsSection() {
  const reasons = [
    { title: "Reliable Service", desc: "We focus on making every journey smooth, convenient, and dependable.", icon: ShieldCheck },
    { title: "Comfortable Vehicles", desc: "Choose from suitable vehicles for individuals, families, and larger groups.", icon: Car },
    { title: "Professional Service", desc: "Enjoy a professional and customer-focused travel experience.", icon: HeartHandshake },
    { title: "Safe Journey", desc: "Your comfort and safety are important to us throughout your journey.", icon: CheckCircle2 },
    { title: "Wide Travel Coverage", desc: "Travel across Rajkot, Gujarat, and popular destinations beyond Gujarat.", icon: Map },
    { title: "Flexible Travel", desc: "Choose passenger transport, airport transfers, city tours, one-way trips, and more.", icon: Navigation },
  ];

  return (
    <motion.section 
      variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      className="glass-card rounded-[44px] p-8 md:p-12"
    >
      <h2 className="font-sans text-3xl md:text-4xl font-medium text-wandor-text text-center mb-10">Travel with Confidence</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <div key={i} className="flex flex-col gap-3">
            <r.icon className="w-8 h-8 text-wandor-prompt" />
            <h3 className="font-sans text-xl font-medium text-wandor-text">{r.title}</h3>
            <p className="font-sans text-wandor-muted">{r.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export function ReviewsSection() {
  const reviews = [
    { name: "Amit Patel", type: "Family Trip", route: "Rajkot to Somnath", rating: 5, text: "Excellent service! The driver was very professional and the 7-seater was very comfortable for our family." },
    { name: "Rahul Sharma", type: "Corporate Travel", route: "Rajkot to Ahmedabad", rating: 5, text: "Very punctual and reliable. Used their service for a business trip and reached the airport perfectly on time." },
    { name: "Neha Desai", type: "Outstation Cab", route: "Rajkot to Udaipur", rating: 5, text: "Smooth and safe journey. The vehicle was clean and well-maintained. Highly recommend Shivam Tour and Travels." }
  ];

  return (
    <motion.section 
      variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      id="reviews" className="space-y-8"
    >
      <div className="text-center">
        <h2 className="font-sans text-3xl md:text-5xl font-medium text-wandor-text mb-4">What Our Customers Say</h2>
        <p className="font-sans text-xl text-wandor-muted max-w-2xl mx-auto">We value every customer and every journey. Your experience and feedback help us continue providing better travel services.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="glass-card rounded-3xl p-6">
            <div className="flex text-yellow-500 mb-3">
              {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="font-sans text-wandor-text mb-4 italic">"{r.text}"</p>
            <div>
              <p className="font-sans font-medium text-wandor-dark">{r.name}</p>
              <p className="font-sans text-sm text-wandor-muted">{r.type} • {r.route}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do I confirm my booking?",
      a: "Once you submit your booking request via our website or WhatsApp, our team will review the details and confirm your ride along with driver details."
    },
    {
      q: "Are toll taxes and parking fees included?",
      a: "Toll taxes and parking fees are generally extra and paid directly during the trip, unless explicitly mentioned in a customized package."
    },
    {
      q: "Do you provide outstation travel at night?",
      a: "Yes, we provide 24/7 outstation taxi services with experienced drivers trained for safe night driving."
    },
    {
      q: "What is your cancellation policy?",
      a: "You can easily cancel or modify your booking by contacting us on WhatsApp or calling us directly at least a few hours before the scheduled pickup time."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section 
      variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      id="faqs" className="space-y-8"
    >
      <div className="text-center">
        <h2 className="font-sans text-3xl md:text-5xl font-medium text-wandor-text mb-4">Frequently Asked Questions</h2>
        <p className="font-sans text-xl text-wandor-muted max-w-2xl mx-auto">Got questions? We've got answers to help you plan your journey effortlessly.</p>
      </div>
      
      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="glass-card rounded-2xl overflow-hidden transition-colors hover:bg-white/30"
          >
            <button 
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-wandor-prompt"
              aria-expanded={openIndex === index}
            >
              <h3 className="font-sans font-medium text-lg text-wandor-text flex items-center gap-3">
                <span className="text-wandor-prompt font-bold">Q.</span>
                {faq.q}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-wandor-muted" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="font-sans text-wandor-muted leading-relaxed px-6 pb-6 pl-[3.25rem]">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
