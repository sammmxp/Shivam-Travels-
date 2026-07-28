import React, { useState } from 'react';
import { MessageCircle, Phone, Send, MapPin, Mail, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export function BookingSection() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      pickup: formData.get('pickup'),
      drop: formData.get('drop'),
      date: formData.get('date'),
      time: formData.get('time'),
      passengers: formData.get('passengers'),
      vehicle: formData.get('vehicle'),
      service: formData.get('service'),
      requirements: formData.get('requirements'),
    };

    const text = `Hello Shivam Tour and Travels,

I would like to request a booking.

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'N/A'}
Pickup Location: ${data.pickup}
Drop Location: ${data.drop}
Travel Date: ${data.date}
Pickup Time: ${data.time}
Number of Passengers: ${data.passengers}
Vehicle Selected: ${data.vehicle}
Service Required: ${data.service}
Special Requirements: ${data.requirements || 'None'}

Please confirm my booking.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919726858670?text=${encodedText}`, '_blank');
  };

  return (
    <motion.section 
      variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      id="booking" className="glass-card rounded-[44px] p-8 md:p-12"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-sans text-3xl md:text-4xl font-medium text-wandor-text text-center mb-4">Plan Your Journey with Us</h2>
        <p className="font-sans text-lg text-wandor-muted text-center mb-8">Tell us about your travel requirements, and our team will get in touch with you to help arrange your journey.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input required name="name" type="text" placeholder="Full Name" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input required name="phone" type="tel" placeholder="Mobile Number" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input type="email" name="email" placeholder="Email Address" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input required name="pickup" type="text" placeholder="Pickup Location" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input required name="drop" type="text" placeholder="Drop Location / Destination" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input required name="date" type="date" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input required name="time" type="time" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input required name="passengers" type="number" min="1" placeholder="Number of Passengers" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            
            <select required name="vehicle" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm">
              <option value="">Select Vehicle</option>
              <option value="4-seater">4-Seater</option>
              <option value="7-seater">7-Seater</option>
              <option value="17-seater">17-Seater Tempo Traveller</option>
            </select>

            <select required name="service" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm">
              <option value="">Select Service</option>
              <option value="Passenger Transport">Passenger Transport</option>
              <option value="Airport Pickup">Airport Pickup</option>
              <option value="Airport Drop">Airport Drop</option>
              <option value="City Tour">City Tour</option>
              <option value="One-Way Trip">One-Way Trip</option>
              <option value="Round Trip">Round Trip</option>
              <option value="Outstation Travel">Outstation Travel</option>
              <option value="Pilgrimage Tour">Pilgrimage Tour</option>
              <option value="Corporate Travel">Corporate Travel</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <textarea name="requirements" placeholder="Special Requirements" rows={3} className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm resize-none"></textarea>
          
          <button type="submit" className="btn-primary w-full bg-[#25D366] text-[#fafafa] border-none cursor-pointer font-sans text-base font-medium uppercase tracking-[0.04em] py-4 rounded-xl flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" /> Book via WhatsApp
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export function EnquirySection() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      pickup: formData.get('pickup'),
      drop: formData.get('drop'),
      date: formData.get('date'),
      passengers: formData.get('passengers'),
      vehicle: formData.get('vehicle'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    const text = `Hello Shivam Tour and Travels,

I have a travel enquiry.

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'N/A'}
Pickup Location: ${data.pickup}
Destination: ${data.drop}
Travel Date: ${data.date}
Number of Passengers: ${data.passengers}
Vehicle Type: ${data.vehicle}
Service Required: ${data.service}
Message: ${data.message || 'None'}

Please contact me regarding this enquiry.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919726858670?text=${encodedText}`, '_blank');
  };

  return (
    <motion.section 
      variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      id="enquiry" className="glass-card rounded-[44px] p-8 md:p-12"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-sans text-3xl md:text-4xl font-medium text-wandor-text text-center mb-4">Have a Travel Enquiry?</h2>
        <p className="font-sans text-lg text-wandor-muted text-center mb-8">Planning a trip, airport transfer, city tour, round trip, or outstation journey? Send us your requirements and our team will get in touch with you.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input required name="name" type="text" placeholder="Name" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input required name="phone" type="tel" placeholder="Phone Number" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input type="email" name="email" placeholder="Email" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input required name="pickup" type="text" placeholder="Pickup Location" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input required name="drop" type="text" placeholder="Destination" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input required name="date" type="date" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            <input required name="passengers" type="number" min="1" placeholder="Number of Passengers" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm" />
            
            <select required name="vehicle" className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm">
              <option value="">Vehicle Type</option>
              <option value="4-seater">4-Seater</option>
              <option value="7-seater">7-Seater</option>
              <option value="17-seater">17-Seater Tempo Traveller</option>
            </select>

            <select required name="service" className="md:col-span-2 w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm">
              <option value="">Service Required</option>
              <option value="Passenger Transport">Passenger Transport</option>
              <option value="Airport Pickup/Drop">Airport Pickup/Drop</option>
              <option value="City Tour">City Tour</option>
              <option value="One-Way Trip">One-Way Trip</option>
              <option value="Round Trip">Round Trip</option>
              <option value="Outstation Travel">Outstation Travel</option>
              <option value="Pilgrimage Tour">Pilgrimage Tour</option>
              <option value="Corporate Travel">Corporate Travel</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <textarea name="message" placeholder="Message" rows={4} className="w-full bg-white/40 border border-white/60 rounded-xl px-4 py-3 font-sans text-wandor-text placeholder-wandor-muted focus:outline-none focus:ring-2 focus:ring-wandor-prompt backdrop-blur-sm resize-none"></textarea>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button type="submit" className="flex-1 bg-[#25D366] text-white border-none cursor-pointer font-sans text-base font-medium uppercase tracking-[0.04em] py-4 rounded-xl flex items-center justify-center gap-2 no-underline transition-transform hover:scale-[1.02] shadow-sm">
              <MessageCircle className="w-5 h-5" /> Enquire on WhatsApp
            </button>
            <a href="tel:+919726858670" className="flex-1 glass-card text-wandor-dark border border-wandor-dark/20 cursor-pointer font-sans text-base font-medium uppercase tracking-[0.04em] py-4 rounded-xl flex items-center justify-center gap-2 no-underline transition-transform hover:scale-[1.02]">
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </form>
      </div>
    </motion.section>
  );
}

