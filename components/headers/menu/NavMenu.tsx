"use client"
import Link from "next/link"
import { MenuData } from '@/data';

const NavMenu = () => {
  return (
    <ul className="navigation">
      <li className="active"><Link href="/">Home</Link></li>
      <li><Link href="/blog">Blog</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  )
}

export default NavMenu

