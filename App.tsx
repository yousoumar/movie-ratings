import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { AuthContext, User } from "./src/contexts/AuthContext";
import DataContext from "./src/contexts/DataContext";
import AppNavigator from "./src/navigators/AppNavigator";
import AuthNavigator from "./src/navigators/AuthNavigator";

export default function App() {
  const [user, setUser] = useState<User>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  /*-------------------- register --------------*/
  const register = async (user: User) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      await AsyncStorage.setItem("isLogged", JSON.stringify(true));
      setUser(user);
      setIsLogged(true);
    } catch (e) {
      console.log(e);
    }
  };

  /*-------------------- login --------------*/
  const login = async (password: string) => {
    try {
      if (user?.password === password) {
        await AsyncStorage.setItem("isLogged", JSON.stringify(true));
        return true;
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  };

  const logout = () => {
    try {
      AsyncStorage.removeItem("isLogged");
      setIsLogged(false);
    } catch (e) {
      console.log(e);
    }
  };
  /*-------------------- delete --------------*/
  const deleteAccount = async () => {
    try {
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("isLogged");
      setUser(null);
      setIsLogged(false);
    } catch (e) {
      console.log(e);
    }
  };

  /*-------------------- checkForUser --------------*/
  const checkForUser = async () => {
    const isLogged = await AsyncStorage.getItem("isLogged");
    const storedUser = await AsyncStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (isLogged) {
      setIsLogged(true);
    }
  };

  if (isChecking) {
    return (
      <AppLoading
        startAsync={() => checkForUser()}
        onFinish={() => setIsChecking(false)}
        onError={console.warn}
      />
    );
  }

  return (
    <DataContext>
      <AuthContext.Provider
        value={{
          user,
          register,
          login,
          logout,
          setUser,
          deleteAccount,
          isLogged,
          setIsLogged,
        }}
      >
        {isLogged ? <AppNavigator /> : <AuthNavigator />}
      </AuthContext.Provider>
    </DataContext>
  );
}
