import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import img1 from '../assets/img/IMG-20241021-WA0001.jpg';
function Header() {
  return (
    <header className="text-white p-3 container-fluid">
      <div className="container-fluid left">
        <img src={img1} alt="Description of image" className="img-fluid" />
        <div className="user-info">
            <h1>NOGUE FOTUE Wilfride Rayan</h1>
            <h3>Developeur web full stack</h3>
            <div className="contacts">
                <div className="contacts-items">
                    {/*icone de linkedin */}
                    <i className="bi bi-linkedin"></i>
                </div>
                <div className="contacts-items">
                    {/*icone de whatsapp */}
                    <i className="bi bi-whatsapp"></i>
                </div>
                <div className="contacts-items">
                    {/*icone de git */}
                    <i className="bi bi-github"></i>
                </div>
                <div className="contacts-items">
                    {/*icone de facebook */}
                    <i className="bi bi-facebook"></i>
                </div>
            </div>
        </div>

      </div>
      <div className="right">
        <button className="contact-btn "><i className="bi bi-envelope"></i>contactez-moi</button>
        
      </div>
    </header>
  );
}

export default Header;
