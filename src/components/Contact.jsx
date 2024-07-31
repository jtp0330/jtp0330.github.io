import { useState, useEffect } from 'react'
import contactstyle from '../css/Contact.module.css'
import emailjs from '@emailjs/browser'
//helper function to send emails to service account


const Contact = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const prepareEmail = () => {
        // e.preventDefault()

        const details = {
            "sender": email,
            "message": message,
        }
        // sendEmail(details)
        alert("Email has been sent!")
    }


    const sendEmail = async (e) => {
        e.preventDefault()

        const details = {
            "sender": email,
            "message": message,
        }
        const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
        await emailjs.send(
            serviceId,
            templateId,
            details
        ).then(
            (resp) => {
                console.log(resp)
            }
        ).catch(
            (err) => {
                console.error(err)
            }
        )
        setFirstName("")
        setLastName("")
        setEmail("")
        setMessage("")
        alert("Email has been sent!")
    };

    //initilize emailjs service first
    useEffect(
        () => {
            emailjs.init(import.meta.env.VITE_EMAIL_KEY)
        }

    )
    return (
        <div className={`${contactstyle.contact} text-center`}>
            <h1>Let's Get In Touch!</h1>

            {/* TBD: replace with a form */}
            <ul>
                <p>Please reach out to me on my LinkedIn for more inquires regarding my services.</p>
                <li><a href="https://www.linkedin.com/in/jared-park-computer-scientist159/">LinkedIn</a></li>
                <li><a href="https://github.com/jtp0330">GitHub</a></li>
            </ul>
            <form onSubmit={sendEmail}>
                <div className={`${contactstyle.field}`}>
                    <label htmlFor="text">First Name</label>
                    <input type="text" onChange={(e) => { setFirstName(e.target.value) }}></input>
                </div>
                <div className={`${contactstyle.field}`}>
                    <label htmlFor="text">Last Name</label>
                    <input onChange={(e) => { setLastName(e.target.value) }}></input>
                </div >
                <div className={`${contactstyle.field}`}>
                    <label htmlFor="text">Email</label>
                    <input type="text" onChange={(e) => { setEmail(e.target.value) }}></input>
                </div >
                <div className={`${contactstyle.field}`}>
                    <label htmlFor="textarea">Message</label>
                    <textarea onChange={(e) => { setMessage(e.target.value) }}></textarea>
                </div >
                <input type="submit" className="btn btn-primary" />
            </form>
        </div >
    );
};
export default Contact;