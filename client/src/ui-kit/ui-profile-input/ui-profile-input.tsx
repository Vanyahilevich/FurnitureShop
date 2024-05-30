import React, {
  FC,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import UIProfileInputLayout from "./ui-profile-input-layout";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  register: any;
  errors: any;
  className?: string;
  isServerError?: string;
  setFocus: (name: "name" | "surname" | "email") => void;
}

const UIProfileInput: FC<InputProps> = ({
  label,
  name,
  register,
  className,
  errors,
  setFocus,
  isServerError,
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
      textError={errors[name]?.message || isServerError}
      isDisabled={isDisabled}
      changeInput={() => setIsDisabled(false)}
      approveInput={approveInput}
    />
  );
};

export default UIProfileInput;
