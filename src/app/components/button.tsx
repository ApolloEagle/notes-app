"use client";
import React, { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  styles: String;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({ children, styles, onClick, disabled }: ButtonProps) => {
  return (
    <button className={`${styles}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
