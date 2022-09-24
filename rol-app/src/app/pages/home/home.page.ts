import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Game } from 'src/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public toastController:ToastController) {}

  public gameList:Game[]=[]

  public async addNewGame() {
    var newGame:Game = {
      name:"My first game",
      entities:[],
      createdDate: new Date("2022-09-21"),
      lastSaved: new Date("2022-09-23")
    }
    this.gameList.push(newGame);

    const toast = await this.toastController.create({
      message: 'Game added.',
      duration: 2000
    });
    toast.present();
  }

  public async onClick() {
      console.log("clicked");
  }
}
