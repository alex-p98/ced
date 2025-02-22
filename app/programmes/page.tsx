'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';
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

export default function ProgrammesPage() {
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
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <span className="text-sm font-light tracking-widest text-blue-400 uppercase mb-4 block">
            Développez votre potentiel
          </span>
          <h1 className="text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
            Nos Programmes
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des programmes d'entraînement personnalisés pour tous les niveaux, conçus pour maximiser votre potentiel sur la glace.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Jeudi Momentum Section */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900/50 to-blue-950/30 rounded-3xl overflow-hidden backdrop-blur-sm border border-gray-800 shadow-xl"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12 space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                    Jeudi Momentum <span className="text-blue-400">ÉTÉ</span>
                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-6"></div>
                  <p className="text-xl text-gray-300">
                    L'objectif de nos séances est de travailler les éléments de base tels que la stabilité, l'endurance, le contrôle du puck, les lancers, la puissance, etc.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/40 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Horaire</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>À tous les jeudis</li>
                      <li>De 16h30 à 17h20</li>
                      <li>Au Sportium de Val-des-Monts</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/40 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Niveau</h3>
                    <p className="text-gray-300">M7 à M11 débutant</p>
                  </div>
                </div>

                <div className="bg-gray-900/40 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Pour info ou inscription</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <p>ecolehockeymomentum@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <p>819 743-9937</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-blue-400" />
                      <p>Messenger</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative h-full min-h-[400px] lg:min-h-[600px] order-first lg:order-last">
                <Image
                  src="/carl.avif"
                  alt="Carl Prud'homme - Entraîneur"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                    <h3 className="text-lg text-blue-400 font-light">Entraineur en charge</h3>
                    <p className="text-3xl font-bold text-white">Carl Prud'Homme</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Momentum Section */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900/50 to-blue-950/30 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-gray-800 shadow-xl"
            variants={itemVariants}
          >
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-2">
                Momentum <span className="text-blue-400">été</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 mb-8">Programme à venir - Restez à l'écoute pour plus d'informations!</p>

              <div className="bg-gray-900/40 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Pour inscription ou info</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <p>ecolehockeymomentum@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <p>819 743-9937</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-blue-400" />
                    <p>Messenger (Facebook)</p>
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