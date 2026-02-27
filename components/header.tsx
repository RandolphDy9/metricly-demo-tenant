import { Search, User, Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">
            CASALIFE
          </span>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            Furniture & Home
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <button aria-label="Search" className="text-foreground hover:text-muted-foreground transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="text-foreground hover:text-muted-foreground transition-colors">
            <User className="h-5 w-5" />
          </button>
          <button aria-label="Wishlist" className="text-foreground hover:text-muted-foreground transition-colors">
            <Heart className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="text-foreground hover:text-muted-foreground transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
