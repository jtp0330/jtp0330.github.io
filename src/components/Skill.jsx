import ProgressBar from 'react-bootstrap/ProgressBar'
import skillstyle from '../css/Skill.module.css'

const Skill = (props) => {

    const { appProficiency, appName, imgPath } = props;

    return (
        <div className={skillstyle.skillz}>
            <img src={imgPath} alt="app logo" width="100" height="100" />
            <div className="proficiency">
                <h2>{appName}</h2>
                <ProgressBar now={appProficiency} label={`${appProficiency}%`} />
            </div>
        </div>
    )

};
export default Skill;