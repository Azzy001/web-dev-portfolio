import React, { useEffect } from 'react';

const Experience = () => {
    useEffect(() => {
        const tabs = document.querySelectorAll('.nav-link');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', function (e) {
                e.preventDefault();

                // Remove 'active' class from all tabs and tab contents
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(tc => tc.classList.remove('active'));

                // Add 'active' class to the clicked tab
                tab.classList.add('active');

                // Show the corresponding tab content
                const targetTab = tab.getAttribute('data-tab');
                const targetContent = document.getElementById(targetTab);

                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });

        // Cleanup: Remove event listeners when the component is unmounted
        return () => {
            tabs.forEach(tab => {
                tab.removeEventListener('click', function () {
                    // Handle click
                });
            });
        };
    }, []); // Empty dependency array ensures that this effect runs once, similar to componentDidMount

    return (
        <div className="experience">
            <div className="container">
                <div id="section-4"><br />
                </div>
                <h1 id="section-title"><span className="navbar-num">03. </span>EXPERIENCE</h1>
                <div className="experience-container">
                    <ul className="nav nav-underline" id="myTabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" data-tab="tab1">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-tab="tab2">Exp 01</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-tab="tab3">Exp 02</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-tab="tab4">Exp 03</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-tab="tab5">Exp 04</a>
                        </li>
                    </ul>

                    <div id="tab1" className="tab-content active">
                        <p>Explore professional journey! As you click through the tabs, you'll gain
                            insights into my diverse roles as both a Support Engineer and a DevOps Engineer.
                            Explore the evolution of my skills, challenges faced, and impactful contributions
                            across these roles. Each tab unfolds a chapter in my technology journey, offering a
                            glimpse into the dynamic blend of support expertise and DevOps proficiency that has
                            shaped my career.</p>
                    </div>

                    <div id="tab2" className="tab-content">
                        <div className="exp-grid-container">
                            <br />
                            <h1 id="position-title">AWS DevOps Engineer<span id="section-at"> @</span><span id="company-name">Version1</span></h1>
                            <div className="exp-grid">
                                <p>• Work with the security team to ensure infrastructure meets security and compliance requirements.</p>
                                <p>• Stay updated with the latest trends and technologies in DevOps and cloud computing.</p>
                                <p>• Implement security best practices and ensure compliance with industry standards.</p>
                                <p>• Review and test infrastructure code changes submitted by other team members.</p>
                                <p>• Collaborate with stakeholders to define and maintain Terraform modules and reusable infrastructure components.</p>
                                <p>• Maintain and version control infrastructure code using Git and GitHub, ensuring proper branching and merging strategies.</p>
                            </div>
                            <div className="exp-grid">
                                <p>• Deploy and manage containerised applications using Docker, ensuring scalability and high availability.</p>
                                <p>• Work with AWS services such as EC2, S3, RDS, and IAM to provision and configure cloud resources.</p>
                                <p>• Use Terraform Cloud or other CI/CD platforms to automate the deployment and management of infrastructure.</p>
                                <p>• Use Terraform to create and manage infrastructure as code (IaC) to provision and configure resources on AWS.</p>
                            </div>
                        </div>
                    </div>

                    <div id="tab3" className="tab-content">
                        <div className="exp-grid-container">
                            <br />
                            <h1 id="position-title">System Support Engineer<span id="section-at"> @</span><span id="company-name">Northern PowerGrid</span></h1>
                            <div className="exp-grid">
                                <p>• Collaborating and communicating with team members and end-users via ServiceNow (SaaS) and Microsoft Teams.</p>
                                <p>• Gathered data through ServiceNow and NextThink Finder and produced analytical documentations.</p>
                                <p>• Provided onsite/remote support for engineers with White Glove/White Suit builds.</p>
                                <p>• Diagnosed issues with printers, softwares, and repaired/upgraded laptops and toughpads/toughbooks.</p>
                            </div>
                            <div className="exp-grid">
                                <p>• Deployed and managed applications via Intune, including pushing patches/updates.</p>
                                <p>• Dealing with client tickets/incidents via ServiceNow.</p>
                                <p>• Controlled corporate resources on managed devices; PCs, laptops, smartphones, tablets, toughbooks/toughpads.</p>
                                <p>• Expertly given exceptional support for end users and VIP users.</p>
                            </div>
                        </div>
                    </div>

                    <div id="tab4" className="tab-content">
                        <div className="exp-grid-container">
                            <br />
                            <h1 id="position-title">System Support Engineer<span id="section-at"> @</span><span id="company-name">IAG British Airways</span></h1>
                            <div className="exp-grid">
                                <p>• Maintained the configuration and installation of end-user systems; performed patch updates, hardware upgrades and hardware replacements</p>
                                <p>• Coached and coordinated new starters and graduates, allocated tasks and provided support.</p>
                            </div>
                            <div className="exp-grid">
                                <p>• Carried out troubleshooting for printers and replaced cartridges.</p>
                                <p>• Created analytical documentations for the Apps team and for project managers.</p>
                                <p>• Provided exceptional support for end-users via ServiceNow.</p>
                            </div>
                        </div>
                    </div>

                    <div id="tab5" className="tab-content">
                        <div className="exp-grid-container">
                            <br />
                            <h1 id="position-title">System Support Engineer<span id="section-at"> @</span><span id="company-name">Virgin Media</span></h1>
                            <div className="exp-grid">
                                <p>• Organised and maintained the entire operations in the VM office and ensured that the workflow was smooth, trained and collaborated with graduates of TCS and contractors.</p>
                                <p>• Tested applications for the Apps team and produced documentations outlining, functionality issues, GUI issues etc.</p>
                            </div>
                            <div className="exp-grid">
                                <p>• Handled tickets via Remedy, upgraded/repaired laptops, and desktops (laptop screen, upgrading RAMs, SSDs etc).</p>
                                <p>• Handled communications with Yodel, VM end-users and TCS teams, updated PM daily with deployment.</p>
                                <p>• Managing a team of only three onsite engineers due to Covid, I efficiently supervised the daily deployment of a</p>
                                <p>• substantial number of laptops, ultimately delivering the project on time. Our team's outstanding performance enabled us to achieve the project deadline with an impressive 62.5% reduction in workforce.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
