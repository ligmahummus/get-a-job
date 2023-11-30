import React from "react";
import { AlertTemplateProps } from "react-alert";

const AlertDialog = ({ message, options }: AlertTemplateProps) => {
  const success = "bg-slate-800 text-white border-2 border-slate-900";
  const error = "bg-red-800 text-white border-2 border-red-900";
  const offset = `my-[${options.offset ?? "10px"}]`;

  return (
    <div
      className={`my-2 rounded-lg ${
        options.type == "success" ? success : error
      } px-4 py-2 text-center text-lg shadow-lg ${offset}`}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <section>
        <p id="alert-dialog-slide-description">{message}</p>
      </section>
      <section></section>
    </div>
  );
};

export default AlertDialog;
