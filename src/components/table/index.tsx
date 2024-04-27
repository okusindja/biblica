import { Typography } from '@elements';
import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';
import { TableProps } from './table.types';

const Table: FC<TableProps> = ({ data, tableHeads, columnWidths }) => {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <View style={styles.header}>
          {tableHeads.map((header, index) => (
            <Typography
              key={header}
              variant="paragraph"
              align={
                index === 0
                  ? 'left'
                  : index === tableHeads.length - 1
                    ? 'right'
                    : 'center'
              }
              bold
              width={columnWidths[index]}
            >
              {header}
            </Typography>
          ))}
        </View>
        <View style={styles.dataContainer}>
          {data.map((data, index) => (
            <View
              key={data.aluno}
              style={[
                styles.dataWrapper,
                { backgroundColor: index % 2 ? '#f0f0f0' : '#fff' },
              ]}
            >
              {Object.values(data).map((value, idx) => (
                <Typography
                  key={idx}
                  variant="paragraph"
                  align={
                    idx === 0
                      ? 'left'
                      : idx === Object.values(data).length - 1
                        ? 'right'
                        : 'center'
                  }
                  width={columnWidths[index]}
                >
                  {value}
                </Typography>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Table;
