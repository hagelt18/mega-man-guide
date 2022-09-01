import React from 'react';
import { Text, View } from 'react-native';
import { useAppContext } from '../../common/context.ts/app-context';

export const Home = () => {
  const appContextData = useAppContext();
  return (
    <View>
      <Text>Mega Man Guide</Text>
      <Text>Game List: </Text>
      <View>
        {appContextData?.games?.map(g => {
          return (
            <View key={g.id}>
              <Text>{g.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  )
}
