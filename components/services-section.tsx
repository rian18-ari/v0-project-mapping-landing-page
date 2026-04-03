'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Briefcase, Users, Lightbulb, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Konsultasi Project Mapping',
    description: 'Tim ahli kami membantu merancang strategi project mapping yang sesuai dengan kebutuhan bisnis Anda.',
    features: ['Analisis kebutuhan mendalam', 'Desain workflow custom', 'Best practices guidance']
  },
  {
    icon: Users,
    title: 'Training & Onboarding',
    description: 'Program pelatihan komprehensif untuk memastikan tim Anda mahir menggunakan platform.',
    features: ['Workshop interaktif', 'Sertifikasi profesional', 'Dokumentasi lengkap']
  },
  {
    icon: Lightbulb,
    title: 'Optimasi Proses',
    description: 'Kami menganalisis dan mengoptimalkan proses project management Anda untuk efisiensi maksimal.',
    features: ['Process audit', 'Improvement roadmap', 'Implementation support']
  },
  {
    icon: TrendingUp,
    title: 'Enterprise Solutions',
    description: 'Solusi enterprise dengan integrasi custom, dedicated support, dan SLA terjamin.',
    features: ['Custom integration', 'Dedicated account manager', '99.9% uptime SLA']
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Layanan Profesional</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Beyond software, kami menyediakan layanan konsultasi dan dukungan untuk kesuksesan Anda
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
