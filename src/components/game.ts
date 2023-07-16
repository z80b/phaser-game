import { Scene } from 'phaser';

class GameScene extends Scene {
  constructor() {
    super('GameScene');
  }

  preload() {}

  create() {
    console.log(this);
    this.add.sprite(100, 100, 'tank', 'wheel1').setSize(30, 70);
    this.add.sprite(400, 300, 'tank', 'body');
    this.add.sprite(400, 300, 'tank', 'tower');
  }
};

export default GameScene;