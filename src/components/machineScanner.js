import React, { Component } from 'react';
import {
    Dimensions,
    LayoutAnimation,
    Text,
    View,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 15,
        flexDirection: 'row',
    },
    url: {
        flex: 1,
    },
    urlText: {
        color: '#fff',
        fontSize: 20,
    },
    cancelButton: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
    },
});

export default class MachineScanner extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#567fba',
        },
    }

    state = {
        hasCameraPermission: null,
        lastScannedUrl: null,
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

    handleBarCodeRead = result => {
        if (result.data !== this.state.lastScannedUrl) {
            LayoutAnimation.spring();
            this.setState({ lastScannedUrl: result.data });
        }
    };

    maybeRenderUrl = () => {
        if (!this.state.lastScannedUrl) {
            return false;
        }

        return (
          <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.url} onPress={this.handlePressUrl}>
              <Text numberOfLines={1} style={styles.urlText}>
                {this.state.lastScannedUrl}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={this.handlePressCancel}
            >
              <Text style={styles.cancelButtonText}>
                        Cancel
              </Text>
            </TouchableOpacity>
          </View>
        );
    };

    handlePressUrl = () => {
        const { navigation } = this.props;
        navigation.goBack();
        navigation.state.params.onBarCodeRead({ code: this.state.lastScannedUrl });
    };

    handlePressCancel = () => {
        this.setState({ lastScannedUrl: null });
    };

    render() {
        return (
          <View style={styles.container}>
            {this.state.hasCameraPermission === null
                    ? <Text>Requesting for camera permission</Text>
                    : <BarCodeScanner
                      onBarCodeRead={this.handleBarCodeRead}
                      style={{
                            height: Dimensions.get('window').height,
                            width: Dimensions.get('window').width,
                        }}
                    />}
            {this.maybeRenderUrl()}
            <StatusBar hidden />
          </View>
        );
    }
}
