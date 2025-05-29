import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'
import SQL from '../../assets/sql.png'
import { useState } from 'react'

function About() {
    const [display, setDisplay] = useState('block')
    const [buttonText, setButtonText] = useState('Hide')

    function toggle() {
        if (display == 'none') {
            setDisplay('block')
            setButtonText('Hide')
        } else {
            setDisplay('none')
            setButtonText('Show')
        }
    }

    return (
        <div id="about">
            <div style={{display: display,}}>
                <p>
                    I'm a student at Boston University studying Computer Science, Math, and Philosophy. Feel free to contact me at buerlee@bu.edu!
                </p>
                <br/>
                <h3>My Skills</h3>
                <div className="Aicons" >
                    <div className="row1">
                        <img src='https://skillicons.dev/icons?i=py&amp;theme=light'></img>
                        <img src='https://skillicons.dev/icons?i=cpp&amp;theme=light'></img>
                        <img src='https://skillicons.dev/icons?i=java&amp;theme=light'></img>
                        <img src='https://skillicons.dev/icons?i=mysql&amp;theme=light'></img>
                        <img src='https://skillicons.dev/icons?i=latex&amp;theme=light'></img>
                    </div>
                    <div className="row2">
                        <img src='https://skillicons.dev/icons?i=html&amp;theme=light'></img>
                        <img src='https://skillicons.dev/icons?i=css&amp;theme=light'></img>
                        <img src='https://skillicons.dev/icons?i=js&amp;theme=light'></img>
                        <img src='https://skillicons.dev/icons?i=ts&amp;theme=light'></img>
                        <img src='https://skillicons.dev/icons?i=git&amp;theme=light'></img>
                        <img src='https://skillicons.dev/icons?i=react&amp;theme=light'></img>
                        
                        {/* <img width="60" height="60" src={SQL}></img> */}

                        
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default About
