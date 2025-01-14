"use client"
import Image from "next/image"
import HeaderTopOne from "./menu/HeaderTopOne"
import NavMenu from "./menu/NavMenu"
import Link from "next/link"
import UseSticky from "@/hooks/UseSticky"
import { useState } from "react"
import Offcanvas from "./menu/Offcanvas"
import MobileMenu from "./menu/MobileMenu"

interface HeaderOneProps {
  logo?: string;
  logoAlt?: string;
  whiteLogo?: string;
  whiteLogoAlt?: string;
}

const HeaderOne = ({ 
  logo = "https://cdn.builder.io/api/v1/image/assets/default-logo.png",
  logoAlt = "Logo",
  whiteLogo = "https://cdn.builder.io/api/v1/image/assets/default-logo-white.png",
  whiteLogoAlt = "White Logo"
}: HeaderOneProps) => {
  const { sticky } = UseSticky();
  const [offCanvas, setOffCanvas] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  return (
    <>
      <header>
        <div id="header-fixed-height" className={sticky ? "active-height" : ""}></div>
        <HeaderTopOne />
        <div id="sticky-header" className={`menu-area ${sticky ? "sticky-menu" : ""}`}>
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12">
                <div className="menu-wrap">
                  <div className="row align-items-center g-0">
                    <div className="col-xl-5">
                      <div className="header-left-side">
                        <div className="offcanvas-toggle">
                          <a onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }} className="menu-tigger">
                            <span></span>
                            <span></span>
                            <span></span>
                          </a>
                        </div>
                        <div className="navbar-wrap main-menu d-none d-xl-flex">
                          <NavMenu />
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-4">
                      <div className="logo text-center">
                        <Link href="/">
                          <Image 
                            src={logo} 
                            alt={logoAlt} 
                            width={150} 
                            height={50} 
                            className="h-auto w-auto"
                          />
                        </Link>
                      </div>
                      <div className="logo d-none text-center">
                        <Link href="/">
                          <Image 
                            src={whiteLogo} 
                            alt={whiteLogoAlt} 
                            width={150} 
                            height={50} 
                            className="h-auto w-auto"
                          />
                        </Link>
                      </div>
                    </div>

                    <div className="col-xl-5 col-lg-9 col-md-8">
                      <div className="header-right-side">
                        <div className="header-search-wrap">
                          <form onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Search here . . ." />
                            <button type="submit"><i className="flaticon-search"></i></button>
                          </form>
                        </div>
                        <div className="header-action d-none d-md-block">
                          <ul className="list-wrap">
                            <li key="wishlist" className="header-wishlist">
                              <Link href="#"><i className="flaticon-heart"></i><span>0</span></Link>
                            </li>
                            <li key="cart" className="header-cart">
                              <Link href="#"><i className="flaticon-basket"></i><span>0</span></Link>
                              <strong>$0.00</strong>
                            </li>
                            <li key="signin" className="header-sine-in">
                              <Link href="/contact"><i className="flaticon-user"></i>Sign In</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => setMobileMenu(true)} className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </>
  )
}

export default HeaderOne

