import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { Post } from '../../models/Post';
import { PostPage } from '../post/post';
import moment from 'moment';


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
      this.posts.map(post => {
        post.created_at = new Date(post.created_at)
        return post
      })
      console.log(this.posts)
    })
  }

  onClickTest() {
    console.log("test")
  }

  onClickPushPost(post) {
    this.navCtrl.push(PostPage, {
      post: post
    })
  }

  seeMore(post):string {
    let maxTextLength = 109;
    if (this.hasMore(post, maxTextLength)) {
      let str = post.description.substr(0, maxTextLength)
      let linl = str.lastIndexOf("\n")
      let lis = str.lastIndexOf(" ")
      if (linl != -1) {
        str = str.substr(0, linl)
      } else if (lis != -1) {
        str = str.substr(0, lis)
      }
      return str
    }
    return post.description;
  }

  hasMore(post, maxTextLength):boolean {
    if (post.description.length > maxTextLength) {
      return true
    }
    return false
  }

  getDiffTime(post) {
    let m = moment(post.created_at);
    let strDiff = m.fromNow()
    return strDiff;
  }
}
