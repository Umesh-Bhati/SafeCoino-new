import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation,} from './UI/navigations';
import {COLORS} from './UI/themes';
import { UserProvider} from './Store/context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {



   const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key')
    } catch(e) {
      // remove error
      console.warn("erroremove", e)
    }
  
    console.log('Done.')
  }

  // React.useEffect(() => {
  //   removeValue()
  // }, [])


  return (
   <UserProvider>
    <AppNavigation/>
   </UserProvider>
  );
}
