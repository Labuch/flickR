import React, { Component } from 'react';
import Card from './card';

class cardsSection extends Component {
  renderCards() {
    return this.props.images.map(({ title, url }) => <Card url={url} title={title} />);
  }

  render() {
    return (
      <div style={styles.containerStyle}>
        {this.renderCards()}
      </div>);
  }
}

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

  },
};


export default cardsSection;
