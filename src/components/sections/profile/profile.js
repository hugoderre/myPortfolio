import React from 'react'
import './profile.css'
import MyFace from '../../img/photocv.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const skillTab = [
    {name: 'HTML', level: '8'},
    {name: 'CSS | SASS', level: '7'},
    {name: 'Javascript | jQuery', level: '7'},
    {name: 'React', level: '6'},
    {name: 'PHP', level: '6'},
    {name: 'SQL', level: '6'}
]



export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        AOS.init({
            duration : 2000
        })
    }

    

    render () {
        return (
            <div data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="middle-bottom" id="profile-main-id" className="container-fluid profile-main">
                <div className="item-bar profile-box shadow-lg">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="img-wrapper mx-auto">
                                <img src={MyFace} alt="Ma tête sur mon CV"/>
                            </div>
                            <div className="container text-center text-white text-about-me">
                                <h3>Who's this little man ?</h3><hr></hr> 
                                <p>
                                    Hi, I'm Hugo Derré, a Front-End Developper. <br/>I spend my time to animate and script things with passion !<br/>
                                    Recently, I discovered React, and i love this ! This portfolio is an exercise for practice it !
                                    Also, I maked applications that you can see below. Enjoy it ! 
                                </p>
                            </div>
                            
                        </div>
                        <div className="col-12 col-sm-6">  
                            <ul className="container-skill-bar align-middle">
                                {skillTab.map((skill, index) =>
                                    <Skill key={skill.name + '-' + index} data={skillTab[index]}/>
                                )}
                            </ul>
                        </div>
                    </div>      
                </div>
            </div>
        )
    }    
}

class Skill extends Profile {

    render() {
        return (
            <li className="item-bar text-white">
                {this.props.data.name}<br/>
                <div className="bar-wrapper">
                  <div className={"level-bar level-bar-" + this.props.data.level}>
                    <span>{this.props.data.level}0%</span>
                  </div>
                </div>
            </li>
        )
    }   
}