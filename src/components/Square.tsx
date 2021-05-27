import React from 'react';
import './Square.scss';

interface IProps {
    backgroundColor: string,
    isDefault: boolean
}

const Square = (props: IProps): JSX.Element => (
    <div className="square-container">
        <div className="square" data-background-color={props.backgroundColor} style={{backgroundColor: props.backgroundColor}}/>
        
        <div className="square-desc">
            <p>{props.backgroundColor}</p>

            {!props.isDefault ? <button className="close-button">x</button> : ""}
        </div>
    </div>
);
  
export default Square;