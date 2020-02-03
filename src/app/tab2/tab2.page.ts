// import { Component, OnInit } from '@angular/core';
// import { NavController } from '@ionic/angular';
// import { Router } from '@angular/router';
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

const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

  myDate: String = new Date().toLocaleString();
  postdata: any = {};
  postdataSave: any = {};
  dataGeography: any = [];
  dataProvinces: any = [];
  dataAmphures: any = [];
  dataDistricts: any = [];
  dataNews_country: any = [];
  data_Continent: any = [];
  data_Foreign_country: any =[];
  images = [];
  dataNewstype = [];
  dataNews_weight = [];
  user_name: string;
  filevideo:any;

  constructor(
    // private navCtrl: NavController, 
    // private router: Router
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
    public storage: Storage
    ) {
      this.platform.ready().then(()=>{         
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
        // let url3:string = "http://localhost/j2/listweight.php"
        let url3:string = "http://192.168.43.164/j2/listweight.php"
        // let url3:string = "http://192.168.1.101/j2/listweight.php"
        let data3:Observable<any> = this.http.post(url3, "");
        data3.subscribe(res3 =>{
          console.log(res3);
          if (res3 == null) {
            console.log("fail")
          } else {
            console.log("succes")
            this.dataNews_weight = res3;
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
      })
    }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadStoredImages();
    });
  }
  ionViewWillEnter() {
    this.storage.get('username').then((val) => {
      console.log('Your username is', val);
      this.user_name = val;
      if (val == null) {
        this.router.navigateByUrl('/login');
        console.log('Sucess');
      }
    });
    this.imageClear()
    this.postdata.news_type = null
    this.postdata.headline = null
    this.postdata.description = null
    this.postdata.reliability = null
    this.postdata.news_source = null
    this.postdata.secret = null
    this.postdata.province = null 
    this.postdata.city = null
    this.postdata.district = null
    this.postdata.country = null
    this.postdata.region = null
    this.postdata.continents_code = null
    this.postdata.foreign_country = null
    this.postdata.times = null
    this.postdata.location = null
    // this.postdata.news_sources = null
    // this.postdata.news_sources = null
    // this.postdata.news_name_alias = null
  }
  ngOnDestroy() {
    this.storage.set(STORAGE_KEY, null);
    console.log(this.storage)
  }

  goHome(){
    this.router.navigateByUrl('/homepage');
   }

  goAddnew(){
    // this.navCtrl.navigateForward('/addnews');
    console.log(this.images);
    console.log(this.postdata);
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

  selectProvinces(event){
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
  selectLocation(event){    
  // let url:string = "http://localhost/j2/Location_thailand.php"
  let url:string = "http://192.168.43.164/j2/Location_thailand.php"
  // let url:string = "http://192.168.1.101/j2/Location_thailand.php"
  let dataPost = new FormData();
    
    let check:any
    for (check in this.dataDistricts) {
      if (this.dataDistricts[check].sub_district_id === event.detail.value) {
        console.log(this.dataDistricts[check].zip_code)
        dataPost.append('zip_code', this.dataDistricts[check].zip_code);
        let data:Observable<any> = this.http.post(url, dataPost);
        data.subscribe(res =>{
          console.log(res);
          if (res == null) {
            console.log("fail")
          } else {
            console.log("succes")
            // this.data_Foreign_country= res;
            this.postdata.news_lat = res[0].thailand_lat
            this.postdata.news_long = res[0].thailand_long
            console.log(this.postdata.news_lat)
            console.log(this.postdata.news_long)
          }
        });
      }
    }
    console.log(event.detail.value);
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
        header: "เลือกไฟล์",
        buttons: [{
                text: 'รูปภาพจากแกลอรี่',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'ใช้กล้องถ่ายรูป',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'ใช้วีดีโอ',
                handler: () => {
                  this.takeVideo()
                }
            },
            {
                text: 'ปิด',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
}

takeVideo(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    mediaType: this.camera.MediaType.VIDEO
  }
  
  this.camera.getPicture(options).then((videoData) => {
  console.log(videoData)
  this.filevideo = videoData
  }, (err) => {
    console.log(err);
  });
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
  console.log(this.images)
  console.log(imgEntry)
  this.images.splice(position, 1);
  console.log(this.images)

  this.storage.get(STORAGE_KEY).then(images => {
      console.log(images)
      let arr = JSON.parse(images);
      console.log(arr)
      let filtered = arr.filter(name => name != imgEntry.name);
      console.log(filtered)
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
      console.log(correctPath)
      console.log(imgEntry.name)
      this.file.removeFile(correctPath, imgEntry.name).then(res => {
          this.presentToast('File removed.');
      });
    });
}

imageClear(){
  for (var imgEntry of this.images) {
  console.log(this.images)
  console.log(imgEntry)
  this.images.splice(0, 1);
  console.log(this.images)

    this.storage.get(STORAGE_KEY).then(imagesdelete => {
      console.log(imagesdelete)
      let arr = JSON.parse(imagesdelete);
      console.log(arr)
      let filtered = arr.filter(name => name != imgEntry.name);
      console.log(filtered)
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
      console.log(correctPath)
      console.log(imgEntry.name)
      this.file.removeFile(correctPath, imgEntry.name).then(res => {
          // this.presentToast('File removed.');
      });
    });
  }
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

  async save() { 
    const loading = await this.loadingController.create({
      message: 'Uploading data..',
    });
  await loading.present();
  // let url = 'http://localhost/j2/insertnews.php';
    let url = 'http://192.168.43.164/j2/insertnews.php';
    // let url = 'http://192.168.1.101/j2/insertnews.php';
    let postdataset = new FormData();
    // postdataset.append('news_id',this.postdata.headline);
    postdataset.append('news_type_id',this.postdata.news_type);
    postdataset.append('news_topic',this.postdata.headline);
    postdataset.append('news_detail',this.postdata.description);
    postdataset.append('news_lat',this.postdata.news_lat);
    postdataset.append('news_long',this.postdata.news_long);
    // postdataset.append('news_time', new Date().toLocaleString());
    postdataset.append('news_approve','0');
    postdataset.append('news_w_user_id',this.user_name);
    postdataset.append('news_a_user_id','Null');
    // postdataset.append('news_a_time',this.postdata.longitude);
    postdataset.append('news_weight_id',this.postdata.reliability);
    postdataset.append('news_form',this.postdata.news_source);
    postdataset.append('news_secret',this.postdata.secret);
    postdataset.append('province_id',this.postdata.province);
    postdataset.append('district_id',this.postdata.city);
    postdataset.append('sub_district_id',this.postdata.district);
    postdataset.append('country_id',this.postdata.country);
    postdataset.append('geography_id',this.postdata.region);
    postdataset.append('continent',this.postdata.continents_code);
    postdataset.append('foreign_country',this.postdata.foreign_country);
    postdataset.append('news_time_occurrence',this.postdata.times = this.postdata.times.slice(0,10)+" "+this.postdata.times.slice(11,19));
    postdataset.append('location',this.postdata.location);
    // postdataset.append('news_name_alias',this.postdata.news_name_alias);
    // postdataset.append('news_upapprove_comment',this.postdata.country);
    console.log(this.postdata);
    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
      console.log(call);
      console.log(call[0].news_id);
      for (var val of this.images) {
        this.file.resolveLocalFilesystemUrl(val.filePath)
        .then(entry => {
            ( < FileEntry > entry).file(file => this.readFile(file ,call[0].news_id))
        })
        .catch(err => {
            this.presentToast('Error while reading file.');
        });
      }
      setTimeout(() => 
      { 
        this.imageClear()
        loading.dismiss();
        this.router.navigateByUrl('/tabs/status');
      },
      3000);
    });
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
    this.http.post("http://192.168.43.164/j2/insertimage.php", formData)
    // this.http.post("http://192.168.1.101/j2/insertimage.php", formData)
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
  
}
