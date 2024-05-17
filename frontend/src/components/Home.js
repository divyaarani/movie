import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg from './Images/Vote for your favorite movie and win exciting offers (1).png';
import CarouselImg1 from './Images/Vote for your favorite movie and win exciting offers.png';
import CarouselImg2 from './Images/Red Yellow Simple Summer Movie Night Flyer.png'
import CarouselImg3 from './Images/Movielicious (1).png'
import CarouselImg4 from './Images/Bahubali.jpg'
import CarouselImg5 from './Images/th.jpg'
import image1 from './Images/Bahubali.png'
import image2 from './Images/Gilli.png'
import image3 from './Images/PS-2.png'
import image4 from './Images/Jaibhim.png'
import image5 from './Images/Vikram.png'
import image6 from './Images/Pizza.png'
import image7 from './Images/Conjuring.png'
import Card from 'react-bootstrap/Card'
import image8 from './Images/The-Fall-Guy-Movie-Poster-qgb1eghnajpplapnfzxfix8h9bkwd60domhbt511yg.jpg'
import image9 from './Images/th (1).jpg'
import image10 from './Images/image5.png'
import image11 from './Images/vijayantony_romeo_160823_3.jpeg'
import video1 from './Videos/videoplayback.mp4'
import video2 from './Videos/videoplayback (1).mp4'
import video3 from './Videos/videoplayback (2).mp4'
import video4 from './Videos/videoplayback5.mp4'


export default function Home() {
  return (
    <div>
    <div>
    <Carousel>
    <Carousel.Item>
       <img src={CarouselImg3} alt='img' width={1200} height={600}/>
      </Carousel.Item>
      <Carousel.Item>
       <img src={CarouselImg2} alt='img' width={1200} height={600}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={CarouselImg1} alt='img' width={1300} height={600}/>
      </Carousel.Item>
      <Carousel.Item>       
      <img src={CarouselImg}alt='img' width={1300} height={600}/>
      </Carousel.Item>
      <Carousel.Item>       
      <img src={CarouselImg4}alt='img' width={1300} height={600}/>
      </Carousel.Item>
      <Carousel.Item>       
      <img src={CarouselImg5}alt='img' width={1300} height={600}/>
      </Carousel.Item>
    </Carousel>
    </div>
    <hr/>
    <div>
      <h3 style={{color:"rgb(204, 59, 88)"}}>Quick Book</h3>
      <label style={{color:"rgb(204, 59, 88)"}}>Movie</label>
      <input type='name' id='inp-hme' placeholder='select Movie'/>
      <input type='date' id='inp-hme' placeholder='select Date'/>
      <input type='time' id='inp-hme' placeholder='select Timing'/>
      <button id='btn-nav'>Book</button>
    </div>
    <hr/>
    <div>
      <h1 style={{color:"rgb(204, 59, 88)"}}>Now showing</h1>
      <div>
      <div className='row'>
        <div className='col-sm-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image8} height={300} />
        <Card.Body>
          <button id='btn-nav'>Book</button>
        </Card.Body>
      </Card>
      </div>
      <div className='col-sm-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image9} height={300}/>
        <Card.Body>
          <button id='btn-nav'>Book</button>
        </Card.Body>
      </Card>
      </div> 
      <div className='col-sm-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image10} height={300}/>
        <Card.Body>
          <button id='btn-nav'>Book</button>
        </Card.Body>
      </Card>
      </div>
      <div className='col-sm-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image11} height={300}/>
        <Card.Body>
          <button id='btn-nav'>Book</button>
        </Card.Body>
      </Card>
      </div>
      </div>
    </div>
    </div>
    <div>
      <h1 style={{color:"rgb(204, 59, 88)"}}>Trailers</h1>
      <div>
      <div className='row'>
        <div className='col-sm-3'>
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="https://youtu.be/EySdVK0NK1Y" height={300} /> */}
        <video variant="top" src={video1} height={300} controls muted/>
        <Card.Body>
          {/* <button >Book</button> */}
        </Card.Body>
      </Card>
      </div>
      <div className='col-sm-3'>
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={image9} height={300}/> */}
        <video variant="top" src={video2} height={300} controls muted/>
        <Card.Body>
          {/* <button>Book</button> */}
        </Card.Body>
      </Card>
      </div> 
      <div className='col-sm-3'>
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={image10} height={300}/> */}
        <video variant="top" src={video3} height={300} controls muted/>
        <Card.Body>
          {/* <button>Book</button> */}
        </Card.Body>
      </Card>
      </div>
      <div className='col-sm-3'>
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={image11} height={300}/> */}
        <video variant="top" src={video4} height={300} controls muted/>
        <Card.Body>
          {/* <button>Book</button> */}
        </Card.Body>
      </Card>
      </div>
      </div>
    </div>
    </div>
    <div className='animate'>
        <div className='conatiner'>
            <div className='section-text'>
                <h1 style={{color:"rgb(204, 59, 88)"}}>Coming Soon</h1>
            </div>
            <div className='fill'>
                <div className='marquee'>
                    <img src={image1} alt=""/>  
                    <img src={image2} alt=""/>  
                    <img src={image3} alt=""/>
                    <img src={image4} alt=""/>
                    <img src={image5} alt=""/>
                    <img src={image6} alt=""/>
                    <img src={image7} alt=""/>
                </div>
            </div>
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
