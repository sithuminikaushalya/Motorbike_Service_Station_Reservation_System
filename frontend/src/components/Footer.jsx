import React from "react";
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer =() =>{
    return (
        <div>
        <div class="footer-clean">
          <hr />
          <footer>
            <div class="container">
              <div class="row justify-content-center">
                
                <div class="col-sm-4 col-md-3 item">
                  <h3>History</h3>
                  <ul>
                    <li>
                      <Link>Company</Link>
                    </li>
                    <li>
                      <Link>Team</Link>
                    </li>
                    <li>
                      <Link>Legacy</Link>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-4 col-md-3 item">
                  <h3>Careers</h3>
                  <ul>
                    <li>
                      <Link>Job openings</Link>
                    </li>
                    <li>
                      <Link>Employee success</Link>
                    </li>
                    <li>
                      <Link>Benefits</Link>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 item social">
                <li><Link to="/news" className="nav_link">News</Link></li>
                <li><Link to="/about" className="nav_link">About</Link></li>
                <li><Link to="/services" className="nav_link">Services</Link></li>
                <li><Link to="/contact" className='nav_link'>Contact</Link></li>
                <li><Link to="/home" className='nav_link'>Home</Link></li>
                </div>
                <div class="col-lg-3 item social">
                  <a href ='https://www.bing.com/search?q=facebook+login+link&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=facebook+login+link&sc=10-19&sk=&cvid=59C6DE079CF24E0B81C5B79A48E1FC0C&ghsh=0&ghacc=0&ghpl=#'>
                  <Link>
                      <i class="bi bi-facebook"></i>
                    </Link>
                  </a>
                    
    <a href ='https://www.bing.com/ck/a?!&&p=73a0f67b65806e59JmltdHM9MTY5NzU4NzIwMCZpZ3VpZD0wZDQ1ZTcxZC1lNzdjLTZjYjEtMDRhMS1mNzFlZTM3YzZlNmQmaW5zaWQ9NTE4OA&ptn=3&hsh=3&fclid=0d45e71d-e77c-6cb1-04a1-f71ee37c6e6d&psq=twitter+login&u=a1aHR0cHM6Ly9tLnR3aXR0ZXIuY29tL2xvZ2lu&ntb=1'>
    
                     <Link>
                      <i class="bi bi-twitter"></i>
                    </Link>
    </a>
    
    <a href='https://www.bing.com/ck/a?!&&p=3bced5a98758f0aaJmltdHM9MTY5NzU4NzIwMCZpZ3VpZD0wZDQ1ZTcxZC1lNzdjLTZjYjEtMDRhMS1mNzFlZTM3YzZlNmQmaW5zaWQ9NTE3OA&ptn=3&hsh=3&fclid=0d45e71d-e77c-6cb1-04a1-f71ee37c6e6d&psq=whatsapp+login+link&u=a1aHR0cHM6Ly93ZWIud2hhdHNhcHAuY29tLyVGMCU5RiU4QyU5MC9lbg&ntb=1'>
                     <Link>
                      <i class="bi bi-whatsapp"></i>
                    </Link>
    </a>
                   
    <a href='https://www.bing.com/ck/a?!&&p=a04aa8ef3074e152JmltdHM9MTY5NzU4NzIwMCZpZ3VpZD0wZDQ1ZTcxZC1lNzdjLTZjYjEtMDRhMS1mNzFlZTM3YzZlNmQmaW5zaWQ9NTE4OA&ptn=3&hsh=3&fclid=0d45e71d-e77c-6cb1-04a1-f71ee37c6e6d&psq=instagram+login&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8_aGw9ZW4&ntb=1'>
                     <Link>
                      <i class="bi bi-instagram"></i>
                    </Link>
    
    </a>
                   
                    <p class="copyright">MORAIS MNS 4077</p>
                  </div>
    
                 
               
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
}


export default Footer