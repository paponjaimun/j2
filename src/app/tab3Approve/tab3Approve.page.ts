import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3Approve',
  templateUrl: 'tab3Approve.page.html',
  styleUrls: ['tab3Approve.page.scss']
})
export class Tab3ApprovePage {

  constructor(
    private router: Router,
    public storage: Storage,
    public loadingController: LoadingController
    ) {}

  goProfile(){
    this.router.navigateByUrl('/tabsApprove/tab3Approve/profile');
  }
  // logout(){
    // this.router.navigateByUrl('/login');
  //   this.storage.clear();
  // }
  async logout() {
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
