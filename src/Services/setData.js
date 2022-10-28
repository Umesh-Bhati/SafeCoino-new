import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAuthData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
      console.warn(e)
    }
  }