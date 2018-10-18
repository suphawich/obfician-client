import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Item } from '../../models/Item';
import { ShowcaseProvider } from '../../providers/showcase/showcase';
import { ItemPage } from '../item/item';

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
              public modalCtrl: ModalController,
              public provider: ShowcaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowcasePage');
    this.provider.items().subscribe(result => {
      this.items = result.data
    })
  }

  presentItemModal(item) {
    let itemModal = this.modalCtrl.create(ItemPage, { item: item });
    itemModal.present();
  }

}
