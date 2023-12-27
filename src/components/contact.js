const Contact = () => {
    const emailAddress = 'arsalan.dev.engineer@gmail.com';

    const handleClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    }

    return (
        <div className="contact">
            <div className="container">
                <div id="section-6"><br /></div>
                <h5 id="section-title"><span className="navbar-num">06. </span>What's next?</h5>
                <h1>Get in Touch</h1>
                <p>I'm on the lookout for exciting opportunities and would love to hear from
                    you. Feel free to reach out with any potential projects or just to say hello.
                    Your emails are always welcome, and I'll make sure to respond promptly!</p>
                <button className="contact-button" onClick={handleClick}>GET IN TOUCH</button>
            </div>
        </div>
    );
}

export default Contact;








