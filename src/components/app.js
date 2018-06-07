import React, { Component } from 'react';
import Greeting from './gretting';
import CardsSection  from './cardsSection';
import Input from './input';


export default class App extends Component {

	state = { tag: '', error:'', loading:''}

    render() {
        return (
        	<div>
            	<Greeting/>
            	<Input>Select one word</Input> 
            	<CardsSection/>
            </div>
        );
    }
}
