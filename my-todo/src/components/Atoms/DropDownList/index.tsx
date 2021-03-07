import React, { useEffect, useRef } from 'react';

type DropDownListProps = {
    defaultMessage?: string;
    data: string[];
    value: string;
    onChange: (value: string) => void;
}

const DropDownList: React.FC<DropDownListProps> = (props) => {
    const {
        defaultMessage = '選択してください',
        data,
        value,
        onChange,
    } = props;
    const selectRef = useRef() as React.MutableRefObject<HTMLSelectElement>;

    const loadDropDownListData = () => {
        data.forEach((item) => {
            let option = document.createElement('option');
            option.value = item;
            option.innerHTML = item;
            console.log('append' +  item)
            selectRef.current.appendChild(option);
        })
    }

    useEffect(loadDropDownListData, []);


    return (
        <select ref={selectRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}>
            <option disabled value='default' selected>{defaultMessage}</option>
        </select>
    )
}

export default DropDownList;