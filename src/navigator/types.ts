import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
  Register: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Welcome: undefined;
};

export type WelcomePageProps = StackScreenProps<RootStackParamList, 'Welcome'>;
export type HomePageProps = StackScreenProps<RootStackParamList, 'Home'>;
export type ProfilePageProps = StackScreenProps<RootStackParamList, 'Profile'>;
export type RegisterPageProps = StackScreenProps<
  RootStackParamList,
  'Register'
>;
export type LoginPageProps = StackScreenProps<RootStackParamList, 'Login'>;
