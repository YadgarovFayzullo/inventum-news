"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  ShareNetwork,
  BookmarkSimple,
  Quotes,
  ChatCircleText,
  HandsClapping,
  Eye
} from "@phosphor-icons/react";

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;
      setReadingProgress(progress);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const article = {
    title: "Квантовые компьютеры преодолели барьер в 1000 кубитов",
    category: "Физика",
    author: "Дмитрий Иванов",
    authorRole: "Старший научный сотрудник MIT",
    date: "18 февраля 2026",
    readTime: "8 минут",
    views: "12,400",
    description: "Исследователи из MIT продемонстрировали стабильную работу процессора Condor, что открывает новую эру в прикладных квантовых вычислениях и криптографии."
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-300" 
        style={{ width: `${readingProgress}%` }}
      />
      
      <Header />
      
      <main className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary/60 mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Главная</Link>
              <span>/</span>
              <Link href="/articles" className="hover:text-primary transition-colors">Архив</Link>
              <span>/</span>
              <span className="text-muted-foreground">{article.category}</span>
            </nav>

            <article>
              <header className="mb-12">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none rounded-xl px-4 py-2 text-xs font-black uppercase tracking-widest mb-8">
                  {article.category}
                </Badge>
                
                <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl mb-10">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-8 py-8 border-y border-primary/5">
                  <Link href="/authors/1" className="group/author flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-primary/5 shadow-sm group-hover/author:bg-primary/10 transition-colors">
                      <User size={28} weight="duotone" />
                    </div>
                    <div>
                      <div className="font-black text-lg text-foreground leading-tight group-hover/author:text-primary transition-colors">{article.author}</div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{article.authorRole}</div>
                    </div>
                  </Link>
                  
                  <div className="flex items-center gap-6 ml-auto">
                    <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                      <Clock size={20} weight="bold" className="text-primary/40" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                      <Eye size={20} weight="bold" className="text-primary/40" />
                      {article.views}
                    </div>
                  </div>
                </div>
              </header>

              {/* Leading Text */}
              <div className="text-2xl text-muted-foreground font-medium italic leading-relaxed mb-12 border-l-8 border-primary/20 pl-8 py-2">
                {article.description}
              </div>

              {/* Article content */}
              <div className="prose prose-purple max-w-none text-foreground/90 leading-[1.8] font-medium text-lg">
                <p className="text-xl leading-relaxed mb-8">
                  Квантовые вычисления долгое время оставались в области теоретических изысканий, однако последние результаты команды физиков под руководством доктора Рейчел Чен показывают, что индустрия подошла к критической точке. Новый процессор «Condor», обладающий 1121 кубитом, продемонстрировал уровень когерентности, ранее считавшийся недостижимым.
                </p>
                
                <h2 className="text-3xl font-black tracking-tight mt-16 mb-8 text-foreground">Укрощение квантового шума</h2>
                <p className="mb-8">
                  Основной проблемой масштабирования всегда был квантовый шум — внешние помехи, разрушающие хрупкое состояние суперпозиции. В «Condor» инженерам удалось интегрировать новую систему активного подавления эха на уровне аппаратных вентилей.
                </p>
                
                {/* Visual Accent Layer */}
                <div className="my-16 p-12 rounded-[3rem] bg-secondary/50 border border-primary/10 relative overflow-hidden">
                  <Quotes size={120} weight="fill" className="absolute -top-6 -left-6 text-primary/5" />
                  <p className="text-3xl font-serif italic text-primary leading-tight relative z-10">
                    «Мы больше не спрашиваем, возможен ли квантовый переход. Мы замеряем скорость, с которой он изменит архитектуру мировой сети.»
                  </p>
                  <div className="mt-8 font-black text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    — Профессор Стивен Вайнберг
                  </div>
                </div>

                <p className="mb-8 font-serif text-xl border-y border-primary/5 py-10 my-12 bg-primary/[0.02] px-8 rounded-3xl">
                  Интересный факт: При охлаждении процессора Condor до сверхнизких температур потребление энергии снижается на 40% по сравнению с предыдущими итерациями.
                </p>

                <p className="mb-8">
                  Помимо увеличения количества кубитов, команда сфокусировалась на качестве квантовых логических операций. Вероятность ошибки в двухкубитных вентилях была снижена до рекордных 0.05%, что позволяет выполнять сложные алгоритмы без необходимости в массивной коррекции ошибок.
                </p>
              </div>

              {/* Interactions Footer */}
              <footer className="mt-20 pt-10 border-t border-primary/10">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-primary/10 hover:bg-primary/5 gap-3 font-bold">
                      <HandsClapping size={22} weight="duotone" className="text-primary" />
                      1.2K Аплодисментов
                    </Button>
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-primary/10 hover:bg-primary/5 gap-3 font-bold">
                      <ChatCircleText size={22} weight="duotone" className="text-primary" />
                      48 Комментариев
                    </Button>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="secondary" size="icon" className="h-14 w-14 rounded-2xl">
                      <ShareNetwork size={22} weight="bold" />
                    </Button>
                    <Button variant="secondary" size="icon" className="h-14 w-14 rounded-2xl">
                      <BookmarkSimple size={22} weight="bold" />
                    </Button>
                  </div>
                </div>
              </footer>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-80 space-y-12 shrink-0 h-fit sticky top-28">
            <div className="p-8 rounded-[2rem] bg-secondary/40 border border-primary/5">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-6">Автор материала</h3>
              <Link href="/authors/1" className="flex flex-col items-center text-center group/sideauthor">
                <div className="h-24 w-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-4 border border-primary/10 group-hover/sideauthor:scale-105 transition-transform">
                  <User size={48} weight="duotone" />
                </div>
                <div className="font-black text-xl mb-1 group-hover/sideauthor:text-primary transition-colors">{article.author}</div>
                <p className="text-sm text-muted-foreground font-medium mb-6">Специализируется на квантовой физике и высоких технологиях.</p>
                <Button variant="secondary" className="w-full rounded-xl font-bold group-hover/sideauthor:bg-primary group-hover/sideauthor:text-primary-foreground transition-all">Подписаться</Button>
              </Link>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-6">Читайте также</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <Link key={i} href="#" className="group flex flex-col gap-2">
                    <div className="text-xs font-black text-primary/60 uppercase tracking-widest">Будущее ИИ</div>
                    <h4 className="font-bold leading-tight group-hover:text-primary transition-colors">Нейронные сети начали понимать юмор?</h4>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">15 мин назад</div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
