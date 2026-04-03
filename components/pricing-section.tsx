'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface Plan {
  name: string
  description: string
  features: string[]
}

const plan: Plan = {
  name: 'Paket Lengkap',
  description: 'Dapatkan semua fitur untuk mengelola proyek Anda dengan sempurna',
  features: [
    'Proyek unlimited',
    'Tim unlimited',
    'Semua fitur tools lengkap',
    'Advanced reporting & analytics',
    'API access',
    'Priority support 24/7',
    'Storage unlimited',
    'Custom branding'
  ]
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Paket Lengkap ProjectMap</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Satu paket dengan semua fitur yang Anda butuhkan
          </p>
        </div>

        <div className="flex justify-center">
          <Card 
            className="border border-primary ring-2 ring-primary/20 shadow-lg max-w-2xl w-full"
          >
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="text-base">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground/70">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
              >
                Mulai Sekarang
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
