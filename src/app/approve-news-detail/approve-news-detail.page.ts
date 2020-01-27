import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-approve-news-detail',
  templateUrl: './approve-news-detail.page.html',
  styleUrls: ['./approve-news-detail.page.scss'],
})
export class ApproveNewsDetailPage implements OnInit {

  select: boolean;
  news_topic_detail: string;
  images: any;
  news_detail: string;
  news_type_detail: string;
  news_time: string;
  news_id: string;
  news_form_detail: string;
  news_name_alias:string;
  value_approve: string = "1";
  news_upapprove_comment: string = "";
  checkbox: boolean = true;
  user_name: string;
  news_approve: string;
  checkimg: string = "null";
  getimage: any;
  news_w_user_id: string;
  news_weight_detail: string;
  country_id: string;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    private router: Router,
    public storage: Storage,
    private navCtrl: NavController
  ) { 
    this.news_topic_detail = this.route.snapshot.paramMap.get('news_topic_detail');  
    this.news_detail = this.route.snapshot.paramMap.get('news_detail');
    this.news_type_detail = this.route.snapshot.paramMap.get('news_type_detail');
    this.news_time = this.route.snapshot.paramMap.get('news_time');
    this.news_id = this.route.snapshot.paramMap.get('news_id');
    this.news_form_detail = this.route.snapshot.paramMap.get('news_form_detail');
    this.news_approve = this.route.snapshot.paramMap.get('news_approve');
    this.news_upapprove_comment = this.route.snapshot.paramMap.get('news_upapprove_comment');
    this.news_name_alias = this.route.snapshot.paramMap.get('news_name_alias');
    this.news_w_user_id = this.route.snapshot.paramMap.get('news_w_user_id');
    this.news_weight_detail = this.route.snapshot.paramMap.get('news_weight_detail');
    this.country_id = this.route.snapshot.paramMap.get('country_id');
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.storage.get('username').then((val) => {
      console.log('Your username is', val);
      this.user_name = val;
      this.getImages()
      if (val == null) {
        this.router.navigateByUrl('/login');
        console.log('Sucess');
      }
    });
  }
  Nocomment() {
    this.select = false;
    this.value_approve = "1";
  }
  comment() {
    this.select = true;
    if (this.checkbox == true) {
      this.value_approve = "2";
    } else {
      this.value_approve = "0";
    }
  }
  getImages(){
    let datasetpost = new FormData();
    datasetpost.append('news_id', this.news_id);
    // let url:string = "http://localhost/j2/approve_status.php"
    // let url:string = "http://192.168.1.101/j2/approve_status.php"
    let urlgetimage:string = "http://192.168.43.164/j2/newdetail_approve_getimage.php"
    let image:Observable<any> = this.http.post(urlgetimage, datasetpost);
    image.subscribe(getimage =>{
      this.getimage = getimage
      console.log(this.getimage);
    });
  }
  getNewsData(){
    let datasetpost = new FormData();
    datasetpost.append('news_id', this.news_id);
    datasetpost.append('country_id', this.country_id);
    // let url:string = "http://localhost/j2/approve_status.php"
    // let url:string = "http://192.168.1.101/j2/approve_status.php"
    let urlgetimage:string = "http://192.168.43.164/j2/newdetail_approve_getimage.php"
    let image:Observable<any> = this.http.post(urlgetimage, datasetpost);
    image.subscribe(getimage =>{
      this.getimage = getimage
      console.log(this.getimage);
    });
  }
  selects(event){
    if (event.detail.checked == true) {
      this.value_approve = "2";
    } else {
      this.value_approve = "3";
    }
  }
  edit(){ 
    this.navCtrl.navigateForward(['/tabsApprove/approve-news/approve-news-detail/approve-news-detail-edit', {       
      news_topic_detail: this.news_topic_detail,
      news_detail: this.news_detail,
      news_type_detail: this.news_type_detail,
      news_time: this.news_time,
      news_id: this.news_id,
      news_form_detail: this.news_form_detail,
      news_approve: this.news_approve
    }]);  
  }
  approve(){
    let dataPost = new FormData();
    dataPost.append('news_id', this.news_id);
    dataPost.append('news_approve', this.value_approve);
    dataPost.append('news_upapprove_comment', this.news_upapprove_comment);
    dataPost.append('news_a_user_id', this.user_name);
    console.log(this.value_approve);
    // let url:string = "http://localhost/j2/approve_status.php"
    // let url:string = "http://192.168.1.101/j2/approve_status.php"
    let url:string = "http://192.168.43.164/j2/approve_status.php"
    let callback:Observable<any> = this.http.post(url, dataPost);
    callback.subscribe(call =>{
      console.log(call);
      this.router.navigateByUrl('tabsApprove/approve-news');
    });
  }
}

