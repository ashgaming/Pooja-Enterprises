'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Lakhan Pawar',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    bio: 'With over 25 years of experience in construction and real estate development.',
  },
  {
    id: 2,
    name: 'Lakhan Pawar',
    role: 'Chief Architect',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    bio: 'Award-winning architect with expertise in sustainable design.',
  },
  {
    id: 3,
    name: 'Lakhan Pawar',
    role: 'Project Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'Specializes in managing large-scale commercial projects.',
  },
  {
    id: 4,
    name: 'Lakhan Pawar',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    bio: 'Creates stunning interior spaces that blend functionality with aesthetics.',
  },
  {
    id: 5,
    name: 'Lakhan Pawar',
    role: 'Chief Engineer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    bio: 'Expert in structural engineering and innovative construction techniques.',
  },
  {
    id: 6,
    name: 'Lakhan Pawar',
    role: 'Finance Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    bio: 'Manages financial strategy and ensures project cost optimization.',
  },
];

export default function Team() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="w-full mx-5 rounded-3xl pt-10 h-64 relative">
          <Image
            src="https://res.cloudinary.com/dyka5knvr/image/upload/v1743849434/image_rbwh7a.jpg"
            alt="Team Hero Background"
            fill
            className="object-cover rounded-3xl"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white/90 shadow-sm mb-6">Our Team</h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Meet the talented professionals who make Pooja Enterprises a leader in the construction industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-400">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <button
                      aria-label={`LinkedIn profile for ${member.name}`}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button
                      aria-label={`Email ${member.name}`}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <Mail className="h-5 w-5" />
                    </button>
                    <button
                      aria-label={`Call ${member.name}`}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <Phone className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}