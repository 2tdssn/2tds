import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function About() {
    return (
        <div className="flex flex-col gap-20 pb-20 overflow-hidden">
            {/* Hero About */}
            <section className="bg-secondary/50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal y={40}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de <span className="text-primary">2TDS</span></h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Touba Taysir Digital Solutions est née d&apos;une volonté d&apos;accompagner les entreprises dans leur transition vers l&apos;ère numérique avec excellence et intégrité.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Content */}
            <section className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <ScrollReveal x={-50} delay={0.2}>
                            <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Notre mission est de démocratiser l&apos;accès aux technologies de pointe pour toutes les entreprises, des startups aux grandes organisations. Basés à Touba, nous rayonnons à travers tout le Sénégal et au-delà, apportant des solutions innovantes qui répondent aux défis locaux et internationaux.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Nous croyons en une approche centrée sur l&apos;humain, où la technologie est un levier de croissance, de simplification et d&apos;impact positif sur la société.
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="flex-1">
                        <ScrollReveal x={50} delay={0.4}>
                            <div className="bg-accent rounded-3xl p-12 flex items-center justify-center">
                                <div className="bg-white rounded-full p-8 shadow-xl aspect-square flex items-center justify-center">
                                    <Image
                                        src="/logo.png"
                                        alt="2TDS Mission"
                                        width={250}
                                        height={250}
                                        className="drop-shadow-2xl animate-float"
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-primary text-white py-20 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 animate-pulse -z-10" />
                <div className="container mx-auto px-6">
                    <ScrollReveal y={30}>
                        <h2 className="text-3xl font-bold mb-12 text-center">Nos Valeurs Fondamentales</h2>
                    </ScrollReveal>
                    <StaggerContainer delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            {[
                                {
                                    title: "Innovation",
                                    desc: "Nous explorons sans cesse les nouvelles technologies pour offrir des solutions d'avant-garde."
                                },
                                {
                                    title: "Excellence",
                                    desc: "La qualité est notre standard. Nous ne faisons aucun compromis sur la performance et la fiabilité."
                                },
                                {
                                    title: "Engagement",
                                    desc: "Votre succès est le nôtre. Nous nous engageons à être un partenaire de confiance sur le long terme."
                                }
                            ].map((value, i) => (
                                <StaggerItem key={i}>
                                    <div className="p-8 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm h-full">
                                        <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                        <p className="text-primary-foreground/80 leading-relaxed">{value.desc}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}
