// import React, { Component } from 'react';
// import { Text, View, StyleSheet, Alert } from 'react-native';
// import { Constants, BarCodeScanner, Permissions } from 'expo';

// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#34495e',
//   },
// });

// export default class MachineReader extends Component {
//   state = {
//     hasCameraPermission: null,
//   };

//   componentDidMount() {
//     this.requestCameraPermission();
//   }

//   requestCameraPermission = async () => {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({
//       hasCameraPermission: status === 'granted',
//     });
//   };

//   handleBarCodeRead = (data) => {
//     console.log(data);
//     Alert.alert('Scan successful!', JSON.stringify(data));
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         {this.state.hasCameraPermission === null
//           ? <Text>Requesting for camera permission</Text>
//           : <BarCodeScanner
//             torchMode="off"
//             onBarCodeRead={() => this.handleBarCodeRead()}
//             style={{ height: 600, width: 400 }}
//           />
//         }
//       </View>
//     );
//   }
// }

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _handleBarCodeRead = ({ type, data }) => {
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeRead={this._handleBarCodeRead}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );

  }


}
