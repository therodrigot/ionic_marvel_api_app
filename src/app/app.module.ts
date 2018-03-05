import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedPage } from '../pages/feed/feed';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarvelProvider } from '../providers/marvel/marvel';
import { FeedPageModule } from '../pages/feed/feed.module';
import { CharacterDetailPageModule } from '../pages/character-detail/character-detail.module';

@NgModule({
	declarations: [
		MyApp,
		AboutPage,
		ContactPage,
		HomePage,
		TabsPage,
		// FeedPage,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp),
		FeedPageModule,
		CharacterDetailPageModule,
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		AboutPage,
		ContactPage,
		HomePage,
		TabsPage,
		// FeedPage, 
	],
	providers: [
		StatusBar,
		SplashScreen,
		MarvelProvider,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
	]
})
export class AppModule { 
}
