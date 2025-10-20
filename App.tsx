import React from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { SettingsScreen } from './components/SettingsScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { GoalsScreen } from './components/GoalsScreen';
import { ProgressScreen } from './components/ProgressScreen';
import { WorkoutDetailScreen } from './components/WorkoutDetailScreen';
import { WorkoutsScreen } from './components/WorkoutsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

// Define Tab Navigator type 
type TabParamList = {
  Home: undefined;
}
// Create Tab Navigator
const Tab = createBottomTabNavigator<RootTabParamList>();

// Define Stack Navigator types for each tab
type StackParamList = {
  Home : undefined; 
}
// Create Stack Navigator for Workouts
const WorkoutStack = createNativeStackNavigator<WorkoutStackParamList>(); 

// define a WorkoutsStackNavigator component 
const WorkoutsStackNavigator = () => {
  return (
    <WorkoutStack.Navigator>
      <WorkoutStack.Screen 
      name="Workouts" 
      component={WorkoutsScreen} 
      options={{ title: 'Workouts' }}
      ></WorkoutStack.Screen>
    </WorkoutStack.Navigator>
  )
}


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
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#FF6B35',
      tabBarInactiveTintColor: '##8E8E93',
      tabBarStyle: {
        backgroundColor: '#FFFFFF',
        borderTopColor: '#E5E5E7',
        paddingTop: 5,
      }
    }}>
      {/* children */}
    </Tab.Navigator>
  </NavigationContainer>
  );
};


export default App;