"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Eye,
    UsersThree,
    Article,
    GlobeHemisphereWest,
    Quotes,
    CaretLeft,
    CaretRight
} from "@phosphor-icons/react";

const stats = [
    {
        icon: Article,
        value: 1200,
        suffix: "+",
        label: "Научных статей",
        description: "Рецензированные публикации",
    },
    {
        icon: UsersThree,
        value: 80,
        suffix: "+",
        label: "Авторов",
        description: "Учёные и исследователи",
    },
    {
        icon: Eye,
        value: 2,
        suffix: "M+",
        label: "Просмотров",
        description: "Ежемесячная аудитория",
    },
    {
        icon: GlobeHemisphereWest,
        value: 35,
        suffix: "+",
        label: "Стран",
        description: "География читателей",
    },
];

const testimonials = [
    {
        quote: "Inventum — это редкий пример издания, где научная точность сочетается с доступным изложением. Читаю каждый выпуск.",
        author: "Проф. Елена Кузнецова",
        role: "Доктор физ.-мат. наук, МГУ",
    },
    {
        quote: "Наконец-то платформа, где можно найти актуальные исследования без необходимости продираться через академический жаргон.",
        author: "Алексей Морозов",
        role: "Научный журналист",
    },
    {
        quote: "Мы регулярно ссылаемся на материалы Inventum в наших лекциях. Качество подачи на высшем уровне.",
        author: "Д-р Марина Соколова",
        role: "Нейробиолог, ИМБ РАН",
    },
];

export function About() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    return (
        <section id="about" className="py-16 sm:py-28 bg-background relative overflow-hidden" ref={containerRef}>
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--conura-sea)]/5 rounded-full blur-[120px] -z-10" />

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                {/* Animated Stats Section */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12 sm:mb-28">
                    {stats.map((stat, i) => (
                        <StatCard key={stat.label} stat={stat} index={i} isInView={isInView} />
                    ))}
                </div>

                {/* Main About Content + Interactive Testimonials */}
                <div className="grid gap-20 lg:grid-cols-2 lg:items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="text-[var(--conura-sea)] font-black uppercase tracking-[0.4em] text-[10px] mb-8 flex items-center gap-3">
                            <div className="h-[1px] w-8 bg-[var(--conura-sea)]" />
                            Миссия и ценности
                        </div>
                        <h2 className="text-5xl font-black tracking-tight sm:text-7xl mb-10 leading-none">
                            Информационный <span className="text-[var(--conura-sea)] italic">мост</span> науки
                        </h2>
                        <div className="space-y-8 text-xl text-muted-foreground font-semibold leading-relaxed">
                            <p>
                                <strong className="text-foreground">Inventum</strong> — это не просто газета. Это уникальная экосистема, где сложнейшие открытия завтрашнего дня становятся понятными уже сегодня.
                            </p>
                            <p>
                                Мы убеждены: будущее принадлежит тем, кто понимает механизмы мира. Поэтому каждая наша статья проходит строгий двойной фильтр верификации.
                            </p>
                        </div>
                    </motion.div>

                    {/* Interactive Testimonial Slider */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="relative p-1 rounded-[4.5rem] bg-gradient-to-br from-foreground/10 to-transparent border border-foreground/5 shadow-2xl"
                    >
                        <div className="bg-card rounded-[4.4rem] p-6 sm:p-12 md:p-16 relative overflow-hidden h-[500px] flex flex-col justify-center">
                            <Quotes size={100} weight="fill" className="absolute top-8 left-8 text-foreground/5" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTestimonial}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative z-10"
                                >
                                    <p className="text-2xl sm:text-4xl font-serif italic text-foreground leading-snug mb-12">
                                        «{testimonials[activeTestimonial].quote}»
                                    </p>

                                    <div className="flex items-center gap-6">
                                        <div className="h-20 w-20 rounded-[1.8rem] bg-secondary flex items-center justify-center text-foreground font-black text-2xl border border-border">
                                            {testimonials[activeTestimonial].author.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-foreground leading-tight">
                                                {testimonials[activeTestimonial].author}
                                            </div>
                                            <div className="text-xs font-black text-[var(--conura-sea)] uppercase tracking-[0.3em] mt-2">
                                                {testimonials[activeTestimonial].role}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Slider Controls */}
                            <div className="absolute bottom-12 right-12 flex gap-4">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-14 w-14 rounded-2xl border-border hover:bg-secondary hover:text-foreground text-foreground transition-all active:scale-95"
                                    onClick={() => setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                >
                                    <CaretLeft size={24} weight="bold" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-14 w-14 rounded-2xl border-border hover:bg-secondary hover:text-foreground text-foreground transition-all active:scale-95"
                                    onClick={() => setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                >
                                    <CaretRight size={24} weight="bold" />
                                </Button>
                            </div>

                            {/* Slide Indicators */}
                            <div className="absolute bottom-16 left-16 flex gap-2">
                                {testimonials.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${activeTestimonial === i ? 'w-10 bg-[var(--conura-sea)]' : 'w-3 bg-foreground/10'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function StatCard({ stat, index, isInView }: { stat: any, index: number, isInView: boolean }) {
    const Icon = stat.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group p-6 sm:p-10 rounded-[3.5rem] bg-card border border-border hover:border-[var(--conura-sea)]/30 hover:scale-[1.02] transition-all duration-500 shadow-sm"
        >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-secondary text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                <Icon size={32} weight="duotone" />
            </div>

            <div className="flex items-baseline gap-1">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    className="text-5xl font-black tracking-tighter"
                >
                    {stat.value}{stat.suffix}
                </motion.div>
            </div>

            <div className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-[var(--conura-sea)]">
                {stat.label}
            </div>
            <div className="mt-2 text-sm font-semibold text-muted-foreground leading-relaxed">
                {stat.description}
            </div>

            <div className="mt-8 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={isInView ? { x: "0%" } : {}}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "circOut" }}
                    className="h-full bg-foreground rounded-full"
                />
            </div>
        </motion.div>
    );
}
