import { useState } from 'react'
import contactstyle from '../css/Contact.module.css'
import emailjs from '@emailjs/browser'

//helper function to send emails to service account
const sendEmail = (emailDetails) => {
    e.preventDefault()
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID)
    emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
            from_name: emailDetails.sender,
            message: emailDetails.message
        }
    ).then(
        (resp) => {
            console.log(resp)
        }
    ).catch(
        (err) => {
            console.error(err)
        }
    ).finally(
        (_) => {
            setFirstName("")
            setLastName("")
            setEmail("")
            setMessage("")
        }
    )
};


const Contact = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const prepareEmail = () => {

        alert("Email has been sent!")

        const details = {
            "sender": email,
            "message": message,
        }

        sendEmail(details)
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
            <form onSubmit={prepareEmail}>
                <div className={`${contactstyle.field}`}>
                    <label htmlFor="">First Name</label>
                    <input type="text" onChange={(e) => { setFirstName(e.target.value) }}></input></div>
                <div className={`${contactstyle.field}`}>
                    <label htmlFor="text">Last Name</label>
                    <input onChange={(e) => { setLastName(e.target.value) }}></input></div >
                <div className={`${contactstyle.field}`}>
                    <label htmlFor="text">Email</label>
                    <input type="text" onChange={(e) => { setEmail(e.target.value) }}></input></div >
                <div className={`${contactstyle.field}`}>
                    <label htmlFor="textarea">Message</label>
                    <textarea onChange={(e) => { setMessage(e.target.value) }}></textarea></div >
                <input type="submit" className="btn-primary" />
            </form>
        </div >
    );
};
export default Contact;