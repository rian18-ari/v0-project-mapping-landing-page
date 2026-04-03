'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'

const footerSections = [
  {
    title: 'Layanan',
    links: [
      { label: 'Fitur', href: '#features' },
      { label: 'Portfolio', href: '#' },
      { label: 'Metodologi', href: '#' },
      { label: 'Case Study', href: '#' }
    ]
  },
  {
    title: 'Layanan',
    links: [
      { label: 'Konsultasi', href: '#services' },
      { label: 'Training', href: '#' },
      { label: 'Implementasi', href: '#' },
      { label: 'Support', href: '#' }
    ]
  },
  {
    title: 'Perusahaan',
    links: [
      { label: 'Tentang Kami', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Karir', href: '#' },
      { label: 'Kontak', href: '#contact' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Kebijakan Privasi', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' }
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">ProMap</span>
            </div>
            <p className="text-sm text-foreground/60">
              Layanan profesional project mapping untuk desain visual yang terstruktur
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            &copy; 2026 ProMap. Semua hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-foreground/60 hover:text-foreground transition">
              <span className="sr-only">Twitter</span>
              𝕏
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition">
              <span className="sr-only">LinkedIn</span>
              in
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition">
              <span className="sr-only">GitHub</span>
              ⚙️
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
