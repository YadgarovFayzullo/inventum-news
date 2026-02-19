"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
    Atom,
    Dna,
    Brain,
    Planet,
    Cpu,
    TreeStructure,
    Heartbeat,
    Rocket,
    ArrowRight
} from "@phosphor-icons/react";
import type { ComponentType } from "react";

interface Category {
    name: string;
    description: string;
    count: number;
    icon: ComponentType<{ size: number; weight: "duotone"; className?: string }>;
    accent: string;
}

const categories: Category[] = [
    { name: "Физика", description: "Кванты и космос", count: 248, icon: Atom, accent: "var(--conura-sea)" },
    { name: "Биология", description: "Генетика и природа", count: 195, icon: Dna, accent: "var(--conura-orange)" },
    { name: "Нейронауки", description: "Тайны мозга", count: 134, icon: Brain, accent: "var(--conura-sea)" },
    { name: "Астрономия", description: "Миры за пределами", count: 167, icon: Planet, accent: "var(--conura-orange)" },
    { name: "Технологии", description: "ИИ и софт", count: 312, icon: Cpu, accent: "var(--conura-sea)" },
    { name: "Математика", description: "Логика чисел", count: 89, icon: TreeStructure, accent: "var(--conura-orange)" },
    { name: "Медицина", description: "Здоровье будущего", count: 276, icon: Heartbeat, accent: "var(--conura-sea)" },
    { name: "Инженерия", description: "Создавая будущее", count: 143, icon: Rocket, accent: "var(--conura-orange)" },
];

export function Categories() {
    return (
        <section id="categories" className="py-28 bg-background relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[var(--conura-sea)] font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3"
                        >
                            <div className="h-[1px] w-8 bg-[var(--conura-sea)]" />
                            Knowledge Base
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tight leading-none"
                        >
                            Архив <span className="text-[var(--conura-sea)] italic text-stroke">дисциплин</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((cat, i) => (
                        <CategoryCard key={cat.name} cat={cat} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CategoryCard({ cat, index }: { cat: Category, index: number }) {
    const Icon = cat.icon;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="group h-full"
        >
            <Card className="relative h-full overflow-hidden rounded-[3rem] border-transparent bg-card shadow-sm hover:shadow-2xl hover:shadow-[var(--conura-sea)]/5 transition-all duration-500 cursor-pointer">
                {/* Thin top border indicator */}
                <div 
                    className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 group-hover:h-3" 
                    style={{ backgroundColor: `oklch(from ${cat.accent} l c h / 0.1)` }}
                />
                
                <CardContent className="p-10 flex flex-col h-full bg-card">
                    <div className="mb-10 relative">
                        <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-secondary text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500 group-hover:rotate-12">
                            <Icon size={40} weight="duotone" />
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-[var(--conura-sea)] transition-colors duration-300">
                            {cat.name}
                        </h3>
                        <p className="text-muted-foreground font-semibold leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                            {cat.description}
                        </p>
                    </div>

                    <div className="mt-12 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-foreground leading-none">{cat.count}</span>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground mt-2">Papers</span>
                        </div>
                        
                        <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center text-foreground transition-all duration-500 group-hover:bg-[var(--conura-sea)] group-hover:text-background group-hover:rotate-45">
                            <ArrowRight size={24} weight="bold" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
