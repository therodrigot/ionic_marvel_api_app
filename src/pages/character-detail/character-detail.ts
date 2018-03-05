import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarvelProvider } from '../../providers/marvel/marvel';

/**
 * Generated class for the CharacterDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-detail',
  templateUrl: 'character-detail.html',
})
export class CharacterDetailPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private marvelprovider: MarvelProvider) {
  }

  private charId;
  public charData=new Object();
  public thumb="";

  ionViewDidEnter(){
    console.log('ionViewDidEnter CharacterDetailPage');
    this.charId = this.navParams.get("id");
    this.marvelprovider.getCharacterDetail(this.charId).subscribe(
      data => {
        this.charData = data.data.results.pop();
        this.thumb = this.charData.thumbnail.path + '/landscape_incredible.' + this.charData.thumbnail.extension;
        console.log("this.charData",this.charData);
      }
    )
  }

  public getThumb(){
    var r = this.charData.thumbnail.path + '/landscape_incredible.' + this.charData.thumbnail.extension;
    console.log("!",r);
    return r;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterDetailPage');
  }

}
