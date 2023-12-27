import social1 from '../images/social/linkedin.png';
import social2 from '../images/social/github.png';
import social3 from '../images/social/medium.png';


const Social = () => {
    return (
        <div className="social">
            <div className="social-media-container">
                <a href="https://www.linkedin.com/in/arsalan-arref/"><img src={social1} alt="" /></a>
                <a href="https://github.com/Azzy001"><img src={social2} alt="" /></a>
                <a href="https://medium.com/@arsalan.arref"><img src={social3} alt="" /></a>
                <div className="vertical-line-left">
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Social;