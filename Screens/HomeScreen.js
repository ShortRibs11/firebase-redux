import { connect } from 'react-redux';
import React from 'react';
import { View, Text, Button, TextInput, } from 'react-native';
import { styles } from "../App";
import { setFavoriteAnimal, watchPersonData } from '../Redux/app-redux';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      favoriteAnimal: this.props.favoriteAnimal,
    }

    this.props.watchPersonData();
  }

  onSetFavoriteAnimalPress = () => {
    this.props.setFavoriteAnimal(this.state.favoriteAnimal);
  }

  render() {
    return (
      <View style={{paddingTop:20}}>
        <Button title="Sign Out" />
        <Text>{this.props.favoriteAnimal}</Text>

        <TextInput style={{borderWidth:1, width: 200, height:40}}
          value={this.state.favoriteAnimal}
          onChangeText={(text) => {this.setState({favoriteAnimal: text}) }}
        />
        <Button title="Set Favorite Animal" onPress={this.onSetFavoriteAnimalPress} />

        <Text>{this.props.personData.firstName}</Text>
        <Text>{this.props.personData.lastName}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteAnimal: state.favoriteAnimal,
    personData: state.personData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFavoriteAnimal: (text) => { dispatch(setFavoriteAnimal(text)) },
    watchPersonData: () => { dispatch(watchPersonData()) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)
(HomeScreen);
