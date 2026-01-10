<<<<<<< HEAD
import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type ErrorMsgProps = {
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

const ErrorMsg: React.FC<ErrorMsgProps> = ({ error }) => {
    // Extract message safely, ensuring it is a string or undefined
    const message: string | undefined =
        (error as FieldError)?.message ||
        ((error as Merge<FieldError, FieldErrorsImpl<any>>)?.message as string | undefined);

    if (!message) return null;

    return (
        <p style={{ color: "red", fontSize: "12px" }}>
            {message}
        </p>
    );
};

export default ErrorMsg;
=======
import React from 'react';

const ErrorMsg = ({ error }: any) => {
    return (
        <>
            <p style={{ color: 'red', fontSize: "12px", position: 'absolute' }}>{error}</p>
        </>
    );
};

export default ErrorMsg;
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d
