import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {EquipementModalPage} from './equipement-modal.page';

const routes: Routes = [
    {
        path: '',
        component: EquipementModalPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [EquipementModalPage]
})
export class EquipementModalPageModule {
}
