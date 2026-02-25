import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative h-[500px] lg:h-[560px] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Modern Canadian living room with solid wood furniture overlooking a lake and mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium leading-tight text-[#ffffff]">
              Furniture Made to Last.
              <br />
              Designed for Canadian Homes.
            </h1>
            <p className="mt-4 text-sm lg:text-base leading-relaxed text-[#e0e0e0] max-w-md mx-auto">
              Solid wood. Honest materials. Timeless furniture.
              <br />
              Built for generations.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-primary px-6 py-2.5 text-lg border border-white font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Shop Furniture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
