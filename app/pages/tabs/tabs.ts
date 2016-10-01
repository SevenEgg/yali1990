import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { VedioPage } from '../vedio/vedio';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
  public tab4Root: any;

  constructor() {
    // 段子
    this.tab1Root = HomePage;
    // 趣图
    this.tab2Root = AboutPage;
    //妹子图
    this.tab3Root = ContactPage;
    //搞笑视频
    this.tab4Root = VedioPage;
  }
}
