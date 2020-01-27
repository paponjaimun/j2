import { Component, OnInit, OnDestroy} from '@angular/core';
import { NewsService } from '../news.service';

import { Article } from '../models/news';
import { LoadingController, NavController, Platform, AlertController } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1Approve',
  templateUrl: 'tab1Approve.page.html',
  styleUrls: ['tab1Approve.page.scss']
})
export class Tab1ApprovePage implements OnInit {
  articles: Article[];
  totalResults: number; 
  datas: any;
  topic:string;
  detail:string;
  time:any;
  timefrist:any;
  timelast:any;
  user_name: string;
  countrySelect: string;
  datasShow: any;

  constructor(
    private newsService: NewsService, 
    private loadingController: LoadingController, 
    private router: Router,
    private navCtrl: NavController,
    private platform: Platform, 
    public storage: Storage,
    public alertController: AlertController
    ) {
    }

  ngOnInit(){
    // this.getNews();
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
     this.datasShow = this.datas.filter((datas) => {         
        console.log(datas.news_topic_detail.toLowerCase().indexOf(val.toLowerCase()))   
        return (datas.news_topic_detail.toLowerCase().indexOf(val.toLowerCase()) > -1);         
       });       
     } 
       else {         
         this.getNews();      
       }     
     }
  goHome(){
    this.router.navigateByUrl('/homepage');
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
        news_weight_detail: n.news_weight_detail,
      }]);   
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'ค้นหา',
      inputs: [
        {
          name: 'topic',
          type: 'text',
          placeholder: 'หัวข้อข่าว'
        },
        {
          name: 'detail',
          type: 'text',
          placeholder: 'เนื้อหาข่าว'
        },
        {
          name: 'time',
          type: 'time',
          placeholder: 'เวลา'
        },
        {
          name: 'timefrist',
          type: 'date',
        },
        {
          name: 'timelast',
          type: 'date'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log("cancel");
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            console.log(alertData);
            // this.filterdataTopic(alertData.topic)
            // this.filterdataDetail(alertData.detail)
            this.filterdataTime(alertData.time)
          }
        }
      ]
    });
    await alert.present();
  }

  filterdataTopic(topic) {       
    const val = topic;       
    if (val && val.trim() !== '') {         
     this.datas = this.datas.filter((datas) => {           
        return (datas.news_topic_detail.toLowerCase().indexOf(val.toLowerCase()) > -1);         
       });       
     } 
       else {         
        //  this.getNews();      
       }     
     }
  filterdataDetail(detail) {       
      const val = detail;       
      if (val && val.trim() !== '') {         
       this.datas = this.datas.filter((datas) => {           
          return (datas.news_detail.toLowerCase().indexOf(val.toLowerCase()) > -1);         
         });       
      } 
         else {         
          //  this.getNews();      
         }     
      }
  filterdataTime(time) {       
        const val = time;       
        if (val && val.trim() !== '') {         
         this.datas = this.datas.filter((datas) => {    
          console.log(datas.news_time.toLowerCase()) 
          console.log(datas.news_time.toLowerCase().trim()) 
          console.log(datas.news_time.toLowerCase().indexOf())
            console.log(datas.news_time.toLowerCase().indexOf(val.toLowerCase()))     
            return (datas.news_time.toLowerCase().indexOf(val.toLowerCase()) > -1);         
           });       
        } 
           else {         
             this.getNews();      
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
        
}