export function ContactSection() {
  return (
    <motion.section 
      variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <div className="glass-card rounded-[44px] p-8 md:p-12">
        <h2 className="font-sans text-3xl font-medium text-wandor-text mb-4">Get in Touch with Shivam Tour and Travels</h2>
        <p className="font-sans text-lg text-wandor-muted mb-8">Ready to plan your journey? Contact us for bookings, travel enquiries, airport transfers, city tours, round trips, outstation travel, and customized travel requirements.</p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-white/40 p-3 rounded-full backdrop-blur-sm border border-white/50">
              <MapPin className="w-6 h-6 text-wandor-prompt" />
            </div>
            <div>
              <h3 className="font-sans font-medium text-wandor-text text-lg">Address</h3>
              <a href="https://maps.google.com/?q=Office+No.+108,+Pramukhswami+Arcade,+Malaviya+Chowk,+Rajkot,+Gujarat" target="_blank" rel="noopener noreferrer" className="font-sans text-wandor-muted hover:text-wandor-prompt no-underline block mt-1">Office No. 108, Pramukhswami Arcade,<br/>Malaviya Chowk, Rajkot, Gujarat</a>
              <p className="font-sans text-wandor-text mt-1 font-medium">Owner: Divyesh Thakrar</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-white/40 p-3 rounded-full backdrop-blur-sm border border-white/50">
              <Phone className="w-6 h-6 text-wandor-prompt" />
            </div>
            <div>
              <h3 className="font-sans font-medium text-wandor-text text-lg">Call Us</h3>
              <div className="flex flex-col gap-1 mt-1">
                <a href="tel:+919726858670" className="font-sans text-wandor-muted hover:text-wandor-prompt no-underline">+91 97268 58670</a>
                <a href="tel:+919979907725" className="font-sans text-wandor-muted hover:text-wandor-prompt no-underline">+91 99799 07725</a>
                <a href="tel:+917567565065" className="font-sans text-wandor-muted hover:text-wandor-prompt no-underline">+91 75675 65065</a>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-white/40 p-3 rounded-full backdrop-blur-sm border border-white/50">
              <Mail className="w-6 h-6 text-wandor-prompt" />
            </div>
            <div>
              <h3 className="font-sans font-medium text-wandor-text text-lg">Email</h3>
              <a href="mailto:divyesthakrar22@gmail.com" className="font-sans text-wandor-muted hover:text-wandor-prompt no-underline">divyesthakrar22@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 rounded-2xl overflow-hidden border border-white/50 h-[250px] shadow-sm">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.774431872111!2d70.796781!3d22.301389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca7b0a39a2f7%3A0x7073b9e86337a4c7!2sMalaviya%20Chowk%2C%20Rajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:+919726858670" className="btn-primary bg-wandor-dark text-[#fafafa] px-6 py-3 rounded-full font-sans font-medium uppercase text-sm tracking-wide no-underline flex items-center gap-2">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a href="https://wa.me/919726858670" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-3 rounded-full font-sans font-medium uppercase text-sm tracking-wide no-underline flex items-center gap-2 transition-transform hover:scale-105 shadow-md border-none">
            <MessageCircle className="w-4 h-4" /> WhatsApp Booking
          </a>
        </div>
      </div>
      
      <div className="glass-card rounded-[44px] p-8 md:p-12 bg-wandor-prompt/10">
        <h2 className="font-sans text-3xl font-medium text-wandor-text mb-4">Book Your Ride on WhatsApp</h2>
        <p className="font-sans text-lg text-wandor-muted mb-8">Have a travel requirement? Send us your trip details directly on WhatsApp, and our team will assist you with your booking enquiry.</p>
        
        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/50">
          <p className="font-sans text-sm text-wandor-muted mb-2">Pre-filled WhatsApp Message:</p>
          <p className="font-sans text-wandor-text whitespace-pre-line text-[15px]">
            Hello Shivam Tour and Travels,{"\n\n"}
            I would like to enquire about a booking.{"\n\n"}
            Name:{"\n"}
            Pickup Location:{"\n"}
            Destination:{"\n"}
            Travel Date:{"\n"}
            Pickup Time:{"\n"}
            Number of Passengers:{"\n"}
            Vehicle Required:{"\n"}
            Type of Trip:{"\n\n"}
            Please contact me regarding my travel requirement.
          </p>
        </div>
        
        <a href="https://wa.me/919726858670?text=Hello%20Shivam%20Tour%20and%20Travels,%0A%0AI%20would%20like%20to%20enquire%20about%20a%20booking.%0A%0AName:%0APickup%20Location:%0ADestination:%0ATravel%20Date:%0APickup%20Time:%0ANumber%20of%20Passengers:%0AVehicle%20Required:%0AType%20of%20Trip:%0A%0APlease%20contact%20me%20regarding%20my%20travel%20requirement." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full font-sans font-medium uppercase text-base tracking-wide no-underline transition-transform hover:scale-[1.02] shadow-lg border-none">
          <MessageCircle className="w-5 h-5" /> Book on WhatsApp
        </a>
      </div>
    </motion.section>
  );
}

