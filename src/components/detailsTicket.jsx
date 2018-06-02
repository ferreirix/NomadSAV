import React from 'react';
// import { Button, View, Text } from 'react-native';
import { ListView } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class DetailsTicket extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: 'Joao ferreira',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President',
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman',
        },
      ]),
    };
  }

  // state = {
  // dataSource: [
  //   {
  //     name: 'Amy Farha',
  //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  //     subtitle: 'Vice President'
  //   },
  //   {
  //     name: 'Chris Jackson',
  //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  //     subtitle: 'Vice Chairman'
  //   }
  // ]
  // }

  renderRow(rowData, sectionID) {
    return (
      <ListItem
        roundAvatar
        key={sectionID}
        title={rowData.name}
        subtitle={rowData.subtitle}
        avatar={{ uri: rowData.avatar_url }}
      />
    );
  }

  render() {
    /* 2. Read the params from the navigation state */
    // const { params } = this.props.navigation.state;
    // const itemId = params ? params.itemId : null;
    // const otherParam = params ? params.otherParam : null;

    return (
      <ListView
        renderRow={this.renderRow}
        dataSource={this.state.dataSource}
      />
    );

    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Details Screen</Text>
    //   <Text>itemId: {JSON.stringify(itemId)}</Text>
    //   <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    //   <Button
    //     title="Update the title"
    //     onPress={() =>
    //       this.props.navigation.setParams({ otherParam: 'Updated!' })}
    //   />
    //   <Button
    //     title="Go to Details... again"
    //     onPress={() => this.props.navigation.navigate('Details', {
    //       itemId: 96,
    //       otherParam: 'Second Details',
    //     })}
    //   />
    //   <Button
    //     title="Go back"
    //     onPress={() => this.props.navigation.goBack()}
    //   />
    // </View>
  }
}
