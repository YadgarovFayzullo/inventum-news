"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, ShieldCheck, Atom } from "@phosphor-icons/react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-background pt-32 pb-40 overflow-hidden">
            {/* Grid Background - Conura Signature */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`, backgroundSize: '100px 100px' }} 
            />
            
            {/* Background Accents */}
            <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[var(--conura-sea)]/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-20 left-[-5%] w-[500px] h-[500px] bg-[var(--conura-orange)]/5 rounded-full blur-[120px] -z-10" />

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
                    
                    {/* Left Content */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/5 text-foreground text-[10px] font-black uppercase tracking-[0.3em] mb-12"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--conura-sea)] animate-pulse" />
                            Core Intelligence / 2026
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] lg:leading-[0.8] text-foreground mb-8 sm:mb-12"
                        >
                            Будущее <br />
                            <span className="text-[var(--conura-sea)] italic decoration-[var(--conura-orange)]/20 underline decoration-4 sm:decoration-8 underline-offset-[-5px] sm:underline-offset-[-10px]">науки</span> в <br />
                            вашем ритме.
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg sm:text-xl md:text-3xl text-muted-foreground font-semibold max-w-2xl mb-10 sm:mb-16 leading-tight border-l-4 border-[var(--conura-sea)] pl-6 sm:pl-10"
                        >
                            Inventum — технологичное издание о фундаментальных знаниях. Мы превращаем сложные данные в увлекательные истории.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap items-center gap-8"
                        >
                            <Button size="lg" className="h-16 px-8 rounded-[1.5rem] text-lg sm:h-24 sm:px-16 sm:rounded-[2rem] bg-foreground text-background hover:bg-foreground/90 font-black sm:text-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-foreground/10 group">
                                Читать свежее
                                <ArrowRight size={24} weight="bold" className="group-hover:translate-x-2 transition-transform ml-2" />
                            </Button>
                            
                            <div className="flex -space-x-4">
                                {[1,2,3].map(i => (
                                    <div key={i} className="h-12 w-12 rounded-full bg-secondary border-4 border-background flex items-center justify-center text-[10px] font-black uppercase">
                                       {i === 1 ? 'SC' : i === 2 ? 'PH' : 'QT'}
                                    </div>
                                ))}
                                <div className="pl-8 text-xs font-black uppercase tracking-widest opacity-40 flex items-center">
                                    Trusted by 80k+ readers
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual - Interactive Disk / Sphere */}
                    <div className="lg:col-span-4 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
                            className="relative w-64 h-64 sm:w-[500px] sm:h-[500px] aspect-square shrink-0"
                        >
                            {/* Main Disk */}
                            <div className="absolute inset-0 rounded-full border-[1.5rem] border-foreground/5 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--conura-sea)]/20 to-[var(--conura-orange)]/10 blur-3xl opacity-50" />
                                <Atom size={200} weight="duotone" className="text-foreground relative z-10 animate-[spin_20s_linear_infinite]" />
                            </div>

                            {/* Floating Metadata Disks */}
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 h-20 w-20 sm:-top-10 sm:-right-10 sm:h-32 sm:w-32 rounded-full bg-card shadow-2xl border border-border flex flex-col items-center justify-center text-center p-2 sm:p-4 z-20"
                            >
                                <span className="text-[var(--conura-sea)] font-black text-lg sm:text-2xl leading-none">8.2к</span>
                                <span className="text-[6px] sm:text-[8px] font-black uppercase tracking-widest mt-1 opacity-40 leading-none">Citations</span>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-6 -left-6 h-24 w-24 sm:-bottom-10 sm:-left-10 sm:h-40 sm:w-40 rounded-full bg-foreground text-background shadow-2xl flex flex-col items-center justify-center text-center p-2 sm:p-4 z-20"
                            >
                                <Globe size={24} weight="duotone" className="mb-1 sm:mb-2 text-[var(--conura-orange)]" />
                                <span className="text-sm sm:text-xl font-black leading-none">Global</span>
                                <span className="text-[6px] sm:text-[8px] font-black uppercase tracking-widest mt-1 opacity-40 leading-none">Reach</span>
                            </motion.div>

                            {/* Rotating Orbit */}
                            <div className="absolute inset-[-40px] border border-dashed border-foreground/20 rounded-full animate-[spin_60s_linear_infinite]" />
                            <div className="absolute inset-[-80px] border border-dotted border-foreground/10 rounded-full animate-[spin_90s_reverse_linear_infinite]" />
                            
                            {/* Orbital Badge */}
                            <div className="absolute top-1/2 -right-4 h-8 w-8 rounded-full bg-[var(--conura-sea)] border-4 border-background" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
