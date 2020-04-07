import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logindata:any = {};
  key:string = 'username';
  passwordShown1:boolean = false;
  passwordShown2:boolean = true;
  passwordType:string = 'password';

  constructor(
    private navCtrl: NavController, 
    public http: HttpClient, 
    public alertController: AlertController,
    public storage: Storage,
    public loadingController: LoadingController
    ) {
    this.logindata.username = "";
    this.logindata.password = "";
   }

  ngOnInit() {
  }

  //   async logout() {
  //   const loading = await this.loadingController.create({
  //     spinner: 'bubbles',
  //     message: 'กำลังโหลดข้อมูล...'
  //   })
  //   await loading.present();
  //   this.storage.clear();
  //   await loading.dismiss();
  //   this.router.navigateByUrl('/login');
  //  }

  togglePassword(){
    if (this.passwordShown1) {
      this.passwordShown1 = false;
      this.passwordShown2 = true;
      this.passwordType = 'password';
    } else {
      this.passwordShown1 = true;
      this.passwordShown2 = false;
      this.passwordType = 'text';
    }
  }

  async login(){
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'กำลังเข้าสู่ระบบ...'
    })
    await loading.present();
    if (this.logindata.username != "" && this.logindata.password != "") {
      console.log("username:",this.logindata.username);
      console.log("password:",this.logindata.password);
      // let url:string = "http://192.168.1.101/j2/login.php"
      let url:string = "http://multiinno.name/j2/login.php"
      // let url:string = "http://localhost/j2/login.php"
      let dataPost = new FormData();
      dataPost.append('user',this.logindata.username);
      dataPost.append('pass',this.logindata.password);
      let data:Observable<any> = this.http.post(url, dataPost);
      data.subscribe(res =>{
        console.log(res);
        if (res == null) {
          console.log("fail")
        } else {
          if (res[0]["policy_id"] == "approvers") {
            this.storage.set( this.key, this.logindata.username );
            this.storage.set( 'user_department', res[0]["user_department"] );
            this.storage.set( 'policy_id', res[0]["policy_id"] );
            // this.navCtrl.navigateForward('/tabsApprove')
            this.navCtrl.navigateForward('/homepage')
          }
          if (res[0]["policy_id"] == "user") {
            this.storage.set( this.key, this.logindata.username );   
            this.storage.set( 'policy_id', res[0]["policy_id"] );
            this.navCtrl.navigateForward('/homepage')  
              // console.log(this.logindata.username);   
              // this.navCtrl.navigateForward(['/tabs/tab1', {       
              //   user_name: this.logindata.username, 
              // }]);   
            // this.navCtrl.navigateForward('/tabs')
          }
          if (res[0]["policy_id"] == "usernormal") {
            this.storage.set( this.key, this.logindata.username );     
              // console.log(this.logindata.username);   
              // this.navCtrl.navigateForward(['/tabs/tab1', {       
              //   user_name: this.logindata.username, 
              // }]);   
            this.navCtrl.navigateForward('/tabs-user')
          }
        }
      });
    }else{
      console.log("Value:NUll");
    }
    await loading.dismiss();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'การยืนยันตัวตนด้วย PIN!',
      inputs: [
        {
          name: 'name1',
          type: 'password',
          placeholder: 'กรอกเลข PIN'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            this.login()
          }
        }
      ]
    });

    await alert.present();
  }

}
