import './Footer.css';
function Footer(){
    return(
        <footer className="footer">
           <ul className="footer-list">
            <li className="footer-item">
                <a className="footer-link" href="privacypolicy.html">Privacy Policy</a>
            </li>
            <li className="footer-item">
                <a className="footer-link" href="contactus.html">Contact Us</a>
            </li>
            <li className="footer-item">
                <a className="footer-link" href="termsandconditions.html">Term and Conditions</a>
            </li>
           </ul>
           
        </footer>
    );
}

export default Footer;