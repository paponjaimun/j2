import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NavController, Platform, ActionSheetController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Storage } from '@ionic/storage';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-approve-news-detail-edit',
  templateUrl: './approve-news-detail-edit.page.html',
  styleUrls: ['./approve-news-detail-edit.page.scss'],
})
export class ApproveNewsDetailEditPage implements OnInit,OnDestroy {

  myDate: String = new Date().toLocaleString();
  postdata: any = {};
  postdataSave: any = {};
  dataGeography: any = [];
  dataProvinces: any = [];
  dataAmphures: any = [];
  dataDistricts: any = [];
  data_Continent: any = [];
  dataNews_country: any = [];
  data_Foreign_country: any = [];
  images = [];
  dataNewstype = [];
  dataNews_weight = [];
  dataNews = [];
  get_dataBeforepage: string;
  getimage: any;
  lengthimage: any;

  constructor(
    private navCtrl: NavController, 
    private router: Router,
    public http: HttpClient,
    private platform: Platform, 
    private camera: Camera, 
    private file: File, 
    private webview: WebView,
    private actionSheetController: ActionSheetController, 
    private toastController: ToastController, 
    private plt: Platform, 
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef, 
    private filePath: FilePath, 
    public storage: Storage,
    private route: ActivatedRoute
  ) { 
    this.get_dataBeforepage = this.route.snapshot.paramMap.get('news_id');
    console.log(this.get_dataBeforepage)    
    // this.platform.ready().then(()=>{      
       // let urlcountry:string = "http://localhost/j2/listcountry.php"
      let urlcountry:string = "http://192.168.43.164/j2/listcountry.php"
      // let urlcountry:string = "http://192.168.1.101/j2/listcountry.php"
      let datacountry:Observable<any> = this.http.post(urlcountry, "");
      datacountry.subscribe(rescountry =>{
        console.log(rescountry);
        if (rescountry == null) {
          console.log("fail")
        } else {
          console.log("succes")
          this.dataNews_country = rescountry;
        }
      });
      // let url:string = "http://localhost/j2/listgeographies.php"
      let url:string = "http://192.168.43.164/j2/listgeographies.php"
      // let url:string = "http://192.168.1.101/j2/listgeographies.php"
      let data:Observable<any> = this.http.post(url, "");
      data.subscribe(res =>{
        console.log(res);
        if (res == null) {
          console.log("fail")
        } else {
          console.log("succes")
          this.dataGeography = res;
        }
      });     
      // let url4:string = "http://localhost/j2/getContinent.php" 
      let url4:string = "http://192.168.43.164/j2/getContinent.php"
      // let url4:string = "http://192.168.1.101/j2/getContinent.php"
      let data4:Observable<any> = this.http.post(url4, "");
      data4.subscribe(res4 =>{
        console.log(res4);
        if (res4 == null) {
          console.log("fail")
        } else {
          console.log("succes")
          this.data_Continent = res4;
        }
      });
      // // let url2:string = "http://localhost/j2/listnewstype.php"
      // let url2:string = "http://192.168.43.164/j2/listnewstype.php"
      // // let url2:string = "http://192.168.1.101/j2/listnewstype.php"
      // let data2:Observable<any> = this.http.post(url2, "");
      // data2.subscribe(res2 =>{
      //   console.log(res2);
      //   if (res2 == null) {
      //     console.log("fail")
      //   } else {
      //     console.log("succes")
      //     this.dataNewstype = res2;
      //   }
      // });
    // })
    // let urldatanews:string = "http://localhost/j2/getdatapageeditapprove.php"
    let urldatanews:string = "http://192.168.43.164/j2/getdatapageeditapprove.php"
    // let urldatanews:string = "http://192.168.1.101/j2/getdatapageeditapprove.php"
    let postdataset = new FormData();
    postdataset.append('news_id', this.get_dataBeforepage);
    let dataNews:Observable<any> = this.http.post(urldatanews, postdataset);
    dataNews.subscribe(resDatanews =>{
      console.log(resDatanews);
      if (resDatanews == null) {
        console.log("fail")
      } else {
        console.log("succes")
        this.dataAmphures = resDatanews
        this.dataDistricts = resDatanews
        this.dataProvinces = resDatanews
        this.dataNewstype = resDatanews
        this.data_Foreign_country = resDatanews
        this.postdata.country = resDatanews[0].country_id
        this.postdata.headline = resDatanews[0].news_topic_detail
        this.postdata.news_type = resDatanews[0].news_type_id
        this.postdata.description = resDatanews[0].news_detail
        this.postdata.news_source = resDatanews[0].news_form_detail
        this.postdata.news_sources = resDatanews[0].news_sources
        this.postdata.region = resDatanews[0].geography_id
        this.postdata.city = resDatanews[0].district_id
        this.postdata.district = resDatanews[0].sub_district_id
        // this.postdata.country = resDatanews[0].news_topic_detail
        // this.postdata.reliability = resDatanews[0].news_topic_detail
        this.postdata.province = resDatanews[0].province_id
        this.postdata.secret = resDatanews[0].news_secret
        this.postdata.news_topic_id = resDatanews[0].news_topic_id
        this.postdata.news_form_id = resDatanews[0].news_form_id
        this.postdata.local_image = resDatanews[0].local_image
        this.postdata.news_w_user_id = resDatanews[0].news_w_user_id
        this.postdata.continents_code = resDatanews[0].continent
        this.postdata.foreign_country = resDatanews[0].country_name
        this.postdata.location = resDatanews[0].location
        this.postdata.times = resDatanews[0].news_time_occurrence
      }
    });
    this.getImages()
  }
  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadStoredImages();
    });
  }
  ngOnDestroy() {
    this.storage.set(STORAGE_KEY, null);
    console.log(this.storage)
  }
  getImages(){
    let datasetpost = new FormData();
    datasetpost.append('news_id', this.get_dataBeforepage);
    // let url:string = "http://localhost/j2/approve_status.php"
    // let url:string = "http://192.168.1.101/j2/approve_status.php"
    let urlgetimage:string = "http://192.168.43.164/j2/newdetail_approve_getimage.php"
    let imageload:Observable<any> = this.http.post(urlgetimage, datasetpost);
    imageload.subscribe(resimg =>{
      this.getimage = resimg;
      this.lengthimage = resimg.length
      console.log(this.getimage);
    });
  }
  customPopoverCountry: any = {
    header: 'ประเทศ'
  };
  customPopoverType: any = {
    header: 'ประเภทข่าว'
  };
  customPopoverGeo: any = {
    header: 'ภูมิภาค'
  };
  customPopoverPro: any = {
    header: 'จังหวัด'
  };
  customPopoverAm: any = {
    header: 'อำเภอ/เขต'
  };
  customPopoverDes: any = {
    header: 'ตำบล/แขวง'
  };
  customPopoverSc: any = {
    header: 'ชั้นความลับ'
  };
  customPopoverContinent: any = {
    header: 'ทวีป'
  };
  customPopoverForeign_country: any = {
    header: 'ชื่อประเทศ'
  }
  ///Selectinput
  selectCountry(event){
    // let url:string = "http://localhost/j2/listnewstype.php"
    let url:string = "http://192.168.43.164/j2/listnewstype.php"
    // let url:string = "http://192.168.1.101/j2/listnewstype.php"
    let dataPost = new FormData();
    dataPost.append('country_id', event.detail.value);
    let data:Observable<any> = this.http.post(url, dataPost);
    data.subscribe(res =>{
      console.log(res);
      if (res == null) {
        console.log("fail")
      } else {
        console.log("succes")
        this.dataNewstype = res;
      }
    });
    console.log(event.detail.value);
  }
  selectContinent(event){
    // let url:string = "http://localhost/j2/getForeign_country.php"
    let url:string = "http://192.168.43.164/j2/getForeign_country.php"
    // let url:string = "http://192.168.1.101/j2/getForeign_country.php"
    let dataPost = new FormData();
    dataPost.append('continent_code', event.detail.value);
    let data:Observable<any> = this.http.post(url, dataPost);
    data.subscribe(res =>{
      console.log(res);
      if (res == null) {
        console.log("fail")
      } else {
        console.log("succes")
        this.data_Foreign_country= res;
      }
    });
    console.log(event.detail.value);
  }
  selectProvinces(event){
    console.log(event)
    // let url:string = "http://localhost/j2/listprovinces.php"
    let url:string = "http://192.168.43.164/j2/listprovinces.php"
    // let url:string = "http://192.168.1.101/j2/listprovinces.php"
    let dataPost = new FormData();
    dataPost.append('geography_id', event.detail.value);
    let data:Observable<any> = this.http.post(url, dataPost);
    data.subscribe(res =>{
      console.log(res);
      if (res == null) {
        console.log("fail")
      } else {
        console.log("succes")
        this.dataProvinces = res;
      }
    });
    console.log(event.detail.value);
  }
  selectAmphures(event){
    // let url:string = "http://localhost/j2/listamphures.php"
    let url:string = "http://192.168.43.164/j2/listamphures.php"
    // let url:string = "http://192.168.1.101/j2/listamphures.php"
    let dataPost = new FormData();
    dataPost.append('province_id', event.detail.value);
    let data:Observable<any> = this.http.post(url, dataPost);
    data.subscribe(res =>{
      console.log(res);
      if (res == null) {
        console.log("fail")
      } else {
        console.log("succes")
        this.dataAmphures = res;
      }
    });
    console.log(event.detail.value);
  }
  selectDistricts(event){
    // let url:string = "http://localhost/j2/listdistricts.php"
    let url:string = "http://192.168.43.164/j2/listdistricts.php"
    // let url:string = "http://192.168.1.101/j2/listdistricts.php"
    let dataPost = new FormData();
    dataPost.append('district_id', event.detail.value);
    let data:Observable<any> = this.http.post(url, dataPost);
    data.subscribe(res =>{
      console.log(res);
      if (res == null) {
        console.log("fail")
      } else {
        console.log("succes")
        this.dataDistricts = res;
      }
    });
    console.log(event.detail.value);
  }
  selectTime(event){
    this.postdata.times = event.detail.value.slice(0,10)+" "+event.detail.value.slice(11,19)
  }

  //camera
  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
  }
 
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }
 
  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
        header: "Select Image source",
        buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
}
 
takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };
 
    this.camera.getPicture(options).then(imagePath => {
        if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
            this.filePath.resolveNativePath(imagePath)
                .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
        } else {
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
    });
}

createFileName() {
  var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
  return newFileName;
}

copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.updateStoredImages(newFileName);
  }, error => {
      this.presentToast('Error while storing file.');
  });
}

updateStoredImages(name) {
  this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if (!arr) {
          let newImages = [name];
          this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
          arr.push(name);
          this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
          name: name,
          path: resPath,
          filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle
  });
}

deleteImage(imgEntry, position) {
  this.images.splice(position, 1);

  this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      let filtered = arr.filter(name => name != imgEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
          this.presentToast('File removed.');
      });
  });
}

deleteImageUrl(img,number){
  this.getimage.splice(number, 1);
  console.log(this.getimage)
}
// startUpload(imgEntry) {
//   console.log(imgEntry);
//   console.log(imgEntry.filePath);
//   this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
//       .then(entry => {
//           ( < FileEntry > entry).file(file => this.readFile(file))
//       })
//       .catch(err => {
//           this.presentToast('Error while reading file.');
//       });
// }
  // async uploadImageData(formData: FormData) {
  //   const loading = await this.loadingController.create({
  //       message: 'Uploading image...',
  //   });
  //   await loading.present();
  async save() { 
    const loading = await this.loadingController.create({
      message: 'Uploading data..',
    });
    await loading.present();
    // let url = 'http://localhost/j2/editdatapageeditapprove.php';
    let url = 'http://192.168.43.164/j2/editdatapageeditapprove.php';
    // let url = 'http://192.168.1.101/j2/editdatapageeditapprove.php';
    let postdataset = new FormData();
    postdataset.append('news_id',this.get_dataBeforepage);
    postdataset.append('news_type_id',this.postdata.news_type);
    postdataset.append('news_topic_id', this.postdata.news_topic_id);
    postdataset.append('news_topic',this.postdata.headline);
    postdataset.append('news_detail',this.postdata.description);
    postdataset.append('news_lat','100');
    postdataset.append('news_long','110');
    // postdataset.append('news_time', new Date().toLocaleString());
    postdataset.append('news_approve','0');
    postdataset.append('news_w_user_id', this.postdata.news_w_user_id);
    postdataset.append('news_a_user_id','Null');
    postdataset.append('news_form_id',this.postdata.news_form_id);
    postdataset.append('news_form',this.postdata.news_source);
    postdataset.append('news_secret',this.postdata.secret);
    postdataset.append('province_id',this.postdata.province);
    postdataset.append('district_id',this.postdata.city);
    postdataset.append('sub_district_id',this.postdata.district);
    postdataset.append('country_id',this.postdata.country);
    postdataset.append('geography_id', this.postdata.region);
    postdataset.append('continents_code', this.postdata.continents_code);
    postdataset.append('foreign_country', this.postdata.foreign_country);
    postdataset.append('location', this.postdata.location);
    postdataset.append('news_time_occurrence',this.postdata.times);
    console.log(this.postdata);

    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
      console.log(call)
      console.log(this.get_dataBeforepage);
      this.deleteandinsert()
      for (var val of this.images) {
        this.file.resolveLocalFilesystemUrl(val.filePath)
        .then(entry => {
            ( < FileEntry > entry).file(file => this.readFile(file ,this.get_dataBeforepage))
        })
        .catch(err => {
            this.presentToast('Error while reading file.');
        });
      }
    });
    setTimeout(() => 
    {
      loading.dismiss();
      this.router.navigateByUrl('/tabsApprove/approve-news');
    },3000);
  }
  readFile(file: any , news_id) {
    const reader = new FileReader();
    reader.onload = () => {
        const formData = new FormData();
        const imgBlob = new Blob([reader.result], {
            type: file.type
        });
        formData.append('file', imgBlob, file.name);
        formData.append('news_id', news_id);
        this.uploadImageData(formData);
    };
    reader.readAsArrayBuffer(file);
  }
  
  // async uploadImageData(formData: FormData) {
  //   const loading = await this.loadingController.create({
  //       message: 'Uploading image...',
  //   });
  //   await loading.present();

  uploadImageData(formData: FormData) {
  this.http.post("http://192.168.43.164/j2/editimage.php", formData)
  // this.http.post("http://192.168.1.101/j2/editimage.php", formData)
        // .pipe(
        //     finalize(() => {
        //         loading.dismiss();
        //     })
        // )
    .subscribe(res => {
      if (res['success']) {
        this.presentToast('File upload complete.')
      } else {
        this.presentToast('File upload failed.')
      }
    });
  }

  deleteandinsert(){
    if (this.getimage.length != this.lengthimage) {
      console.log("!=")
      let urldelete = 'http://192.168.43.164/j2/deleteimage.php';
      let data_news_id = new FormData();
      data_news_id.append('news_id',this.get_dataBeforepage);
      console.log(this.postdata);

      let datares:Observable<any> = this.http.post(urldelete ,data_news_id);
      datares.subscribe(respons =>{
          console.log(respons)
          this.insertimgs()
      });
    } else {
      console.log(this.getimage)
      console.log(this.lengthimage)
    }
  }
  insertimgs(){
        for(var imgbefore of this.getimage){
        let insertdata = 'http://192.168.43.164/j2/insertimge_1.php';
        let data_insert = new FormData();
        data_insert.append('news_id', this.get_dataBeforepage);
        data_insert.append('local_image', imgbefore.local_image);
        data_insert.append('newsimgs_no', imgbefore.newsimgs_no);
        console.log(this.get_dataBeforepage)
        console.log(imgbefore.local_image)
        console.log(imgbefore.newsimgs_no)
        console.log(data_insert);
        let dataresinsert:Observable<any> = this.http.post(insertdata , data_insert);
        dataresinsert.subscribe(responsinsert =>{
          console.log(responsinsert)
        });
      }
  }

}

