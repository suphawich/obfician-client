import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostProvider } from '../providers/post/post';
import { HttpClientModule } from '@angular/common/http';
import { PostPage } from '../pages/post/post';
import { TimelinePage } from '../pages/timeline/timeline';
import { ShowcasePage } from '../pages/showcase/showcase';
import { AccountPage } from '../pages/account/account';
import { ShowcaseProvider } from '../providers/showcase/showcase';
import { ItemPage } from '../pages/item/item';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PostPage,
    TimelinePage,
    ShowcasePage,
    AccountPage,
    ItemPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    PostPage,
    TimelinePage,
    ShowcasePage,
    AccountPage,
    ItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostProvider,
    ShowcaseProvider
  ]
})
export class AppModule {}
