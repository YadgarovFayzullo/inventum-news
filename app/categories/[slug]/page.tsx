"use client";

import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Atom, 
  ArrowLeft, 
  Clock, 
  User, 
  ArrowRight,
  Sparkle
} from "@phosphor-icons/react";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = "Физика"; // В реальности берем из параметров
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Category Hero Header */}
      <div className="w-full bg-[var(--conura-sea)]/5 border-b border-border pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--conura-sea)]/10 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-12">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="text-[var(--conura-orange)]">/</span>
            <Link href="/articles" className="hover:text-foreground transition-colors">Archive</Link>
            <span className="text-[var(--conura-orange)]">/</span>
            <span className="text-foreground">{categoryName}</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-8 text-foreground">
                {categoryName}.
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-semibold max-w-xl leading-relaxed border-l-4 border-[var(--conura-sea)] pl-8">
                Исследуем фундаментальные законы Вселенной: от элементарных частиц до структуры пространства-времени.
              </p>
            </div>
            
            <div className="flex flex-col items-start lg:items-end gap-2">
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--conura-orange)] mb-2">Total Articles</span>
               <div className="text-6xl font-black text-foreground leading-none tracking-tighter">248</div>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 pt-20 pb-40 sm:px-8 lg:px-12">
        {/* Featured in Category */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-2 w-2 rounded-full bg-[var(--conura-sea)] animate-pulse" />
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Featured Highlight</h2>
          </div>
          
          <Card className="group cursor-pointer overflow-hidden rounded-[3rem] border border-border bg-card shadow-lg hover:shadow-2xl hover:border-[var(--conura-sea)]/30 transition-all duration-500 lg:flex min-h-[500px]">
            <div className="lg:w-7/12 relative bg-secondary overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center">
                  <Atom size={200} weight="duotone" className="text-foreground/5 group-hover:text-[var(--conura-sea)]/20 transition-all duration-700 group-hover:rotate-12" />
               </div>
               <div className="absolute bottom-12 left-12 right-12">
                 <Badge className="bg-background/90 backdrop-blur-xl text-foreground border border-white/10 rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-widest mb-6 w-fit shadow-xl">
                    Must Read
                 </Badge>
               </div>
            </div>
            
            <CardContent className="lg:w-5/12 p-12 lg:p-16 flex flex-col justify-center bg-card relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tight mb-8 group-hover:text-[var(--conura-sea)] transition-colors">
                Гравитационные волны открывают новые тайны чёрных дыр
              </h3>
              <p className="text-xl text-muted-foreground font-semibold mb-12 leading-relaxed">
                Последние данные с детекторов LIGO и Virgo указывают на существование нового класса чёрных дыр промежуточной массы.
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                        <User size={16} weight="duotone" />
                    </div>
                    <div>
                        <div className="text-xs font-black text-foreground">П. Смирнов</div>
                        <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Science Editor</div>
                    </div>
                </div>
                
                <div className="h-14 w-14 rounded-full bg-foreground text-background flex items-center justify-center group-hover:bg-[var(--conura-sea)] transition-all shadow-xl">
                   <ArrowRight size={20} weight="bold" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category List */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="group cursor-pointer overflow-hidden rounded-[2.5rem] border border-border bg-card transition-all duration-500 hover:border-[var(--conura-sea)]/30 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <span className="text-[var(--conura-orange)]">18 ФЕВ 2026</span>
                    </div>
                    <Atom size={20} weight="duotone" className="text-muted-foreground group-hover:text-[var(--conura-sea)] transition-colors" />
                </div>
                
                <h3 className="text-xl font-black leading-tight mb-4 group-hover:text-[var(--conura-sea)] transition-colors">
                  Симметрия CPT: новые эксперименты подтверждают теорию
                </h3>
                
                <p className="text-muted-foreground font-semibold leading-relaxed line-clamp-2 mb-8 flex-1">
                  Учёные из ЦЕРН провели самое точное измерение времени жизни антипротонов, и результаты поражают воображение...
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-border group-hover:border-[var(--conura-sea)]/10 transition-colors mt-auto">
                  <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">8 min read</div>
                  <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-foreground group-hover:bg-[var(--conura-sea)] group-hover:text-white transition-all">
                      <ArrowRight size={14} weight="bold" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
