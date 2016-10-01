import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	ts;
	tt;
  index;
  constructor(public navCtrl: NavController,private http: Http) {
  	this.ts = [];
  	this.tt = {};
    this.index = true;
  }

  getRes(){
    //请求段子api
    this.http.get('http://api.laifudao.com/open/xiaohua.json')
    .subscribe(data =>{
      //判断返回值
      if(data.json()){
        this.ts = data.json();
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
