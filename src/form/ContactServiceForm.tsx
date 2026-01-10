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
            <div className="from__input-box">
                <div className="form__input style-two">
                    <textarea
                        cols={30}
                        rows={10}
                        placeholder="Your Message"
                        {...register("message", { required: "Message is required" })}
                    ></textarea>
                    <ErrorMsg error={errors.message} />
                </div>
            </div>
            <div className="contact__btn">
                <button
                    className="bd-btn w-100"
                    type="submit"
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                    {isSubmitting ? "Submitting..." : "Submit now"}
                </button>
            </div>
        </form>
    );
};

export default ContactServiceForm;
