 'use client'
import { Select, SelectItem } from "@heroui/select";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
}

const CtSelect = ({ options, name, label, placeholder, disabled }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      {...register(name)}
      className=""
       errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      isDisabled={disabled}
      label={label}
      placeholder={placeholder}
      size="md"
      variant="bordered"
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default CtSelect;
