import { Table } from '@components';
import { Button, Typography } from '@elements';
import { DiagnosticsSVG, FilterSVG, RoundAddSVG } from '@svg';
import React, { FC } from 'react';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { COLUMN_WIDTHS, TABLE_DATA, TABLE_HEADER } from './actions.data';
import { styles } from './styles';

const Actions: FC = () => {
  return (
    <View>
      <View style={styles.buttonsWrapper}>
        <Button variant="icon-variant" Icon={RoundAddSVG} onPress={() => {}} />
        <Button
          variant="icon-variant"
          Icon={DiagnosticsSVG}
          onPress={() => {}}
        />
        <Button variant="icon-variant" Icon={RoundAddSVG} onPress={() => {}} />
      </View>
      <View style={styles.filterWrapper}>
        <Typography variant="paragraph" bold>
          Filtrar
        </Typography>
        <FilterSVG maxHeight={scale(24)} maxWidth={scale(24)} color="black" />
      </View>
      <Table
        data={TABLE_DATA}
        tableHeads={TABLE_HEADER}
        columnWidths={COLUMN_WIDTHS}
      />
    </View>
  );
};

export default Actions;
