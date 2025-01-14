const HeaderTopOne = () => {
  return (
    <div className="header-top-wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="header-top-left">
              <p>Breaking News: Latest updates on technology and innovation</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-top-right">
              <div className="header-date">
                <i className="far fa-calendar"></i>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTopOne

