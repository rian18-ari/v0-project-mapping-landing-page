'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-[600px] flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10" />
      
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 w-fit bg-secondary/80 rounded-full px-3 py-1">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-foreground">Layanan Project Mapping untuk Desain Visual</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Visualisasi Proyek Desain Anda dengan Sempurna
          </h1>

          <p className="text-lg text-foreground/70 leading-relaxed max-w-lg text-balance">
            Layanan profesional project mapping untuk tim desain visual. Kami membantu Anda memetakan, merencanakan, dan mengeksekusi proyek desain dengan struktur yang jelas dan efisien.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Hubungi Kami <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Lihat Portfolio
            </Button>
          </div>

          <div className="flex flex-col gap-3 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground/80">Konsultasi gratis untuk proyek Anda</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground/80">Tim ahli berpengalaman dalam desain visual</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground/80">Hasil deliverable berkualitas tinggi</span>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] bg-gradient-to-br from-primary/20 via-primary/10 to-background rounded-2xl border border-border flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl flex flex-col items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-primary/30">🎨</div>
                <p className="text-lg font-semibold text-foreground/60">Project Mapping Visual</p>
                <p className="text-sm text-foreground/40">Pemetaan komprehensif untuk setiap tahap proyek desain Anda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
