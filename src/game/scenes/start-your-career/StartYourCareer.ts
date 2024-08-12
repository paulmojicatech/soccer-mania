import { GameObjects, Scene } from 'phaser';
import { START_YOUR_CAREER_COACH_MONOLOGUE } from './models/start-your-career.const';
import { EventBus } from '../../EventBus';
import { GlobalSceneStateService } from '../../../app/services/global-scene-state.service';
import { inject } from '@angular/core';

export class StartYourCareer extends Scene
{  

  gameText: Phaser.GameObjects.Text;
  
  constructor (private _globalSceneStateSvc: GlobalSceneStateService)
  {
      super('StartYourCareer');
  }

  create ()
  {

    this.gameText = this.add.text(0, 0, START_YOUR_CAREER_COACH_MONOLOGUE, {
      fontFamily: 'Arial Black', fontSize: 20, color: '#ffffff',
      stroke: '#000000', strokeThickness: 8,
      align: 'justify'
    });

      EventBus.emit('current-scene-ready', this);

      this._globalSceneStateSvc.isMainMenuSceneS.set(false);
  }
}