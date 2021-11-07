import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";

const screens = {
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Hello",
      headerShown: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Hello",
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
