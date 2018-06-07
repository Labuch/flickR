import React, { Component } from 'react';
import Greeting from './gretting';
import CardsSection  from './cardsSection';
import Input from './input';

import * as FlickrAPI from "../helpers/flickrAPI";

export default class App extends Component {

	state = { tag: 'car', error:'', loading:'', images:[]};

    handleClick(){
        FlickrAPI.getPictures(this.state.tag).then((res)=>{
            this.setState({ images : res });
        })

	}

    render() {
        return (
        	<div>
            	<Greeting/>
            	<Input onChange={event=> this.setState({ tag : event.target.value } )} value={this.state.tag}>Select one word</Input>
                <button onClick={this.handleClick.bind(this)}>Get Picture</button>
            	<CardsSection images={ this.state.images} />
            </div>
        );
    }
}
