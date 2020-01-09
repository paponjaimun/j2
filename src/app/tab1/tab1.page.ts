import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../news.service';

import { Article } from '../models/news';
import { LoadingController } from '@ionic/angular'; 
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  articles: Article[];
  totalResults: number; 
  datas: any;
  select: boolean = true;
  value: boolean = false;
  select1: boolean = true;
  value1: boolean = false;
  user_name: string;

  constructor(
    private newsService: NewsService, 
    private loadingController: LoadingController, 
    private navCtrl: NavController,
    public storage: Storage,
    public http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
    ) {
      // this.user_name = this.route.snapshot.paramMap.get('user_name');  
    }
  ngOnInit(){
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
    this.getNews();
  }
  goFilter(){
    this.router.navigateByUrl('/tabs/tab1/filter');
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
     this.datas = this.datas.filter((datas) => {           
        return (datas.news_topic_detail.toLowerCase().indexOf(val.toLowerCase()) > -1);         
       });       
     } 
       else {         
         this.getNews();      
       }     
     }
    goDetailNotallow(n: any){     
      console.log(n);   
      this.navCtrl.navigateForward(['/tabs/tab1/detailnews', {       
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
}
