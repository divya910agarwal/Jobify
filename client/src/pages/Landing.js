import React from 'react';
import {Logo} from '../components';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <React.Fragment>
          <Wrapper>

              <nav>
                  <Logo />
              </nav>
              <div className='container page'>
                  {/*info*/}
                  <div className='info'>
                      <h1>job<span>tracking</span>app</h1>
                      <p>
                          I'm baby normcore four loko air plant 8-bit, slow-carb Brooklyn man braid salvia gochujang meh YOLO. Narwhal health goth roof party succulents lumbersexual 8-bit photo booth tonx. Tousled truffaut hashtag enamel pin readymade chillwave same. Tattooed seitan green juice pop-up tonx, try-hard beard aesthetic gastropub twee jianbing big mood. Kombucha irony meggings gentrify etsy. Etsy neutra letterpress, vibecession vaporware subway tile art party kickstarter iPhone shaman selvage asymmetrical roof party.
                      </p>
                      <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                  </div>
                  <img src={main} alt="job hunt" className='img main-img' />
              </div>

          </Wrapper>
    </React.Fragment>
    
    
  )
}



export default Landing