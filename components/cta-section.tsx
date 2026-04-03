'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20" />
          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl text-balance">
              Tingkatkan Efisiensi Project Desain Anda
            </h2>
            <p className="text-lg text-foreground/70 max-w-xl text-balance">
              Hubungi kami hari ini untuk konsultasi gratis dan lihat bagaimana ProMap dapat membantu tim desain Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="https://sahl-store.myscalev.com/p/muhammad-sahl" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Mulai Sekarang <ArrowRight className="w-4 h-4" />
              </Link>
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="w-4 h-4" />
                Minta Penawaran
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
