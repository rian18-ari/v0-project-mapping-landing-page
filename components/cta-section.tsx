'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Mail } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20" />
          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl text-balance">
              Siap Mengubah Cara Anda Mengelola Proyek?
            </h2>
            <p className="text-lg text-foreground/70 max-w-xl text-balance">
              Bergabunglah dengan ribuan tim yang telah meningkatkan produktivitas mereka dengan ProjectMap
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Mulai Gratis Sekarang <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="w-4 h-4" />
                Jadwalkan Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
