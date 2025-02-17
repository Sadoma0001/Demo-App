import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonButtons,IonMenuButton,IonList,IonItem,IonAvatar,IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonButtons,IonMenuButton,IonList,IonItem,IonAvatar,IonLabel]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
