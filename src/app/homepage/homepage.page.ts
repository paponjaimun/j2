import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  user_name: string;
  policy_id: string;

  constructor(
    private router: Router,
    public storage: Storage,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.storage.get('username').then((val) => {
      console.log('Your username is', val);
      this.user_name = val;
      if (val == null) {
        this.router.navigateByUrl('/login');
        console.log('fail');
      }
    });
    this.storage.get('policy_id').then((policy) => {
      console.log('policy_id is', policy);
      this.policy_id = policy;
    });
  }
  goHome(){
    this.router.navigateByUrl('/tabsApprove/homepage');
  }
  onNews(){
    if (this.policy_id == "approvers") {
      this.router.navigateByUrl('/tabsApprove/tab1Approve');
    }
    if (this.policy_id == "user") {
      this.router.navigateByUrl('/tabs/tab1');
    }
  }
  onStatus(){
    if (this.policy_id == "approvers") {
      this.router.navigateByUrl('/tabsApprove/status-approve');
    }
    if (this.policy_id == "user") {
      this.router.navigateByUrl('/tabs/status');
    }
  }
  onApprove(){
    if (this.policy_id == "approvers") {
      this.router.navigateByUrl('/tabsApprove/approve-news');
    }
    if (this.policy_id == "user") {
      // this.router.navigateByUrl('/tabs/status');
      this.presentAlert()
    }
  }
  onInsertnews(){
    if (this.policy_id == "approvers") {
      this.router.navigateByUrl('/tabsApprove/tab2Approve');
    }
    if (this.policy_id == "user") {
      this.router.navigateByUrl('/tabs/tab2');
    }
  }
  onSetting(){
    if (this.policy_id == "approvers") {
      this.router.navigateByUrl('/tabsApprove/tab3Approve');
    }
    if (this.policy_id == "user") {
      this.router.navigateByUrl('/tabs/tab3');
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'คุณไม่มีสิทธิ์เข้าถึงหน้านี้',
      cssClass: 'reset',
      buttons: ['OK']
    });

    await alert.present();
  }
  async goOut() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'กำลังโหลดข้อมูล...'
    })
    await loading.present();
    this.storage.clear();
    await loading.dismiss();
    this.router.navigateByUrl('/login');
   }
}
