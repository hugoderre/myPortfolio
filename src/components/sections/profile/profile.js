import React from 'react'
import './profile.css'
import MyFace from '../../img/photocv.png'


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

    state = { isHide: false };

    hideBar = () => {
       const { isHide } = this.state

       window.scrollY < 300 ? !isHide && this.setState({ isHide: true }) : isHide && this.setState({ isHide: false }) 

       this.prev = window.scrollY;
       
    }

    componentDidMount(){
        window.addEventListener('scroll', this.hideBar);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.hideBar);
    }

    render () {
        const classHide = this.state.isHide ? 'hide' : '';
        return (
            <div className="container-fluid profile-main">
                <div className={classHide + "fadeIn item-bar profile-box"}>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="img-wrapper">
                                <img src={MyFace} alt="Ma tête sur mon CV"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">  
                            <ul>
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
    // constructor(props) {
    //     super(props);
    // }

    // state = { isHide: false };

    // hideBar = () => {
    //    const { isHide } = this.state

    //    window.scrollY < 300 ?
    //    !isHide && this.setState({ isHide: true })
    //    :
    //    isHide && this.setState({ isHide: false });

    //    this.prev = window.scrollY;
    //    console.log(this.prev)
    // }

    // componentDidMount(){
    //     window.addEventListener('scroll', this.hideBar);
    // }

    // componentWillUnmount(){
    //      window.removeEventListener('scroll', this.hideBar);
    // }

    render() {
        const classHide = this.state.isHide ? 'hide' : '';
        return (
            <li className={classHide + "fadeIn item-bar"}>
                {this.props.data.name}<br/>
                <div className="bar-wrapper">
                    <div className={classHide + "skill-bar-" + this.props.data.level}></div>
                </div>
            </li>
        )
    }
    
}