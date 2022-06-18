
import css from './join.css'
import React, { useState } from 'react';
import dog from '../../assets/images/dog-cartoon.png'
import Footer from '../footer';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import coffee from '../../assets/images/coffee.png'


const Join = () => {


    const [formState, setFormState] = useState({
        username: '', email: '',
        password: '', 
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            console.log(data);
            Auth.login(data.addUser);
        } catch (e) {
            console.error(e);
        }
    }
        return (
            <>
                <main className="join-form">
                    <div className="myForm">

                        {/* <div className="card">
                        <h4 className="card-header">Sign Up</h4>
                        <div className="card-body"> */}
                        
                        <form className="form-style" id="form" onSubmit={handleFormSubmit}>
                        <h6 id="join">Join us for <img style={{height:"50px"}}src= {coffee} alt="coffee icon" /> </h6>  
                       
                           
                            <input
                                className="form-input"
                                placeholder="Your username"
                                name="username"
                                type="username"
                                id="username"
                                value={formState.username}
                                onChange={handleChange}
                            />

                            <input
                                className="form-input"
                                placeholder="Your email"
                                name="email"
                                type="email"
                                id="email"
                                value={formState.email}
                                onChange={handleChange}
                            />
                        

                            <input
                                className="form-input"
                                placeholder="password"
                                name="password"
                                type="password"
                                id="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                           
                            <div className="submit">
                                <button id="btn-submit" className="btn btn-light" data-testid="button" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                       
                    </div>

                    {error && <div>Signup failed</div>}




                </main>
             
            </>
        )

    }

    export default Join;