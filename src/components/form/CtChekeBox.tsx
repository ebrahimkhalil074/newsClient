 
"use client";

import { Checkbox } from "@heroui/react";
import { useFormContext, useWatch } from "react-hook-form";

interface IProps {
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: boolean;
}

export default function CtCheckbox({
  name,
  label,
  required = false,
  defaultValue = false,
}: IProps) {
  const {
    register,
    formState: { errors },
    setValue, // ✅ add setValue to manually update value
  } = useFormContext();

  const checked = useWatch({ name }) ?? defaultValue;

  return (
    <div className="space-y-1">
      <Checkbox
        {...register(name, { required })}
        isInvalid={!!errors[name]}
        isSelected={checked}
        onChange={(val) => setValue(name, val)} // ✅ update value manually
      >
        {label}
      </Checkbox>

      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name]?.message as string}</p>
      )}
    </div>
  );
}
