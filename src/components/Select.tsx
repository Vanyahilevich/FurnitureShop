import React, {FC, ReactNode} from 'react';

interface ISelectProps {
    value: string | number,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: ReactNode,
    label: string
}

const Select:FC<ISelectProps> = ({value, onChange,children,label}) => {

    return (
      <select value={value} onChange={onChange}>
          <option value="" disabled selected hidden>{label}</option>
          {children}
      </select>
    );
};

export default Select;