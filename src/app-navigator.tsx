import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {ScreenNames} from './screen-names';
import {Login, Register} from './views';

const AuthStack = createStackNavigator(
  {
    [ScreenNames.Login]: {
      screen: Login,
    },
    [ScreenNames.Register]: {
      screen: Register,
    },
  },
  {
    initialRouteName: ScreenNames.Register,
  },
);

const AppContainer = createSwitchNavigator(
  {
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(AppContainer);
