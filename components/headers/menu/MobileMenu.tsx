"use client"
import Link from "next/link"

interface MobileMenuProps {
  mobileMenu: boolean
  setMobileMenu: (value: boolean) => void
}

const MobileMenu = ({ mobileMenu, setMobileMenu }: MobileMenuProps) => {
  return (
    <div className={`mobile-menu-wrap ${mobileMenu ? "active" : ""}`}>
      <div className="mobile-menu">
        <nav>
          <ul className="navigation">
            <li className="active"><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="mobile-menu-close" onClick={() => setMobileMenu(false)}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu

