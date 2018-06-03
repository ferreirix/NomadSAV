import React from 'react';
import { ListView, Alert, View, ActivityIndicator, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'
import getTickets from '../actions/ticketsActions';


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
    console.log(props);
  }

  componentDidMount() {
    console.log("fetching...");
    this.props.fetchData();
  }

  renderRow = (rowData, sectionID) => (
    <ListItem
      roundAvatar
      key={sectionID}
      title={rowData.name}
      subtitle={rowData.age}
      avatar={{ uri: rowData.avatar_url }}
      onPress={() => Alert.alert("hello!")}
    />
  )

  render() {
    return (
      <View style={styles.mainViewStyle}>
        {
          this.props.isLoading && <ActivityIndicator style={[styles.spinnerStyle]} size="large" color="#0000ff" />
        }
        <ListView
          enableEmptySections
          renderRow={this.renderRow}
          dataSource={this.props.tickets}
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