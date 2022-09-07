import { Game } from '@src/common/types/types';
import React from 'react';
import { Text, View, Image, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useAppContext } from '../../common/context/app-context';

export const Home = () => {
  const appContextData = useAppContext();
  const handleGameSelected = (game: Game) => {
    console.log(game.title + ' selected');
  }


  const styles = StyleSheet.create({
    titleImage: {
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
      <Image style={styles.titleImage} source={require(`../../../assets/images/mega-man-guide-heading.png`)} />
      <View style={styles.gameListContainer}>
        {appContextData?.games?.map(g => {
          return (
            <TouchableOpacity
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
