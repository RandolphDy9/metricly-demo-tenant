import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "Living Room", image: "/images/cat-living-room.jpg" },
  { name: "Dining", image: "/images/cat-dining.jpg" },
  { name: "Bedroom", image: "/images/cat-bedroom.jpg" },
  { name: "Bathroom", image: "/images/cat-bathroom.jpg" },
  { name: "Office", image: "/images/cat-office.jpg" },
  { name: "Outdoor", image: "/images/cat-outdoor.jpg" },
]

export function CategoryBar() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center justify-center gap-6 lg:gap-10">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="#"
              className="group flex flex-col items-center gap-2.5"
            >
              <div className="relative h-24 w-28 overflow-hidden rounded-sm border border-border bg-secondary transition-shadow group-hover:shadow-md">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <span className="text-xs font-medium text-foreground">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
