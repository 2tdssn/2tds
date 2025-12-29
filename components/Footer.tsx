import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-900 text-zinc-400 py-16 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="2TDS Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="text-xl font-bold text-white">2TDS</span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Touba Taysir Digital Solutions : Votre partenaire de confiance pour une transformation digitale réussie et innovante au Sénégal.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Liens Rapides</h4>
                        <ul className="space-y-4">
                            {["Accueil", "À propos", "Services", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Accueil" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                                        className="hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Nos Services</h4>
                        <ul className="space-y-4">
                            {["Dév Web", "Dév Mobile", "Cloud & IT", "Design UX/UI"].map((service) => (
                                <li key={service}>
                                    <Link href="/services" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Nous Contacter</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                                <span className="text-sm">Touba, Secteur Industriel, Sénégal</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary shrink-0" size={18} />
                                <span className="text-sm">+221 33 XXX XX XX</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={18} />
                                <span className="text-sm">contact@2tds.sn</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs">
                        © {currentYear} 2TDS (Touba Taysir Digital Solutions). Tous droits réservés.
                    </p>
                    <div className="flex gap-8 text-xs">
                        <Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
                        <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
