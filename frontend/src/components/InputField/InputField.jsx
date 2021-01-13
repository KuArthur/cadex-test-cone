import {React} from 'react';

import './InputField.scss';

export default function InputField(props) {
    return (
        <div className='InputField'>
            <label for={props.id}>{props.value}</label>
            <input  type = 'text'
                    id = {props.id}
                    className = 'InputField--input'
            />
        </div>
    )
}

