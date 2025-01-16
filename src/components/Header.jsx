import Navbar from './NavBar'

const Header = () => {

    return (
    <div>
    <header id="header" className="header d-flex align-items-center fixed-top">
        &lt;   div class="container-fluid position-relative d-flex align-items-center justify-content-between"&gt;
        <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1 className="sitename">Laura</h1>
        </a>
        <Navbar />
        <div className="header-social-links">
        <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
        </div>
    </header>
    </div>

    )
}
export default Header;
