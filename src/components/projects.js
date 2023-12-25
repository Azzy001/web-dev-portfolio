import image1 from '../images/projects/image1.png';
import image2 from '../images/projects/image2.png';
import image3 from '../images/projects/image3.png';
import image4 from '../images/projects/image4.png';
import image5 from '../images/projects/image5.png';
import image6 from '../images/projects/image6.png';
import image7 from '../images/projects/image7.png';
import image8 from '../images/projects/image8.png';
import image9 from '../images/projects/image9.png';
//383
const Projects = () => {
    return (
        <div className="projects">
            <div className="container">
                <div id="section-4">
                    <br />
                </div>
                <h1 id="section-title">MY PROJECTS</h1>

                <div className="projects-grid-container">
                    <div className="projects-grid-item">
                        <img src={image1} alt="project 1" />
                        <h1>IMAGE COMPRESSOR</h1>
                        <p>Run this program to reduce the size of your images; the program
                            will remove redundant/unnecessary data but will keep its
                            visual quality.</p>
                    </div>
                    <div className="projects-grid-item">
                        <img src={image2} alt="project 2" />
                        <h1>AMATEUR BOXING WEIGHT</h1>
                        <p>Discover your potential weight category for Amateur Boxing! Enter
                            your name, gender, and weight, and the system will do the rest,
                            revealing which category you belong to.</p>
                    </div>
                    <div className="projects-grid-item">
                        <img src={image3} alt="project 3" />
                        <h1>RUNESCAPE NEWS</h1>
                        <p>Get the latest RuneScape news and updates in one place! This
                            program scrapes information from the RuneScape website and presents
                            it with just one click. Click the image above to learn more!
                        </p>
                    </div>

                    <div className="projects-grid-item">
                        <img src={image4} alt="project 4" />
                        <h1>BEDE SLOT MACHINE</h1>
                        <p>Experience a classNameic slot machine game on the command line! Deposit
                            money, select your stake, and see the results. The game ends when
                            your balance reaches 0. Check out the rules on GitHub by clicking
                            the the image above.</p>
                    </div>
                    <div className="projects-grid-item">
                        <img src={image5} alt="project 5" />
                        <h1>PYTHON ARTICLE</h1>
                        <p>Discover the reasons why learning Python is crucial in 2022 with
                            this PDF document created using the FPDF library in Python.
                        </p>
                    </div>
                    <div className="projects-grid-item">
                        <img src={image6} alt="project 6" />
                        <h1>ROCK PAPER SCISSORS</h1>
                        <p>Looking for a quick and exciting game to play on the command line?
                            Try the classNameic Rock, Paper, Scissors game! It's easy to
                            play and loads of fun.</p>
                    </div>

                    <div className="projects-grid-item">
                        <img src={image7} alt="project 7" />
                        <h1>VIRTUAL BANK</h1>
                        <p>Welcome to virtual bank! You can now create as much virtual
                            currency as you please. Deposit, withdraw, and watch your digital
                            wealth skyrocket! Just remember, unlike real life, there's no
                            guarantee that this money will have any value tomorrow. Happy
                            virtual spending!</p>
                    </div>
                    <div className="projects-grid-item">
                        <img src={image8} alt="project 8" />
                        <h1>CONTACT BOOK</h1>
                        <p>Never lose your important contacts again with this amazing program
                            that lets you store them all on your computer! Best of all, it's
                            completely free, lightning-fast, and incredibly easy to use.
                        </p>
                    </div>
                    <div className="projects-grid-item">
                        <img src={image9} alt="project 9" />
                        <h1>GUESS GAME</h1>
                        <p>Get ready for an exciting guessing game built with the power of
                            Python's Tkinter library! You'll have a limited number of attempts
                            to guess the number. Ready to take on the challenge? Let the
                            guessing begin!</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;