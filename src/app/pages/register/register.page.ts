import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRadio, IonRadioGroup, IonCard, IonCardContent, IonCardHeader, IonCardTitle,  IonInput, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRadio, IonRadioGroup, IonCard, IonCardContent, IonCardHeader, IonCardTitle,  IonInput, IonItem, IonButton]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
