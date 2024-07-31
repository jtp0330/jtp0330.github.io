import ProgressBar from 'react-bootstrap/ProgressBar'
import skillstyle from '../css/Skill.module.css'

const Skill = (props) => {

    const { appProficiency, appName, imgPath } = props;

    return (
        <div className="d-flex flex-row justify-content-start align-items-center p-3 w-25">
            <img src={imgPath} alt="app logo" width="75" height="75" />
            <div className={skillstyle.proficiency}>
                <h2>{appName}</h2>
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