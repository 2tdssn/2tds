"use client";

import { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Mail, MapPin, Send, HelpCircle, MessageSquare } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Merci ! Votre message a été envoyé avec succès.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="flex flex-col gap-12 pb-24 overflow-hidden">
            {/* Hero Contact Premium */}
            <section className="relative py-24 overflow-hidden bg-muted/30 transition-colors">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <ScrollReveal y={40}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Parlons de votre <span className="gradient-text">Prochain Projet</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Vous avez une idée ambitieuse ou une question technique ? Notre équipe d&apos;experts est prête à transformer vos défis en succès numériques.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="container mx-auto px-6 -mt-16 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">

                    {/* Formulaire Card */}
                    <div className="flex-[2]">
                        <ScrollReveal y={50} delay={0.2}>
                            <div className="bg-card rounded-[2rem] shadow-2xl shadow-primary/5 border border-border/50 overflow-hidden backdrop-blur-sm">
                                <div className="p-8 md:p-12">
                                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                        <span className="w-1.5 h-8 bg-primary rounded-full" />
                                        Envoyez un message
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="group space-y-2">
                                                <label htmlFor="name" className="text-sm font-bold text-muted-foreground group-focus-within:text-primary transition-colors">
                                                    Nom complet
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required
                                                    className="w-full p-4 rounded-2xl bg-muted/50 border border-transparent focus:border-primary/30 focus:bg-background focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-muted-foreground/50"
                                                    placeholder="Abdoulaye Ndiaye"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="group space-y-2">
                                                <label htmlFor="email" className="text-sm font-bold text-muted-foreground group-focus-within:text-primary transition-colors">
                                                    Adresse Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    className="w-full p-4 rounded-2xl bg-muted/50 border border-transparent focus:border-primary/30 focus:bg-background focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-muted-foreground/50"
                                                    placeholder="abdoulaye@exemple.sn"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="group space-y-2">
                                            <label htmlFor="subject" className="text-sm font-bold text-muted-foreground group-focus-within:text-primary transition-colors">
                                                Sujet de discussion
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="subject"
                                                    required
                                                    className="w-full p-4 rounded-2xl bg-muted/50 border border-transparent focus:border-primary/30 focus:bg-background focus:ring-4 focus:ring-primary/5 outline-none transition-all appearance-none"
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                >
                                                    <option value="" disabled>Sélectionnez un sujet</option>
                                                    <option value="web">Développement Web</option>
                                                    <option value="mobile">Application Mobile</option>
                                                    <option value="cloud">Solutions Cloud</option>
                                                    <option value="other">Autre demande</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="group space-y-2">
                                            <label htmlFor="message" className="text-sm font-bold text-muted-foreground group-focus-within:text-primary transition-colors">
                                                Votre Message
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                className="w-full p-4 rounded-2xl bg-muted/50 border border-transparent focus:border-primary/30 focus:bg-background focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                                                placeholder="Dites-nous en plus sur votre vision..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full md:w-auto px-12 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2"
                                        >
                                            Envoyer maintenant <Send className="w-5 h-5" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Info Card Sidebar */}
                    <div className="flex-1 flex flex-col gap-6">
                        <ScrollReveal x={50} delay={0.4}>
                            <div className="p-8 bg-primary rounded-[2rem] text-white shadow-xl shadow-primary/20 relative overflow-hidden group">
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                <h3 className="text-2xl font-bold mb-6">Contact Direct</h3>
                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs font-bold uppercase tracking-wider">Email</p>
                                            <p className="font-semibold text-lg">contact@2tds.sn</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs font-bold uppercase tracking-wider">Localisation</p>
                                            <p className="font-semibold text-lg">Cité Fadia,Parcelle, Sénégal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal y={30} delay={0.6}>
                            <div className="p-8 bg-card rounded-[2rem] border border-border shadow-xl">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <HelpCircle className="w-5 h-5 text-primary" /> Questions Fréquentes
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "Quels sont vos délais ?", a: "Tout dépend de la complexité, mais nous livrons un MVP en 2-4 semaines." },
                                        { q: "Devis gratuit ?", a: "Oui, nous offrons une consultation initiale sans engagement." }
                                    ].map((faq, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-secondary/30">
                                            <p className="font-bold text-sm mb-1">{faq.q}</p>
                                            <p className="text-xs text-muted-foreground">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal y={20} delay={0.8}>
                            <div className="p-8 bg-accent rounded-[2rem] border border-primary/10 flex items-center justify-between group cursor-pointer hover:bg-primary/5 transition-colors">
                                <div>
                                    <h4 className="font-bold text-primary flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4" /> Support Client
                                    </h4>
                                    <p className="text-sm text-accent-foreground/70">Disponible 24h/24 pour nos partenaires.</p>
                                </div>
                                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                    <Send className="w-5 h-5" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </section>
        </div>
    );
}
