import './Footer.css';
function Footer(){
    return(
        <footer className="footer">
           <ul className="footer-list">
            <li className="footer-item">
                <a className="footer-link" href="https://getyourpet.com/privacy-policy/">Privacy Policy</a>
            </li>
            <li className="footer-item">
                <a className="footer-link" href="https://www.petfood.express/?gclid=CjwKCAiA-dCcBhBQEiwAeWidtXdB7NozljVPH0IA4THtFaI6EW85-l3U17tlSPrjvTx-yf-FTYdH6xoCJxgQAvD_BwE">Foot supplies</a>
            </li>
            <li className="footer-item">
                <a className="footer-link" href="https://www.tricityvets.com/">Vet Services</a>
            </li>
           </ul>
           
        </footer>
    );
}
export default Footer;
