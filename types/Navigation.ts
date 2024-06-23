import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home', 'Detail'>;
