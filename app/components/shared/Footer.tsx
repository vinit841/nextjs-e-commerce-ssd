'use client'
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full bg-neutral-900 text-neutral-200 py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-lg font-semibold">E-Commerce SSD</span>
                    <span className="text-sm text-neutral-400">© {new Date().getFullYear()} Angel Aguero</span>
                    <span className="text-xs text-neutral-400 mt-2">
                        Tu tienda de confianza. Encuentra los mejores productos y ofertas.
                    </span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <Link href="https://github.com/Angel-Raa" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        GitHub
                    </Link>
                    <Link href="/privacy" className="hover:underline">
                        Privacidad
                    </Link>
                    <Link href="/terms" className="hover:underline">
                        Términos
                    </Link>
                    <Link href="/about" className="hover:underline">
                        Sobre Nosotros
                    </Link>
                    <a href="mailto:angelagueror23@gmail.com" className="hover:underline">
                        Contacto
                    </a>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-neutral-800 pt-6">
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <span>Síguenos:</span>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                </div>
                <div className="text-xs text-neutral-500">
                    Desarrollado con <span className="text-red-500">♥</span> por Angel Aguero
                </div>
            </div>
            <style jsx>{`
                footer {
                    font-family: 'Inter', Arial, sans-serif;
                }
            `}</style>
        </footer>
    );
};