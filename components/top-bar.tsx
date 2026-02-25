import { Search } from "lucide-react"
import Link from "next/link"

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
        <nav className="flex items-center gap-8">
          <Link href="#" className="font-medium hover:opacity-80 transition-opacity">
            Shop
          </Link>
          <Link href="#" className="font-medium hover:opacity-80 transition-opacity">
            About
          </Link>
          <Link href="#" className="font-medium hover:opacity-80 transition-opacity">
            Our Masterpiece
          </Link>
          <Link href="#" className="font-medium hover:opacity-80 transition-opacity">
            Our Materials & Care
          </Link>
          <Link href="#" className="font-medium hover:opacity-80 transition-opacity">
            Trade
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Search className="h-3.5 w-3.5" />
          <span className="text-xs opacity-70">Search or key commands</span>
        </div>
      </div>
    </div>
  )
}
