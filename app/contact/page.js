"use client"
import React from 'react'

import Navbar from '@/components/Navbar'
import Image from 'next/image'
import contactimg from '@/media/contact-img.png'
import handleSubmit from '@/components/Handlesubmit'

export default function page() {
    const [data, setData] = React.useState({
        name: "",
        email: "",
        phone: "",
        msg: ""
    })
    const submithandler = (e) => {
        e.preventDefault()
        if ((data.name.length) > 5 && (data.email.length) > 5 && data.phone.length >= 10 && data.msg.length > 5) {
            document.getElementById('msgsent').innerHTML = 'Sending...';

            handleSubmit(data.name, data.email, data.phone, data.msg)
            // console.log(data);

        }
        else{
            alert('Invalid Credentials')
        }

    }
    return (

        <>
            <section id="contact">
                <Navbar />
                <div className="row" style={{ width: '100%' }}>

                    <Image src={contactimg} style={{ width: '50%', marginTop: '10px' }}
                        className="contact-img animate__animated animate__pulse animate__infinite animate__slower" alt="" />
                    <div className="col-6" id="cform">
                        <h1 className="text-center fw-bold mt-3" style={{ color: 'white' }}>Get In Touch</h1>
                        <div>
                            <form onSubmit={submithandler}>
                                <div className="text-center my-4">
                                    <div>
                                        <input type="text" name="name"  id="fname" 
                                        onChange={(e) => setData({ ...data, name: e.target.value })}
                                         className="my-2" placeholder="Full Name" />

                                    </div>
                                    <div>
                                        <input type="text" name="email"  id="email" 
                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                         className="my-2" placeholder="E-mail" />

                                    </div>
                                    <div>

                                        <input type="text" name="phone"  id="phone" 
                                        onChange={(e) => setData({ ...data, phone: e.target.value })}
                                         className="my-2" placeholder="Phone" />
                                    </div>
                                    <textarea name="msg" id="msg" cols="30" rows="10" 
                                    onChange={(e) => setData({ ...data, msg: e.target.value })}
                                    placeholder="Your Message"></textarea>
                                    <div>
                                        <button type="submit" className="btn btn-primary" id="btn1"><i
                                            className="far fa-paper-plane"></i>
                                            <span id="msgsent">Send</span></button>

                                    </div>
                                </div>





                            </form>
                        </div>
                    </div>


                </div>
                <div className="text-center p-3" id='foot'
                    style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: 'red' }}>
                    © 2023 Copyright:
                    <a className="text-white" href="https://anshdev.com/">anshdev.com</a>
                    <a className="btn text-white btn-floating m-1" href="https://www.instagram.com/i_agarwal_ansh/" role="button"
                        style={{ backgroundColor: '#ac2bac' }}><i className="fab fa-instagram"></i></a>
                    {/* <!-- Linkedin --> */}
                    <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#0082ca' }}
                        href="https://www.linkedin.com/in/ansh-agarwal-390797253/" role="button"><i
                            className="fab fa-linkedin-in"></i></a>
                    {/* <!-- Github --> */}
                    <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#333333' }}
                        href="https://github.com/ANSH127" role="button"><i className="fab fa-github"></i></a>
                </div>


            </section>

        </>
    )
}
