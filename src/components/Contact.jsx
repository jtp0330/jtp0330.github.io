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
            <ul>
                <p>Please reach out to me on my LinkedIn for more inquires regarding my services.</p>
                <li><a href="https://www.linkedin.com/in/jared-park-computer-scientist159/">LinkedIn</a></li>
                <li><a href="https://github.com/jtp0330">GitHub</a></li>
            </ul>
            <form onSubmit={prepareEmail} className="d-flex flex-column justify-content-center align-items-center">
                <div className={`d-flex flex-row mb-3`}>
                    <label htmlFor="" className="form-label">First Name</label>
                    <input type="text" className="form-control" onChange={(e) => { setFirstName(e.target.value) }}></input></div>
                <div className={`d-flex flex-row mb-3`}>
                    <label htmlFor="text" className="form-label">Last Name</label>
                    <input className="form-control" onChange={(e) => { setLastName(e.target.value) }}></input></div >
                <div className={`d-flex flex-row mb-3`}>
                    <label htmlFor="text" className="form-label">Email</label>
                    <input type="text" className="form-control" onChange={(e) => { setEmail(e.target.value) }}></input></div >
                <div className={`d-flex flex-row mb-3`}>
                    <label htmlFor="textarea" className="form-label">Message</label>
                    <textarea className="form-control" onChange={(e) => { setMessage(e.target.value) }}></textarea></div >
                <input type="submit" className="btn btn-primary" />
            </form>
        </div >
    );
};
export default Contact;