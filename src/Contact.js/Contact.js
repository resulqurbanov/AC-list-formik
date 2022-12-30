import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import "./contact.scss"
function Contact() {
    const [first, setfirst] = useState([])
    return (
        <div className='task'>
            <Formik initialValues={{
                name: "",
                lastname: "",
                email: "",
                number: "",
                about: "",
            }}

                onSubmit={(values) => {
                    console.log(values.lastname);
                    setfirst((Deyer) => [...Deyer, values])
                }}>

                {
                    ({ value }) => (
                        <> <div className='basliq'>
                <h1>AC WORD:</h1>
            </div>
                          <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/07/assasins-creed-logo.jpg" alt=""/>
                        <Form className='inps'>
                            <Field name="name" placeholder='Name' className="inp" />
                            <Field name="lastname" placeholder='lastname' className="inp" />
                            <Field name="email" type="email" placeholder='email' className="inp" />
                            <Field name="about" placeholder='about' className="inp" />
                            <Field name="number" type="number" placeholder='number' className="inp" />
                            <button type='submit'>Send</button>
                        </Form>
                        </>
                    )
                }

            </Formik>
           
            {
                <div className='list'>
                    {
                        first.map((endValue, index) => {
                            return (
                                <ul key={index} className="lists">
                                    <li>Name:"{endValue.name}"</li>
                                    <li>LastName:"{endValue.lastname}"</li>
                                    <li>Email:"{endValue.email}"</li>
                                    <li>About:"{endValue.about}"</li>
                                    <li>Number:"{endValue.number}"</li>
                                </ul>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
export default Contact