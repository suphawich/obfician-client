import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowcasePage } from './showcase';

@NgModule({
  declarations: [
    ShowcasePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowcasePage),
  ],
})
export class ShowcasePageModule {}
