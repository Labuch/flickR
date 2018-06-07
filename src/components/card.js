import React from 'react';


const styles = {
  imageStyle: {
    width: 200,
  },
  labelStyle: {
    color: 'black',
    backgroundColor: '#8d9aa5',
    width: 200,
  },
  containerStyle: {
    color: '#8d9aa5',
  },
};


export default props => (

  <div style={styles.containerStyle}>
    <p style={styles.labelStyle}>{props.title}  </p>
    <img src={props.url} style={styles.imageStyle} />
  </div>);
