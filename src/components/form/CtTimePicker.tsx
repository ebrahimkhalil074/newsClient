'use client'

import { Controller } from "react-hook-form";
import { TimeInput } from "@heroui/react";

import { IInput } from "@/src/types";

interface IProps extends IInput {}

const CtTimePicker = ({ label, name }: IProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => {
        return (
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <TimeInput
              label={label}
              {...fields}
              className="max-w-[284px]"
              variant="bordered"
            />
          </div>
        );
      }}
    />
  );
};

export default CtTimePicker;
