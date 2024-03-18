import { createStackNavigator,  TransitionPresets } from "@react-navigation/stack";
import React from "react";
import HomeBottomNavigation from "./HomeBottomNavigation";
import TopTabNavigation from "./TopTabNavigation";
import MyBookMark from "../pages/Home/Bookmark/MyBookMark";
import MostPopular from "../pages/Home/Discover/MostPopular";
import ExploreByTopic from "../pages/Home/Discover/ExploreByTopic";
import DetailArticlesByTopics from "../components/DetailArticlesByTopics";
import TopWriters from "../pages/Home/Discover/TopWriters";
import WriterDetail from "../screens/writer/WriterDetail";
import Searchs from "../screens/Searchs";
import ViewArticleComponent from "../components/ViewArticleComponent";
import { colors } from "../utilities/Color";
import CreateArticles from "../pages/Home/CreateArticles/CreateArticles";
import Comments from "../screens/Comments";
import EditProfile from "../pages/Home/MyProfile/EditProfile";
import Settings from "../pages/Home/MyProfile/Settings";

const HomeNavigation = () => {
  const Stack = createStackNavigator();
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
 
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{backgroundColor:colors.white}
      }}
      initialRouteName="bottomnavhome"
    >
      <Stack.Screen name="bottomnavhome" component={HomeBottomNavigation} />
      <Stack.Screen name="notification" component={TopTabNavigation} />
      <Stack.Screen name="bookmark" component={MyBookMark} />
      <Stack.Screen name="mostpopular" component={MostPopular} />
      <Stack.Screen name="exploretopic" component={ExploreByTopic} />
      <Stack.Screen name="articlesbytopics" component={DetailArticlesByTopics} />
      <Stack.Screen name="topwriters" component={TopWriters} />
      <Stack.Screen name="writerdetail" component={WriterDetail}  />
      <Stack.Screen name="search" component={Searchs} options={{presentation:"modal"}} />
      <Stack.Screen name="create" component={CreateArticles} options={{presentation:"modal"}} />
      <Stack.Screen name="comments" component={Comments} options={{presentation:"modal"}} />
      <Stack.Screen name="editprofile" component={EditProfile} options={{presentation:"modal"}} />
      <Stack.Screen name="settings" component={Settings} />
      <Stack.Screen name="viewArticle" component={ViewArticleComponent} options={{
       ...TransitionPresets.ScaleFromCenterAndroid
      }} />

    </Stack.Navigator>
  );
};

export default HomeNavigation;
