import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	ts;
	tt;
  constructor(public navCtrl: NavController,private http: Http) {
  	this.ts = [];
  	this.tt = {};
  }


  //载入完页面时触发请求
  onPageDidEnter(){
  	//请求api
  	this.http.get('http://api.laifudao.com/open/xiaohua.json')
  	.subscribe(data =>{
  		// console.log(data.json());
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


}
