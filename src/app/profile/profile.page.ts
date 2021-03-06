import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/File/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
// import { NavController, AlertController, LoadingController, Platform, ActionSheetController, ToastController,} from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { File, FileEntry } from '@ionic-native/File/ngx';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { FilePath } from '@ionic-native/file-path/ngx';
// import { Storage } from '@ionic/storage';
// import { FileChooser } from '@ionic-native/file-chooser/ngx';

// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  // image_base64:any;
  // items:any;
  // uploadText:any;
  // downloadText:any;
  // fileTransfer:FileTransferObject;
  uploadText:any;
  downloadText:any;
  fileTransfer:FileTransferObject;
  filevideo:any;
  
  constructor(
    private transfer:FileTransfer,
    private file:File,
    private filePath:FilePath,
    private fileChooser:FileChooser,
    private streamingMedia: StreamingMedia,
    // public navCtrl: NavController,
    private camera: Camera,
    public http: HttpClient,
    // private transfer: FileTransfer, 
    // private file: File,
    // private alertCtrl: AlertController, 
    // private loadingCtrl: LoadingController,
    // public http: HttpClient,
    // private platform: Platform, 
    // private webview: WebView,
    // private actionSheetController: ActionSheetController, 
    // private toastController: ToastController, 
    // private loadingController: LoadingController,
    // private ref: ChangeDetectorRef, 
    // private filePath: FilePath, 
    // public storage: Storage,
    // private fileChooser: FileChooser
  ) {
    // this.uploadText = "";
    // this.downloadText = "";
    this.uploadText="";
    this.downloadText="";
   }

  ngOnInit() {
  }
  Playvideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log(e) },
      shouldAutoClose: true,
      controls: true
    };
    this.streamingMedia.playVideo(this.filevideo, options);
  }
  
  openvideo(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.VIDEO
    }
    
    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    console.log(imageData)
    this.filevideo = imageData
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    console.log(base64Image);
    }, (err) => {
      console.log(err);
    // Handle error
    });
  }

  UploadFile(){
    let filter = { "mime": "video/mp4" }
    // let filter = { "mime": "application/pdf" }
    this.fileChooser.open(filter).then((uri)=>{
      console.log(uri)
      this.filePath.resolveNativePath(uri).then((nativepath)=>{
          console.log(nativepath)
          this.fileTransfer = this.transfer.create();
          let options:FileUploadOptions={
            fileKey:'video_upload_file',
            fileName:'video.mp4',
            chunkedMode:false,
            httpMethod: 'post',
            headers:{},
            mimeType:'video/mp4'
          }
          this.uploadText = "uploading...."
          // this.fileTransfer.upload(nativepath, 'http://multiinno.name/j2/testvideo.php' , options).then((data)=>{
          this.fileTransfer.upload(nativepath, 'http://192.168.43.164/j2/testvideo.php' , options).then((data)=>{
            alert("tranfer done = "+JSON.stringify(data));
            console.log(data)
            this.uploadText = "";
          },(err)=>{
            this.uploadText = "";
            console.log(err)
            alert(JSON.stringify(err));
          })
        },(err)=>{
          console.log(err)
          alert(JSON.stringify(err));
        })
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

  AbortUpload(){
    this.fileTransfer.abort();
    alert("upload cancel.");
  }

  getMap(){
  let url:string = "http://api.giscloud.com/1/maps"
  let data:Observable<any> = this.http.get(url);
  data.subscribe(res =>{
    console.log(res);
    // if (res == null) {
    //   console.log("fail")
    // } else {
    //   console.log("succes")
    // }
  });
  }
  
  
 
  // loadGallery() {                 // select video from gallery
  //   var options = {
  //     quality: 50,
  //     destinationType: (<any>window).Camera.DestinationType.FILE_URI,
  //     sourceType: (<any>window).Camera.PictureSourceType.PHOTOLIBRARY,
  //     mediaType: (<any>window).Camera.MediaType.VIDEO
  //   }
  //   this.camera.getPicture(options).then( (data) => {
  //     console.log('file://'+data);
  //     this.fileTransfer = this.transfer.create();
  //     let options:FileUploadOptions={
  //       fileKey:'videofile',
  //       fileName:'video.mp4',
  //       chunkedMode:false,
  //       headers:{},
  //       mimeType:'video/mp4'
  //     }
      
  //    }, (err) => {
  //     console.log(err);
  //    });
  // }
  



}
