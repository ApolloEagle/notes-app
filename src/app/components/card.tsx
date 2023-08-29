import React from "react";

interface CardProps {
  color: string;
}

const Card = ({ color }: CardProps) => {
  return (
    <div
      className={`${color} flex w-full aspect-square justify-center items-center rounded-2xl animate-fade-in`}
    />
  );
};

export default Card;
