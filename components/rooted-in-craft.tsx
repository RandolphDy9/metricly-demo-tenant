import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export function RootedInCraft() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex gap-10">
          {/* Left column: text */}
          <div className="flex w-1/3 flex-col justify-center">
            <h2 className="font-serif text-3xl font-medium text-foreground">
              Rooted in Craft
            </h2>
            <div className="mt-4 flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-foreground text-foreground"
                />
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Rated 4.8/5 by Canadian customers.
              <br />
              Trusted for quality and service.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="#"
                className="inline-flex items-center justify-center border border-border px-5 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Story Behind Our Craft
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center border border-border px-5 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Get Inspired
              </Link>
            </div>
          </div>

          {/* Right column: lifestyle image grid */}
          <div className="flex flex-1 gap-3">
            <div className="flex flex-1 flex-col gap-3">
              <div className="relative h-48 overflow-hidden rounded-sm">
                <Image
                  src="/images/lifestyle-2.jpg"
                  alt="Dining room with natural wood furniture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-sm">
                <Image
                  src="/images/lifestyle-3.jpg"
                  alt="Living room with wooden sofa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <div className="relative h-64 overflow-hidden rounded-sm">
                <Image
                  src="/images/lifestyle-1.jpg"
                  alt="Bedroom with wooden bed frame and plants"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 overflow-hidden rounded-sm">
                <Image
                  src="/images/lifestyle-4.jpg"
                  alt="Cozy bedroom with nightstand"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
