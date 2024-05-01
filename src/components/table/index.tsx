import { Typography } from '@elements';
import React, { FC, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import { styles } from './styles';
import { TableProps } from './table.types';

const Table: FC<TableProps> = ({ data, tableHeads, columnWidths }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortColumn, setSortColumn] = useState<string | null>(null);

  const handleSort = (header: string) => {
    const normalizedHeader = header.toLowerCase();
    const newSortOrder =
      sortColumn === normalizedHeader && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortColumn(normalizedHeader);
    setSortOrder(newSortOrder);

    const sorted = [...data].sort((a, b) => {
      const keyA = a[normalizedHeader];
      const keyB = b[normalizedHeader];
      if (typeof keyA === 'string' && typeof keyB === 'string') {
        return newSortOrder === 'asc'
          ? keyA.localeCompare(keyB)
          : keyB.localeCompare(keyA);
      } else {
        return newSortOrder === 'asc'
          ? (keyA as number) - (keyB as number)
          : (keyB as number) - (keyA as number);
      }
    });

    setSortedData(sorted);
  };

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <View style={styles.header}>
          {tableHeads.map((header) => (
            <Pressable
              key={header}
              onPress={() => handleSort(header)}
              style={styles.dataWrapper}
            >
              <Typography variant="paragraph" align={'center'} bold>
                {header}
              </Typography>
            </Pressable>
          ))}
        </View>
        <View style={styles.dataContainer}>
          {sortedData.map((rowData, index) => (
            <View
              key={rowData.id.toString()}
              style={[
                styles.dataWrapper,
                {
                  backgroundColor: index % 2 ? '#f0f0f0' : '#fff',
                },
              ]}
            >
              {tableHeads.map((head, idx) => (
                <Typography
                  key={idx}
                  variant="paragraph"
                  align={
                    idx === 0
                      ? 'left'
                      : idx === tableHeads.length - 1
                        ? 'right'
                        : 'center'
                  }
                  width={columnWidths[idx]}
                >
                  {rowData[head.toLowerCase()]}
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
