import { SCAN_DATA } from '../constants';

import { QRCodeSVG } from 'qrcode.react';


export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    
    console.log(data, 'scan history');

    return (
        <div>
            <h1>History scanned</h1>
            <p>Scanned values:</p>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {item}
                        <QRCodeSVG value={item} size={100} />
                    </li>
                ))}

            </ul>
        </div>
    );
}