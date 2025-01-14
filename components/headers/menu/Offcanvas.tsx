"use client"
import Link from "next/link"

interface OffcanvasProps {
  offCanvas: boolean
  setOffCanvas: (value: boolean) => void
}

const Offcanvas = ({ offCanvas, setOffCanvas }: OffcanvasProps) => {
  return (
    <div className={`extra-info ${offCanvas ? "active" : ""}`}>
      <div className="close-icon" onClick={() => setOffCanvas(false)}>
        <button><i className="far fa-window-close"></i></button>
      </div>
      <div className="side-info mb-30">
        <div className="contact-list mb-30">
          <h4>Office Address</h4>
          <p>123 Main Street, New York, NY 10001</p>
        </div>
        <div className="contact-list mb-30">
          <h4>Phone Number</h4>
          <p>+1 (234) 567-8901</p>
          <p>+1 (234) 567-8902</p>
        </div>
        <div className="contact-list mb-30">
          <h4>Email Address</h4>
          <p>info@example.com</p>
          <p>support@example.com</p>
        </div>
      </div>
    </div>
  )
}

export default Offcanvas

