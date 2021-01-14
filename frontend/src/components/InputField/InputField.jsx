import {React} from 'react';

import './InputField.scss';

// export default function InputField(props) {

//     const handleTextChange = (e) => {
//         props.onTextChange(e.target.value)
//     }
//     return (
//         <div className='InputField'>
//             <label for={props.id}>{props.label}</label>
//             <input  type = 'text'
//                     id = {props.id}
//                     className = 'InputField--input'
//                     value = {props.value}
//                     onChange = {handleTextChange}

//             />
//         </div>
//     )
// }

export default function InputField(props) {
    console.log(props.bind.onChange);

    return (
        <div className='InputField'>
            <label for={props.id}>{props.label}</label>
            <input  type = 'text'
                    id = {props.id}
                    className = 'InputField--input'
                    value = {props.bind.value}
                    onChange = {(props.bind.onChange)}

            />
        </div>
    )
}