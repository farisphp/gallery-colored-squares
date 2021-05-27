import React from 'react';
import AddColor from './AddColor';
import Filter from './Filter';
import Square from './Square';
import './Gallery.scss';

interface IProps {
}

export interface IColor {
    color: string;
    default: boolean;
}

export interface IColorState {
    colors: IColor[];
}

class Gallery extends React.Component<IProps, IColorState> {
    constructor(props: IProps) {
        super(props);
        this.setColor = this.setColor.bind(this);
        
        this.state = {
            colors: [{color: '#1ABC9C', default: true},{color: '#2ECC71', default: true},
            {color: '#3498DB', default: true},{color: '#9B59B6', default: true},
            {color: '#34495E', default: true},{color: '#16A085', default: true},
            {color: '#27AE60', default: true},{color: '#2980B9', default: true},
            {color: '#8E44AD', default: true},{color: '#2C3E50', default: true},
            {color: '#F1C40F', default: true},{color: '#E67E22', default: true},
            {color: '#E74C3C', default: true},{color: '#ECF0F1', default: true},
            {color: '#95A5A6', default: true},{color: '#F39C12', default: true},
            {color: '#D35400', default: true},{color: '#C0392B', default: true},
            {color: '#BDC3C7', default: true},{color: '#7F8C8D', default: true}]
        };
    }

    setColor = (color: IColor): void => {
        let colors = this.state.colors;
        colors.push(color);
        this.setState({
          colors: colors
        });
    }

    render() {
        return (
            <div className="container">
                <AddColor callback={this.setColor}/>
                <hr className="solid"></hr>
                <Filter />

                <div className="gallery-container">
                    {this.state.colors.map((color, index) => {
                        return <Square backgroundColor={color.color} isDefault={color.default} />
                    })}
                </div>
            </div>
        );
    }
}

export default Gallery;