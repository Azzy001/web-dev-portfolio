import social1 from '../images/social/linkedin.png';
import social2 from '../images/social/github.png';
import social3 from '../images/social/medium.png';
import social4 from '../images/social/cv.png';

const Social = () => {
    return (
        <div className="social">
            <div className="social-media-container">
                <a href="https://www.linkedin.com/in/arsalan-arref/"><img src={social1} alt="" /></a>
                <a href="https://github.com/Azzy001"><img src={social2} alt="" /></a>
                <a href="https://medium.com/@arsalan.arref"><img src={social3} alt="" /></a>
                <a href="../documents/Arsalan_cv_16-09-23.pdf" download="Arsalan_cv_16-09-23.pdf"><img src={social4} alt="" /></a>
                <div class="vertical-line">
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Social;