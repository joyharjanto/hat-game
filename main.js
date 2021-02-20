const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field { 
  constructor(grid = [[]]){
    this.grid = grid;
    this.index = [0,0];
  }
  
  runGame(){
    this.play = true;
    while(this.play){
    this.print();
    this.askQuestionMove();
    this.checkBounds();
    this.checkHole();
    this.checkWin();
    this.replaceBlock();
  }
  }

  askQuestionMove(){
    const input = prompt('Which way? ');
    switch(input){
      case "L":
      this.index[1] = this.index[1] - 1;
      break;
      case "R":
      this.index[1] = this.index[1] + 1;
      break;
      case "U":
      this.index[0] = this.index[0] - 1;
      break;
      case "D":
      this.index[0] = this.index[0] + 1;
      break;
      default:
      console.log("Please enter something else")
      break;
    }
    }


  
  checkBounds(){
    if(this.index[0] < 0 || this.index[0] >= this.grid.length || this.index[1] < 0 || this.index[1] >= this.grid[0].length){
      console.log("out of bounds");
      this.play = false;
      return this.play;
    }
  }
  
  checkHole(){
    if(this.grid[this.index[0]][this.index[1]] === 'O'){
      console.log("game over bc you fell into a hoole");
      this.play = false;
      return this.play; 
    }
  }

  checkWin(){
    if(this.grid[this.index[0]][this.index[1]] === '^'){
      console.log("win");
      this.play = false;
    }  
  }

  replaceBlock(){
    this.grid[this.index[0]][this.index[1]] = '*';
  }

  print(){
    for (let i = 0; i < this.grid.length; i++) {
      console.log(this.grid[i].join(""));
    }     
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);


myField.runGame()


