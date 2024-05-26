export default function Footer() {
    let email = "mailto: nickschnack@gmail.com";
    let githubUrl = "http://github.com/NickSchnack/";    
    let linkedInUrl = "https://www.linkedin.com/in/nicholas-schnack/";

    return (
        <footer>
            <div className="footer--divider"/>
            <div className="container">
                <a href={email}><i action="mailto:someone@example.com" className="fa-solid fa-square-envelope"></i></a>
                <a href={githubUrl} target="_blank"><i className="fa-brands fa-square-github"></i></a>
                <a href={linkedInUrl} target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </footer>
    );
}