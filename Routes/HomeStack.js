import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";
import Details from "../Screens/Details";

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
  Details: {
    screen: Details,
    navigationOptions: {
      title: "Product details",
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
