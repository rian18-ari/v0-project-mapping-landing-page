'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3, Layers, Target, Users, Zap, Settings } from 'lucide-react'

const tools = [
  {
    icon: BarChart3,
    title: 'Timeline Visual Design',
    description: 'Pemetaan timeline desain dengan milestone yang jelas untuk setiap fase produksi'
  },
  {
    icon: Layers,
    title: 'Manajemen Layer Proyek',
    description: 'Organisir deliverable desain dalam struktur hirarki yang mudah dipahami'
  },
  {
    icon: Target,
    title: 'Target & Revisi',
    description: 'Kelola feedback dan revisi desain dengan tracking yang transparan'
  },
  {
    icon: Users,
    title: 'Koordinasi Stakeholder',
    description: 'Sinkronisasi input dari klien, tim desain, dan pihak terkait lainnya'
  },
  {
    icon: Zap,
    title: 'Feedback Management',
    description: 'Sistem terintegrasi untuk mengumpulkan dan mengelola feedback desain'
  },
  {
    icon: Settings,
    title: 'Hasil & Deliverable',
    description: 'Dokumentasi lengkap semua aset desain dan deliverable proyek'
  }
]

export function ToolsSection() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Fitur-Fitur ProMap</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk project mapping desain visual yang terstruktur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/60">
                    {tool.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
