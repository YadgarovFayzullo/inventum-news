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
                className="group relative overflow-hidden rounded-[2.5rem] bg-secondary/30 border border-primary/5 p-8 transition-all hover:bg-secondary/50"
              >
                <div className={`absolute top-0 right-0 h-32 w-32 bg-gradient-to-br ${stat.color} opacity-5 blur-3xl`} />
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/5 text-primary text-[10px] font-black">
                    <TrendUp size={12} weight="bold" />
                    {stat.trend}
                  </div>
                </div>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-5xl font-black tracking-tight text-foreground">{stat.value}</span>
                  <span className="text-xs font-bold text-primary/60 uppercase">{stat.detail}</span>
                </div>

                <div className="space-y-3">
                  <div className="h-1.5 w-full bg-primary/5 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${stat.color} rounded-full`} style={{ width: i === 0 ? '75%' : i === 1 ? '55%' : '90%' }} />
                  </div>
                  <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-muted-foreground/50">
                    <span>Базовый уровень</span>
                    <span>Цель достигнута</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Sidebar: Profile Info */}
          <aside className="lg:w-1/3 xl:w-1/4">
            <div className="sticky top-28 space-y-8">
              <div className="relative group">
                <div className="aspect-square rounded-[3rem] bg-secondary flex items-center justify-center overflow-hidden border-4 border-primary/5 shadow-xl transition-transform duration-500 group-hover:scale-105">
                  <User size={120} weight="duotone" className="text-primary/20" />
                </div>
                <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30 border-4 border-background">
                  <Flask size={32} weight="duotone" />
                </div>
              </div>

              <div className="mt-8">
                <h1 className="text-3xl font-black tracking-tight mb-2">{author.name}</h1>
                <p className="text-primary font-bold uppercase tracking-widest text-[10px] sm:text-xs">
                  {author.title}
                </p>
              </div>

              <div className="flex gap-3">
                {author.social.map((soc, i) => {
                  const Icon = soc.icon;
                  return (
                    <a 
                      key={i} 
                      href={soc.href} 
                      className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Icon size={24} weight="bold" />
                    </a>
                  );
                })}
              </div>

              <p className="text-muted-foreground font-medium leading-relaxed">
                {author.bio}
              </p>

              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">Специализация</h3>
                <div className="flex flex-wrap gap-2">
                  {author.specialties.map(spec => (
                    <Badge key={spec} variant="secondary" className="rounded-xl px-4 py-1.5 text-xs font-bold border-none">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full h-14 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                Подписаться
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
                  <Card key={article.id} className="group cursor-pointer overflow-hidden rounded-[2.5rem] border-primary/5 bg-background premium-card">
                    <Link href={`/articles/${article.id}`} className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 aspect-[16/10] md:aspect-auto bg-secondary flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                        <Article size={64} weight="duotone" className="text-primary/10 group-hover:text-primary/30 transition-all group-hover:scale-110" />
                      </div>
                      <CardContent className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-primary/10 text-primary border-none rounded-lg px-2 py-0.5 text-[9px] font-black uppercase tracking-widest">
                            {article.category}
                          </Badge>
                          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{article.date}</span>
                        </div>
                        
                        <h3 className="text-2xl font-black leading-tight group-hover:text-primary transition-colors mb-4">
                          {article.title}
                        </h3>
                        
                        <p className="text-base text-muted-foreground line-clamp-2 font-medium mb-6">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                            <Clock size={16} weight="bold" />
                            {article.readTime} чтение
                          </div>
                          <div className="flex items-center gap-2 text-sm font-black text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all uppercase tracking-widest">
                            Открыть
                            <ArrowRight size={18} weight="bold" />
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
