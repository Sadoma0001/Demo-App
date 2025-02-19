import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonTextarea,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pickup-call',
  templateUrl: './pickup-call.page.html',
  styleUrls: ['./pickup-call.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonTextarea,
    IonButton,
  ],
})
export class PickupCallPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  newPickupCall() {
    this.router.navigate(['home']);
  }
}
