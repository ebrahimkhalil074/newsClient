 'use client'
import { useFormContext, useWatch } from "react-hook-form";
import { Textarea } from "@heroui/input";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  type?: string;
}

export default function CtTextarea({
  name,
  label,
  variant = "bordered",
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const currentValue = useWatch({ name });

  return (
    <Textarea
      {...register(name)}
      label={label}
      minRows={6}
      value={currentValue || ""}
      variant={variant}
    />
  );
}
