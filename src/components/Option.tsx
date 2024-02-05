import React, {FC} from 'react';

interface IOptionProps {
    value: string | number,
    label: string,
}

const Option: FC<IOptionProps> = React.memo(({value, label}: IOptionProps) => {
    return (
        <option key={value} value={value}>{label}</option>
    )
});

export default Option;