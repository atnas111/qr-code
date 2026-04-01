import { GENERATE_DATA } from '../constants';

import { QRCodeSVG } from 'qrcode.react';


export const GenerateHistory = () => {
    return (
        <div>
            <h1>History generated</h1>
            <p>Generated values:</p>
            <ul>
                {JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]').map((item, index) => (
                    <li key={index}>
                        {item}
                        <QRCodeSVG value={item} size={100} />
                    </li>
                ))}
            </ul>
        </div>
    );
}