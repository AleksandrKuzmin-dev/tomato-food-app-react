import { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useKeyListener from '../../hooks/useKeyListener';
import { assets } from '../../assets/assets';

import './loginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState('Sign Up');
    const ref = useRef();

    const closePopup = () => {
        setShowLogin(false);
    };

    useKeyListener('Escape', closePopup);

    const onCloseByClick = (target) => {
        target === ref.current && closePopup();
    };

    const signUpSchema = Yup.object({
        name: Yup.string().trim().required('Field can not be empty'),
        email: Yup.string()
            .email('Must be a valid email')
            .min(3, 'Must be at least 3 characters long')
            .required('Field can not be empty'),
        password: Yup.string().required('Field can not be empty').min(6, 'Must be at least 6 characters long'),
        privacy: Yup.boolean().oneOf([true], 'Accept Privacy Policy.'),
    });

    const loginSchema = Yup.object({
        email: Yup.string()
            .email('Must be a valid email')
            .min(3, 'Must be at least 3 characters long')
            .required('Field can not be empty'),
        password: Yup.string().required('Field can not be empty').min(6, 'Must be at least 6 characters long'),
    });

    const validationSchema = currentState === 'Sign Up' ? signUpSchema : loginSchema;

    return (
        <div className="login-popup" ref={ref} onMouseDown={(event) => onCloseByClick(event.target)}>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    privacy: false,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    alert('Это демонстрационная версия, регистрация/вход недоступны.');
                    resetForm();
                    setShowLogin(false);
                }}>
                <Form className="login-popup-container">
                    <div className="login-popup-title">
                        <h2>{currentState}</h2>
                        <button className="login-popup-close" type="button" onClick={closePopup}>
                            <img src={assets.cross_icon} alt="close" />
                        </button>
                    </div>
                    <div className="login-popup-inputs">
                        {currentState === 'Login' ? null : (
                            <div className="login-popup-input">
                                <Field name="name" type="text" placeholder="Your name"></Field>
                                <ErrorMessage name="name" component="p" className="login-popup-error" />
                            </div>
                        )}
                        <div className="login-popup-input">
                            <Field name="email" type="email" placeholder="Your email"></Field>
                            <ErrorMessage name="email" component="p" className="login-popup-error" />
                        </div>
                        <div className="login-popup-input">
                            <Field name="password" type="password" placeholder="Password"></Field>
                            <ErrorMessage name="password" component="p" className="login-popup-error" />
                        </div>
                    </div>
                    <button type="submit" className="login-popup__account-btn">
                        {currentState === 'Sign Up' ? 'Create account' : 'Login'}
                    </button>
                    {currentState === 'Login' ? null : (
                        <>
                            <div className="login-popup-condition">
                                <Field name="privacy" type="checkbox" />
                                <p>By continuing, I agree to the terms of use & privacy policy.</p>
                            </div>
                            <ErrorMessage name="privacy" component="p" className="login-popup-error" />
                        </>
                    )}

                    {currentState === 'Login' ? (
                        <p>
                            Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
                        </p>
                    ) : (
                        <p>
                            Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span>
                        </p>
                    )}
                </Form>
            </Formik>
        </div>
    );
};

export default LoginPopup;
