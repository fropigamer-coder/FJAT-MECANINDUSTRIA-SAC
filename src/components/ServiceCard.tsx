import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  metric?: string;
}

export default function ServiceCard({ title, description, metric }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 glass-effect industrial-border transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full"
    >
      <div>
        <div className="text-fjat-orange text-sm font-mono mb-2 uppercase tracking-widest border border-fjat-orange inline-block px-3 py-1 rounded-sm">
          Solución A1
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-steel-secondary leading-relaxed">{description}</p>
      </div>
      {metric && (
        <div className="mt-6 pt-6 border-t border-white/10">
          <span className="text-3xl font-bold text-white">{metric}</span>
        </div>
      )}
    </motion.div>
  );
}
