import React from 'react'
import './profile.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './hexagon.css'


const skillTab = [
    {name: 'HTML', level: '9'},
    {name: 'CSS | SASS', level: '8'},
    {name: 'Javascript | jQuery', level: '8'},
    {name: 'React', level: '7'},
    {name: 'Wordpress', level: '8'},
    {name: 'Git', level: '7'},
    {name: 'SQL', level: '6'},
    {name: 'PHP', level: '6'}
    
]



export default class Profile extends React.Component {
    
    componentDidMount(){
        AOS.init({
            duration : 2000
        })
    }

    render () {
        return (
            <section data-aos="fade-right" data-aos-once="true" data-aos-anchor-placement="center" id="profile-main-id" className="container-fluid profile-main" name="profile">
                <div className="item-bar profile-box shadow-lg">
                    <h2 data-aos="fade-right" data-aos-once="true" className="text-center text-white sections-title">Profile</h2><hr></hr>
                    <div className="row mt-5">
                        <div className="col-12 col-sm-6">
                            <div className="hexagone mb-4 mx-auto">
                                <div className="hexagonemain"></div>
                            </div>
                            <div className="container text-center text-white text-about-me">
                                <h3>Who's this little man ?</h3><hr></hr> 
                                <p>
                                    Hi, I'm Hugo Derré, a Front-End Developper. <br/>I spend my time to script and animate things with passion !<br/>
                                    </p><hr></hr><p>Recently, I discovered React, and i love this ! This portfolio is an exercise to practice it.
                                    Also, I maked applications that you can see below. 
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
            </section>
        )
    }    
}

class Skill extends Profile {

    render() {
        return (
            <li data-aos="fade-right" data-aos-once="true" className="item-bar text-white mb-3">
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