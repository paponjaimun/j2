import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-tabs-user-detailnews',
  templateUrl: './tabs-user-detailnews.page.html',
  styleUrls: ['./tabs-user-detailnews.page.scss'],
})
export class TabsUserDetailnewsPage implements OnInit {

  select: boolean = true;
  news_topic_detail: string;
  urlToImage: string;
  news_detail: string;
  news_type_detail: string;
  news_time: string;
  news_id: string;
  news_approve: string;
  news_form_detail: string;
  value_approve: string = "1";
  news_upapprove_comment: string = "";
  checkbox: boolean = true;
  user_name: string;
  checkimg: string = "null";
  news_w_user_id: string;
  getimage: any;
  news_weight_detail: string;
  news_name_alias: string;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    private router: Router,
    private navCtrl: NavController
  ) {
    this.news_topic_detail = this.route.snapshot.paramMap.get('news_topic_detail');  
    this.news_detail = this.route.snapshot.paramMap.get('news_detail');
    this.news_type_detail = this.route.snapshot.paramMap.get('news_type_detail');
    this.news_time = this.route.snapshot.paramMap.get('news_time');
    this.news_id = this.route.snapshot.paramMap.get('news_id');
    this.news_approve = this.route.snapshot.paramMap.get('news_approve');
    this.news_form_detail = this.route.snapshot.paramMap.get('news_form_detail');
    this.news_upapprove_comment = this.route.snapshot.paramMap.get('news_upapprove_comment');
    this.news_name_alias = this.route.snapshot.paramMap.get('news_name_alias');
    this.news_w_user_id = this.route.snapshot.paramMap.get('news_w_user_id');
    this.news_weight_detail = this.route.snapshot.paramMap.get('news_weight_detail');
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getImages()
  }
  getImages(){
    let datasetpost = new FormData();
    datasetpost.append('news_id', this.news_id);
    console.log(this.value_approve);
    // let url:string = "http://localhost/j2/approve_status.php"
    // let url:string = "http://192.168.1.101/j2/approve_status.php"
    let urlgetimage:string = "http://192.168.43.164/j2/newdetail_approve_getimage.php"
    let image:Observable<any> = this.http.post(urlgetimage, datasetpost);
    image.subscribe(getimage =>{
      this.getimage = getimage
      console.log(this.getimage);
    });
  }
  comment() {
    this.select = true;
    if (this.checkbox == true) {
      this.value_approve = "2";
    } else {
      this.value_approve = "0";
    }
  }
  selects(event){
    if (event.detail.checked == true) {
      this.value_approve = "2";
    } else {
      this.value_approve = "0";
    }
  }

}
