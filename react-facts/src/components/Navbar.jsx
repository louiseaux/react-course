export default function Navbar(props) {
    return (
        <header className={props.darkMode ? "dark" : ""}>
            <nav>
                <div className="nav-logo">
                    <img src="/src/images/react-logo.png" alt="React logo" />
                    <span>ReactFacts</span>
                </div>
                <label class="switch">
                    <input type="checkbox" checked={props.darkMode} onChange={props.toggleDarkMode}/>
                    <span class="slider round"></span>
                </label>
            </nav>
        </header>
    )
}