'use client'
import { Controller } from "react-hook-form";
import { DatePicker } from "@heroui/date-picker";

import { IInput } from "@/src/types";

interface IProps extends IInput {}

const CtDatepicker = ({ label, name }: IProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => {
        return (
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <DatePicker
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

export default CtDatepicker;




