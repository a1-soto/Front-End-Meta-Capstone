import logo from '../assets/images/logo.jpg'


function Footer() {
    return (
        <footer>
            <img src={logo} alt="Little Lemon logo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                </ul>
            </nav>

            <div>
                <p>Chicago,IL</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@littlelemon.com</p>
            </div>

            <div>
                <a href="https://facebook.com">Facebook</a>
                <a href="https://instagram.com">Instagram</a>
            </div>
        </footer>
    );
}
export default Footer;