import React, { Component } from 'react';
import Card from './card';

class  cardsSection extends Component {

	renderCards()
	{
		return(<div style={styles.containerStyle}>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			</div>);
	}

	render() {
		return (
			<div >
			this is a cards section 
			{this.renderCards()}
			</div>);
	}
}

const styles = {
	containerStyle:{
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		

	}
}
	


export default cardsSection ;  