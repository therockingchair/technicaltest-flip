import React from 'react';
import {Text} from 'react-native';
import Color from '../constant/Color';

const size = {
  m: 14,
  l: 16,
};

const weight = {
  regular: '400',
  light: '300',
  bold: '700',
};

const BaseText = props => {
  return (
    <Text
      {...props}
      style={{
        fontSize: props.size,
        fontWeight: props.weight,
        color: Color.DEFAULT,
        ...props.style,
      }}
    />
  );
};

export default {
  M: props => <BaseText weight={weight.regular} size={size.m} {...props} />,
  MLight: props => <BaseText weight={weight.light} size={size.m} {...props} />,
  MBold: props => <BaseText weight={weight.bold} size={size.m} {...props} />,

  L: props => <BaseText weight={weight.regular} size={size.l} {...props} />,
  LLight: props => <BaseText weight={weight.light} size={size.l} {...props} />,
  LBold: props => <BaseText weight={weight.bold} size={size.l} {...props} />,
};
