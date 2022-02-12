import AppLoading from "expo-app-loading";
import { useState } from "react";
import {
  AuthContext,
  checkForUser,
  logout,
  registerAndLogin,
  User,
} from "./src/contexts/AuthContext";
import DataContext from "./src/contexts/DataContext";
import AppNavigator from "./src/navigators/AppNavigator";
import AuthnNavigator from "./src/navigators/AuthNavigator";

export default function App() {
  const [user, setUser] = useState<User>(null);
  const [isChecking, setIsChecking] = useState(true);

  if (isChecking) {
    return (
      <AppLoading
        startAsync={() => checkForUser(setUser)}
        onFinish={() => setIsChecking(false)}
        onError={console.warn}
      />
    );
  }
  return (
    <AuthContext.Provider value={{ user, registerAndLogin, logout, setUser }}>
      <DataContext>{user ? <AppNavigator /> : <AuthnNavigator />}</DataContext>
    </AuthContext.Provider>
  );
}
