import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Container, Textarea, Content, Form, Item, Input, Label, Icon, Button, DatePicker } from 'native-base';
import { connect } from 'react-redux';
import { createTicket } from '../actions/ticketsActions';

const styles = StyleSheet.create({
  accessories: {
    marginLeft: 7,
    marginTop: 15,
  },
  save: {
    margin: 15,
  },
  saveText: {
    fontWeight: 'bold',
    color: 'white'
  }
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
    this.setState({ code: data.code });
  };

  onSave = () => {
    this.props.createTicket(
      {
        machineId: this.state.code,
        name: this.state.code,
        subtitle: this.state.code
      }
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>

            <Item>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('MachineScanner',
                    { onBarCodeRead: this.onBarCodeRead })
                }
              >
                <Icon active name='md-barcode' />
              </TouchableOpacity>
              <Input placeholder='Machine #' value={this.state.code} />
            </Item>
            <Item stackedLabel>
              <Label>Destinataire</Label>
              <Input />
            </Item>
            <Textarea rowSpan={5} bordered placeholder='Accessoires' style={styles.accessories} />
            <DatePicker
              locale="en"
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType="fade"
              androidMode="default"
              textStyle={{
                marginLeft: 7,
                fontSize: 14,
                color: '#567fba'
              }}
              placeHolderText="Date d'envoie"
            />
            <Button
              block
              success
              style={styles.save}
              onPress={this.onSave}>
              <Text style={styles.saveText}>Sauvegarder</Text>
            </Button>
          </Form>
        </Content>
      </Container >
    );
  }
}


function mapStateToProps(state) {
  return {
    isLoading: state.appData.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createTicket: (ticket) => dispatch(createTicket(ticket)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ticketdetail);