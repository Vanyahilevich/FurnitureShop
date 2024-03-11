import React, {
  FC,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import UIProfileInputLayout from "./ui-profile-input-layout";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  register: any;
  errors: any;
  className?: string;
  setFocus: (name: "name" | "surname" | "email") => void;
}

const UIProfileInput: FC<InputProps> = ({
  label,
  name,
  register,
  className,
  errors,
  setFocus,
  ...rest
}) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!isDisabled) {
      setFocus(name);
    }
  }, [isDisabled]);
  const approveInput = () => {
    if (errors[name]?.message) return;
    setIsDisabled(true);
  };
  return (
    <UIProfileInputLayout
      label={label}
      rest={rest}
      name={name}
      register={register}
      textError={errors[name]?.message}
      isDisabled={isDisabled}
      changeInput={() => setIsDisabled(false)}
      approveInput={approveInput}
    />
  );
};

export default UIProfileInput;
