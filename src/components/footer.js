import React from 'react';
import footer from './footer.module.css'
import Button from "./button";

const Footer = () =>{
    return (
        <footer className={footer.foot}>
            <div className={footer.links}>
                <div className={footer.left}>
                    <div>
                        <div className={footer.section}>
                            <p>Products</p>
                            <ul>
                                <li><a href="/">Recruiting</a></li>
                                <li><a href="/">Onboarding</a></li>
                                <li><a href="/">Pricing</a></li>
                            </ul>
                        </div>
                        <div className={footer.section}>
                            <p>Segments</p>
                            <ul>
                                <li><a href="/">Enterprise</a></li>
                                <li><a href="/">Small to midsize</a></li>
                            </ul>
                        </div>
                        <div className={footer.section}>
                            <p>Solutions</p>
                            <ul>
                                <li><a href="/">Integrations</a></li>
                                <li><a href="/">Structured hiring</a></li>
                                <li><a href="/">Talent sourcing</a></li>
                                <li><a href="/">Candidate experience</a></li>
                                <li><a href="/">Diversity, equity & inclusion</a></li>
                                <li><a href="/">More solutions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={footer.section}>
                            <p>Resources</p>
                            <ul>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Guidance</a></li>
                                <li><a href="/">Customer stories</a></li>
                                <li><a href="/">Support</a></li>
                                <li><a href="/">Developer resources</a></li>
                            </ul>
                        </div>
                        <div className={footer.section}>
                            <p>Platform</p>
                            <ul>
                                <li><a href="/">Ethical principles</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">Mobile</a></li>
                                <li><a href="/">APIs</a></li>
                                <li><a href="/">Security</a></li>
                                <li><a href="/">GDPR</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={footer.section}>
                            <p>About us</p>
                            <ul>
                                <li><a href="/">Mission</a></li>
                                <li><a href="/">Belonging</a></li>
                                <li><a href="/">Company</a></li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Press & awards</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                        <div className={footer.section}>
                            <p>Community</p>
                            <ul>
                                <li><a href="/">Events</a></li>
                                <li><a href="/">Open</a></li>
                                <li><a href="/">Talent Makers</a></li>
                                <li><a href="/">Newsletter</a></li>
                            </ul>
                        </div>
                    </div>



                </div>
                <div className={footer.right}>
                    <p>Modern Recruiter newsletter</p>
                    <p>Our bi-weekly newsletter full of inspiration, podcasts, trends and news.</p>
                    <form action="" className={footer.form}>
                        <label htmlFor="">Email address</label>
                        <input type="text"/>
                        <Button text={'Subscibe'}
                                background={'transparent'}
                                color={'white'}
                                border={'1px solid white'}
                        />
                    </form>
                </div>
            </div>
            <p className={footer.small}>©2025 Greenhouse Software, Inc.</p>
            <p className={footer.small}>“Hire for what’s next” and “Greenhouse Talent Makers” are trademarks of Greenhouse Software.</p>
        </footer>
    )
}

export default Footer;
