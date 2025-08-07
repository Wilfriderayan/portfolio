import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import img1 from '../assets/img/IMG-20241021-WA0001.jpg';
function Header() {
  return (
    <header className="text-white  container-fluid">
      <div className="container-fluid hgauche">
        <img src={img1} alt="Description of image" className="img-fluid" />
        <div className="user-info">
            <h1>NOGUE FOTUE Wilfride Rayan</h1>
            <h3>Developeur web full stack</h3>
            <div className="contacts">
                <div className="contacts-items">
                    {/*icone de linkedin */}
                    <a href="https://www.linkedin.com/in/rayan-nogue-70b5a6316/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
                <div className="contacts-items">
                    {/*icone de whatsapp */}
                    <a href="https://wa.me/237680810536" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                </div>
                <div className="contacts-items">
                    {/*icone de git */}
                    <a href="https://github.com/Wilfriderayan" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
                <div className="contacts-items">
                    {/*icone de facebook */}
                    <a href="https://www.facebook.com/Rayan.NOGUE" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook"></i>
                    </a>
                </div>
            </div>
        </div>

      </div>
      <div className="hdroite">
       <a href="mailto:noguerayan9@gmail.com" >
           <button className="contact-btn "><i className="bi bi-envelope"></i>contactez-moi</button>
       </a>
      </div>
    </header>
  );
}

export default Header;
