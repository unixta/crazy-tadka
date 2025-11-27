import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative z-10 bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              CRAZY <span className="text-chili">TADKA</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-sans">
              Explosive flavors meeting modern culinary art. Join us for an unforgettable dining experience in the heart of Odisha.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-sans">
              <li><a href="#menu" className="hover:text-saffron transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Reservations</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-chili shrink-0" />
                <span>KIIT Road, Patia,<br/>Bhubaneswar, Odisha 751024</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-chili shrink-0" />
                <span>+91 9040485999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-chili shrink-0" />
                <span>hello@crazytadka.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Stay Spicy</h4>
            <p className="text-gray-500 text-sm mb-4 font-sans">Subscribe for hot updates and offers.</p>
            <div className="flex bg-white/5 rounded-lg overflow-hidden border border-white/10 focus-within:border-saffron transition-colors">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none text-white px-4 py-2 w-full focus:outline-none text-sm font-sans"
              />
              <button className="bg-saffron px-4 py-2 text-white font-bold hover:bg-orange-600 transition-colors">
                GO
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-chili hover:text-white text-gray-400 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-chili hover:text-white text-gray-400 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-chili hover:text-white text-gray-400 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-600 font-sans">
          <p>&copy; 2024 CRAZY TADKA. Bhubaneswar, Odisha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;