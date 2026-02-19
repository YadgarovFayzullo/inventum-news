"use client";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { About } from "@/components/landing/about";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <About />
        
        {/* Additional Team/Mission Section specific to the page */}
        <section className="pt-20 pb-40 sm:pt-32 sm:pb-52 bg-secondary/30 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-[var(--conura-orange)] font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3">
                            <div className="h-[1px] w-8 bg-[var(--conura-orange)]" />
                            Our Mission
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none text-foreground mb-8">
                            Наука должна быть <span className="text-[var(--conura-sea)] italic">открытой</span>.
                        </h2>
                        <p className="text-xl text-muted-foreground font-semibold leading-relaxed mb-8">
                            Мы верим, что знания — это не привилегия избранных, а право каждого. Inventum стирает границы между сложным академическим миром и широкой аудиторией.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Наша редакция работает напрямую с первоисточниками, проверяет каждый факт и визуализирует данные так, чтобы их можно было понять с первого взгляда. Мы не упрощаем смыслы, мы проясняем их.
                        </p>
                    </div>
                     <div className="relative">
                        <div className="aspect-square rounded-[3rem] bg-foreground text-background p-12 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-br from-[var(--conura-sea)] to-transparent opacity-20 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl pointer-events-none" />
                            
                            <div className="text-[12rem] font-black leading-none opacity-10 absolute -bottom-10 -right-10 select-none">24</div>
                            
                            <div className="relative z-10">
                                <div className="text-3xl font-black mb-2">Наши принципы</div>
                                <div className="w-12 h-1 bg-[var(--conura-orange)] mb-8" />
                                
                                <ul className="space-y-6 list-none">
                                    <li className="flex items-start gap-4">
                                        <div className="h-2 w-2 rounded-full bg-[var(--conura-orange)] mt-2.5 shrink-0" />
                                        <span className="text-xl font-bold">Факты превыше хайпа. Мы не гонимся за кликбейтом.</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="h-2 w-2 rounded-full bg-[var(--conura-orange)] mt-2.5 shrink-0" />
                                        <span className="text-xl font-bold">Визуальная чистота. Дизайн помогает пониманию.</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="h-2 w-2 rounded-full bg-[var(--conura-orange)] mt-2.5 shrink-0" />
                                        <span className="text-xl font-bold">Независимость. Мнение редакции не продается.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
