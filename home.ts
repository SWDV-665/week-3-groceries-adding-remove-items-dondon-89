import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

  items = [
    {
    name: "Almond Milk",
    quantity: 1
    },
    {
      name: "Bread",
      quantity: 2
    },
    {
      name: "Eggs",
      quantity: 12
    },
    {
      name: "Bacon",
      quantity: 1
    },
    {
      name: "Apples",
      quantity: 1
    },
    {
      name: "Chicken",
      qunatity: 2
    },
    {
      name: "Turkey",
      quantity: 1
    },
    {
      name: "Fish",
      quantity: 1
    },
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,  public alertCtrl: AlertController ) {

  }

  removeItem(item, index) {
    console.log("Removing Item -", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + index + "...",
      duration: 3000
    });
    toast.present();

    this.items.splice(index, 1);
  }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }
  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }
}

