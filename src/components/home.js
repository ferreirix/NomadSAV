import React from 'react';
import {
  ListView, Alert, View, StyleSheet,
  TouchableOpacity, RefreshControl
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import Toaster from 'react-native-toaster';
import { Ionicons } from '@expo/vector-icons'
import { getTickets } from '../actions/ticketsActions';


const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainViewStyle: {
    flex: 1
  }
})

class Home extends React.Component {
  static navigationOptions = {
    title: "Nomad SAV",
    headerStyle: {
      backgroundColor: '#567fba',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super();
  }

  componentDidMount() {
    console.log("fetching...");
    this.props.fetchData();
  }

  onRefresh = () => {
    this.props.fetchData();
  }

  renderRow = (rowData, sectionID) => (
    <ListItem
      roundAvatar
      key={sectionID}
      title={rowData.machineId}
      subtitle={rowData.name}
      avatar={{ uri: rowData.avatarUrl }}
      onPress={() => Alert.alert("hello!")}
    />
  );

  render() {
    return (
      <View style={styles.mainViewStyle}>
        <Toaster message={this.props.toastMessage} />

        {/* {
          this.props.isLoading && <ActivityIndicator style={[styles.spinnerStyle]} size="large" color="#0000ff" />
        } */}
        <ListView
          enableEmptySections
          renderRow={this.renderRow}
          dataSource={this.props.tickets}
          refreshControl={
            <RefreshControl
              refreshing={this.props.isLoading}
              onRefresh={this.onRefresh}
            />
          }
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            position: 'absolute',
            bottom: 40,
            right: 20,
            height: 70,
            backgroundColor: '#567fba',
            borderRadius: 100,
          }}
          onPress={() => this.props.navigation.navigate('DetailsTicket')}
        >
          <Ionicons name="ios-add-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }
}

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });


function mapStateToProps(state) {
  return {
    tickets: ds.cloneWithRows(state.appData.tickets),
    isLoading: state.appData.isLoading,
    toastMessage: state.toastMessage.toastMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(getTickets()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);