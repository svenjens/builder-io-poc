import Image from "next/image"
import Link from "next/link"
import SocialIcon from "./SocialIcon"

interface LatestPostSidebarProps {
  avatarImage?: string
  avatarName?: string
  avatarDescription?: string
  avatarShapeOne?: string
  avatarShapeTwo?: string
}

const LatestPostSidebar = ({
  avatarImage,
  avatarName = "Hi, I'm Jenny!",
  avatarDescription = "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  avatarShapeOne,
  avatarShapeTwo
}: LatestPostSidebarProps) => {
  return (
    <div className="col-30">
      <div className="sidebar-wrap">
        {avatarImage && (
          <div className="sidebar-widget">
            <div className="sidebar-avatar">
              <div className="sidebar-avatar-thumb">
                <Image 
                  src={avatarImage} 
                  alt={avatarName} 
                  width={200} 
                  height={200}
                  className="rounded-full"
                />
              </div>
              <div className="sidebar-avatar-content">
                <h2 className="title">{avatarName}</h2>
                <p>{avatarDescription}</p>
                <div className="avatar-social">
                  <ul className="list-wrap">
                    <li key="facebook"><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li key="twitter"><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                    <li key="instagram"><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                    <li key="youtube"><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                  </ul>
                </div>
              </div>
              {(avatarShapeOne || avatarShapeTwo) && (
                <div className="sidebar-avatar-shape">
                  {avatarShapeOne && (
                    <Image 
                      src={avatarShapeOne} 
                      alt="Shape 1" 
                      width={100} 
                      height={100}
                      className="shape-1"
                    />
                  )}
                  {avatarShapeTwo && (
                    <Image 
                      src={avatarShapeTwo} 
                      alt="Shape 2" 
                      width={100} 
                      height={100}
                      className="shape-2"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        <div className="sidebar-widget">
          <div className="widget-title mb-25">
            <h2 className="title">Subscribe & Followers</h2>
            <div className="section-title-line"></div>
          </div>
          <div className="sidebar-social-wrap">
            <SocialIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestPostSidebar

