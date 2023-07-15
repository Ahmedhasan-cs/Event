import React from 'react';
import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import styles from './styles/global.scss';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  disabled?: boolean;
  disabledStyle?: string;
  disabledTextStyle?: StyleProp<TextStyle>;
}

const CustomButton = (props: ButtonProps): JSX.Element => {
  const {
    onPress,
    style,
    title,
    textStyle,
    disabled,
    disabledStyle,
    disabledTextStyle,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        disabled
          ? disabledStyle || styles.actionButtonContainer
          : style || styles.actionButtonContainer
      }
      disabled={disabled}>
      <Text
        style={
          disabled
            ? disabledTextStyle || styles.disabledButtonText
            : textStyle || styles.actionButtonText
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

CustomButton.displayName = 'CustomButton';
export default CustomButton;
