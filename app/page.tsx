'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu } from 'lucide-react';
import Terminal from '@/components/Terminal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Home() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-synapsys-black text-synapsys-text">
      {/* HEADER - Sticky with Blur */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 border-b border-synapsys-cyan/20 backdrop-blur-md bg-synapsys-black/80"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-sm border border-synapsys-cyan p-1 glow-cyan">
              <Image
                src="/SYNAPSYS_logo.jpeg"
                alt="SYNAPSYS"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
                priority
              />
            </div>
            <span className="text-lg font-mono tracking-widest uppercase text-glow">
              SYNAPSYS
            </span>
          </div>

          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="bg-synapsys-card border border-synapsys-cyan/50 rounded px-3 py-2 text-sm font-mono text-synapsys-cyan focus:border-synapsys-cyan focus:outline-none focus:ring-1 focus:ring-synapsys-cyan"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
            <option value="pt">PT</option>
          </select>
        </div>
      </motion.header>

      {/* HERO SECTION */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-glow"
          >
            <span className="text-synapsys-cyan">SOVEREIGN</span>
            <br />
            <span className="text-synapsys-text">IDENTITY INFRASTRUCTURE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-synapsys-dim mb-4 font-mono"
          >
            European Digital Identity Verification Platform
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-synapsys-dim/80 mb-12 max-w-2xl mx-auto"
          >
            eIDAS 2.0 | NIS2 | ISO 27001 | EUDI Wallet | SDG 9, 10, 16
          </motion.p>

          {/* Terminal Component */}
          <Terminal />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Link
              href="/arquitectura"
              className="group relative px-8 py-4 bg-synapsys-cyan text-synapsys-black font-mono font-bold uppercase tracking-widest rounded hover:bg-synapsys-cyan/90 transition-all glow-cyan"
            >
              <span className="relative z-10">Start Verification</span>
            </Link>
            <Link
              href="/eidas-eudi"
              className="group px-8 py-4 border-2 border-synapsys-cyan text-synapsys-cyan font-mono font-bold uppercase tracking-widest rounded hover:bg-synapsys-cyan/10 transition-all"
            >
              Documentation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPS - 3 Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trust Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-synapsys-card border border-synapsys-cyan/30 rounded-lg p-8 hover:border-synapsys-cyan hover:glow-cyan transition-all"
            >
              <div className="mb-6">
                <Shield className="w-12 h-12 text-synapsys-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-synapsys-cyan">TRUST</h3>
              <p className="text-synapsys-dim leading-relaxed">
                Cryptographic verification aligned with EBSI trust framework. 
                Full eIDAS 2.0 compliance with ISO 27001 certified security infrastructure.
              </p>
            </motion.div>

            {/* Privacy Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-synapsys-card border border-synapsys-magenta/30 rounded-lg p-8 hover:border-synapsys-magenta hover:glow-magenta transition-all"
            >
              <div className="mb-6">
                <Lock className="w-12 h-12 text-synapsys-magenta" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-synapsys-magenta">PRIVACY</h3>
              <p className="text-synapsys-dim leading-relaxed">
                Zero-knowledge architecture. Your credentials never leave your device. 
                GDPR-compliant by design with EU-only data residency.
              </p>
            </motion.div>

            {/* Sovereignty Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group bg-synapsys-card border border-synapsys-green/30 rounded-lg p-8 hover:border-synapsys-green hover:glow-cyan transition-all"
            >
              <div className="mb-6">
                <Cpu className="w-12 h-12 text-synapsys-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-synapsys-green">SOVEREIGNTY</h3>
              <p className="text-synapsys-dim leading-relaxed">
                EU-sovereign digital identity platform. No dependency on non-European providers. 
                Built for the Twin Transition: Digital + Green.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATUS BAR */}
      <section className="py-12 px-6 border-t border-synapsys-cyan/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-synapsys-cyan font-mono">94%</div>
              <div className="text-sm text-synapsys-dim mt-2">eIDAS 2.0 Alignment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-synapsys-green font-mono">100%</div>
              <div className="text-sm text-synapsys-dim mt-2">NIS2 Compliance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-synapsys-magenta font-mono">2,847</div>
              <div className="text-sm text-synapsys-dim mt-2">24h Verifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-synapsys-cyan font-mono">99.98%</div>
              <div className="text-sm text-synapsys-dim mt-2">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-synapsys-cyan/10 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-mono text-sm uppercase tracking-widest text-synapsys-cyan mb-4">
                SYNAPSYS
              </h4>
              <p className="text-sm text-synapsys-dim">
                Sovereign Digital Identity Infrastructure for the European Twin Transition
              </p>
            </div>
            
            <div>
              <h4 className="font-mono text-sm uppercase tracking-widest text-synapsys-cyan mb-4">
                COMPLIANCE
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/eidas-eudi" className="text-synapsys-dim hover:text-synapsys-cyan transition">
                    eIDAS 2.0 & EUDI
                  </Link>
                </li>
                <li>
                  <Link href="/nis2-iso27001" className="text-synapsys-dim hover:text-synapsys-cyan transition">
                    NIS2 & ISO 27001
                  </Link>
                </li>
                <li>
                  <Link href="/arquitectura" className="text-synapsys-dim hover:text-synapsys-cyan transition">
                    Architecture (Galileo HAS)
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono text-sm uppercase tracking-widest text-synapsys-cyan mb-4">
                SECURITY
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/.well-known/security.txt" className="text-synapsys-dim hover:text-synapsys-cyan transition">
                    Security Policy
                  </Link>
                </li>
                <li>
                  <Link href="/security/charter" className="text-synapsys-dim hover:text-synapsys-cyan transition">
                    Security Charter
                  </Link>
                </li>
                <li>
                  <Link href="/security/responsible-disclosure" className="text-synapsys-dim hover:text-synapsys-cyan transition">
                    Report Vulnerability
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-synapsys-cyan/10 text-center">
            <p className="text-xs text-synapsys-dim font-mono">
              © 2025 SYNAPSYS. All rights reserved. | Made in Madrid 🇪🇸 | Compliant by design.
            </p>
            <p className="text-xs text-synapsys-dim/60 mt-2 font-mono">
              Data Residency: EU (Frankfurt, Amsterdam, Dublin, Stockholm)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
