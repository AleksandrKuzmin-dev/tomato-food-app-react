import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';

import { selectTotalAmount } from '../../store/slices/cartItems.slice';

import './placeOrder.css';

const PlaceOrder = () => {
    const totalAmount = useSelector(selectTotalAmount);
    const navigate = useNavigate();

    const orderSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'First name must be at least 2 characters')
            .max(50, `First name can't be longer than 50 characters`)
            .required('First name is required'),
        lastName: Yup.string()
            .min(2, 'Last name must be at least 2 characters')
            .max(50, `Last name can't be longer than 50 characters`)
            .required('Last name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        street: Yup.string().required('Street is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        zipCode: Yup.string()
            .matches(/^[0-9]+$/, 'Zip Code must be numeric')
            .min(5, 'Zip Code must be at least 5 digits')
            .max(9, 'Zip Code must be less than or equal to 9 digits')
            .required('Zip Code is required'),
        country: Yup.string().required('Country is required'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Phone number must be numeric')
            .min(10, 'Phone number must be at least 10 digits')
            .max(15, 'Phone number must be less than or equal to 15 digits')
            .required('Phone is required'),
    });

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                street: '',
                city: '',
                state: '',
                zipCode: '',
                country: '',
                phone: '',
            }}
            validationSchema={orderSchema}
            onSubmit={(values, { resetForm }) => {
                alert('Это демонстрационная версия, оформление доставки недоступно. Вы будете возвращены на главную страницу.');
                resetForm();
                navigate('/');
            }}>
            <Form className="place-order">
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-fields">
                        <div class="place-order-field">
                            <Field name="firstName" type="text" placeholder="First Name" />
                            <ErrorMessage name="firstName" component="p" className="place-order-error" />
                        </div>
                        <div class="place-order-field">
                            <Field name="lastName" type="text" placeholder="Last Name" />
                            <ErrorMessage name="lastName" component="p" className="place-order-error" />
                        </div>
                    </div>
                    <div class="place-order-field">
                        <Field name="email" type="email" placeholder="Email address" />
                        <ErrorMessage name="email" component="p" className="place-order-error" />
                    </div>
                    <div class="place-order-field">
                        <Field name="street" type="text" placeholder="Street" />
                        <ErrorMessage name="street" component="p" className="place-order-error" />
                    </div>
                    <div className="multi-fields">
                        <div class="place-order-field">
                            <Field name="city" type="text" placeholder="City" />
                            <ErrorMessage name="city" component="p" className="place-order-error" />
                        </div>
                        <div class="place-order-field">
                            <Field name="state" type="text" placeholder="State" />
                            <ErrorMessage name="state" component="p" className="place-order-error" />
                        </div>
                    </div>
                    <div className="multi-fields">
                        <div class="place-order-field">
                            <Field name="zipCode" type="text" placeholder="Zip code" />
                            <ErrorMessage name="zipCode" component="p" className="place-order-error" />
                        </div>
                        <div class="place-order-field">
                            <Field name="country" type="text" placeholder="Country" />
                            <ErrorMessage name="country" component="p" className="place-order-error" />
                        </div>
                    </div>
                    <div class="place-order-field">
                        <Field name="phone" type="phone" placeholder="Phone" />
                        <ErrorMessage name="phone" component="p" className="place-order-error" />
                    </div>
                </div>
                <div className="place-order-right">
                    <div className="cart-total">
                        <h2>Cart Totals</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>${totalAmount}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>${totalAmount === 0 ? 0 : 2}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>${totalAmount === 0 ? 0 : totalAmount + 2}</b>
                            </div>
                        </div>
                        <button type="submit">PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};

export default PlaceOrder;
