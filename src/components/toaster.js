import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Toaster from 'react-native-toaster'

class ToasterView extends Component {
  render () {
    return (
      <View>
        <Toaster message={this.props.toastMessage} />
      </View>
    )
  }
}

const mapStateToProps = ({ toastMessage }) => ({ toastMessage })
export default connect(mapStateToProps)(ToasterView)