import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import {UserContext} from '../../Store/context/UserContext';
import {COLORS} from '../themes';
import {getAuthData} from '../../Services/getData';

export default function AppNavigation() {
  const [authStatus, setAuthStatus] = React.useState(false);
  const {authentication} = React.useContext(UserContext)

  const getAuth = async () => {
    const {auth} = await getAuthData();
    setAuthStatus(auth);
  };

  React.useEffect(() => {
    getAuth();
  }, [authentication]);

  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={COLORS.bg_Light}
        showHideTransition="slide"
        barStyle="dark-content"
      />
      <NavigationContainer>
        {authStatus ? <HomeNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
