import Image from "next/image"
import Link from "next/link"

export function ReviewsAndSocial() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-serif text-2xl font-medium text-foreground">
          Reviews & Social Proof
        </h2>
        <p className="mt-2 text-base font-medium text-foreground">
          Join the Cedar & Stone Community
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-lg">
          Cozy spaces, design style, and everyday moments shared by our community. Follow along for inspiration and behind-the-scenes content.
        </p>
        <div className="mt-8 flex gap-4">
          <div className="relative h-56 flex-1 overflow-hidden rounded-sm">
            <Image
              src="/images/craftsman-hands.jpg"
              alt="Craftsman detail"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-56 flex-1 overflow-hidden rounded-sm">
            <Image
              src="/images/lifestyle-2.jpg"
              alt="Dining room styled"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="relative h-26 flex-1 overflow-hidden rounded-sm">
              <Image
                src="/images/lifestyle-3.jpg"
                alt="Living room"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-26 flex-1 overflow-hidden rounded-sm">
              <Image
                src="/images/lifestyle-4.jpg"
                alt="Bedroom space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
