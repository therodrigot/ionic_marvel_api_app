import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-feed',
	templateUrl: 'feed.html',
})
export class FeedPage {
	debugger;

	public feedData={
		cards:
			[{
				"title":"Header2",
				"descr":'1The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.'
			},
			{
				"title":"Header3",
				"descr":'2The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.'
			},
			{
				"title":"Header3",
				"descr":'3The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.'
			}],
		}

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		var card=[0,1,2,3,4];

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FeedPage');
	}

}
