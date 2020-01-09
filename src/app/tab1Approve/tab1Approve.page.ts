import { Component, OnInit, OnDestroy} from '@angular/core';
import { NewsService } from '../news.service';

import { Article } from '../models/news';
import { LoadingController, NavController, Platform } from '@ionic/angular'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1Approve',
  templateUrl: 'tab1Approve.page.html',
  styleUrls: ['tab1Approve.page.scss']
})
export class Tab1ApprovePage implements OnInit {
  articles: Article[];
  totalResults: number; 
  datas: any;

  constructor(
    private newsService: NewsService, 
    private loadingController: LoadingController, 
    private router: Router,
    private navCtrl: NavController,
    private platform: Platform, 
    ) {}

  ngOnInit(){
    // this.getNews();
  }
  ionViewWillEnter() {
    this.getNews();
  }
  goFilter(){
    this.router.navigateByUrl('/tabsApprove/tab1Approve/filterapprove');
  }
  // getNews() {
  //   this.newsService.getNews()
  //   .subscribe(
  //     (news) => {
  //       console.log(news);
  //       this.totalResults = news.totalResults;
  //       this.articles = news.articles;
  //     }
  //   );
  //  }

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
        // this.totalResults = news.totalResults;
        // this.articles = news.articles;
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
  //  getItems(ev: any) {       
  //    const val = ev.target.value;       
  //    if (val && val.trim() !== '') {         
  //     this.articles = this.articles.filter((articles) => {           
  //        return (articles.title.toLowerCase().indexOf(val.toLowerCase()) > -1);         
  //       });       
  //     } 
  //       else {         
  //         this.getNews();      
  //       }     
  //     }
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
    // this.router.navigateByUrl('/tabsApprove/tab1Approve/detailnews');   
      console.log(n);     
      this.navCtrl.navigateForward(['/tabsApprove/tab1Approve/detailnews-approve', {       
        news_topic_detail: n.news_topic_detail,
        urlToImage: n.local_image,
        news_detail: n.news_detail,
        news_type_detail: n.news_type_detail,
        news_time: n.news_time,
        news_id: n.news_id,
        news_form_detail: n.news_form_detail,
        news_approve: n.news_approve,
        news_upapprove_comment: n.news_upapprove_comment,
        news_name_alias: n.news_name_alias,
        news_w_user_id: n.news_w_user_id,
        news_weight_detail: n.news_weight_detail
      }]);   
  }
}
