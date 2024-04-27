import { useTheme } from '@contexts';
import { Typography } from '@elements';
import React, { FC, useState } from 'react';
import { Pressable, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { styles } from './styles';
import { TabsProps } from './tabs.types';

const Tabs: FC<TabsProps> = ({ content, text }) => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);

  const handlePress = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <View>
      <View style={styles.tabsOptionsContainer}>
        {text?.map((item, index) => (
          <Pressable
            onPress={() => handlePress(index)}
            key={index}
            style={[
              styles.tabOption,
              {
                borderWidth: selectedTab === index ? scale(1.2) : 0,
                borderBottomWidth: selectedTab === index ? 0 : scale(1.2),
                backgroundColor: selectedTab === index ? '#fff' : 'transparent',
              },
            ]}
          >
            <Typography
              variant="legend"
              bold
              style={{ color: theme.colors.pencil }}
            >
              {item}
            </Typography>
          </Pressable>
        ))}
      </View>
      {content?.map(
        (Item, index) =>
          selectedTab === index && (
            <View key={index} style={styles.tabContent}>
              <Item />
            </View>
          )
      )}
    </View>
  );
};

export default Tabs;
