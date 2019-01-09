import { Component } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';

import {EquipementModalPage} from '../pages/equipement-modal/equipement-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	public equipementModal: any;
	
	constructor(
        private alertCtrl: AlertController,
		public modalCtrl: ModalController
    ) {
    }
	
	async equipementmodal() {
		const equipementModal = await this.modalCtrl.create({
            component: EquipementModalPage
        });
        await equipementModal.present();
	}
	
	test1(): void {
		console.log('test1');
	}
	test2(): void {
		console.log('test2');
	}
	test3(): void {
		console.log('test3');
	}
}
