import Link from "next/link"

const SocialIcon = () => {
   return (
      <ul className="list-wrap">
         <li key="facebook"><Link href="#"><i className="fab fa-facebook-f"></i>facebook</Link></li>
         <li key="twitter"><Link href="#"><i className="fab fa-twitter"></i>twitter</Link></li>
         <li key="instagram"><Link href="#"><i className="fab fa-instagram"></i>instagram</Link></li>
         <li key="youtube"><Link href="#"><i className="fab fa-youtube"></i>youtube</Link></li>
         <li key="linkedin"><Link href="#"><i className="fab fa-linkedin-in"></i>LinkedIn</Link></li>
         <li key="pinterest"><Link href="#"><i className="fab fa-pinterest-p"></i>Pinterest</Link></li>
      </ul>
   )
}

export default SocialIcon

