import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Code2, Smartphone, Cloud, Palette } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Développement Web",
            items: ["Sites vitrines premium", "Applications web complexes", "E-commerce & Boutiques en ligne", "Optimisation SEO"],
            icon: <Code2 className="w-10 h-10" />
        },
        {
            title: "Applications Mobiles",
            items: ["Applications iOS natives", "Applications Android natives", "Solutions cross-platform", "Maintenance & Mise à jour"],
            icon: <Smartphone className="w-10 h-10" />
        },
        {
            title: "Solutions Cloud & IT",
            items: ["Hébergement sécurisé", "Cloud Computing", "Cybersécurité", "Infrastructure réseau"],
            icon: <Cloud className="w-10 h-10" />
        },
        {
            title: "Design UX/UI",
            items: ["Conception de produits", "Prototypage interactif", "Design de marque", "Audit d'utilisabilité"],
            icon: <Palette className="w-10 h-10" />
        }
    ];

    return (
        <div className="flex flex-col gap-20 pb-20 overflow-hidden">
            <section className="bg-primary/5 py-20">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal y={40}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Des solutions technologiques de pointe conçues pour accélérer votre croissance et simplifier vos opérations.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="container mx-auto px-6">
                <StaggerContainer delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-card p-10 h-full rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all group">
                                    <div className="flex items-center gap-6 mb-8 text-primary">
                                        <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {service.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-3 text-muted-foreground">
                                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>
        </div>
    );
}
