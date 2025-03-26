import React, {useRef, useState} from 'react'
import emailjs from "@emailjs/browser"
const Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);


    const  handleChange = ({target: {name, value}}) => {
      setForm({...form, [name]: value})
    }



    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        try {
            await emailjs.send(
                'service_7vk20mg',
                'template_520awdr',
                {
                    name: form.name,
                    email: "wawerumuturi57@gmail.com",
                    message: form.message
                },
                'Ctf4VsbQM2XX-7tH4'
                )

            setLoading(false)

            alert("Your message has been sent!")

            setForm({
                 name: '',
                email: '',
                message: ''

            })
        } catch (e) {
            setLoading(false)

            alert("Something went wrong!")
            console.log("error sending email", e)
        }


    }

    return (
        <section className="c-space my-20" id="contact">

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen"/>

                <div className="contact-container">
                    <h3 className="head-text pt-7 lg:pt-12">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique
                        project to
                        life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
