import Navbar from './NavBar'

const Header = () => {

    return (
    <div>
    <header id="header" className="header d-flex align-items-center fixed-top">
        < div class="container-fluid position-relative d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1 className="sitename">JTP</h1>
            </a>
            <Navbar />
            <div className="header-social-links">
            <a href="https://github.com/jtp0330" className="github"><i className="bi bi-github" /></a>
            <a href="https://www.facebook.com/profile.php?id=100006089656490" className="facebook"><i className="bi bi-facebook" /></a>
            {/* <a href="#" className="instagram"><i className="bi bi-instagram" /></a> */}
            <a href="https://www.linkedin.com/in/jaredpark030/" className="linkedin"><i className="bi bi-linkedin" /></a>
            </div>
        </div>
    </header>
    </div>

    )
}
export default Header;
