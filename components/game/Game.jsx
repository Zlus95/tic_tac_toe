import {  Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Board from '../board/Board';
import React, {useState} from 'react';

function findWinner (buttons) {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i+= 1) {
      const [a, b, c] = lines[i];
      if(buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]){
          return buttons[a]
      }       
  }
  return null
} 

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const winner =  findWinner(board);
  
  const click = (index) => {
    const gameBoard = [...board];
    if(winner || gameBoard[index]) return
    gameBoard[index] = player ? 'X' : 'O';
    setBoard(gameBoard);
    setPlayer(!player);
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer(true);
  }

    return (
      <View style={styles.container}>
        {winner ? <Text style={styles.text}>{`Winner player ${winner}`}</Text> :
        <Text style={styles.text}>{`Now it's the player's turn ${player ? 'X' : 'O'}`}</Text>
        }
        <Board board={board} click={click} />
        <TouchableOpacity style={styles.buttonReset} onPress={resetGame} >
          <Text style={styles.textButtonreset}>Reset </Text>
        </TouchableOpacity>
      </View>
    );
  }