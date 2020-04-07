// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-status-approve',
//   templateUrl: './status-approve.page.html',
//   styleUrls: ['./status-approve.page.scss'],
// })
// export class StatusApprovePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular'; 
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status-approve',
  templateUrl: './status-approve.page.html',
  styleUrls: ['./status-approve.page.scss'],
})
export class StatusApprovePage implements OnInit {

  select: boolean = true;
  value: boolean = false;
  select1: boolean = true;
  value1: boolean = false;
  select2: boolean = true;
  value2: boolean = false;
  select3: boolean = true;
  value3: boolean = false;
  user_name: string;
  datas: any;
  dataNews: string;
  user_department: string;

  constructor( 
    private loadingController: LoadingController, 
    private navCtrl: NavController,
    public storage: Storage,
    public http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.select = true;
    this.value = false;
    this.select1= true;
    this.value1 = false;
    this.select2 = true;
    this.value2 = false;
    this.select3 = true;
    this.value3 = false;
    this.storage.get('username').then((val) => {
      console.log('Your username is', val);
      this.user_name = val;
      if (val == null) {
        this.router.navigateByUrl('/login');
        console.log('fail');
      } else {   
        this.storage.get('user_department').then((value) => {
          console.log('department', value);
          this.user_department = value;
          this.getdataNews(this.user_department)
        });
      }
    });        
  }
  async getdataNews(user_department) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'กำลังโหลดข้อมูล...'
    })
    await loading.present();
        // let url2:string = "http://localhost/j2/listnewstype.php"
        let urlgetdata:string = "http://multiinno.name/j2/getdatanewspagestatusapprove.php"
        // let url2:string = "http://192.168.1.101/j2/listnewstype.php"
        let postdataset = new FormData();
        postdataset.append('user_department', user_department);
        let urlgetdatanews:Observable<any> = this.http.post(urlgetdata, postdataset);
        urlgetdatanews.subscribe(res =>{
          console.log(res);
          if (res == null) {
              console.log("fail")
          } else {
              console.log("succes")
              this.dataNews = res;
          }
        });
      await loading.dismiss();
   }
   shown() {
    if (this.value === true) {
      this.select = true;
      this.value = false;
    } else {
      this.select = false;
      this.value = true;
    }
  }
  shown1() {
    if (this.value1 === true) {
      this.select1 = true;
      this.value1 = false;
    } else {
      this.select1 = false;
      this.value1 = true;
    }
  }
  shown2() {
    if (this.value2 === true) {
      this.select2 = true;
      this.value2 = false;
    } else {
      this.select2 = false;
      this.value2 = true;
    }
  }
  shown3() {
    if (this.value3 === true) {
      this.select3 = true;
      this.value3 = false;
    } else {
      this.select3 = false;
      this.value3 = true;
    }
  }
  goDetailNotallow(n: any){     
    console.log(n);   
    this.navCtrl.navigateForward(['/tabsApprove/status-approve/detailnews-approve', {       
      news_topic_detail: n.news_topic_detail,
      news_detail: n.news_detail,
      news_type_detail: n.news_type_detail,
      news_time: n.news_time,
      news_id: n.news_id,
      news_approve: n.news_approve,
      news_form_detail: n.news_form_detail,
      news_upapprove_comment: n.news_upapprove_comment,
      news_name_alias: n.news_name_alias,
      news_w_user_id: n.news_w_user_id,
      news_weight_detail: n.news_weight_detail
    }]);   
}
  goHome(){
    this.router.navigateByUrl('/homepage');
  }
}

