import ProgressBar from 'react-bootstrap/ProgressBar'
import skillstyle from '../../css/Skill.module.css'

const Skill = (props) => {

    const { appProficiency } = props;

    return (
        <div className={skillstyle.skillz}>
            <img src="#" alt="app logo" width="200" height="200" />
            <div className="proficiency">
                <h2>App Name</h2>
                <ProgressBar now={appProficiency} label={`${appProficiency}%`} />
            </div>
        </div>
    )

};
export default Skills;