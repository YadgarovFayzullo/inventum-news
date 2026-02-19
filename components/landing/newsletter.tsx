"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EnvelopeSimple, ArrowRight, ShieldCheck } from "@phosphor-icons/react";

export function Newsletter() {
    return (
        <section className="py-28 bg-foreground text-background relative overflow-hidden">
            {/* Background Decorative - Conura Orange Glow */}
            <div className="absolute top-1/2 left-[80%] -translate-y-1/2 w-[600px] h-[600px] bg-[var(--conura-orange)]/10 rounded-full blur-[120px] -z-0" />
            
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    
                    <div>
                        <div className="text-[var(--conura-sea)] font-black uppercase tracking-[0.4em] text-[10px] mb-8 flex items-center gap-3">
                            <div className="h-[1px] w-8 bg-[var(--conura-sea)]" />
                            Weekly Digest
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-10">
                            Знания <br />
                            <span className="text-[var(--conura-orange)] italic">напрямую</span> <br />
                            в почту.
                        </h2>
                        <div className="flex items-center gap-4 text-background/40 font-black uppercase tracking-[0.2em] text-[11px]">
                            <ShieldCheck size={20} weight="duotone" className="text-[var(--conura-sea)]" />
                            Никакого спама. Только наука.
                        </div>
                    </div>

                    <div className="bg-background/5 p-12 md:p-16 rounded-[4rem] border border-background/10 backdrop-blur-sm">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative group">
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-background/40 group-focus-within:text-[var(--conura-sea)] transition-colors">
                                    <EnvelopeSimple size={24} weight="duotone" />
                                </div>
                                <Input 
                                    type="email" 
                                    placeholder="your-email@science.com" 
                                    className="h-20 pl-16 pr-8 bg-background/5 border-2 border-background/10 rounded-3xl text-xl font-bold placeholder:text-background/20 focus-visible:ring-[var(--conura-sea)] focus-visible:border-[var(--conura-sea)] transition-all"
                                />
                            </div>
                            <Button className="h-20 w-full rounded-3xl bg-background text-foreground hover:bg-background/90 text-xl font-black gap-4 transition-all hover:scale-[1.02] active:scale-95 group">
                                Подписаться на дайджест
                                <ArrowRight size={24} weight="bold" className="group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </form>
                        <p className="mt-8 text-center text-sm font-semibold opacity-40">
                            Нажимая кнопку, вы соглашаетесь с нашей политикой конфиденциальности. Вы можете отписаться в любой момент.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
