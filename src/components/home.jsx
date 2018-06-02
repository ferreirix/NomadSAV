import React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { LogoTitle } from './logoTitle';

export default class Home extends React.Component {
    static navigationOptions = {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={() => Alert.alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
    };

    state = {
      hasCameraPermission: null,
    };

    componentDidMount() {
      this.requestCameraPermission();
    }

    requestCameraPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({
        hasCameraPermission: status === 'granted',
      });
    };

    handleBarCodeRead = (data) => {
      Alert.alert(
        'Scan successful!',
        JSON.stringify(data),
      );
    };

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'First Details',
                        });
                    }}
          />
          {this.state.hasCameraPermission === null ?
            <Text>Requesting for camera permission</Text> :
            <BarCodeScanner
              torchMode="off"
              onBarCodeRead={this.handleBarCodeRead}
              style={{ height: 200, width: 200 }}
            />
                }
        </View>
      );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingTop: Constants.statusBarHeight,
//         backgroundColor: '#ecf0f1',
//     },
//     paragraph: {
//         margin: 24,
//         fontSize: 18,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         color: '#34495e',
//     },
// });
