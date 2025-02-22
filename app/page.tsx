'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Spotlight } from "./components/Spotlight";
import { GridBackground } from "./components/GridBackground";
import { ScrollIndicator } from "./components/ScrollIndicator";

// Dynamic imports to fix client component issues
const NextLink = dynamic(() => import('next/link'), { ssr: false });
const NextImage = dynamic(() => import('next/image'), { ssr: false });
const ChevronDownIcon = dynamic(() => Promise.resolve(ChevronDown), { ssr: false });

interface PexelsImage {
  src: {
    original: string;
    large2x: string;
    large: string;
  };
  alt: string;
  photographer: string;
}

export default function Home() {
  const [images, setImages] = useState<PexelsImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const response = await fetch('/api/pexels?ids=6847383,6847591');
        const data = await response.json();
        console.log('Pexels API response:', data);
        if (data.photos) {
          setImages(data.photos);
        }
      } catch (error) {
        console.error('Failed to fetch images:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <GridBackground />
        <Spotlight 
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(37, 99, 235, 0.08) 0%, rgba(37, 99, 235, 0.02) 50%, rgba(37, 99, 235, 0) 100%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(37, 99, 235, 0.06) 0%, rgba(37, 99, 235, 0.02) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(37, 99, 235, 0.04) 0%, rgba(37, 99, 235, 0.02) 80%, transparent 100%)"
        />
        
        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-center mb-12">
            <h1 className="flex flex-col items-center relative">
              <motion.span 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.19, 1, 0.22, 1]
                }}
                className="text-3xl md:text-5xl font-light tracking-widest text-white mb-6"
              >
                ÉCOLE DE HOCKEY
              </motion.span>
              <div className="relative">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 1,
                    delay: 0.3,
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  className="text-7xl md:text-[12rem] font-bold text-white tracking-tight leading-none relative z-0 block"
                >
                  MOMENTUM
                </motion.span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ 
                    duration: 1.2,
                    delay: 0.5,
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"
                />
              </div>
            </h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.8,
              ease: [0.19, 1, 0.22, 1]
            }}
            className="text-xl md:text-2xl mb-12 max-w-2xl text-gray-400 mx-auto text-center"
          >
            Votre destination unique pour l'excellence en hockey. 
            Des programmes d'entraînement personnalisés pour tous les niveaux.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 1,
              ease: [0.19, 1, 0.22, 1]
            }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <NextLink 
              href="/programmes"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-blue-500/20 hover:scale-105 hover:shadow-xl"
            >
              Découvrir nos programmes
            </NextLink>
            <NextLink 
              href="/contact"
              className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:scale-105 hover:shadow-xl"
            >
              Nous contacter
            </NextLink>
          </motion.div>
          <ScrollIndicator />
        </div>
      </div>

      {/* Jeudis-Momentum Section */}
      <div className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-2xl bg-gray-800">
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
              ) : images[0] ? (
                <NextImage
                  src={images[0].src.large || images[0].src.original}
                  alt={images[0].alt || "Hockey players training"}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Image non disponible
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-8">Jeudis-Momentum</h2>
              <p className="text-xl text-gray-300 mb-6">
                Venez travailler avec l'entraîneur Carl Prug'homme aux Jeudis Momentum, qui sont parfait pour apprendre la base dans l'effort et le plaisir! (pour M7 à M11 Débutant)
              </p>
              <NextLink
                href="/programmes"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
              >
                Pour voir nos programme
              </NextLink>
            </div>
          </div>
        </div>
      </div>

      {/* Nos Objectifs Section */}
      <div className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl font-bold mb-8">nos objectifs</h2>
              <p className="text-xl text-gray-300 mb-6">
                Depuis que nous avons démarés en 2023, l'École de hockey Momentum satisfait ses clients grâce à ses services exceptionnels. Notre désir d'atteindre l'excellence a fait de nous ce que nous sommes aujourd'hui, et nous a permis d'évoluer. Contactez-nous dès aujourd'hui pour obtenir plus d'informations sur nos programme.
              </p>
              <div className="space-y-4">
                <p className="text-xl text-blue-400">ecolehockeymomentum@gmail.com</p>
                <p className="text-xl text-blue-400">819 743-9937</p>
              </div>
            </div>
            <div className="relative aspect-[16/9] w-full order-1 md:order-2 overflow-hidden rounded-lg shadow-2xl bg-gray-800">
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
              ) : images[1] ? (
                <NextImage
                  src={images[1].src.large || images[1].src.original}
                  alt={images[1].alt || "Patinoire de hockey"}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Image non disponible
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 