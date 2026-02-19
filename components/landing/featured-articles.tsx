"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Clock,
    ArrowRight,
    User,
    Atom as AtomIcon,
    Flask as BeakerIcon
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

const featuredArticles = [
    {
        id: 1,
        title: "Квантовое превосходство: Новый рубеж достигнут",
        excerpt: "Исследователи из Google и NASA объявили о создании процессора, способного выполнять вычисления, недоступные классическим суперкомпьютерам.",
        author: "Д-р Артур Шмидт",
        date: "18 Фев 2026",
        readTime: "8 мин",
        category: "Физика",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
        accent: "var(--conura-sea)"
    },
    {
        id: 2,
        title: "CRISPR-Cas9: Редактирование жизни в реальном масштабе",
        excerpt: "Новые клинические испытания показывают беспрецедентный успех в лечении генетических заболеваний крови с помощью направленной модификации ДНК.",
        author: "Проф. Мария Кюри",
        date: "15 Фев 2026",
        readTime: "12 мин",
        category: "Биология",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
        accent: "var(--conura-orange)"
    }
];

export function FeaturedArticles() {
    return (
        <section id="featured" className="py-28 bg-background relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[var(--conura-sea)] font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3"
                        >
                            <div className="h-[1px] w-8 bg-[var(--conura-sea)]" />
                            Special Reports
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-foreground">
                            Главные <span className="text-[var(--conura-orange)] italic">материалы</span>
                        </h2>
                    </div>
                    <Link href="/articles" className="group flex items-center gap-4 text-lg font-black hover:text-[var(--conura-sea)] transition-colors">
                        Весь архив
                        <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                            <ArrowRight size={20} weight="bold" />
                        </div>
                    </Link>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {featuredArticles.map((article, i) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <Link href={`/articles/${article.id}`} className="block relative overflow-hidden rounded-[3.5rem] bg-card border border-border transition-all duration-500 hover:border-transparent hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]">

                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    <div className="absolute top-8 left-8">
                                        <Badge className="h-10 px-6 rounded-full bg-background/20 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-[10px]">
                                            {article.category}
                                        </Badge>
                                    </div>

                                    {/* Icon Accent Overlay */}
                                    <div className="absolute bottom-8 right-8">
                                        <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                                            {article.category === "Физика" ? (
                                                <AtomIcon size={32} weight="duotone" />
                                            ) : (
                                                <BeakerIcon size={32} weight="duotone" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-10 md:p-12">
                                    <div className="flex items-center gap-6 mb-8 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <User size={16} weight="duotone" className="text-[var(--conura-sea)]" />
                                            {article.author}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} weight="duotone" className="text-[var(--conura-orange)]" />
                                            {article.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight group-hover:text-[var(--conura-sea)] transition-colors">
                                        {article.title}
                                    </h3>

                                    <p className="text-xl text-muted-foreground font-semibold leading-relaxed mb-10 line-clamp-2">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-foreground">
                                        Читать подробнее
                                        <div className="h-2 w-12 bg-[var(--conura-sea)] rounded-full transition-all group-hover:w-20" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
