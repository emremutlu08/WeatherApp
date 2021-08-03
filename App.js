import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=california&appid=YOUR_API_KEY";

export default class App extends React.Component {

  state = {
    isLoaded: false,
    weatherData: {}
  }

  componentDidMount() {
    this.getWeatherData()
  }

  getWeatherData() {
    return (
      fetch(apiURL)
      .then(data=>data.json())
      .then(dataJSON => this.setState({weatherData: dataJSON, isLoaded: true}))
      .catch(error=>console.log(error))
    );
  }
  
  render() {
    if(this.state.isLoaded) {
      return (
        <View style={styles.container}>
          <Text>{this.state.weatherData.name}</Text>
          <Text
            style={{
              fontSize: 50,
              fontWeight: "bold"
            }}
          >{this.state.weatherData.main.temp}</Text>
          <Text>{`${this.state.weatherData.weather[0].main} - ${this.state.weatherData.weather[0].description}`}</Text>
          <Text>{}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <AppLoading />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
