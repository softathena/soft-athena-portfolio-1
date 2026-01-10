<<<<<<< HEAD
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import ErrorMsg from "./FormErrorMsg/ErrorMsg";

const ContactServiceForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data: any) => {
        const toastId = toast.loading("Submitting your form...");
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            console.log("Form Data: ", data);
            toast.success("Thank you! We have received your message and will contact you shortly.", {
                id: toastId,
                duration: 5000,
            });
            reset();
        } catch (error) {
            console.error("Form Submission Error: ", error);
            toast.error("An error occurred while submitting your form. Please try again.", {
                id: toastId,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-5 align-items-center justify-content-center">
                <div className="col-lg-6">
                    <div className="from__input-box">
                        <div className="form__input style-two">
                            <input
                                type="text"
                                placeholder="First Name"
                                {...register("firstName", { required: "First Name is required" })}
                            />
                            <ErrorMsg error={errors.firstName} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="from__input-box">
                        <div className="form__input style-two">
                            <input
                                type="text"
                                placeholder="Last Name"
                                {...register("lastName", { required: "Last Name is required" })}
                            />
                            <ErrorMsg error={errors.lastName} />
                        </div>
                    </div>
                </div>            <div className="col-lg-6">
                    <div className="from__input-box">
                        <div className="form__input style-two">
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            <ErrorMsg error={errors.email} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="from__input-box">
                        <div className="form__input style-two">
                            <input
                                type="text"
                                placeholder="Phone Number (optional)"
                                {...register("phone", {
                                    pattern: {
                                        value: /^(?:\+88|0088)?01[0-9]{9}$/,
                                        message: "Phone number must be in valid format (+8801XXXXXXXXX or 01XXXXXXXXX)",
                                    },
                                })}
                            />
                            <ErrorMsg error={errors.phone} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="from__input-box">
                        <div className="form__input style-two">
                            <input
                                type="text"
                                placeholder="Subject (optional)"
                                {...register("subject")}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="from__input-box">
                        <div className="form__input style-two">
                            <textarea
                                cols={30}
                                rows={10}
                                placeholder="Your Message"
                                {...register("message", { required: "Message is required" })}
                            ></textarea>
                            <ErrorMsg error={errors.message} />
=======
"use client"
import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { form_style_one_schema } from '@/utils/validation-schema';
import ErrorMsg from './FormErrorMsg/ErrorMsg';
import ErrorMsgTwo from './FormErrorMsg/ErrorMsgTwo';
type TFromProps = {
    fromWrapperClass?: string;
}
const ContactForm = ({ fromWrapperClass }: TFromProps) => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                fname: "",
                lname: "",
                phone: "",
                password: "",
                massage: ""
            },
            validationSchema: form_style_one_schema,
            onSubmit: (values, { resetForm }) => {
                toast.success("Success! Your submission is now complete. Well done!");
                resetForm();
            },
        });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row g-5 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="from__input-box">
                            <div className={`form__input ${fromWrapperClass ? fromWrapperClass : "style-two"}`}>
                                <input
                                    type="text"
                                    name="fname"
                                    value={values.fname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    placeholder="First Name"
                                />
                            </div>
                            {touched.fname && <ErrorMsg error={errors.fname} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="from__input-box">
                            <div className={`form__input ${fromWrapperClass ? fromWrapperClass : "style-two"}`}>
                                <input
                                    name="lname"
                                    id="lname"
                                    type="text"
                                    value={values.lname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    placeholder="Last name" />
                                {touched.lname && <ErrorMsg error={errors.lname} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="from__input-box">
                            <div className={`form__input ${fromWrapperClass ? fromWrapperClass : "style-two"}`}>
                                <input
                                    type="text"
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    placeholder="Phone Number" />
                                {touched.phone && <ErrorMsg error={errors.phone} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="from__input-box">
                            <div className={`form__input ${fromWrapperClass ? fromWrapperClass : "style-two"}`}>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                {touched.password && <ErrorMsg error={errors.password} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="from__input-box">
                            <div className={`form__input ${fromWrapperClass ? fromWrapperClass : "style-two"}`}>
                                <textarea cols={30} rows={10}
                                    name="massage"
                                    value={values.massage}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="massage"
                                    placeholder="Your Massage">
                                </textarea>
                                {touched.massage && <ErrorMsgTwo error={errors.massage} />}
                            </div>
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d
                        </div>
                    </div>
                </div>
                <div className="contact__btn">
<<<<<<< HEAD
                    <button
                        className="bd-btn w-100"
                        type="submit"
                        disabled={isSubmitting}
                        style={{ opacity: isSubmitting ? 0.7 : 1 }}
                    >
                        {isSubmitting ? "Submitting..." : "Submit now"}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactServiceForm;
=======
                    <button type='submit' className="bd-btn w-100">Submit now</button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d
