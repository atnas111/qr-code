import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import s from './qrCodeGenerator.module.css';

import { GENERATE_DATA } from '../../constants';


export const QrCodeGenerator = () => {
    const [value, setValue] = useState('1');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        
        localStorage.setItem( 
             GENERATE_DATA, 
             JSON.stringify([...prevData, value])
         );

        setResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    }


    return (
        <div className={s.container}>
            <input 
                type="text" 
                value={value} 
                placeholder="Enter value for QR code"
                onChange={onChangeHandler} 
                className={s.input} 
            />
            <button type="button" onClick={onClickHandler}>
                Generate QR Code
            </button>

            {result && <QRCodeSVG value={value} size={200} />}
        </div>
    );
};