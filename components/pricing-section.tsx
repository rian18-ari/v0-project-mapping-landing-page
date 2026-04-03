'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Gratis',
    description: 'Untuk individu dan proyek kecil',
    features: [
      'Hingga 3 proyek',
      'Tim hingga 5 orang',
      'Gantt chart dasar',
      'Support email',
      'Storage 5GB'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    price: 'Rp 299.000',
    period: '/bulan',
    description: 'Untuk tim yang berkembang',
    features: [
      'Proyek unlimited',
      'Tim hingga 50 orang',
      'Semua fitur tools',
      'Advanced reporting',
      'API access',
      'Priority support',
      'Storage 500GB',
      'Custom branding'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Untuk perusahaan besar',
    features: [
      'Unlimited everything',
      'Dedicated account manager',
      'Custom integration',
      'Advanced security',
      'SLA 99.9%',
      'On-premise option',
      'Training & consulting',
      'White-label solution'
    ],
    highlighted: false
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Paket Harga Fleksibel</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`border flex flex-col transition-all ${
                plan.highlighted 
                  ? 'border-primary ring-2 ring-primary/20 scale-105 shadow-lg'
                  : 'border-border'
              }`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-foreground">
                    {plan.price}
                    {plan.period && <span className="text-lg text-foreground/60">{plan.period}</span>}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-6">
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'variant-outline'
                  }`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  {plan.name === 'Enterprise' ? 'Hubungi Kami' : 'Mulai Sekarang'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
