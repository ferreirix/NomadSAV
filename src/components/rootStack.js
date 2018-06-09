import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Home from './home';
import DetailsTicket from './detailsTicket';
import MachineScanner from './machineScanner';

const RootStack = createStackNavigator(
  {
    Home,
    DetailsTicket,
    MachineScanner,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default RootStack;
