import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { CharacterDetailPage } from '../character-detail/character-detail';
import { CharacterDetailPageModule } from '../character-detail/character-detail.module';

@NgModule({
  declarations: [
    FeedPage,
  ],
  imports: [
    CharacterDetailPageModule,
    IonicPageModule.forChild(FeedPage),
  ],
})
export class FeedPageModule {}
