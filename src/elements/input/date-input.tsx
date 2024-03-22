import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { DateInputProps } from './input.types';
import Typography from '../typography';

const DateInput: FC<DateInputProps> = ({
  onChange,
  title,
  value,
  inputErrorMessage,
}) => {
  return (
    <>
      {inputErrorMessage && (
        <Text style={[styles.inputMessage, { color: '#E21F2C' }]}>
          {inputErrorMessage}
        </Text>
      )}

      <View
        style={[
          styles.input,
          {
            paddingHorizontal: 40,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          },
        ]}
      >
        <Typography variant="paragraph">{title}</Typography>
        <RNDateTimePicker
          style={{ alignSelf: 'flex-start' }}
          display="calendar"
          value={value}
          onChange={onChange}
        />
      </View>
    </>
  );
};

export default DateInput;
