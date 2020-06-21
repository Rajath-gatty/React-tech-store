import React from 'react'
import Title from '../Title'

const Contact = () => {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us" />
                    <form action="https://formspree.io/mgenybed" method="POST" className="mt-5" >
                        <div className="form-group">
                            <input type="text" name="Name" className="form-control" placeholder="FirstName" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="email@email.com" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject" className="form-control" placeholder="important!!" />
                        </div>
                        <div className="form-group">
                            <textarea type="text" name="message" row="10" className="form-control" placeholder="Your message" />
                        </div>
                        <div className="form-group mt-3 ">
                            <input type="submit" value="send" className="form-control bg-primary text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </section >
    );
}

export default Contact;