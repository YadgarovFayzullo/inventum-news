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
      
      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Архив <span className="text-primary italic">материалов</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground font-medium">
            Исследуйте нашу базу знаний: от глубоких аналитических статей до коротких новостей науки.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "secondary"}
                onClick={() => setActiveCategory(cat)}
                className="rounded-xl px-6 font-bold"
              >
                {cat}
              </Button>
            ))}
          </div>
          
          <div className="relative w-full lg:max-w-xs">
            <MagnifyingGlass 
              size={20} 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" 
            />
            <Input 
              placeholder="Поиск по статьям..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 rounded-2xl pl-12 border-primary/10 bg-secondary/30 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allArticles.map((article) => (
            <Card key={article.id} className="group overflow-hidden rounded-[2rem] border-primary/5 bg-background premium-card">
              <Link href={`/articles/${article.id}`}>
                <div className="aspect-[16/10] bg-secondary flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <Atom size={64} weight="duotone" className="text-primary/20 group-hover:text-primary/40 transition-all group-hover:scale-110" />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none rounded-lg px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                      {article.category}
                    </Badge>
                    <span className="text-xs font-bold text-muted-foreground">{article.date}</span>
                  </div>
                  
                  <h3 className="mt-4 text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2 font-medium">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-6 flex items-center justify-between border-t border-primary/5 pt-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                      <User size={14} weight="bold" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                      <Clock size={14} weight="bold" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-2 text-sm font-black text-primary group-hover:gap-4 transition-all uppercase tracking-widest">
                    Читать далее
                    <ArrowRight size={16} weight="bold" />
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
