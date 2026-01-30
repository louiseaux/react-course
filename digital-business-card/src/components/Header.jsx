function Header() {
    return (
        <header>
            <img src="/src/images/headshot.png"></img>
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <p>laurasmith.website</p>
            <div className="button-container">
                <button className="email-btn">
                    <i class="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </button>
                <button className="linkedin-btn">
                    <i class="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </button>
            </div>
        </header>
    )
}

export default Header