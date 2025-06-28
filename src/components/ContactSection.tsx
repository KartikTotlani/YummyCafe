
import { useState } from 'react';
import { MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-cafe-warm-white">
      <div className="section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-cafe-dark-brown mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-cafe-brown max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-cafe-brown/20 focus:border-cafe-gold focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-cafe-brown/20 focus:border-cafe-gold focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-cafe-brown/20 focus:border-cafe-gold focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-cafe-brown text-white rounded-lg font-semibold hover:bg-cafe-dark-brown transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up animation-delay-300">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-playfair text-3xl font-bold text-cafe-dark-brown mb-6">
                Visit Us
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-cafe-gold mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-cafe-dark-brown">Address</p>
                    <p className="text-cafe-brown">123 Artisan Street<br />Coffee District, CD 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-cafe-gold mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-cafe-dark-brown">Hours</p>
                    <p className="text-cafe-brown">
                      Monday - Sunday<br />
                      7:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-cafe-dark-brown mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <button className="p-3 bg-cafe-gold/20 rounded-full hover:bg-cafe-gold hover:text-white transition-all duration-300 hover:scale-110">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-cafe-gold/20 rounded-full hover:bg-cafe-gold hover:text-white transition-all duration-300 hover:scale-110">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-cafe-gold/20 rounded-full hover:bg-cafe-gold hover:text-white transition-all duration-300 hover:scale-110">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="mt-6 bg-cafe-brown/10 rounded-2xl p-8 text-center hover-lift">
              <MapPin className="w-12 h-12 text-cafe-gold mx-auto mb-4 animate-gentle-bounce" />
              <p className="text-cafe-brown font-semibold">Interactive Map</p>
              <p className="text-cafe-brown/70 text-sm mt-2">Click to view location on Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
