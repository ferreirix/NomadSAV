import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Home from './home';
import DetailsTicket from './detailsTicket';
import MachineReader from './machineReader';
import HomeTest from './homeTest';

const RootStack = createStackNavigator(
  {
    Home,
    DetailsTicket,
    HomeTest,
    MachineReader,
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
