import './App.css';
import Header from './components/header'
import InfoBlock from "./components/infoBlock";
import SliderButtons from "./components/slider/sliderButtons";
import 'normalize.css'
import img1 from './images/img1.webp'
import img2 from './images/img2.webp'
import img3 from './images/img3.webp'
import img4 from './images/img4.webp'
import img5 from './images/img5.webp'
import img6 from './images/img6.webp'
import png1 from './images/png1.png'
import React, {useEffect, useState} from "react";
import Button from "./components/button";
import Footer from "./components/footer";

import logo1 from './images/logo/Doordash-logo.webp'
import logo2 from './images/logo/GitLab-logo.webp'
import logo3 from './images/logo/JD-Power-logo.webp'
import logo4 from './images/logo/Squarespace-logo.webp'
import logo5 from './images/logo/trivago-logo.webp'
import logo6 from './images/logo/wayfair-logo.webp'
import block from './components/info_block.module.css'

function App() {

    const [image, setImage] = useState(img1)
    const [rowReverse, setRowReverse] = useState('row-reverse')

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setRowReverse(window.innerWidth < 768 ? 'column' : 'row-reverse')
        })
    })

    return (
        <div className="App">
            <Header/>
            <main>
                <InfoBlock img={img1}
                           header={'An efficient, personalized way to engage with talent'}
                           text={'Sourcing Automation helps you find, reach and engage top talent quickly and effectively. Easily capture your prospects contact information, personalize and scale your outreach and automate communication – all with Greenhouse.'}
                           small={'Introducing Sourcing Automation'}
                           isShow={true}
                           button={<Button text={'See how it work'} background={'#008561'} color={'#fff'}
                           />}
                />
                <InfoBlock img={img2}
                           header={'Learning Greenhouse is easier than ever'}
                           text={'Train your team on Greenhouse and explore recruiting best practices with on-demand videos and courses. This resource library also highlights core workflow paths for recruiters, coordinators, hiring managers and interviewers.'}
                           direction={rowReverse}
                           button={<Button text={'Start learning'} background={'#008561'} color={'#fff'}/>}

                />
                <InfoBlock img={image}
                           header={'Set new hires up for success with Greenhouse Onboarding'}
                           direction={rowReverse}
                           component={<SliderButtons setImage={setImage}/>}
                />
                <InfoBlock img={img4}
                           header={'Is your hiring strategy ready for what’s next?'}
                           text={'Learn more about Greenhouse Hiring Maturity and find out if your company is moving up the curve.'}
                           button={<Button text={'Find out'} background={'#008561'} color={'#fff'}/>}

                />
                <InfoBlock img={img5}
                           header={'How to make confident, informed hiring decisions'}
                           text={'Climbing the Greenhouse Hiring Maturity™ curve Once you’ve understood the Greenhouse Hiring…'}
                           small={'Hiring Maturity, Talent strategy'}
                           direction={rowReverse}
                />
                <section>
                    <div>
                        <div style={{margin: '100px 0'}}>
                            <h1>You’re in good company</h1>
                            <Button text={'Share your thoughts on G2'} background={'#008561'} color={'#fff'}/>
                        </div>
                        <div style={{margin: '100px 0'}}>
                            <img src={logo1} alt="" className={block.logo}/>
                            <img src={logo2} alt="" className={block.logo}/>
                            <img src={logo3} alt="" className={block.logo}/>
                            <img src={logo4} alt="" className={block.logo}/>
                            <img src={logo5} alt="" className={block.logo}/>
                            <img src={logo6} alt="" className={block.logo}/>

                        </div>
                    </div>
                </section>
                <InfoBlock img={img6}
                           header={'Share your Greenhouse experience'}
                           text={'Has Greenhouse helped transform your hiring practices? Let fellow business leaders and talent pros know! Because when every company is good at hiring, every person s potential can be unlocked at work.'}
                           button={<Button text={'Add your review'} background={'#008561'} color={'#fff'}/>}
                />
                <InfoBlock img={png1}
                           header={'Ready to become great at hiring?'}
                           button={<Button text={'Request a demo'} background={'#3574d6'} color={'#fff'}/>}
                           background={'#113228'}
                           color={'white'}
                />
            </main>
            <Footer/>
        </div>
    );
}

export default App;
