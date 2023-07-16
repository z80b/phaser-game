import { Game, Types, AUTO } from 'phaser';
import PreloadScene from '~/components/preload';
import GameScene from '~/components/game';

const config: Types.Core.GameConfig = {
  type: AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 200 },
    },
  },
  scene: [
    PreloadScene,
    GameScene,
  ],
};

new Game(config);