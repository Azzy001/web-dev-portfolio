import profileImage from '../images/about/profile.jpg';

const Home = () => {
    const emailAddress = 'arsalan.dev.engineer@gmail.com';
    const handleClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    }

    return (
        <div className="home">
            <div className="container">
            <div id="section-1">
                <br />
            </div>
                <div className="home-grid-container">
                    <div>
                        <img id="profile-img" src={profileImage} alt="" />
                    </div>
                    <div>
                        <h5 id="home-title-1">Hello, my name is</h5>
                        <h1 id="home-title-2">Arsalan Mohammad Arref.</h1>
                        <h1 id="home-title-3">AWS Associate DevOps Engineer</h1>
                        <p id="home-para">We're here to connect and collaborate. Have a project
                            in mind or just want to say hello? Feel free to reach out to us through
                            the contact form below. We look forward to hearing from you and exploring
                            the exciting possibilities of working together.
                        </p>
                        <button className="contact-button" onClick={handleClick}>GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;