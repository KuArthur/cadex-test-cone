import {React} from 'react';

import './ConfPanel.scss';

import InputField from '../InputField/InputField';
import Button from '../Button/Button';

export default function ConfPanel(props) {
    return (
        <form>
            <div className="ConfPanel">
                <InputField id = 'coneHeight' value = 'Cone height:' />
                <InputField id = 'coneTriangles' value = 'Number of triangles:' />
                <InputField id = 'coneBase' value = 'Base radius:' />
                <Button value = 'Configure' />
            </div>
        </form>
    )
}