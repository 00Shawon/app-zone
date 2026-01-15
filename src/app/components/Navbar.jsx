import Link from "next/link";
import { BiWorld } from "react-icons/bi";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-base-300">
      <div className="max-w-11/12 mx-auto px-6">
        <div className="h-16 flex items-center justify-between">

          {/* Brand */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight flex"
          >
              AppZ<span className="flex items-center text-blue-600 animate-spin"><BiWorld className="inline-block"/></span>ne
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>
            <Link href="/store" className="hover:text-primary transition">
              Store
            </Link>
            <Link href="/add-items" className="hover:text-primary transition">
              Add Items
            </Link>
            <Link href="/about" className="hover:text-primary transition">
              About
            </Link>
            <Link href="/policy" className="hover:text-primary transition">
              Policy
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:inline-block text-sm font-medium hover:text-primary transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="btn btn-primary btn-sm rounded-md"
            >
              Get Started
            </Link>

            {/* Mobile Menu */}
            <details className="dropdown dropdown-end md:hidden">
              <summary className="btn btn-ghost btn-sm px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>

              <ul className="menu menu-sm mt-3 w-52 rounded-lg bg-base-100 border border-base-300 shadow-lg">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Features</Link></li>
                <li><Link href="/">Pricing</Link></li>
                <li><Link href="/">Blog</Link></li>

                <div className="divider my-1" />

                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/signup" className="text-primary font-medium">
                    Get Started
                  </Link>
                </li>
              </ul>
            </details>
          </div>

        </div>
      </div>
    </header>
  );
}
