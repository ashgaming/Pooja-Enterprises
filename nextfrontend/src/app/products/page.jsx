'use client';

import { motion } from 'framer-motion';
import { PenTool as Tool, Package, Shield, Truck } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    "id": 1,
    "name": "Premium Cement",
    "category": "Building Materials",
    "image": "https://images.unsplash.com/photo-1548263594-a71e7a3d2662?auto=format&fit=crop&q=80",
    "description": "High-quality cement for durable construction.",
    "features": ["Superior strength", "Quick setting", "Weather resistant"]
  },
  {
    "id": 2,
    "name": "Steel Reinforcement",
    "category": "Structural",
    "image": "https://images.unsplash.com/photo-1580983561371-7f4b242d9e34?auto=format&fit=crop&q=80",
    "description": "Premium grade steel for structural reinforcement.",
    "features": ["High tensile strength", "Corrosion resistant", "BIS certified"]
  },
  {
    "id": 3,
    "name": "Architectural Glass",
    "category": "Finishing",
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80",
    "description": "Modern architectural glass solutions.",
    "features": ["UV protected", "Energy efficient", "Sound insulation"]
  },
  {
    "id": 4,
    "name": "Premium Tiles",
    "category": "Finishing",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    "description": "Luxury tiles for floors and walls.",
    "features": ["Stain resistant", "Anti-skid", "Easy maintenance"]
  },
  {
    "id": 5,
    "name": "Construction Equipment",
    "category": "Machinery",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
    "description": "Modern construction machinery for rent.",
    "features": ["Well maintained", "Operator included", "24/7 support"]
  },
  {
    "id": 6,
    "name": "Safety Equipment",
    "category": "Safety",
    "image": "https://images.unsplash.com/photo-1603794052298-7864f981b0e9?auto=format&fit=crop&q=80",
    "description": "Complete range of safety gear.",
    "features": ["ISI marked", "Comfortable fit", "Durable"]
  }
];

export default function Products() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our range of premium construction materials and equipment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Tool,
                title: 'Quality Materials',
                description: 'Premium construction supplies',
              },
              {
                icon: Package,
                title: 'Wide Selection',
                description: 'Comprehensive product range',
              },
              {
                icon: Shield,
                title: 'Certified Products',
                description: 'All products meet standards',
              },
              {
                icon: Truck,
                title: 'Quick Delivery',
                description: 'Timely supply guaranteed',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg text-center border-solid border border-gray-200 bg-gray-50 shadow-lg"
              >
                <feature.icon className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/50 rounded-lg overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 border border-black text-dark px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-black/50 text-white py-2 rounded-md hover:bg-primary-dark transition-colors">
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-dark mb-8">Need Custom Products?</h2>
          <button className="bg-dark text-white px-8 py-3 rounded-md hover:bg-dark-light transition-colors">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
}