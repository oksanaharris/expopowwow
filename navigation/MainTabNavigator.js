import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../pages/HomeScreen';
import LinksScreen from '../pages/LinksScreen';
import SettingsScreen from '../pages/SettingsScreen';
import TestScreen from '../pages/TestScreen';
import ArtGallery from '../pages/ArtGallery';

const GalleryStack = createStackNavigator({
  Gallery: ArtGallery,
});

GalleryStack.navigationOptions = {
  tabBarLabel: 'Murals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-images${focused ? '' : '-outline'}`
          : 'md-images'
      }
    />
  ),
};

const MapStack = createStackNavigator({
  Map: LinksScreen,
});

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-navigate${focused ? '' : '-outline'}` : 'md-navigate'}
    />
  ),
};

const ArtistsStack = createStackNavigator({
  Artists: SettingsScreen,
});

ArtistsStack.navigationOptions = {
  tabBarLabel: 'Artists',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-brush${focused ? '' : '-outline'}` : 'md-brush'}
    />
  ),
};

const CommunityStack = createStackNavigator({
  Community: SettingsScreen,
});

CommunityStack.navigationOptions = {
  tabBarLabel: 'Community',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-people${focused ? '' : '-outline'}` : 'md-people'}
    />
  ),
};

export default createBottomTabNavigator({
  GalleryStack,
  MapStack,
  ArtistsStack,
  CommunityStack
});
