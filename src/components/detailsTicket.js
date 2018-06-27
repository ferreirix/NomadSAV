import React, { Component, Fragment } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import {
  Container, Textarea, Content, Form,
  Item, Input, Label, Icon, Button, DatePicker
} from 'native-base';
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
      repairer: '',
      dateSent: '',
      accessories: '',
      isSaving: false,
    }
  }

  onBarCodeRead = data => {
    this.setState((prevState, props) => ({
      code: data.code
    }));
  };

  onAccessoriesChange = data => {
    this.setState((prevState, props) => ({
      accessories: data
    }));
  };

  onRepairerChange = data => {
    this.setState((prevState, props) => ({
      repairer: data
    }));
  };

  onDateChange = data => {
    this.setState((prevState, props) => ({
      dateSent: data
    }));
  };


  onSave = () => {
    this.props.createTicket(
      {
        machineId: this.state.code,
        name: this.state.repairer,
        subtitle: this.state.dateSent,
        dateSent: this.state.dateSent,
        accessories: this.state.accessories,
      }
    );
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Fragment>
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
                <Input
                  placeholder='Machine #'
                  value={this.state.code}
                  onChangeText={(machineId) => this.onBarCodeRead({ code: machineId })}
                />
              </Item>
              <Item stackedLabel>
                <Label>Destinataire</Label>
                <Input
                  value={this.state.repairer}
                  onChangeText={this.onRepairerChange}
                />
              </Item>
              <Textarea
                rowSpan={5}
                bordered
                placeholder='Accessoires'
                style={styles.accessories}
                value={this.state.accessories}
                onChangeText={this.onAccessoriesChange}
              />
              <DatePicker
                locale="fr"
                date={this.state.dateSent}
                onDateChange={this.onDateChange}
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
                onPress={this.onSave}
                disabled={this.state.isSaving}
              >
                <Text style={styles.saveText}>Sauvegarder</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      </Fragment>
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