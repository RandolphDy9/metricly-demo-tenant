import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Dining Table",
    price: "Starting at $2,100",
    image: "/images/product-dining-table.jpg",
    label: "Best Seller",
  },
  {
    name: "Bed Frame",
    price: "Starting at $1,800",
    image: "/images/product-bed-frame.jpg",
    label: "Best Seller",
  },
  {
    name: "Sofa",
    price: "Starting at $3,200",
    image: "/images/product-sofa.jpg",
    label: "Best Seller",
  },
  {
    name: "Dresser",
    price: "Starting at $1,600",
    image: "/images/product-dresser.jpg",
    label: "New Arrival",
  },
]

export function MostLovedPieces() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex gap-8">
          {/* Left column: text + craftsman image */}
          <div className="flex w-2/5 flex-col">
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Our Most Loved Pieces
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm">
              CasaLife creates furniture for modern Canadian homes using natural materials, expert craftsmanship, and sustainably sourced wood, linen, and stone.
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex w-fit items-center justify-center bg-accent px-5 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Shop All Furniture
            </Link>
            <div className="relative mt-6 h-48 w-full overflow-hidden rounded-sm">
              <Image
                src="/images/craftsman-hands.jpg"
                alt="Craftsman working with wood"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right column: product cards */}
          <div className="flex flex-1 gap-4">
            {products.map((product) => (
              <Link key={product.name} href="#" className="group flex flex-1 flex-col">
                <div className="relative aspect-square overflow-hidden rounded-sm border border-border bg-secondary">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2.5 text-sm font-medium text-foreground">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
