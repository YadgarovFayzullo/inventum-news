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
        className="fixed top-0 left-0 h-1 bg-[var(--conura-orange)] z-[60] transition-all duration-300" 
        style={{ width: `${readingProgress}%` }}
      />
      
      <Header />
      
      <main className="relative mx-auto max-w-7xl px-6 pt-12 pb-40 sm:px-8 lg:px-12">
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
                <div className="flex items-center gap-4 mb-8">
                  <Badge className="bg-[var(--conura-sea)]/10 text-[var(--conura-sea)] border-none rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest">
                    {article.category}
                  </Badge>
                  <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">{article.date}</span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tighter text-foreground mb-12">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-border">
                  <Link href="/authors/1" className="group/author flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center text-foreground border border-border group-hover/author:bg-[var(--conura-sea)] group-hover/author:text-background transition-colors">
                      <User size={24} weight="duotone" />
                    </div>
                    <div>
                      <div className="font-black text-lg text-foreground leading-tight group-hover/author:text-[var(--conura-sea)] transition-colors">{article.author}</div>
                      <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">{article.authorRole}</div>
                    </div>
                  </Link>
                  
                  <div className="flex items-center gap-8 ml-auto">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
                      <Clock size={16} weight="duotone" className="text-[var(--conura-orange)]" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
                      <Eye size={16} weight="duotone" className="text-[var(--conura-sea)]" />
                      {article.views}
                    </div>
                  </div>
                </div>
              </header>

              {/* Leading Text */}
              <div className="text-2xl sm:text-3xl text-foreground font-black leading-tight mb-12 relative">
                <span className="absolute -left-6 top-0 text-[var(--conura-orange)] opacity-50">/</span>
                {article.description}
              </div>

              {/* Article content */}
              <div className="prose prose-lg max-w-none text-muted-foreground font-medium 
                prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground
                prose-p:leading-relaxed prose-p:text-lg
                prose-strong:text-foreground prose-strong:font-black
                prose-a:text-[var(--conura-sea)] prose-a:font-bold prose-a:no-underline hover:prose-a:text-[var(--conura-orange)] hover:prose-a:underline
                selection:bg-[var(--conura-sea)]/20 selection:text-foreground">
                
                <p className="text-xl text-foreground leading-relaxed mb-8 drop-cap">
                  Квантовые вычисления долгое время оставались в области теоретических изысканий, однако последние результаты команды физиков под руководством доктора Рейчел Чен показывают, что индустрия подошла к критической точке. Новый процессор «Condor», обладающий 1121 кубитом, продемонстрировал уровень когерентности, ранее считавшийся недостижимым.
                </p>
                
                <h2 className="text-3xl sm:text-4xl text-foreground mt-16 mb-8">Укрощение квантового шума</h2>
                <p className="mb-8">
                  Основной проблемой масштабирования всегда был квантовый шум — внешние помехи, разрушающие хрупкое состояние суперпозиции. В «Condor» инженерам удалось интегрировать новую систему активного подавления эха на уровне аппаратных вентилей.
                </p>
                
                {/* Visual Accent Layer */}
                <div className="my-16 p-10 sm:p-12 rounded-[2.5rem] bg-secondary border border-border relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--conura-sea)]/5 rounded-full blur-3xl -z-0" />
                  <Quotes size={80} weight="fill" className="absolute top-8 left-8 text-foreground/5" />
                  <p className="text-2xl sm:text-3xl font-serif italic text-foreground leading-tight relative z-10 mb-8">
                    «Мы больше не спрашиваем, возможен ли квантовый переход. Мы замеряем скорость, с которой он изменит архитектуру мировой сети.»
                  </p>
                  <div className="font-black text-[10px] uppercase tracking-[0.2em] text-[var(--conura-sea)] flex items-center gap-2">
                    <div className="h-[1px] w-8 bg-[var(--conura-sea)]" />
                    Профессор Стивен Вайнберг
                  </div>
                </div>

                <p className="mb-8 text-lg font-bold border-l-4 border-[var(--conura-orange)] pl-6 py-2 text-foreground">
                  Интересный факт: При охлаждении процессора Condor до сверхнизких температур потребление энергии снижается на 40% по сравнению с предыдущими итерациями.
                </p>

                <p className="mb-8">
                  Помимо увеличения количества кубитов, команда сфокусировалась на качестве квантовых логических операций. Вероятность ошибки в двухкубитных вентилях была снижена до рекордных 0.05%, что позволяет выполнять сложные алгоритмы без необходимости в массивной коррекции ошибок.
                </p>
              </div>

              {/* Interactions Footer */}
              <footer className="mt-20 pt-10 border-t border-border">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex gap-4">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-border hover:bg-secondary hover:text-[var(--conura-sea)] gap-3 font-bold text-base transition-all">
                      <HandsClapping size={22} weight="duotone" />
                      1.2K
                    </Button>
                    <Button variant="outline" className="h-14 px-8 rounded-2xl border-border hover:bg-secondary gap-3 font-bold text-base transition-all">
                      <ChatCircleText size={22} weight="duotone" />
                      48
                    </Button>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="secondary" size="icon" className="h-14 w-14 rounded-2xl hover:bg-[var(--conura-sea)] hover:text-white transition-all">
                      <ShareNetwork size={22} weight="bold" />
                    </Button>
                    <Button variant="secondary" size="icon" className="h-14 w-14 rounded-2xl hover:text-[var(--conura-orange)] transition-all">
                      <BookmarkSimple size={22} weight="bold" />
                    </Button>
                  </div>
                </div>
              </footer>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-80 space-y-12 shrink-0 h-fit sticky top-28">
            <div className="p-8 rounded-[2rem] bg-card border border-border shadow-lg">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-8">Автор материала</h3>
              <Link href="/authors/1" className="flex flex-col items-center text-center group/sideauthor">
                <div className="h-28 w-28 rounded-[2rem] bg-secondary flex items-center justify-center text-foreground mb-6 transition-transform duration-500 group-hover/sideauthor:scale-110 group-hover/sideauthor:rotate-3">
                  <User size={64} weight="duotone" />
                </div>
                <div className="font-black text-2xl mb-2 text-foreground group-hover/sideauthor:text-[var(--conura-sea)] transition-colors">{article.author}</div>
                <p className="text-sm text-muted-foreground font-semibold mb-8 leading-relaxed">Специализируется на квантовой физике и высоких технологиях.</p>
                <Button className="w-full h-12 rounded-xl font-black bg-foreground text-background hover:bg-[var(--conura-sea)] transition-all uppercase tracking-widest text-[10px]">Подписаться</Button>
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
