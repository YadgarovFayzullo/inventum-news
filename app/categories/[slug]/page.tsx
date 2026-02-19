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
      <div className="w-full bg-secondary/30 border-b border-primary/5 pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Link href="/articles" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary/60 hover:text-primary mb-10 transition-colors">
            <ArrowLeft size={16} weight="bold" />
            Все разделы
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-primary text-primary-foreground shadow-2xl shadow-primary/30 mb-8">
                <Atom size={36} weight="duotone" />
              </div>
              <h1 className="text-5xl font-black tracking-tight sm:text-7xl mb-6">
                {categoryName}
              </h1>
              <p className="text-xl text-muted-foreground font-medium max-w-lg leading-relaxed">
                Исследуем фундаментальные законы Вселенной: от элементарных частиц до структуры пространства-времени.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="text-right">
                <div className="text-4xl font-black text-primary leading-none">248</div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-2">Материалов в разделе</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        {/* Featured in Category */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <Sparkle size={24} weight="fill" className="text-primary" />
            <h2 className="text-2xl font-black tracking-tight uppercase tracking-widest text-sm">Важное в этом разделе</h2>
          </div>
          
          <Card className="group cursor-pointer overflow-hidden rounded-[2.5rem] border-primary/5 bg-background premium-card lg:flex">
            <div className="lg:w-1/2 aspect-[16/10] bg-secondary flex items-center justify-center">
              <Atom size={120} weight="duotone" className="text-primary/10 group-hover:scale-110 transition-transform duration-700" />
            </div>
            <CardContent className="lg:w-1/2 p-10 flex flex-col justify-center">
              <Badge className="bg-primary/10 text-primary w-fit rounded-lg px-3 py-1 text-[10px] font-black uppercase mb-6">Главное открытие</Badge>
              <h3 className="text-3xl font-black leading-tight sm:text-4xl mb-6 group-hover:text-primary transition-colors">
                Гравитационные волны открывают новые тайны чёрных дыр
              </h3>
              <p className="text-lg text-muted-foreground font-medium mb-8 line-clamp-3">
                Последние данные с детекторов LIGO и Virgo указывают на существование нового класса чёрных дыр промежуточной массы, которые ранее считались невозможными.
              </p>
              <div className="flex items-center gap-6 mt-auto">
                <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                  <User size={18} weight="bold" />
                  П. Смирнов
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                  <Clock size={18} weight="bold" />
                  12 мин
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category List */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="group cursor-pointer overflow-hidden rounded-[2rem] border-primary/5 bg-background premium-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-muted-foreground">18 ФЕВ 2026</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors mb-4">
                  Симметрия CPT: новые эксперименты подтверждают теорию
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 font-medium mb-6">
                  Учёные из ЦЕРН провели самое точное измерение времени жизни антипротонов...
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-primary/5">
                  <div className="text-xs font-bold text-muted-foreground">8 мин на чтение</div>
                  <ArrowRight size={20} weight="bold" className="text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
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
