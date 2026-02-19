"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MagnifyingGlass, 
  Funnel, 
  Clock, 
  User, 
  ArrowRight,
  Atom
} from "@phosphor-icons/react";

const allArticles = [
  {
    id: "1",
    title: "Квантовые компьютеры преодолели барьер в 1000 кубитов",
    excerpt: "Исследователи из MIT продемонстрировали стабильную работу процессора Condor.",
    category: "Физика",
    author: "Д. Иванов",
    readTime: "8 мин",
    date: "18 фев 2026",
    image: "purple"
  },
  {
    id: "2",
    title: "Обнаружен новый механизм регенерации нейронов",
    excerpt: "Белок NeuroCap способен запускать восстановление нейронных связей.",
    category: "Биология",
    author: "А. Петрова",
    readTime: "12 мин",
    date: "17 фев 2026",
    image: "blue"
  },
  {
    id: "3",
    title: "ИИ в диагностике редких генетических заболеваний",
    excerpt: "Новая нейросеть DeepGenome анализирует мутации в 10 раз быстрее экспертов.",
    category: "Технологии",
    author: "К. Смирнов",
    readTime: "10 мин",
    date: "16 фев 2026",
    image: "violet"
  },
  {
    id: "4",
    title: "Будущее термоядерного синтеза: прорыв в удерживании плазмы",
    excerpt: "Эксперимент на токамаке JET показал рекордное время стабильности плазмы.",
    category: "Физика",
    author: "С. Орлов",
    readTime: "15 мин",
    date: "15 фев 2026",
    image: "indigo"
  },
];

const categories = ["Все", "Физика", "Биология", "Технологии", "Астрономия", "Медицина"];

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto max-w-7xl px-6 pt-12 pb-40 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-20">
          <div className="text-[var(--conura-sea)] font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3">
            <div className="h-[1px] w-8 bg-[var(--conura-sea)]" />
            Knowledge Base
          </div>
          <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl leading-none mb-8 text-foreground">
            Архив <span className="text-[var(--conura-orange)] italic relative">
              знаний
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--conura-sea)] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="max-w-2xl text-xl sm:text-2xl text-muted-foreground font-semibold leading-relaxed border-l-4 border-[var(--conura-sea)] pl-8">
            Исследуйте нашу базу фундаментальных открытий. <br />
            <span className="text-foreground">От квантовой физики до биотехнологий.</span>
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between sticky top-4 z-40 bg-background/80 backdrop-blur-xl p-4 -mx-4 rounded-[2rem] border border-white/5 shadow-2xl shadow-black/5">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant="ghost"
                onClick={() => setActiveCategory(cat)}
                className={`h-12 rounded-xl px-6 font-black text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-foreground text-background shadow-lg scale-105" 
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
          
          <div className="relative w-full lg:max-w-md group">
            <MagnifyingGlass 
              size={24} 
              weight="duotone"
              className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-[var(--conura-sea)] transition-colors" 
            />
            <Input 
              placeholder="Поиск по публикациям..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-16 rounded-2xl pl-16 pr-6 border-2 border-secondary bg-secondary/30 text-lg font-bold placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-[var(--conura-sea)] transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allArticles.map((article) => (
            <Card key={article.id} className="group cursor-pointer overflow-hidden rounded-[2.5rem] border border-border bg-card transition-all duration-500 hover:border-[var(--conura-sea)]/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2">
              <Link href={`/articles/${article.id}`} className="flex flex-col h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-secondary">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--conura-sea)]/5 to-[var(--conura-orange)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6 z-10">
                    <Badge className="bg-background/80 backdrop-blur-md text-foreground border border-white/10 rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                     <Atom size={80} weight="duotone" className="text-foreground/10 group-hover:text-[var(--conura-sea)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                  </div>
                </div>

                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6 text-xs font-black uppercase tracking-widest text-muted-foreground">
                     <span className="text-[var(--conura-orange)]">{article.date}</span>
                     <span className="w-1 h-1 rounded-full bg-border" />
                     <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black leading-[1.1] mb-4 group-hover:text-[var(--conura-sea)] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-semibold leading-relaxed line-clamp-2 mb-8 flex-1">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-border group-hover:border-[var(--conura-sea)]/20 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                      <User size={16} weight="duotone" className="text-[var(--conura-sea)]" />
                      {article.author}
                    </div>
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-foreground group-hover:bg-[var(--conura-sea)] group-hover:text-white transition-all">
                       <ArrowRight size={14} weight="bold" />
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-20 flex justify-center">
          <Button variant="outline" size="lg" className="rounded-2xl px-12 h-14 font-black border-primary/10 hover:bg-primary hover:text-white transition-all">
            Загрузить ещё
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
