 
"use client";

import { Input } from "@heroui/input";
import { useFormContext } from "react-hook-form";

interface IProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  isReadOnly?: boolean;
  defaultValue?: any;
}

export default function CtInput({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  isReadOnly = false,
  name,
  defaultValue,
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      defaultValue={defaultValue}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      isReadOnly={isReadOnly}
      label={label}
      required={required}
      size={size}
      type={type}
      variant={variant}
    />
  );
}
