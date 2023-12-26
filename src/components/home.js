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
                        <p id="home-para">I'm a UK-based AWS DevOps Engineer with a focus on
                            seamlessly integrating cloud solutions. Specializing in programming
                            and web development, I streamline workflows and enhance scalability
                            using AWS services. Passionate about innovation, I stay ahead in the
                            dynamic DevOps landscape.</p>
                        <button className="contact-button" onClick={handleClick}>GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;