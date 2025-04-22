import Link from 'next/link';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="w-full h-[1px] bg-black"></div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold">Pooja Enterprises</span>
            </div>
            <p className="text-gray-400">
              Building excellence through innovation and dedication since 1992.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#about"
                    scroll={true}
                    className="text-gray-400 hover:text-black transition-colors"
                    aria-label="About Us"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-400 hover:text-black transition-colors"
                    aria-label="Projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-gray-400 hover:text-black transition-colors"
                    aria-label="Our Team"
                  >
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Commercial Construction</li>
                <li className="text-gray-400">Residential Projects</li>
                <li className="text-gray-400">Interior Design</li>
                <li className="text-gray-400">Renovation</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">123 Construction Ave, City, State 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">info@poojaenterprises.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pooja Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}