export function Footer() {
  return (
    <motion.footer 
      variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10px" }}
      className="glass-card rounded-[44px] rounded-b-none p-8 md:p-12 mt-24 text-center"
    >
      <h2 className="font-display text-3xl text-wandor-dark mb-2">Shivam Tour and Travels</h2>
      <p className="font-sans text-wandor-prompt font-medium mb-8">Your Trusted Travel Partner for Every Journey</p>
      
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-sans text-sm text-wandor-muted mb-8">
        <span>Passenger Transport</span><span>|</span>
        <span>Airport Pickup & Drop</span><span>|</span>
        <span>City Tours</span><span>|</span>
        <span>Round Trips</span><span>|</span>
        <span>Outstation Travel</span><span>|</span>
        <span>Pilgrimage Tours</span>
      </div>
      
      <div className="flex flex-col items-center gap-2 font-sans text-wandor-text mb-8">
        <p>Rajkot, Gujarat</p>
        <p>Call: <a href="tel:+919726858670" className="text-wandor-text no-underline hover:text-wandor-prompt">+91 97268 58670</a></p>
        <p>WhatsApp: <a href="https://wa.me/919726858670" target="_blank" rel="noopener noreferrer" className="text-wandor-text no-underline hover:text-wandor-prompt">+91 97268 58670</a></p>
        <p>Email: <a href="mailto:divyesthakrar22@gmail.com" className="text-wandor-text no-underline hover:text-wandor-prompt">divyesthakrar22@gmail.com</a></p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 font-sans text-sm text-wandor-dark mb-8 font-medium">
        <a href="#" className="text-wandor-dark no-underline hover:text-wandor-prompt">Home</a>
        <a href="#about" className="text-wandor-dark no-underline hover:text-wandor-prompt">About</a>
        <a href="#services" className="text-wandor-dark no-underline hover:text-wandor-prompt">Services</a>
        <a href="#fleet" className="text-wandor-dark no-underline hover:text-wandor-prompt">Fleet</a>
        <a href="#destinations" className="text-wandor-dark no-underline hover:text-wandor-prompt">Destinations</a>
        <a href="#booking" className="text-wandor-dark no-underline hover:text-wandor-prompt">Booking</a>
        <a href="#reviews" className="text-wandor-dark no-underline hover:text-wandor-prompt">Reviews</a>
        <a href="#contact" className="text-wandor-dark no-underline hover:text-wandor-prompt">Contact</a>
      </div>
      
      <div className="border-t border-white/30 pt-8 font-sans text-sm text-wandor-muted">
        <p>Copyright &copy; {new Date().getFullYear()} Shivam Tour and Travels. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
}

export function ContactAction() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a 
        href="tel:+919726858670" 
        className="glass-card w-14 h-14 bg-white/20 text-wandor-dark rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 no-underline"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a 
        href="https://wa.me/919726858670" 
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card w-14 h-14 bg-white/20 text-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 no-underline"
        aria-label="WhatsApp Booking"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
