'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Spotlight } from "../components/Spotlight";
import { GridBackground } from "../components/GridBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-20">
      <GridBackground />
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(37, 99, 235, 0.08) 0%, rgba(37, 99, 235, 0.02) 50%, rgba(37, 99, 235, 0) 100%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(37, 99, 235, 0.06) 0%, rgba(37, 99, 235, 0.02) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(37, 99, 235, 0.04) 0%, rgba(37, 99, 235, 0.02) 80%, transparent 100%)"
      />

      <motion.div 
        className="relative z-10 container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <span className="text-sm font-light tracking-widest text-blue-400 uppercase mb-4 block">Parlons de votre progression</span>
          <h1 className="text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nous sommes là pour répondre à vos questions et vous aider à atteindre vos objectifs sur la glace.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-gray-900/50 rounded-3xl overflow-hidden backdrop-blur-sm border border-gray-800"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="p-8 md:p-12">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-400 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-blue-950/30 border border-blue-900/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-blue-950/30 border border-blue-900/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-400 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-blue-950/30 border border-blue-900/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-blue-400 mb-2">
                      Programme d'intérêt
                    </label>
                    <select
                      id="program"
                      name="program"
                      className="w-full px-4 py-3 bg-blue-950/30 border border-blue-900/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    >
                      <option value="">Sélectionnez un programme</option>
                      <option value="jeudi">Jeudi Momentum</option>
                      <option value="momentum">Programme Momentum</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-blue-950/30 border border-blue-900/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl transition-all font-semibold shadow-lg shadow-blue-500/20"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>

              {/* Contact Info Section */}
              <div className="bg-blue-950/30 p-8 md:p-12 flex flex-col justify-center space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-400 mb-4">Autres moyens de nous contacter</h2>
                  <p className="text-gray-300">
                    Choisissez la méthode qui vous convient le mieux pour nous joindre.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Email</h3>
                    <p className="text-gray-300">ecolehockeymomentum@gmail.com</p>
                  </div>

                  <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Téléphone</h3>
                    <p className="text-gray-300">819 743-9937</p>
                  </div>

                  <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Réseaux sociaux</h3>
                    <p className="text-gray-300">Messenger (Facebook)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 