'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Spotlight } from "../components/Spotlight";
import { GridBackground } from "../components/GridBackground";

const coaches = [
  {
    name: 'Carl Prud\'homme',
    role: 'Entraîneur Principal',
    experience: 'En excellant avec l\'Intrépide midget AAA, puis dans la LHJMQ avec les Olympiques et les Huskies, ainsi qu\'à l\'Université de Moncton, Carl Prud\'homme a acquis une grande expérience et des connaissances précieuses dans le domaine du hockey, qu\'il est prêt à transmettre à la relève !',
    images: {
      card: '/carl-carte.avif',
      trophy: '/carl2.avif',
      portrait: '/carl.avif'
    }
  }
];

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

const imageHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export default function CoachPage() {
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
          <span className="text-sm font-light tracking-widest text-blue-400 uppercase mb-4 block">Notre équipe</span>
          <h1 className="text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
            Les Entraîneurs
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des professionnels passionnés qui partagent leur expertise pour développer la prochaine génération de joueurs de hockey.
          </p>
        </motion.div>
        
        {coaches.map((coach) => (
          <motion.div key={coach.name} className="max-w-6xl mx-auto" variants={containerVariants}>
            {/* Main Section */}
            <div className="relative bg-gray-900/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-800 shadow-xl">
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                {/* Info Column */}
                <motion.div 
                  className="md:col-span-5 space-y-8 flex flex-col justify-center"
                  variants={itemVariants}
                >
                  <div>
                    <h2 className="text-5xl font-bold text-blue-400 mb-3">{coach.name}</h2>
                    <h3 className="text-2xl text-blue-300/80">{coach.role}</h3>
                  </div>
                  <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {coach.experience}
                  </p>
                </motion.div>
                
                {/* Portrait Column */}
                <motion.div 
                  className="md:col-span-7 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 border-2 border-gray-800/50"
                  variants={itemVariants}
                  whileHover={imageHoverVariants.hover}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10" />
                  <Image
                    src={coach.images.portrait}
                    alt={`Portrait de ${coach.name}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>

              {/* Hockey Card Overlay */}
              <motion.div 
                className="absolute -top-10 right-0 md:right-10 w-[200px] h-[280px] transform rotate-[30deg] z-20"
                variants={itemVariants}
                whileHover={{
                  rotate: 25,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                style={{
                  filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.5))'
                }}
              >
                <Image
                  src={coach.images.card}
                  alt={`Carte de hockey de ${coach.name}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Trophy Photo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
              <motion.div 
                className="relative aspect-square w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden shadow-xl transform -rotate-1 border-2 border-gray-800/50"
                variants={itemVariants}
                whileHover={imageHoverVariants.hover}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <Image
                  src={coach.images.trophy}
                  alt={`${coach.name} avec un trophée`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <motion.div
                className="space-y-6"
                variants={itemVariants}
              >
                <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent mb-8"></div>
                <h3 className="text-3xl font-bold text-blue-400">Passion et Excellence</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Notre engagement envers l'excellence se reflète dans chaque aspect de notre programme. 
                  Nous croyons en la formation complète des joueurs, tant sur le plan technique que personnel.
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 