import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import { createContext, useContext, useState } from "react";
import DataContextProvider from "./src/context/DataContextProvider";
import AppNavigator from "./src/navigators/AppNavigator";
import AuthenticationNavigator from "./src/navigators/AuthenticationNavigator";
export type User = {
  email: string;
  password: string;
} | null;

interface LoginContextType {
  user: User;
  registerAndLogin: (user: User) => Promise<void>;
  logout: () => void;
}
const LoginContext = createContext<LoginContextType>({} as LoginContextType);
export const useLoginContext = () => useContext(LoginContext);

export default function App() {
  const [user, setUser] = useState<User>(null);
  const [isChecking, setIsChecking] = useState(true);
  const registerAndLogin = async (user: User) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    try {
      AsyncStorage.removeItem("user");
      setUser(null);
    } catch (e) {
      console.log(e);
    }
  };

  const checkForUser = async () => {
    const storedUser = await AsyncStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  if (isChecking) {
    return (
      <AppLoading
        startAsync={checkForUser}
        onFinish={() => setIsChecking(false)}
        onError={console.warn}
      />
    );
  }
  return (
    <LoginContext.Provider value={{ user, registerAndLogin, logout }}>
      <DataContextProvider>
        {user ? <AppNavigator /> : <AuthenticationNavigator />}
      </DataContextProvider>
    </LoginContext.Provider>
  );
}
