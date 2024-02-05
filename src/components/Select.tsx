import React, {FC, ReactNode} from 'react';

interface ISelectProps {
    value: string | number,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: ReactNode,
}

const Select:FC<ISelectProps> = ({value, onChange,children}) => {

    return (
      <select value={value} onChange={onChange}>
          {children}
      </select>
    );
};

export default Select;