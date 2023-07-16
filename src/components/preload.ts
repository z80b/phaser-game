import { Scene } from 'phaser';

class PreloadScene extends Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.atlas('tank', '/tank.png', '/tank.json');
  }

  create() {
    this.scene.start('GameScene');
  }
};

export default PreloadScene;