import {React,useEffect} from 'react';
import {useInput} from "../../hooks/useInput"

import './ConfPanel.scss';

import InputField from '../InputField/InputField';
import Button from '../Button/Button';

export default function ConfPanel(props) {
    const height = useInput();
    const number = useInput();
    const radius = useInput();
    useEffect(() => {
        props.onChange({height, number, radius})
    },[height, number, radius])

    const handleSubmit = (e) => {
        props.onSubmitChange();
        e.preventDefault()
    }

    return ( 
        <form onSubmit = {handleSubmit}>
            <div className="ConfPanel">
                <InputField id = 'coneHeight' label = 'Cone height:'  bind = {height.bind} />
                <InputField id = 'coneTriangles' label = 'Number of triangles:' bind = {number.bind}  />
                <InputField id = 'coneBase' label = 'Base radius:' bind = {radius.bind} />
                <Button value = "Configure"/>
            </div>
        </form>
    )
}