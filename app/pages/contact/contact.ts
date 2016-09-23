import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  	ts;
	tt;
  constructor(public navCtrl: NavController,private http: Http) {
  	this.ts = [];
  	this.tt = {};
  }

  //载入完页面时触发请求
  onPageDidEnter(){
  	console.log("已完全载入页面");
  	//请求api
  	this.http.get('http://gank.io/api/random/data/%E7%A6%8F%E5%88%A9/25')
  	.subscribe(data =>{
  		//判断返回值
  		if(data.json().error == false){
  			this.ts = data.json().results;
  			// console.log(this.ts);
  			// console.log(this.ts[3].picUrl);
  		}else{
  			console.log('请求失败'+data.json().error);
  		}

  	},erro=>{
  		console.log('请求失败');
  	});
  	
  }
}
