import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { ArrowRight, CheckCircle2, Code2, Smartphone, Zap } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col gap-20 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-12 pb-24 md:pt-24 md:pb-32">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10 animate-float" />
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <ScrollReveal y={60} delay={0.2}>
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                    Propulsez votre <span className="gradient-text">Avenir Digital</span> avec 2TDS
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal y={40} delay={0.4}>
                                <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
                                    Touba Taysir Digital Solutions transforme vos idées en réalités numériques. Nous créons des solutions sur mesure qui allient innovation, performance et excellence technique.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal y={30} delay={0.6}>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <Link
                                        href="/contact"
                                        className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2"
                                    >
                                        Démarrer un Projet <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="/services"
                                        className="bg-white text-foreground border border-border px-8 py-4 rounded-full font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center"
                                    >
                                        Nos Services
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="flex-1 relative">
                            <ScrollReveal delay={0.5} y={0} x={40}>
                                <div className="relative z-10 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 w-64 h-64 mx-auto">
                                    <div className="w-full h-full bg-white flex items-center justify-center">
                                        <Image
                                            src="/logo.png"
                                            alt="2TDS Hero"
                                            width={250}
                                            height={250}
                                            className="opacity-90 transition-all duration-700 animate-float"
                                        />
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-6 rounded-2xl shadow-xl border border-border glass animate-bounce-subtle z-20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Solutions Innovantes</p>
                                            <p className="text-xs text-muted-foreground">Qualité Garantie</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-secondary/50 py-16">
                <div className="container mx-auto px-6">
                    <StaggerContainer>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: "Projets Réalisés", value: "50+" },
                                { label: "Clients Satisfaits", value: "30+" },
                                { label: "Expertise Senior", value: "10 Ans" },
                                { label: "Disponibilité", value: "24/7" },
                            ].map((stat, i) => (
                                <StaggerItem key={i}>
                                    <div className="text-center">
                                        <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                                        <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Services Preview */}
            <section className="container mx-auto px-6">
                <ScrollReveal y={40}>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Domaines d&apos;Expertise</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Nous combinons technologie de pointe et vision stratégique pour vous offrir le meilleur du digital.
                        </p>
                    </div>
                </ScrollReveal>

                <StaggerContainer delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Développement Web",
                                desc: "Des sites modernes, rapides et optimisés pour le SEO et l'expérience utilisateur.",
                                icon: <Code2 className="w-8 h-8" />,
                            },
                            {
                                title: "Applications Mobiles",
                                desc: "Solutions iOS et Android natives ou cross-platform (Flutter, React Native).",
                                icon: <Smartphone className="w-8 h-8" />,
                            },
                            {
                                title: "Transformation Digitale",
                                desc: "Conseil et accompagnement pour moderniser vos processus métier durablement.",
                                icon: <Zap className="w-8 h-8" />,
                            },
                        ].map((service, i) => (
                            <StaggerItem key={i}>
                                <div className="p-8 h-full rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all group bg-card">
                                    <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                                    <Link href="/services" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                                        En savoir plus <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6">
                <ScrollReveal y={50}>
                    <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -z-10 animate-float" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Prêt à lancer votre projet ?</h2>
                        <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                            Contactez-nous dès aujourd&apos;hui pour une consultation gratuite et transformons ensemble votre vision en succès numérique.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold shadow-lg hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all relative z-10"
                        >
                            Obtenir un Devis
                        </Link>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
