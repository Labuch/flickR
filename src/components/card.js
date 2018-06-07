import React from 'react'


const styles = {
	imageStyle:{
		width: 200
	},
	labelStyle :{
		 color: "white",
    	backgroundColor: "black"
	}
}


export default (props) => (

	<div>
		<p style={styles.labelStyle} >this is a card </p>
		<img style={styles.imageStyle} /> 
	</div>) 