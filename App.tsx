import React from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { SettingsScreen } from './components/SettingsScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { GoalsScreen } from './components/GoalsScreen';
import { ProgressScreen } from './components/ProgressScreen';
import { WorkoutDetailScreen } from './components/WorkoutDetailScreen';
import { WorkoutsScreen } from './components/WorkoutsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type TabParamList ={
  Home: undefined;
}
const Tab = createBottomTabNavigator<RootTabParamList>();


export type WorkoutStackParamList = {
  Workouts: undefined;
  WorkoutDetail: { workoutName: string };
};

export type ProgressStackParamList = {
  Progress: undefined;
  Goals: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  Settings: undefined;
};


type RootTabParamList = {
  WorkoutsTab: NavigatorScreenParams<WorkoutStackParamList>,
  ProgressTab: NavigatorScreenParams<ProgressStackParamList>,
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>
}

// Main App
const App = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator>
      {/* children */}
    </Tab.Navigator>
  </NavigationContainer>
  );
};


export default App;