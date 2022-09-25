import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { FakedataService } from 'src/app/services/fakedata.service';
import { Entity, Game } from 'src/interfaces';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public toastController:ToastController, private alertController: AlertController) {}

  ngOnInit() {
    console.log(FakedataService.gameList[0].uid)
    console.log(FakedataService.gameList[1].uid)
    console.log(FakedataService.gameList[2].uid)
  }

  public gameList:Game[] = FakedataService.gameList

  public async addNewGame() {
    await this.alertCreateGame()
  }

  private async alertCreateGame() {
    console.log(this)
    const alert = await this.alertController.create({
      header: 'Create a new Game',
      inputs: [
        {
          name:"name",
          placeholder: 'Name (max 15 characters)',
          attributes: {
            maxlength: 15,
          },
        }
      ],
      buttons: [{
        text: 'OK',
        role: 'confirm',
        handler: this.createNewGameAfterAlert,
      }],
    });

    await alert.present();
  }

  public createNewGameAfterAlert(res:any) {

    if (res.name) {
      console.log(res.name)

      FakedataService.gameList.push(
        {
          uid:uuidv4(),
          name:res.name,
          entities:[],
          createdDate: new Date("2022-07-30"),
          lastSaved: new Date("2022-09-23"),
          currentTurn: "sdfsf"
        }
      )
    }
  }

  public async onClick() {
    console.log("clicked");
  }

  public async deleteGame(idToDelete) {
    console.log("deleteGame");
    console.log("ID to Delete: "+idToDelete)

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
        handler: async () => {
          console.log("ID to Delete inside handler: " + idToDelete)
          var indexToDelete:number = FakedataService.gameList.findIndex(x => x.uid == idToDelete);
          if (indexToDelete > -1) {
            console.log(indexToDelete);
            FakedataService.gameList.splice(indexToDelete, 1)
            await this.showToast("Game deleted succesfully");
          } else {
            await this.showToast("There was an error.");
          }
        },
      }],
    });

    await alert.present();
  }

  private async showToast(text:string) {
    var toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }
}
