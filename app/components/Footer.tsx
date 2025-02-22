'use client';

import Link from 'next/link';
import { Facebook, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-light tracking-widest text-gray-400 block">
                ÉCOLE DE HOCKEY
              </span>
              <span className="text-3xl font-bold text-white tracking-tight -mt-1 block">
                MOMENTUM
              </span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Votre destination unique pour l'excellence en hockey. Des programmes d'entraînement personnalisés pour tous les niveaux.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/coach" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Les Coach
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Nos Programmes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:ecolehockeymomentum@gmail.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Mail size={18} />
                  ecolehockeymomentum@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:8197439937" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Phone size={18} />
                  819 743-9937
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Facebook size={18} />
                  Facebook Messenger
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} École de Hockey Momentum. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 