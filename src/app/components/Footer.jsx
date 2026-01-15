import Link from "next/link";
import { BiWorld } from "react-icons/bi";


export default function Footer() {
  return (
    <footer className="bg-base-100 border-t border-base-300">
      <div className="max-w-11/12 mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link
            href="/"
            className="text-lg font-semibold tracking-tight flex"
          >
              AppZ<span className="flex items-center text-blue-600 animate-spin"><BiWorld className="inline-block"/></span>ne
            
          </Link>
            <p className="mt-3 text-sm text-base-content/70 leading-relaxed">
              Crafting modern web experiences with precision, performance,
              and scalable architecture.
            </p>
          </div>

          {/* Product */}
          <nav>
            <h6 className="footer-title text-base-content/80">
              Product
            </h6>
            <ul className="space-y-2">
              <li><Link href="/" className="link link-hover">Features</Link></li>
              <li><Link href="/" className="link link-hover">Pricing</Link></li>
              <li><Link href="/" className="link link-hover">Roadmap</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <nav>
            <h6 className="footer-title text-base-content/80">
              Company
            </h6>
            <ul className="space-y-2">
              <li><Link href="/" className="link link-hover">About</Link></li>
              <li><Link href="/" className="link link-hover">Careers</Link></li>
              <li><Link href="/" className="link link-hover">Blog</Link></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="footer-title text-base-content/80">
              Legal
            </h6>
            <ul className="space-y-2">
              <li><Link href="/" className="link link-hover">Privacy Policy</Link></li>
              <li><Link href="/" className="link link-hover">Terms of Service</Link></li>
              <li><Link href="/" className="link link-hover">Cookies</Link></li>
            </ul>
          </nav>

        </div>

        {/* Divider */}
        <div className="divider my-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-base-content/60 flex items-center">
            © {new Date().getFullYear()}  AppZ<span className="text-blue-600"><BiWorld /></span>ne. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/" className="text-sm link link-hover">
              Twitter
            </Link>
            <Link href="/" className="text-sm link link-hover">
              GitHub
            </Link>
            <Link href="/" className="text-sm link link-hover">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
