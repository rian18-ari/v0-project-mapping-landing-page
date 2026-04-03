'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Briefcase, Users, Lightbulb, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Mapping Desain Visual',
    description: 'Kami memetakan alur desain visual Anda mulai dari konsep, wireframe, mockup hingga final design dengan struktur yang jelas.',
    features: ['Analisis brief desain', 'Pemetaan fase desain', 'Timeline & milestone yang terukur']
  },
  {
    icon: Users,
    title: 'Koordinasi Tim Desain',
    description: 'Layanan manajemen tim desain untuk memastikan kolaborasi yang efektif dan deliverable tepat waktu.',
    features: ['Project briefing', 'Resource allocation', 'Progress tracking real-time']
  },
  {
    icon: Lightbulb,
    title: 'Optimasi Workflow Desain',
    description: 'Kami merancang workflow design yang efisien untuk meningkatkan produktivitas dan kualitas output desain.',
    features: ['Process improvement', 'Tool optimization', 'Quality assurance standards']
  },
  {
    icon: TrendingUp,
    title: 'Project Delivery & Reporting',
    description: 'Manajemen lengkap dari delivery proyek dengan laporan detail dan feedback structured untuk klien.',
    features: ['Scheduled deliverables', 'Client reporting', 'Post-project analysis']
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Layanan Kami</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Solusi lengkap untuk project mapping desain visual yang terstruktur dan efisien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border flex flex-col">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  <p className="text-foreground/60">
                    {service.description}
                  </p>
                  <ul className="space-y-2 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Pelajari Lebih Lanjut
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
