'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const commands = [
  "> INITIALIZING SYNAPSYS_PROTOCOL v2.0...",
  "> ESTABLISHING SECURE CHANNEL (eIDAS 2.0)...",
  "> VERIFYING TRUST CHAIN: EBSI / ISO 27001... [OK]",
  "> SYSTEM READY. AWAITING VERIFICATION.",
];

export default function Terminal() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentCommand >= commands.length) {
      setIsTyping(false);
      return;
    }

    const command = commands[currentCommand];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < command.length) {
        setDisplayText(command.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentCommand((prev) => prev + 1);
        }, 1000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentCommand]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="bg-synapsys-card border border-synapsys-cyan/30 rounded-lg p-6 glow-cyan">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-synapsys-green"></div>
          <span className="ml-2 text-xs text-synapsys-dim font-mono">
            terminal://synapsys.protocol
          </span>
        </div>
        
        <div className="font-mono text-sm space-y-2">
          {commands.slice(0, currentCommand).map((cmd, index) => (
            <div key={index} className="text-synapsys-green">
              {cmd}
            </div>
          ))}
          {currentCommand < commands.length && (
            <div className="text-synapsys-cyan">
              {displayText}
              {isTyping && <span className="animate-pulse">█</span>}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
