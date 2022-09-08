import { Game } from '@src/common/types/types';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppContext } from '../../common/context/app-context';

export const Home = () => {
  console.log('TESTING CI/CD - GH Actions v2!');
  const appContextData = useAppContext();
  const handleGameSelected = (game: Game) => {
    console.log(game.title + ' selected');
  }


  const styles = StyleSheet.create({
    headingImg: {
      width: '220px',
      height: '160px',
      resizeMode: 'contain',
      alignSelf: 'center'
    },
    gameListContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      maxWidth: '500px',
      alignSelf: 'center',
      justifyContent: 'space-between'
    },
    gameTile: {
      margin: '4px',
    },
    gameTileImg: {
      width: '140px',
      height: '180px'
    },
  });

  return (
    <View>
      <Image
        testID={'heading-img'}
        style={styles.headingImg}
        source={require(`../../../assets/images/mega-man-guide-heading.png`)}
      />
      <View style={styles.gameListContainer}>
        {appContextData?.games?.map(g => {
          return (
            <TouchableOpacity
              testID='game-selection-tile'
              style={styles.gameTile} key={g.id}
              onPress={(event: any) => handleGameSelected(g)}>
              <Image source={require(`../../../assets/images/game-images/${g.id}_cover.jpg`)} style={styles.gameTileImg}></Image>
              <Text>{g.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  )

}
