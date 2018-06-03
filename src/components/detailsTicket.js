import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Textarea, Content, Form, Item, Input, Label, Icon } from 'native-base';

const styles = StyleSheet.create({
  accessories: {
    marginLeft: 15,
    marginTop: 15,
  },
  machineId: {
    width: '70%'
  },

});

class Ticketdetail extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#567fba',
    },
  };

  constructor() {
    super();
    this.state = {
      code: '',
    }
  }

  onBarCodeRead = data => {
    // console.log(data.code);
    this.setState({ code: data.code });
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Machine ID</Label>
              <Input value={this.state.code} />
            </Item>
            <TouchableOpacity
              style={styles.accessories}
              onPress={() =>
                this.props.navigation.navigate('HomeTest', { onBarCodeRead: this.onBarCodeRead })}
            >
              <Icon active name='md-barcode' fontSize={50} />
            </TouchableOpacity>
            {/* <Button transparent primary>
                <Icon name='md-barcode' />
              </Button> */}
            <Item fixedLabel>
              <Label>Destinataire</Label>
              <Input />
            </Item>
            <Label style={styles.accessories}>Accessoires</Label>
            <Textarea rowSpan={5} bordered />
            <Item fixedLabel last>
              <Label>Date d'envoie</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Ticketdetail;
