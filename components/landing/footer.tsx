"use client";

import Link from "next/link";
import { 
    TwitterLogo, 
    LinkedinLogo, 
    TelegramLogo, 
    EnvelopeSimple,
    ArrowUpRight
} from "@phosphor-icons/react";

const navigation = {
    pages: [
        { name: "Главная", href: "/" },
        { name: "Статьи", href: "/articles" },
        { name: "Авторы", href: "/authors" },
        { name: "О нас", href: "/about" },
    ],
    categories: [
        { name: "Физика", href: "#" },
        { name: "Биология", href: "#" },
        { name: "Технологии", href: "#" },
        { name: "Космос", href: "#" },
    ],
    legal: [
        { name: "Конфиденциальность", href: "#" },
        { name: "Условия использования", href: "#" },
        { name: "Редакционная политика", href: "#" },
    ],
    social: [
        { name: "Telegram", icon: TelegramLogo, href: "#" },
        { name: "LinkedIn", icon: LinkedinLogo, href: "#" },
        { name: "Twitter", icon: TwitterLogo, href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-foreground text-background pt-28 pb-12 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-28">
                    
                    {/* Brand Section */}
                    <div className="md:col-span-4 space-y-10">
                        <Link href="/" className="text-4xl font-black tracking-tighter hover:text-[var(--conura-sea)] transition-colors">
                            INVENTUM
                        </Link>
                        <p className="text-xl opacity-60 font-semibold leading-relaxed max-w-xs">
                            Технологичное издание о фундаментальной науке и открытиях завтрашнего дня.
                        </p>
                        <div className="flex gap-4">
                            {navigation.social.map((item) => (
                                <Link 
                                    key={item.name} 
                                    href={item.href}
                                    className="h-14 w-14 rounded-2xl bg-background/5 border border-background/10 flex items-center justify-center hover:bg-[var(--conura-sea)] hover:text-background transition-all"
                                >
                                    <item.icon size={26} weight="duotone" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12">
                        <div className="space-y-8">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[var(--conura-sea)]">Навигация</h3>
                            <ul className="space-y-4">
                                {navigation.pages.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-lg font-bold opacity-60 hover:opacity-100 hover:text-[var(--conura-sea)] transition-all flex items-center gap-2 group">
                                            {item.name}
                                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[var(--conura-orange)]">Области</h3>
                            <ul className="space-y-4">
                                {navigation.categories.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-lg font-bold opacity-60 hover:opacity-100 hover:text-[var(--conura-orange)] transition-all flex items-center gap-2 group">
                                            {item.name}
                                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-8 col-span-2 sm:col-span-1">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[var(--conura-sea)]">Инфо</h3>
                            <ul className="space-y-4">
                                {navigation.legal.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-lg font-bold opacity-60 hover:opacity-100 transition-all">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-background/10 pt-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-sm font-black opacity-40 uppercase tracking-[0.3em]">
                            &copy; 2026 Inventum Media Group
                        </div>
                        
                        {/* Huge Background Text as per Conura Logo Section */}
                        <div className="absolute left-0 right-0 bottom-0 pointer-events-none select-none overflow-hidden h-[300px] flex items-end justify-center">
                            <span className="text-[25vw] font-black text-background/[0.03] leading-[0.7] tracking-tighter">
                                INVENTUM
                            </span>
                        </div>
                        
                        <div className="flex items-center gap-8 relative z-10">
                            <Link href="mailto:hello@inventum.news" className="flex items-center gap-3 text-lg font-black hover:text-[var(--conura-sea)] transition-colors">
                                <EnvelopeSimple size={24} weight="duotone" />
                                hello@inventum.news
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
