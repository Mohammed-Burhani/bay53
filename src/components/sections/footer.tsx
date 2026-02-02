import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 font-sans">
      {/* Main Footer Content */}
      <div className="px-7 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Philosophy Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <div className="font-bold text-xl text-white">Bay53</div>
                <div className="text-xs text-gray-400">ERP Solutions</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering businesses with cutting-edge ERP solutions since 2010.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm md:text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-indigo-400 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/features" className="text-sm hover:text-indigo-400 transition-colors duration-200">Features</a>
              </li>
              <li>
                <a href="/modules" className="text-sm hover:text-indigo-400 transition-colors duration-200">Modules</a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-indigo-400 transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-indigo-400 transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Key Modules Column */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm md:text-base">Key Modules</h3>
            <ul className="space-y-2">
              <li className="text-sm">Accounting</li>
              <li className="text-sm">Inventory Management</li>
              <li className="text-sm">Sales & Distribution</li>
              <li className="text-sm">CRM</li>
              <li className="text-sm">Production</li>
              <li className="text-sm">Payroll</li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm md:text-base">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@burhanitechnologies.com" 
                  className="flex items-start text-sm hover:text-indigo-400 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>info@burhanitechnologies.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+917299002152" 
                  className="flex items-start text-sm hover:text-indigo-400 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>+91 72990 02152</span>
                </a>
              </li>
              <li className="flex items-start text-sm">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Sub-Footer / Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="px-7 mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2026 Burhani Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;