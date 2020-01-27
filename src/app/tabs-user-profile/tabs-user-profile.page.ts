import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tabs-user-profile',
  templateUrl: './tabs-user-profile.page.html',
  styleUrls: ['./tabs-user-profile.page.scss'],
})
export class TabsUserProfilePage implements OnInit {

  constructor(
    private router: Router,
    public storage: Storage,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
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
