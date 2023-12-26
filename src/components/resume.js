import social4 from '../images/social/cv.png';
import React, { useState, useEffect } from 'react';

const Resume = () => {
    return (
        <div className="resume">
            <div className="resume-container">
                <div class="vertical-line-right" id="scroll-line-right">
                    <hr />
                </div>
                <a href="/resume/Arsalan_cv_16-09-23.pdf" download="Arsalan_cv_16-09-23.pdf">
                    <img src={social4} alt="" /></a>
            </div>
        </div>
    );
}

export default Resume;