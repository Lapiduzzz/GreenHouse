import React, {useState} from 'react';
import block from '../info_block.module.css'

import img1 from '../../images/img1.webp'
import img2 from '../../images/img2.webp'
import img3 from '../../images/img3.webp'
import img4 from '../../images/img4.webp'
import img5 from '../../images/img5.webp'

const SliderButtons = ({setImage}) => {

    return (
        <div className={block.slider_container}>
            <div onClick={() => setImage(img1)} className={block.slider_button}>
                <p>Integrate new hires into the team more quickly</p>
            </div>
            <div onClick={() => setImage(img2)} className={block.slider_button}>
                <p>Design personal welcome experiences</p>
            </div>
            <div onClick={() => setImage(img1)} className={block.slider_button}>
                <p>Apply consistent and fair processes</p>
            </div>
            <div onClick={() => setImage(img2)} className={block.slider_button}>
                <p>Keep everything moving forward with automated tasks</p>
            </div>
            <div onClick={() => setImage(img1)} className={block.slider_button}>
                <p>Build a foundation for constant improvement</p>
            </div>
        </div>

    )
}

export default SliderButtons;
