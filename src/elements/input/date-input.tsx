import RNDateTimePicker from '@react-native-community/datetimepicker';
import React, { FC } from 'react';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';

import Typography from '../typography';
import { DateInputProps } from './input.types';
import { styles } from './styles';

const DateInput: FC<DateInputProps> = ({
  title,
  value,
  variant,
  onChange,
  inputErrorMessage,
}) => {
  return (
    <>
      <Typography
        variant="legend"
        style={[
          styles.inputMessage,
          {
            color:
              variant === 'red'
                ? '#fff'
                : variant === 'white' && !inputErrorMessage
                  ? '#7A7A7A'
                  : '#E21F2C',
          },
        ]}
      >
        {title}
        {inputErrorMessage && ': ' + inputErrorMessage}
      </Typography>

      <View
        style={[
          styles.input,
          {
            gap: 10,
            borderWidth: 0,
            overflow: 'hidden',
            flexDirection: 'row',
            position: 'relative',
            alignItems: 'center',
            // paddingHorizontal: 40,
            backgroundColor: variant === 'red' ? '#B13939' : '#f0f0f0',
          },
        ]}
      >
        <View
          style={{
            zIndex: 2,
            opacity: 0,
            left: scale(50),
            position: 'absolute',
            transform: 'scaleX(4)',
          }}
        >
          <RNDateTimePicker
            value={value}
            display="compact"
            onChange={onChange}
            style={{ width: '100%' }}
            themeVariant={variant === 'red' ? 'dark' : 'light'}
          />
        </View>
        <Typography variant="paragraph" size="m" bold themeColor="white">
          {value.toLocaleDateString()}
        </Typography>
      </View>
    </>
  );
};

export default DateInput;
