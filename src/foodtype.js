import React, { Component } from 'react';
import './foodtype.css';
class FoodType extends Component {
    render() {
        return (
            <div className="type-wrapper">
                <div className="foodtype">
                    <h1>{this.props.typeText}</h1>
                    <TypePoster typeImg={this.props.typeImg}/>
                </div>
            </div>
        ); 
    }
}
class TypePoster extends Component {
    render () {
        console.log(this.props);
        return (
            <img className="food-type-img" src={this.props.typeImg}></img>
        );
    }
}

export default FoodType;