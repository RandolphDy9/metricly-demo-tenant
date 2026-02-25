import { TreePine, ShieldCheck, Truck, Handshake, Leaf } from "lucide-react"

const steps = [
  {
    icon: TreePine,
    title: "Solid Wood Selection",
    description: "Responsibly sourced hardwoods",
  },
  {
    icon: ShieldCheck,
    title: "Safety Standards",
    description: "Exceeds Canadian safety requirements",
  },
  {
    icon: Handshake,
    title: "Expert Craftsmen",
    description: "Skilled artisans with decades of experience",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "White-glove delivery across Canada",
  },
  {
    icon: Leaf,
    title: "Natural Finishes",
    description: "Low-VOC, eco-friendly finishes",
  },
]

export function HowItsMade() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <h3 className="mb-6 font-serif text-xl font-medium text-foreground">
          How Our Furniture is Made
        </h3>
        <div className="flex items-start justify-between">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card border border-border">
                <step.icon className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{step.title}</p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="ml-4 mt-5 h-px w-8 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
