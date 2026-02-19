"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ChartLineUp, 
  Globe, 
  TrendUp, 
  Microscope,
  Atom,
  ChartPieSlice
} from "@phosphor-icons/react";

const stats = [
  {
    label: "География цитирований",
    value: "84%",
    subValue: "+12.4% за год",
    details: [
      { name: "Европа", share: "42%", color: "bg-[var(--conura-sea)]" },
      { name: "Азия", share: "31%", color: "bg-blue-500" },
      { name: "Америка", share: "11%", color: "bg-emerald-500" },
    ]
  }
];

export function ScientificDashboard() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="py-16 sm:py-28 bg-background relative overflow-hidden" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Header - Conura Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="text-[var(--conura-sea)] font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3"
            >
              <div className="h-[1px] w-8 bg-[var(--conura-sea)]" />
              Live Analytics / 2026
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none text-foreground"
            >
              Метрики <span className="text-[var(--conura-orange)] italic">прогресса</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground font-semibold max-w-sm border-l-2 border-[var(--conura-sea)]/20 pl-8 leading-relaxed"
          >
            Мы транслируем влияние науки в реальном времени, отслеживая каждое цитирование.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Chart Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-card rounded-[2.5rem] sm:rounded-[4rem] p-6 sm:p-12 border border-border shadow-sm flex flex-col md:flex-row items-center gap-8 sm:gap-16"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50" cy="50" r="45"
                  className="fill-none stroke-foreground/5 stroke-[12]"
                />
                <motion.circle
                  cx="50" cy="50" r="45"
                  className="fill-none stroke-[var(--conura-sea)] stroke-[12] transition-all"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  animate={isInView ? { strokeDashoffset: 283 - (283 * 0.75) } : {}}
                  transition={{ duration: 2, ease: "circOut", delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-6xl font-black leading-none tracking-tighter text-foreground">75%</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mt-4">Retention</span>
              </div>
            </div>

            <div className="flex-1 space-y-10">
              <div>
                <h3 className="text-3xl font-black mb-3 leading-tight text-foreground">Глобальное присутствие</h3>
                <p className="text-lg text-muted-foreground font-semibold leading-snug">Доля уникальных исследований в общем объеме за Q1 2026.</p>
              </div>
              <div className="space-y-6">
                {stats[0].details?.map((item, i) => (
                  <div key={item.name} className="space-y-3">
                    <div className="flex justify-between text-xs font-black uppercase tracking-widest text-foreground/60">
                      <span>{item.name}</span>
                      <span className="text-[var(--conura-sea)]">{item.share}</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: item.share } : {}}
                        transition={{ duration: 1.5, delay: 0.8 + i * 0.2, ease: "circOut" }}
                        className={`h-full ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-foreground text-background rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="flex justify-between items-start relative z-10">
                <div className="p-4 bg-background/5 rounded-2xl">
                  <ChartLineUp size={40} weight="duotone" className="text-[var(--conura-sea)]" />
                </div>
                <div className="flex items-center gap-1 px-4 py-2 bg-background/10 rounded-full text-[10px] font-black tracking-widest uppercase">
                  <TrendUp size={14} weight="bold" className="text-[var(--conura-orange)]" />
                  +42.3%
                </div>
              </div>
              <div className="mt-16 relative z-10">
                <div className="text-6xl font-black tracking-tighter mb-2">12.5k</div>
                <div className="text-sm font-black opacity-60 uppercase tracking-[0.3em]">Scopus Citations</div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--conura-sea)]/10 rounded-full blur-3xl -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="bg-card rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 border border-border flex items-center justify-between group cursor-help transition-all duration-500 hover:border-[var(--conura-orange)]/30 hover:shadow-xl hover:shadow-[var(--conura-orange)]/5"
            >
              <div>
                <div className="text-xs font-black text-[var(--conura-orange)] uppercase tracking-[0.2em] mb-2">Impact Factor</div>
                <div className="text-5xl font-black tracking-tighter text-foreground">18.42</div>
                <div className="mt-6 flex gap-1.5 h-2 w-40 bg-secondary rounded-full overflow-hidden">
                   <div className="w-1/3 h-full bg-[var(--conura-sea)]" />
                   <div className="w-1/3 h-full bg-[var(--conura-sea)]/60" />
                   <div className="w-1/3 h-full bg-[var(--conura-sea)]/20" />
                </div>
              </div>
              <div className="h-24 w-24 rounded-[2rem] bg-secondary flex items-center justify-center text-foreground transition-all duration-500 group-hover:bg-foreground group-hover:text-background group-hover:scale-110">
                <Microscope size={44} weight="duotone" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Toolbox Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { name: 'Archive', icon: Atom, accent: 'var(--conura-sea)' },
             { name: 'Verificator', icon: Microscope, accent: 'var(--conura-orange)' },
             { name: 'Network', icon: Globe, accent: 'var(--conura-sea)' },
             { name: 'Forecast', icon: ChartPieSlice, accent: 'var(--conura-orange)' }
           ].map((tool, i) => (
             <motion.div
               key={tool.name}
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.8 + i * 0.1 }}
               className="group relative h-56 rounded-[2rem] sm:rounded-[3rem] bg-card border border-border p-4 sm:p-8 flex flex-col items-center justify-center gap-6 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden text-center"
             >
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <tool.icon size={48} weight="duotone" className="text-foreground transition-colors duration-500 group-hover:text-background" />
                </div>
                <span className="relative z-10 font-black uppercase tracking-[0.3em] text-[11px] text-foreground/40 group-hover:text-background transition-colors duration-500">{tool.name}</span>
                
                {/* Visual Fill on Hover */}
                <div className="absolute inset-0 bg-foreground scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
