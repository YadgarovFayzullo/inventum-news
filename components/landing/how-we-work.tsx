"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import {
    MagnifyingGlass,
    Flask,
    ChatTeardropText,
    Files,
    ShareNetwork,
    CheckCircle
} from "@phosphor-icons/react";

const steps = [
    {
        title: "Исследование журналов",
        description: "Мы вручную фильтруем сотни научных журналов (Nature, Science, Cell), отбирая только те исследования, которые меняют наше представление о мире.",
        icon: MagnifyingGlass,
    },
    {
        title: "Верификация данных",
        description: "Каждый факт проверяется по базе Scopus и Web of Science. Мы работаем напрямую с данными, исключая искажения при пересказе.",
        icon: Flask,
    },
    {
        title: "Интервью с авторами",
        description: "Многие из наших материалов включают эксклюзивные комментарии самих ученых, создавших разработку или совершивших открытие.",
        icon: ChatTeardropText,
    },
    {
        title: "Литературная правка",
        description: "Профессиональные редакторы упаковывают сложный академический язык в захватывающее повествование, доступное каждому.",
        icon: Files,
    },
    {
        title: "Научный дистрибьюшн",
        description: "Мы доставляем знания через все каналы: от веба до мессенджеров, обеспечивая мгновенный доступ к актуальной науке.",
        icon: ShareNetwork,
    }
];

export function HowWeWork() {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef(null);

    const progressHeight = (activeStep / (steps.length - 1)) * 100;

    return (
        <section className="py-28 bg-secondary/30 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10" ref={containerRef}>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
                    <div className="max-w-2xl">
                        <div className="text-[var(--conura-orange)] font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3">
                            <div className="h-[1px] w-8 bg-[var(--conura-orange)]" />
                            Editorial Pipeline
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-foreground">
                            Как создается <span className="text-[var(--conura-sea)] italic">Inventum</span>
                        </h2>
                    </div>
                    <p className="text-xl text-muted-foreground font-semibold max-w-sm border-l-2 border-[var(--conura-orange)]/20 pl-8 leading-relaxed">
                        Наш процесс исключает возможность ошибки или искажения научной истины.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Timeline Steps */}
                    <div className="lg:col-span-6 relative pl-12 md:pl-16">
                        {/* Vertical Progress Bar */}
                        <div className="absolute left-4 md:left-6 top-2 bottom-2 w-[2px] bg-foreground/5">
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-foreground"
                                animate={{ height: `${progressHeight}%` }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <div
                                    key={step.title}
                                    onMouseEnter={() => setActiveStep(index)}
                                    className="relative cursor-pointer group"
                                >
                                    {/* Step Point */}
                                    <motion.div
                                        className={`absolute -left-12 md:left-[-38px] top-4 w-3 h-3 rounded-full z-10 border-2 transition-all duration-300 ${activeStep === index ? 'bg-foreground border-foreground scale-125' : 'bg-background border-foreground/10'}`}
                                    />

                                    <div className={`p-8 rounded-[2.5rem] transition-all duration-500 border border-transparent ${activeStep === index ? 'bg-card border-border shadow-xl shadow-foreground/5' : 'hover:bg-card/50'}`}>
                                        <div className="flex items-start gap-6">
                                            <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeStep === index ? 'bg-foreground text-background' : 'bg-secondary text-foreground/40'}`}>
                                                <step.icon size={24} weight="duotone" />
                                            </div>

                                            <div className="flex-1">
                                                <h3 className={`text-2xl font-black mb-4 transition-colors duration-500 ${activeStep === index ? 'text-foreground' : 'text-foreground/40'}`}>
                                                    {step.title}
                                                </h3>

                                                <AnimatePresence>
                                                    {activeStep === index && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <p className="text-muted-foreground font-semibold leading-relaxed text-lg pb-2">
                                                                {step.description}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Graphical Preview (Desktop Only) */}
                    <div className="lg:col-span-6 sticky top-20 hidden lg:flex items-center justify-center min-h-[600px]">
                        <div className="relative w-full aspect-square max-w-[500px]">
                            {/* Decorative Background for Icon */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-br from-[var(--conura-sea)]/10 via-transparent to-[var(--conura-orange)]/10 rounded-full blur-3xl"
                            />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
                                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                                    className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-card rounded-[4rem] border border-border shadow-2xl overflow-hidden"
                                >
                                    <div className="absolute top-10 right-10 text-[10rem] font-black text-foreground/[0.03] leading-none pointer-events-none">
                                        0{activeStep + 1}
                                    </div>

                                    <div className="p-16 rounded-[4rem] bg-secondary text-foreground mb-12 transform group-hover:scale-110 transition-transform">
                                        {(() => {
                                            const Icon = steps[activeStep].icon;
                                            return <Icon size={120} weight="duotone" />
                                        })()}
                                    </div>

                                    <div className="px-16 text-center">
                                        <div className="w-16 h-1.5 bg-[var(--conura-sea)] rounded-full mx-auto mb-8" />
                                        <h4 className="text-3xl font-black mb-4">{steps[activeStep].title}</h4>
                                        <div className="flex items-center justify-center gap-2 text-[var(--conura-sea)] font-black uppercase tracking-[0.3em] text-[10px]">
                                            <CheckCircle size={14} weight="bold" />
                                            Stage Verified
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
