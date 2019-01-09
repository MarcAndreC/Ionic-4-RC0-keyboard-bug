import {Component, OnInit} from '@angular/core';
import {NavParams, NavController, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-equipement-modal',
    templateUrl: './equipement-modal.page.html',
    styleUrls: ['./equipement-modal.page.scss'],
})
export class EquipementModalPage implements OnInit {
    constructor(
		private navParams: NavParams,
		private nav:NavController,
		private modalCtrl:ModalController,

	) {
    }

    async ngOnInit() {
        let that = this;
    }

    closeModal() {
        this.modalCtrl.dismiss();
    }
}