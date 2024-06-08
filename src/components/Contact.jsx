import react from 'react'
import contactstyle from '../css/Contact.module.css'

const Contact = () => {

    const sendEmail = () => {
        alert("Email has been sent!")
    }
    return (
        <div className={`${contactstyle.contact} text-center`}>
            <h1>Let's Get In Touch!</h1>

            {/* TBD: replace with a form */}
            <ul>
                <p>Please reach out to me on my LinkedIn for more inquires regarding my services.</p>
                <li><a href="https://www.linkedin.com/in/jared-park-computer-scientist159/">LinkedIn</a></li>
                <li><a href="https://github.com/jtp0330">GitHub</a></li>
            </ul>
            <form>
                <div className={`${contactstyle.field}`}>
                    <label for="">First Name</label>
                    <input type="text"></input></div>
                <div className={`${contactstyle.field}`}>
                    <label for="text">Last Name</label>
                    <input></input></div >
                <div className={`${contactstyle.field}`}>
                    <label for="text">Email</label>
                    <input></input></div >
                <div className={`${contactstyle.field}`}>
                    <label for="textarea">Message</label>
                    <input></input></div >
                <input type="submit" />
            </form>
        </div >
    );
};
export default Contact