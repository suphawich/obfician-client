import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { Post } from '../../models/Post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts:Post[]
  constructor(public navCtrl: NavController,
              public provider: PostProvider) {

  }

  ionViewDidLoad() {
    this.provider.posts().subscribe(result => {
      this.posts = result.data
      console.log(this.posts);
    })
  }
}
