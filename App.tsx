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
      <WorkoutStack.Screen 
      name="WorkoutDetail" 
      component={WorkoutDetailScreen} 
      options={{ title: "Workout Details" }}
      ></WorkoutStack.Screen>
    </WorkoutStack.Navigator>
  )
}

// Create Stack Navigator for Progress Tab
const ProgressStack = createNativeStackNavigator<ProgressStackParamList>();

// define a ProgressStackNavigator component
const ProgressStackNavigator = () => {
  return (
    <ProgressStack.Navigator>
      <ProgressStack.Screen 
      name="Progress" 
      component={ProgressScreen}
      ></ProgressStack.Screen>
      <ProgressStack.Screen 
      name="Goals" 
      component={GoalsScreen}
      options={{ title: "Goals"}}
      ></ProgressStack.Screen>
      </ProgressStack.Navigator>
  )
}

// Create Stack Navigator for Profile Tab
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

// define a ProfileStackNavigator component
const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{ title: "Profile"}}
      ></ProfileStack.Screen>
      <ProfileStack.Screen
       name="Settings"
       component={SettingsScreen}
       options={{ title: "Settings"}}
      ></ProfileStack.Screen>
    </ProfileStack.Navigator>
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
      <Tab.Screen 
      name="WorkoutsTab" 
      component={WorkoutsScreen} 
      options={{ tabBarLabel: "Workouts"}}
      ></Tab.Screen>
      <Tab.Screen 
      name="ProgressTab" 
      component={ProgressStackNavigator} 
      options={{ tabBarLabel: "Progress" }}
      ></Tab.Screen>
      <Tab.Screen
        name="ProfileTab" 
        component={ProfileStackNavigator} 
        options={{ tabBarLabel: "Profile" }}
      ></Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
  );
};


export default App;