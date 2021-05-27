import React, { useState } from 'react';
import { IColor } from './Gallery';

interface IProps {
    callback: (color: IColor) => void;
}

const AddColor = (props: IProps): JSX.Element => {
    console.log("Add color callback", props);
    const initialState: IColor = {
        color: '',
        default: false
    };
    const [values, setValues] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        console.log(event.target.name+': ', event.target.value);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.callback(values);
        console.log("Values: ", values);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="color"><b>Add new color: </b></label>
                <input
                    name='color'
                    id='color'
                    type='text'
                    placeholder='#666666'
                    onChange={onChange}
                    value={values.color}
                    required
                />
                <button type='submit'>Add</button>
            </div>
        </form>
    )
};
  
export default AddColor;