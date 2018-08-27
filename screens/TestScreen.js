import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Button} from 'react-native';
import { connect } from 'react-redux';

class TestScreen extends React.Component {
  static naviationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Button title="Press me!" />
        <Text>{this.props.favoriteAnimal}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteAnimal: state.favoriteAnimal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);