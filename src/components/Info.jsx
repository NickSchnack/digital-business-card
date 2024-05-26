export default function Info() {
    let websiteUrl = "http://www.google.com/";
    let email = "mailto: ncschnack@gmail.com";
    let linkedInUrl = "https://www.linkedin.com/in/nicholas-schnack/";

    return (
        <div className="info">
            <img src="src/assets/photo.jpg" alt="Picture of Nick Schnack"></img>
            <h2 className="info--name">Nick Schnack</h2>
            <h3 className="info--job_title">Software Engineer</h3>
            <div className="info--website_button">                
                <a className="text" href={websiteUrl} target="_blank">nickschnack.website</a>
            </div>
            <div className="container">
                <a
                    className="info--email_button"
                    href={email}
                >
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </a>
                <a
                    className="info--linkedin_button"
                    href={linkedInUrl}
                    target="_blank"
                >
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
            </div>            
        </div>
    );
}