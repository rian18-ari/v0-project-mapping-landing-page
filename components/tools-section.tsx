'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3, Layers, Target, Users, Zap, Settings } from 'lucide-react'

const tools = [
  {
    icon: BarChart3,
    title: 'Visualisasi Gantt Chart',
    description: 'Lihat timeline proyek secara visual dengan drag-and-drop yang intuitif'
  },
  {
    icon: Layers,
    title: 'Manajemen Milestone',
    description: 'Atur dan track setiap tahapan proyek dengan detail yang akurat'
  },
  {
    icon: Target,
    title: 'Resource Planning',
    description: 'Alokasikan tim dan resources dengan efisien untuk setiap task'
  },
  {
    icon: Users,
    title: 'Kolaborasi Tim',
    description: 'Komunikasi real-time dengan team member dan stakeholder'
  },
  {
    icon: Zap,
    title: 'Automasi Workflow',
    description: 'Hemat waktu dengan workflow automation untuk task repetitif'
  },
  {
    icon: Settings,
    title: 'Custom Reporting',
    description: 'Generate laporan detail sesuai kebutuhan stakeholder'
  }
]

export function ToolsSection() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Fitur-Fitur Unggulan</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Semua alat yang Anda butuhkan untuk mengelola proyek kompleks dengan mudah
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
