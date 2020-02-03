import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';

import { LoadingController } from '@ionic/angular'; 
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabs-user-news',
  templateUrl: './tabs-user-news.page.html',
  styleUrls: ['./tabs-user-news.page.scss'],
})
export class TabsUserNewsPage implements OnInit {
  totalResults: number; 
  datas: any;
  select: boolean = true;
  value: boolean = false;
  select1: boolean = true;
  value1: boolean = false;
  user_name: string;
  datasShow: any;
  countrySelect: string;
  constructor(
    private newsService: NewsService, 
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
    this.storage.get('username').then((val) => {
      console.log('Your username is', val);
      this.user_name = val;
      if (val == null) {
        this.router.navigateByUrl('/login');
        console.log('fail');
      }
    });
    this.countrySelect = null
    this.getNews();
  }
  goFilter(){
    this.router.navigateByUrl('/tabs-user/tabs-user-news/filter');
  }

   async getNews() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'กำลังโหลดข้อมูล...'
    })
    await loading.present();

    this.newsService.getNews()
    .subscribe(
      (news) => {
        console.log(news);
        this.datas = news
        this.datasShow = news
      },
      async(error) => {
        console.log(error);
        await loading.dismiss();
      },
      async() => {
        await loading.dismiss();
      }
    );
   }

  getItems(ev: any) {       
    const val = ev.target.value;       
    if (val && val.trim() !== '') {         
     this.datasShow = this.datas.filter((datas) => {           
        return (datas.news_topic_detail.toLowerCase().indexOf(val.toLowerCase()) > -1);         
       });       
     } 
       else {         
         this.getNews();      
       }     
     }
    goDetailNotallow(n: any){     
      console.log(n);   
      this.navCtrl.navigateForward(['/tabs-user/tabs-user-news/tabs-user-detailnews', {       
        news_topic_detail: n.news_topic_detail,
        urlToImage: n.local_image,
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

  segmentChanged(ev: any) {
    // this.getNews();
    const val = ev.target.value;   
    if (val == '1'){
      console.log("InC")
      console.log(val)
      this.datasShow = this.datas.filter((datas) => {         
        console.log(datas.country_id.toLowerCase().indexOf(val.toLowerCase()))   
        return (datas.country_id.toLowerCase().indexOf(val.toLowerCase()) > -1);         
      });
    }
    if (val == '2'){
      console.log("OutC")
      console.log(val)
      this.datasShow = this.datas.filter((datas) => {
        console.log(datas.country_id.toLowerCase().indexOf(val.toLowerCase())) 
        return (datas.country_id.toLowerCase().indexOf(val.toLowerCase()) > -1);    
      }); 
    }
    // if (val == '') {
    //   console.log("null")
    // } else {
    //   console.log("!null")
    // }    
    // this.datas = this.datas.filter((datas) => {         
    //   console.log(datas.country_id.toLowerCase().indexOf(val.toLowerCase()))   
    //   return (datas.country_id.toLowerCase().indexOf(val.toLowerCase()) > -1);         
    // });
    // console.log(this.datas)  
    // console.log(this.datasShow)
  }
  async logOut() {
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
