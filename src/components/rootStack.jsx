import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Home } from './home';
import { DetailsTicket } from './detailsTicket';

const rootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: DetailsTicket,
    },
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

export default rootStack;
