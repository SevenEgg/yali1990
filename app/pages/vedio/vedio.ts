import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'build/pages/vedio/vedio.html'
})
export class VedioPage{
	ts;
	tt;
  index;
  constructor(public navCtrl: NavController,private http: Http) {
  	this.ts = [];
  	this.tt = {};
    this.index = true;
  }

  getRes(){
    //请求视频api
    this.http.get('http://gank.io/api/random/data/%E4%BC%91%E6%81%AF%E8%A7%86%E9%A2%91/20')
    .subscribe(data =>{
      //判断返回值
      if(data.json().error == false){
        this.ts = data.json().results;
      }else{
        console.log('请求失败'+data.json().error);
      }

    },erro=>{
      console.log('请求失败');
    });
  }

 //载入完页面时触发请求
  onPageDidEnter(){
    if(this.index == true){
      this.getRes();
      this.index = false;
    }
    
  }


  // 下拉刷新
  doRefresh(refresher) {
    //刷新数据
    this.getRes();

    setTimeout(() => {
      refresher.complete();
    }, 3000);
  }

}
