"use client";

import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  ArrowRight,
  Flask,
  TrendUp,
  TwitterLogo,
  LinkedinLogo
} from "@phosphor-icons/react";

const authors = [
  {
    id: "1",
    name: "Дмитрий Иванов",
    title: "Физик-теоретик, доктор наук",
    bio: "Исследую квантовую механику и теорию струн в MIT. Более 15 лет академического опыта.",
    specialties: ["Квантовая физика", "Астрофизика"],
    stats: { articles: 24, followers: "8.2k" }
  },
  {
    id: "2",
    name: "Анна Петрова",
    title: "Биотехнолог, PhD",
    bio: "Специалист по генной инженерии и синтетической биологии. Ведущий исследователь BioCore.",
    specialties: ["Биология", "Генетика", "CRISPR"],
    stats: { articles: 18, followers: "5.4k" }
  },
  {
    id: "3",
    name: "Карл Смирнов",
    title: "AI Researcher",
    bio: "Разработчик нейросетевых архитектур для анализа больших данных в науке.",
    specialties: ["Искусственный интеллект", "Data Science"],
    stats: { articles: 32, followers: "12k" }
  },
  {
    id: "4",
    name: "София Орлова",
    title: "Астрофизик",
    bio: "Изучаю экзопланеты и возможность жизни за пределами Солнечной системы.",
    specialties: ["Астрономия", "Космология"],
    stats: { articles: 15, followers: "9.1k" }
  },
  {
    id: "5",
    name: "Марк Вебер",
    title: "Нанотехнолог",
    bio: "Работаю над созданием новых материалов с программируемыми свойствами.",
    specialties: ["Материаловедение", "Нанотехнологии"],
    stats: { articles: 11, followers: "3.5k" }
  },
  {
    id: "6",
    name: "Елена Чжан",
    title: "Нейробиолог",
    bio: "Исследую механизмы памяти и нейропластичности мозга.",
    specialties: ["Нейронауки", "Когнитивистика"],
    stats: { articles: 27, followers: "6.8k" }
  }
];

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto max-w-7xl px-6 pt-12 pb-40 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-20">
          <div className="text-[var(--conura-sea)] font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3">
            <div className="h-[1px] w-8 bg-[var(--conura-sea)]" />
            Our Minds
          </div>
          <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl leading-none mb-8 text-foreground">
            Авторы <span className="text-[var(--conura-orange)] italic relative">
              Inventum
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--conura-sea)] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="max-w-2xl text-xl sm:text-2xl text-muted-foreground font-semibold leading-relaxed border-l-4 border-[var(--conura-sea)] pl-8">
            Ведущие эксперты, учёные и исследователи, которые делают сложные открытия понятными.
          </p>
        </div>

        {/* Authors List */}
        <div className="flex flex-col gap-4">
          {authors.map((author, index) => (
            <div 
                key={author.id} 
                className="group relative rounded-[2rem] border border-border bg-card p-6 sm:p-8 transition-all duration-500 hover:border-[var(--conura-sea)]/30 hover:shadow-xl hover:scale-[1.01]"
            >
              <Link href={`/authors/${author.id}`} className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                
                {/* Avatar Section */}
                <div className="flex items-center gap-6 shrink-0">
                    <div className="text-4xl font-black text-border group-hover:text-[var(--conura-sea)]/20 transition-colors w-12 text-center hidden sm:block">
                        {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="relative group/avatar">
                        <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-[1.5rem] bg-secondary flex items-center justify-center overflow-hidden border border-border transition-transform duration-500 group-hover:rotate-3 shadow-lg">
                        <User size={40} weight="duotone" className="text-foreground/20 group-hover:text-[var(--conura-sea)] transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-black leading-none group-hover:text-[var(--conura-sea)] transition-colors">
                            {author.name}
                        </h3>
                        <div className="h-1 w-1 rounded-full bg-[var(--conura-orange)]" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            {author.title}
                        </span>
                    </div>
                    
                    <p className="text-muted-foreground font-semibold leading-relaxed line-clamp-2 max-w-2xl mb-4">
                        {author.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        {author.specialties.map(spec => (
                        <Badge key={spec} variant="secondary" className="rounded-lg px-2.5 py-1 text-[9px] font-black uppercase tracking-wider border border-border bg-transparent group-hover:bg-secondary transition-colors">
                            {spec}
                        </Badge>
                        ))}
                    </div>
                </div>

                {/* Stats & Action Section */}
                <div className="flex items-center gap-8 shrink-0 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 border-border pt-6 lg:pt-0">
                    <div className="flex gap-8">
                        <div>
                            <div className="text-2xl font-black text-foreground text-center">{author.stats.articles}</div>
                            <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider text-center">Pubs</div>
                        </div>
                        <div>
                             <div className="text-2xl font-black text-foreground text-center">{author.stats.followers}</div>
                             <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider text-center">Subs</div>
                        </div>
                    </div>

                    <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center text-foreground group-hover:bg-[var(--conura-sea)] group-hover:text-white transition-all shadow-md group-hover:shadow-[var(--conura-sea)]/30">
                        <ArrowRight size={20} weight="bold" />
                    </div>
                </div>

              </Link>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
