import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-16 bg-gray-50 text-black rounded-2xl">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          CONTACT US
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="order-2 md:order-1">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all text-gray-800 placeholder-gray-400 resize-y"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full p-4 bg-black hover:bg-black/50  text-white font-semibold rounded-lg transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Address</h3>
                    <p className="text-gray-600">123 Construction Ave, City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600">info@poojaenterprises.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
              {/* Placeholder for map integration */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <img src='data:image/jpeg;base64,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'
                  className='w-full h-full'
                  />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;