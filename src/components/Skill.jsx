import ProgressBar from 'react-bootstrap/ProgressBar'
import skillstyle from '../css/Skill.module.css'

const Skill = (props) => {

    const { appProficiency, appName, imgPath } = props;

    return (
        <div className={skillstyle.skillz}>
            <img src={imgPath} alt="app logo" width="100" height="100" />
            <div className={skillstyle.proficiency}>
                <h2>{appName}</h2>
                {/* <ProgressBar now={appProficiency} label={`${appProficiency}%`} /> */}
                <div style={{ display: "flex", alignItems: "center", backgroundColor: "black", width: "100%", height: "9px", borderRadius: "30px" }}>
                    <div className={skillstyle.progressBar} style={{ width: `${appProficiency}%`, backgroundColor: "aqua" }}>
                        <p style={{ backgroundColor: "transparent", textAlign: "left" }}>{appProficiency}%</p>
                    </div>
                </div>
            </div>
        </div >
    )

};
export default Skill;