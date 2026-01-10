import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type ErrorMsgProps = {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

const ErrorMsg: React.FC<ErrorMsgProps> = ({ error }) => {
  // Extract message safely, ensuring it is a string or undefined
  const message: string | undefined =
    (error as FieldError)?.message ||
    ((error as Merge<FieldError, FieldErrorsImpl<any>>)?.message as
      | string
      | undefined);

  if (!message) return null;

  return <p style={{ color: "red", fontSize: "12px" }}>{message}</p>;
};

export default ErrorMsg;
