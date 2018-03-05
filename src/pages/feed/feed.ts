import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { XkcdProvider } from '../../providers/xkcd/xkcd';
import { MarvelProvider } from '../../providers/marvel/marvel';
import { CharacterDetailPage } from '../character-detail/character-detail';

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
	public listCharacters=new Array();
	
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, 
		private marvelprovider:MarvelProvider) {
	}

	private page:number=0;
	private _loadCharacters(nextPage?:boolean): any {
		if(nextPage)
			this.page++;

		// console.log('_loadCharacters',this.page);

		var promise = new Promise((resolve, reject) => {
			this.marvelprovider.getCharacters(this.page).subscribe(
				data => {
					console.log(data);
					this.listCharacters = this.listCharacters.concat(data.data.results);
					resolve(this.listCharacters);
				}
			)
		})
		return promise;
	}

	public openDetails(char){
		console.log(char);
		this.navCtrl.push(CharacterDetailPage, { id: char.id });
	}

	public doInfinite(infiniteScroll) {
		// console.log('doInfinite',this.page);
		this._loadCharacters(true).then(function(){
			infiniteScroll.complete()
			// console.log("infiniteScroll.complete()")
		})
	}

	public ionViewDidLoad() {
		console.log('ionViewDidLoad FeedPage');
		this._loadCharacters()
	}

}