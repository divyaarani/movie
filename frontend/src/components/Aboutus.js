import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AboutUs = () => {
  return (
    <div className='container-fluid'>
      <div className="img-about">
    <h1 style={{color:' rgb(204, 59, 88)'}}>About Us</h1>
    <img src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"  height="800px"></img>

    </div>
      <div className='container-abt'>
        <div className='abt-para mt-1 '>
          <p>Welcome to MOVIELICIOS, your premier destination for hassle-free movie ticket bookings! At [Site Name], we're passionate about bringing the magic of cinema to your fingertips. Whether you're a dedicated cinephile or simply looking for a fun night out with friends and family, we've got you covered.</p>
          <p>With our user-friendly platform, booking tickets has never been easier. Simply browse through our extensive selection of movies, conveniently categorized by genre, release date, and more. Our intuitive interface allows you to explore showtimes, select your preferred seats, and secure your tickets in just a few clicks.</p>
        </div>
      </div>
      
      <div className="container-width border-0 bg-dark" id="footer mb-0">
        <div className="footer-widgets-wrap">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="widget widget_links widget-li-noicon text-white">
                    <h4 className="colr text-white">Address</h4>
                    <p>32A,Mahitha complex<br></br>
                      Thudiyalur Road,Saravanampatti<br></br>
                      Coimbatore-641035</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="widget widget_links widget-li-noicon text-white">
                    <h4 className="colr text-white">Customre Care</h4>
                    <p>Mon-Fri:8.30 Am --10 .00Pm<br></br>
                      Sat-Sun:9.00Am --11.30pm<br></br>
                    </p>
                  </div>
                </div>
              </div>
              <div className="clear"></div>
              <div className="line"></div>
              <div className="copy-link">
                <a href="mailto:noreply@MovieLicoius.com"><i class="fa-solid fa-envelope"></i> info@MovieLicious.com</a>
                <span className="middot"> | </span>
                <a href="tel:+1-11-6541-6369"><i class="fa-solid fa-phone"></i> +91-11-6541-6369</a>
                <span className="middot"> | </span>
                <a href="skype:CanvasOnSkype?call"><i class="fa-brands fa-skype"></i> MovilieOnSkype</a>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="widget text-white">
                <h4 className="colr text-white">Connect Socially</h4>
                <div className="mb-4">
                  <a href="#" className="social-icon  bg-dark si-mini border-0 rounded-circle h-bg-facebook" title="Facebook">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" className="social-icon bg-dark si-mini border-0 rounded-circle h-bg-x-twitter" title="Twitter">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#" className="social-icon bg-dark  si-mini border-0 rounded-circle h-bg-instagram" title="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon  bg-dark si-mini border-0 rounded-circle h-bg-pinterest" title="Pinterest">
                    <i class="fa-brands fa-pinterest-p"></i>
                  </a>
                  <a href="#" className="social-icon bg-dark si-mini border-0 rounded-circle h-bg-vimeo" title="Vimeo">
                    <i class="fa-brands fa-vimeo-v"></i>
                  </a>
                </div>
              </div>
              <div className="widget subscribe-widget mt-0">
                <h5><strong>Subscribe</strong> to Our Newsletter to get Important News, Amazing Offers &amp; Inside Scoops:</h5>
                <div className="widget-subscribe-form-result"></div>
                <form id="widget-subscribe-form" action="include/subscribe.php" method="post" className="mb-0">
                  <div class="input-group input-group-lg mx-auto mb-3">
                    <input type="email" id="widget-subscribe-form-email" name="widget-subscribe-form-email" className="form-control required email" placeholder="Enter your Email" />
                    <button className="button button-black fw-light bg-primary button-dark ls-2 text-uppercase text-light " type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs