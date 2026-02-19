"use client";

import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  ArrowLeft, 
  Clock, 
  ArrowRight,
  TwitterLogo,
  LinkedinLogo,
  Globe,
  Article,
  Users,
  Star,
  Flask,
  TrendUp
} from "@phosphor-icons/react";

export default function AuthorProfilePage({ params }: { params: { id: string } }) {
  // Mock data for the author
  const author = {
    name: "Дмитрий Иванов",
    title: "Физик-теоретик, доктор наук",
    bio: "Исследую квантовую механику и теорию струн в MIT. Более 15 лет академического опыта. Автор бестселлера «За пределами кубитов». Популяризирую науку через глубокую аналитику и простое изложение сложных вещей.",
    specialties: ["Квантовая физика", "Астрофизика", "Криптография"],
    stats: [
      { label: "Публикации", value: "24", detail: "h-index: 12", trend: "+3 в этом году", color: "from-blue-500 to-cyan-500" },
      { label: "Аудитория", value: "8.2k", detail: "Global Reach", trend: "↑ 12%", color: "from-primary to-violet-500" },
      { label: "Цитируемость", value: "1.4k", detail: "i10-index: 18", trend: "Top 5%", color: "from-emerald-500 to-teal-500" },
    ],
    social: [
      { icon: TwitterLogo, href: "#" },
      { icon: LinkedinLogo, href: "#" },
      { icon: Globe, href: "#" },
    ]
  };

  const authorArticles = [
    {
      id: "1",
      title: "Квантовые компьютеры преодолели барьер в 1000 кубитов",
      category: "Физика",
      date: "18 фев 2026",
      readTime: "8 мин",
      excerpt: "Исследователи из MIT продемонстрировали стабильную работу процессора Condor."
    },
    {
      id: "4",
      title: "Будущее термоядерного синтеза: прорыв в удерживании плазмы",
      category: "Физика",
      date: "15 фев 2026",
      readTime: "15 мин",
      excerpt: "Эксперимент на токамаке JET показал рекордное время стабильности плазмы."
    },
    {
      id: "7",
      title: "Теория струн: почему мы всё ещё не нашли подтверждение?",
      category: "Физика",
      date: "02 фев 2026",
      readTime: "22 мин",
      excerpt: "Большой обзор текущего состояния самой амбициозной теории XX века."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        {/* Navigation back */}
        <Link href="/articles" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary/60 hover:text-primary mb-12 transition-colors">
          <ArrowLeft size={16} weight="bold" />
          Назад к архиву
        </Link>

        {/* Professional Stats Dashboard */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {author.stats.map((stat, i) => (
              <div 
                key={stat.label} 
                className="group relative overflow-hidden rounded-[2.5rem] bg-card border border-border p-8 transition-all hover:border-[var(--conura-sea)]/30 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</span>
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${i === 1 ? 'bg-[var(--conura-sea)]/10 text-[var(--conura-sea)]' : 'bg-secondary text-foreground'} text-[10px] font-black`}>
                    <TrendUp size={12} weight="bold" />
                    {stat.trend}
                  </div>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-none">{stat.value}</span>
                </div>

                <div className="space-y-4">
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                        className={`h-full rounded-full ${i === 1 ? 'bg-[var(--conura-sea)]' : 'bg-foreground'}`} 
                        style={{ width: i === 0 ? '75%' : i === 1 ? '55%' : '90%' }} 
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-foreground">{stat.detail}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">Target</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Sidebar: Profile Info */}
          <aside className="lg:w-1/3 xl:w-1/4">
            <div className="sticky top-28 space-y-10">
              <div className="relative group w-fit mx-auto lg:mx-0">
                <div className="h-48 w-48 rounded-[3rem] bg-secondary flex items-center justify-center overflow-hidden border border-border transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <User size={96} weight="duotone" className="text-foreground/20 group-hover:text-[var(--conura-sea)] transition-colors" />
                </div>
                <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-background rounded-2xl flex items-center justify-center text-foreground shadow-xl border border-border group-hover:border-[var(--conura-sea)] transition-colors">
                  <Flask size={32} weight="duotone" className="text-[var(--conura-sea)]" />
                </div>
              </div>

              <div className="mt-8 text-center lg:text-left">
                <h1 className="text-4xl font-black tracking-tighter leading-none mb-3 text-foreground">{author.name}</h1>
                <p className="text-[var(--conura-orange)] font-black uppercase tracking-widest text-[10px]">
                  {author.title}
                </p>
              </div>

              <div className="flex gap-3 justify-center lg:justify-start">
                {author.social.map((soc, i) => {
                  const Icon = soc.icon;
                  return (
                    <a 
                      key={i} 
                      href={soc.href} 
                      className="h-12 w-12 rounded-xl bg-secondary/50 border border-transparent hover:border-border flex items-center justify-center text-foreground hover:bg-background hover:scale-110 transition-all duration-300"
                    >
                      <Icon size={20} weight="duotone" />
                    </a>
                  );
                })}
              </div>

              <p className="text-muted-foreground font-semibold leading-relaxed text-lg text-center lg:text-left">
                {author.bio}
              </p>

              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground text-center lg:text-left">Специализация</h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {author.specialties.map(spec => (
                    <Badge key={spec} variant="secondary" className="rounded-lg px-3 py-1.5 text-[10px] font-black uppercase tracking-wider border border-border bg-transparent hover:bg-secondary">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full h-14 rounded-2xl font-black uppercase tracking-widest text-xs bg-foreground text-background hover:bg-[var(--conura-sea)] transition-all shadow-xl">
                Подписаться на автора
              </Button>
            </div>
          </aside>

          {/* Right Content: Articles Feed */}
          <div className="flex-1">
            <div className="space-y-12">
              <div className="flex items-center justify-between border-b border-primary/5 pb-6">
                <h2 className="text-2xl font-black tracking-tight">Публикации <span className="text-primary/40 italic">({authorArticles.length})</span></h2>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Сортировка: Сначала новые</div>
              </div>

              <div className="grid gap-8">
                {authorArticles.map((article) => (
                  <Card key={article.id} className="group cursor-pointer overflow-hidden rounded-[2.5rem] border border-border bg-card transition-all duration-500 hover:border-[var(--conura-sea)]/30 hover:shadow-lg">
                    <Link href={`/articles/${article.id}`} className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 min-h-[240px] md:min-h-0 relative bg-secondary overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Article size={64} weight="duotone" className="text-foreground/10 group-hover:text-[var(--conura-sea)] transition-colors duration-500 group-hover:scale-110" />
                        </div>
                        <div className="absolute top-4 left-4">
                             <Badge className="bg-background/80 backdrop-blur-md text-foreground border border-white/10 rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest">
                                {article.category}
                             </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                        <div className="mb-6 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            <span>{article.date}</span>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <span>{article.readTime}</span>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl font-black leading-tight group-hover:text-[var(--conura-sea)] transition-colors mb-4">
                          {article.title}
                        </h3>
                        
                        <p className="text-lg text-muted-foreground line-clamp-2 font-semibold mb-8">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-border group-hover:border-[var(--conura-sea)]/10 transition-colors">
                          <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                            Читать статью
                          </div>
                          <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground group-hover:bg-[var(--conura-sea)] group-hover:text-white transition-all">
                             <ArrowRight size={16} weight="bold" />
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="pt-10 flex justify-center">
                <Button variant="outline" className="rounded-2xl h-14 px-12 font-black uppercase tracking-widest border-primary/10 hover:bg-primary/5 transition-all text-xs">
                  Показать все публикации автора
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
