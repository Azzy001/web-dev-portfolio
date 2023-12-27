import vaultPip from '../images/skills/vault-3.gif';

const Skills = () => {
    return (
        <div className="skills">
            <div className="container">
                <div id="section-3">
                    <br />
                </div>
                <h1 id="section-title"><span className="navbar-num">03. </span>SKILLS</h1>
                <div className="skills-container">
                    <div className="d-flex align-items-start">
                        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">

                            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-settings" type="button" role="tab"
                                aria-controls="v-pills-home" aria-selected="true">WELCOME</button>

                            <button className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-home" type="button" role="tab"
                                aria-controls="v-pills-home" aria-selected="true">SOFT SKILLS</button>

                            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile" type="button" role="tab"
                                aria-controls="v-pills-profile" aria-selected="false">TECHNICAL SKILLS</button>

                            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-messages" type="button" role="tab"
                                aria-controls="v-pills-messages" aria-selected="false">BUSINESS SKILLS</button>
                        </div>

                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-settings" role="tabpanel"
                                aria-labelledby="soft-tab" tabIndex="0">

                                <div className="skills-tab-container">
                                    <div className="skills-tab">
                                        <div className="center-img">
                                            <img src={vaultPip} alt="vault pip" />
                                        </div>
                                    </div>

                                    <div className="skills-tab">
                                        <h1 id="vault-title">WELCOME</h1>
                                        <h2 id="vault-version">PIP PAD 3.1</h2>
                                        <p id="vault-para">Tech proficiency, soft skills, and business
                                            insights, all in one glance. Explore now!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="v-pills-home" role="tabpanel"
                                aria-labelledby="technical-tab" tabIndex="0">
                                <div className="skills-tab-container">

                                    <div className="skills-tab">
                                        <table className="table table-hover">
                                            <tbody>
                                                <tr><td>Approaching problems with a logical and
                                                    analytical mindset.</td></tr>
                                                <tr><td>Adapting strategies to overcome challenges.</td></tr>
                                                <tr><td>Prioritising tasks and meeting deadlines.</td></tr>
                                                <tr><td>Finding unique solutions to challenges.</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="skills-tab">
                                        <table className="table table-hover">
                                            <tbody>
                                                <tr><td>Building and maintaining professional relationships.
                                                </td></tr>
                                                <tr><td>Understanding and meeting the needs of
                                                    customers or clients.</td></tr>
                                                <tr><td>Delegating tasks effectively and providing guidance.
                                                </td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="technical-tab" tabIndex="0">
                                <div className="skills-tab-container">

                                    <div className="skills-tab">
                                        <table className="table table-hover">
                                            <tbody>
                                                <tr><td>AWS Certified, AWS Services.</td></tr>
                                                <tr><td>Python, JavaScript, HTML, CSS</td></tr>
                                                <tr><td>WordPress, Bootstrap, React.</td></tr>
                                                <tr><td>DevOps, Terraform, CloudFormation</td></tr>
                                                <tr><td>GitHub, Git, CI/CD, VSC.</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="skills-tab">
                                        <table className="table table-hover">
                                            <tbody>
                                                <tr><td>Tickiting systems: ServiceNow, Remedy, Assyst</td>
                                                </tr><tr><td>Windows 7, 8, 10, 11, Linux, Ubuntu</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="business-tab" tabIndex="0">
                                <div className="skills-tab-container">

                                    <div className="skills-tab">
                                        <table className="table table-hover">
                                            <tbody>
                                                <tr><td>Continuous learning mindset and eagerness to stay
                                                    updated with the latest technologies and industry trends</td></tr>
                                                <tr><td>Customer service skills to interact with clients,
                                                    understand their requirements, and provide effective solutions.</td></tr>
                                                <tr><td>Excellent communication and collaboration skills
                                                    for working in cross-functional teams.</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="skills-tab">
                                        <table className="table table-hover">
                                            <tbody>
                                                <tr><td>Familiarity with version control systems like Git.</td></tr>
                                                <tr><td>Analytic & Problem-Solving Ability, communications Skills.</td></tr>
                                                <tr><td>Knowledge of security best practices and implementation.</td></tr>
                                                <tr><td>Strong organisational and time management skills to effectively prioritise tasks and meet deadlines.</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;