import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Game } from 'src/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public toastController:ToastController, private alertController: AlertController) {}

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

  public async deleteGame() {
    console.log("deleteGame");

    const alert = await this.alertController.create({
      header: 'Delete game',
      subHeader: 'Not reversible',
      message: 'Are you sure you want to delete the game? Any templates you are using inside will not be deleted.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log("Cancelled");
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          console.log("Okayed");
        },
      }],
    });

    await alert.present();
  }
}
