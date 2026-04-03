'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-foreground">ProjectMap</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-foreground/70 hover:text-foreground transition">
            Fitur
          </Link>
          <Link href="#services" className="text-sm text-foreground/70 hover:text-foreground transition">
            Layanan
          </Link>
          <Link href="#pricing" className="text-sm text-foreground/70 hover:text-foreground transition">
            Harga
          </Link>
          <Link href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition">
            Kontak
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Masuk
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Daftar Gratis
          </Button>
        </div>
      </div>
    </header>
  )
}
