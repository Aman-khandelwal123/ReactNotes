import React, { useState } from "react";
import { Editor } from 'primereact/editor';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// const editor = () => {
//     const [text, setText] = useState('');
//     return (
//         <div className="card">
//             <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
//         </div>

//     )
// }

export default function BasicDemo() {
    const [text, setText] = useState('');

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
    )
}


