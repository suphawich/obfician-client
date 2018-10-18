import { Component } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  animations: [
    trigger(
      'profile-animation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
        ])
      ]
    )
  ],
})
export class AboutPage {

  profiles = [
    { label: "Nickname", value: "Noey" },
    { label: "Date of birth", value: "9 Apr 1997" },
    { label: "Province", value: "Samut Prakan" },
    { label: "Like", value: "เครื่องสำอาง, นาฬิกาข้อมือ, กระเป๋า" },
    { label: "Blood Group", value: "AB" },
    { label: "Hobby", value: "นอน" },
  ]
  text_about = "กานต์ธีรา วัชรทัศนกุล หรือ เนย เกิดเมื่อวันที่ 9 เมษายน 2540 เนยเป็นรุ่นที่ 1 ของสมาชิกวงไอดอลกรุ๊ป BNK48"
          + "ที่เป็นวงน้องสาวของวง AKB48 ต้นกำเนิดจากญี่ปุ่นที่มีชื่อเสียงในหลายๆประเทศ"
          + " ปัจจุบันกำลังศึกษาอยู่คณะนิเทศศาสตร์ มหาวิทยาลัยกรุงเทพ"
  text_fact = ""
  isSelectProfile = false

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onClickProfile() {
    this.isSelectProfile = !this.isSelectProfile
  }
}
