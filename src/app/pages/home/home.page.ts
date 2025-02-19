import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { add, hourglass } from 'ionicons/icons';
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonIcon,
  IonCardContent,
  IonFab,
  IonFabButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonIcon,
    IonCardContent,
    IonFab,
    IonFabButton,
    PickupCallCardComponent,
  ],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {
    addIcons({ add, hourglass });
  }

  ngOnInit() {}

  goToPickupCalls() {
    this.router.navigate(['pickup-calls']);
  }

  newPickupCall() {
    this.router.navigate(['pickup-call']);
  }
}
