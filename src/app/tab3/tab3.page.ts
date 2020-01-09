import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private router: Router,
    public storage: Storage,
    public loadingController: LoadingController
    ) {}

  // logout(){
  //   this.storage.clear();
  //   this.router.navigateByUrl('/login');
  // }
  // logout() {
  //   this.router.navigateByUrl('/login');
  // }
  goProfile(){
    this.router.navigateByUrl('/tabs/tab3/profile');
  }
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
