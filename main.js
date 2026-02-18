

class Game extends Phaser.Scene {
    constructor() {
        super('Game');
        this.player = null;       // 玩家对象
        this.cursors = null;      // 键盘控制
        this.dialogBox = null;    // NPC对话弹窗
        this.dialogText = null;   // 对话文本
    }

    preload() {
      this.load.setPath("public/assets")
      this.load.image('background', 'background.jpg')
      this.load.spritesheet('player', 'sprites/characterSprite2.png', {
        frameWidth: 500,
        frameHeight: 632,
      });
    }

    create() {
      this.add.image(400, 225, 'background').setScrollFactor(0, 1);
      
      this.player = this.physics.add.sprite(50, 350, 'player').setScale(0.1);
      this.player.setBounce(0.15);
      this.player.setCollideWorldBounds(true);
      this.player.body.gravity.y = 800;    // 重力（模拟跳跃）

      
      this.cursors = this.input.keyboard.createCursorKeys();
      this.input.keyboard.on('keydown-SPACE', this.jump, this);
      this.jumps = 2;

      if (!this.anims.exists("run")) {
        this.anims.create({
          key: 'run',
          frames: this.anims.generateFrameNumbers('player', {
            start: 0,
            end: 11,
          }),
          frameRate: 25,
          repeat: -1,
        });
      }

      if (!this.anims.exists("jump")) {
        this.anims.create({
          key: 'jump',
          frames: [{
            key: 'player',
            frame: 12,
          }]
        });
      }
    }

    update() {
      this.movement();
      if (this.player.body.onFloor()) {
        this.hitGround = true;
        this.jumps = 2;
      }
    }

    movement() {
      if (this.cursors.left.isDown) {
        // 向左移动
        this.player.setVelocityX(-200);
        this.player.flipX = true; // 翻转精灵
        if (this.cursors.space.isDown) {
          this.player.anims.play('run', false);
        } else {
          this.player.anims.play('run', true);
        }
      } else if (this.cursors.right.isDown) {
        // 向右移动
        this.player.setVelocityX(200);
        this.player.flipX = false;
        if (this.cursors.space.isDown) {
          this.player.anims.play('run', false);
        } else {
          this.player.anims.play('run', true);
        }
      } else {
        // 静止
        this.player.setVelocityX(0);
        this.player.anims.play('run', false);
      }
    }

    jump() {
      if (this.jumps > 0) {
        this.player.setVelocityY(-450);
        this.player.anims.play('jump', true);
        this.jumps -= 1;
        this.hitGround = false;
      }
    }

    hitFloor() {
      if (this.hitGround === false) {
        this.hitGround = true;
        this.jumps = 2;
      }
    }

    

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    pixelArt: true, // 开启像素艺术模式（防止模糊）
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { 
              y: 0,
              x: 0
            },
            debug: true
        }
    },
    scene: [
      Game
    ]
};

// 初始化游戏
new Phaser.Game(config);