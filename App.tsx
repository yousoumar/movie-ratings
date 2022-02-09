import DataContextProvider from "./src/context/DataContextProvider";
import AppTabNavigator from "./src/navigators/AppTabNavigator";

export default function App() {
  return (
    <DataContextProvider>
      <AppTabNavigator />
    </DataContextProvider>
  );
}
