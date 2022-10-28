
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAuthData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.warn(e);
  }
};
