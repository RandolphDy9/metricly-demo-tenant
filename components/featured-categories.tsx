import { DollarSign, Globe, Leaf, Recycle } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Complimentary Delivery",
    description: "Free delivery on orders over $500",
  },
  {
    icon: Globe,
    title: "Canadian Made",
    description: "Designed and crafted in Canada",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description: "Ethically sourced materials",
  },
  {
    icon: Recycle,
    title: "Low-Impact Production",
    description: "Minimal environmental footprint",
  },
]

export function FeaturedCategories() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Featured Categories
          </h2>
          <div className="flex items-center gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-2">
                <feature.icon className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs font-medium text-foreground">
                    {feature.title}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
