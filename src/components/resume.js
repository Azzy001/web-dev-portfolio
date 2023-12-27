import social4 from '../images/social/cv.png';

const Resume = () => {
    return (
        <div className="resume">
            <div className="resume-container">
                <div className="vertical-line-right" id="scroll-line-right">
                    <hr />
                </div>
                <a href="/Arsalan_cv_16-09-23.pdf" download="Arsalan_cv_16-09-23.pdf">
                    <img src={social4} alt="" /></a>
            </div>
        </div>
    );
}

export default Resume;