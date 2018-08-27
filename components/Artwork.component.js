import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import {Image, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Styles/ArtworkStyle';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Artwork extends Component {

  constructor() {
    super();
    this.starClick = this.starClick.bind(this);
  }

  static propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    artist: PropTypes.string,
    handleStarClick: PropTypes.func
  }



  starClick = () => {
    console.log('star click method on CHILD');
    console.log('title', this.props.title);
    console.log('handleStarClick', this.props.handleStarClick);
    this.props.handleStarClick;
  }

  render() {

    return (
      <View style={styles.artworkContainer}>
        <Image style={styles.image} source={{uri: this.props.src}}
        />
        <View style={styles.infoContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.titleText}>{this.props.title}</Text>
            <Text style={styles.artistText}>by {this.props.artist}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name={this.props.starIcon} size={30} color='white' onPress={this.starClick.bind(this)} />
          </View>
        </View>
      </View>
    )
  }
}


