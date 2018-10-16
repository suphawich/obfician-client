import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/Item';
import { ShowcaseProvider } from '../../providers/showcase/showcase';

/**
 * Generated class for the ShowcasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showcase',
  templateUrl: 'showcase.html',
})
export class ShowcasePage {

  items:Item[]
  constructor(public navCtrl: NavController,
              public provider: ShowcaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowcasePage');
    this.provider.items().subscribe(result => {
      this.items = result.data
      console.log(this.items[0].description)
    })
  }

}
