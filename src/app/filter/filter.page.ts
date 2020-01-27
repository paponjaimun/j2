import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from '../news.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  constructor(
    private loadingController: LoadingController,
    public http: HttpClient,
    private newsService: NewsService
  ) { }

  ngOnInit() {
  }
  datas: any;
  postdata: any =[];
  // data = [
  //   {
  //     name: 'Bob',
  //     gender: 'male',
  //     age: 34,
  //   },
  //   {
  //     name: 'Carol',
  //     gender: 'female',
  //     age: 36,
  //   },
  //   {
  //     name: 'Ted',
  //     gender: 'male',
  //     age: 38,
  //   },
  //   {
  //     name: 'Alice',
  //     gender: 'female',
  //     age: 40,
  //   }
  // ];

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

   async getItems(ev: any) {       
    const val = ev.target.value;       
    if (val && val.trim() !== '') {         
    this.datas = await this.datas.filter((datas) => {           
        return (datas.news_topic_detail.toLowerCase().indexOf(val.toLowerCase()) > -1);         
       });       
     } 
       else {         
        await this.getNews();      
       }     
     }
  submit(){
    // console.log(this.postdata.a);
    // this.getA(this.postdata.a)
    // console.log(this.postdata.b);
    // this.getB(this.postdata.b)
    // console.log(this.postdata.c.slice(0,10));
    // this.getC(this.postdata.c)
    // console.log(this.postdata.d.slice(0,10));
    // this.getD(this.postdata.d)
    // console.log(this.postdata.e.slice(11,16));
    // this.getE(this.postdata.e)
    // console.log(this.postdata.f.slice(11,16));
    // this.getF(this.postdata.f)
    console.log(this.postdata.e.slice(11,16))
    console.log(this.postdata.f.slice(11,16));
    this.filtertime(this.postdata.e, this.postdata.f)
    }
    getA(ev: any) {       
      const val = ev;       
      if (val && val.trim() !== '') {         
       this.datas = this.datas.filter((datas) => {           
          return (datas.news_topic_detail.toLowerCase().indexOf(val.toLowerCase()) > -1);         
         });       
        console.log(this.datas)
       } 
         else {         
           this.getNews();      
         }   
    }
    getB(ev: any) {       
      const val = ev;       
      if (val && val.trim() !== '') {         
       this.datas = this.datas.filter((datas) => {           
          return (datas.news_form_detail.toLowerCase().indexOf(val.toLowerCase()) > -1);         
         });       
        console.log(this.datas)
       } 
         else {         
           this.getNews();      
         }   
    }
    getC(ev: any) {       
      const val = ev.slice(0,10);       
      if (val && val.trim() !== '') {         
       this.datas = this.datas.filter((datas) => {           
          return (datas.news_time.slice(0,10).toLowerCase().indexOf(val.toLowerCase()) > -1);         
         });       
        console.log(this.datas)
       } 
         else {         
           this.getNews();      
         }   
    }
    getD(ev: any) {       
      const val = ev.slice(11,16);       
      if (val && val.trim() !== '') {         
       this.datas = this.datas.filter((datas) => {           
          return (datas.news_time.slice(0,10).toLowerCase().indexOf(val.toLowerCase()) > -1);         
         });       
        console.log(this.datas)
       } 
         else {         
           this.getNews();      
         }   
    }

    getE(ev: any) {       
      const val = ev.slice(11,16);       
      if (val && val.trim() !== '') {         
       this.datas = this.datas.filter((datas) => {           
          return (datas.news_time.slice(11,16).toLowerCase().indexOf(val.toLowerCase()) > -1);         
         });       
        console.log(this.datas)
       } 
         else {         
           this.getNews();      
         }   
    }

    getF(ev: any) {       
      const val = ev.slice(11,16);       
      if (val && val.trim() !== '') {         
       this.datas = this.datas.filter((datas) => {           
          return (datas.news_time.slice(11,16).toLowerCase().indexOf(val.toLowerCase()) > -1);    
         });       
        console.log(this.datas)
       } 
         else {         
           this.getNews();      
         }   
    }

    filtertime(inputdataRange1: any, inputdataRange2: any){
      const valStart = inputdataRange1.slice(11,16);
      const valend = inputdataRange2.slice(11,16);
      console.log(valStart)
      console.log(valend)

      if ( valStart && valStart.trim() !== '') {         
        this.datas = this.datas.filter((datas) => {           
          console.log(datas.news_time.slice(11,16).toLowerCase().indexOf(valend.toLowerCase()) > -1);
          //  return datas.news_time.slice(11,16).toLowerCase() > 
          //  return (datas.news_time.slice(11,16).toLowerCase().indexOf(valend.toLowerCase()) > -1);    
          });       
         console.log(this.datas)
        } 
          else {         
            this.getNews();      
          }   

      }
    
}
