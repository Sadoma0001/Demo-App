import { Component, OnInit ,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton],
})
export class PickupCallCardComponent  implements OnInit {
  @Input() hasFooter: boolean = false;
  @Input() hasHeader: boolean = false;
  @Input() status: string = "";
  @Input() updatedAt: string = "";
  @Input() createdAt: string = "";
  @Input() notes: string = "";
  @Input() value: string = "";

  constructor(private router: Router) { }

  ngOnInit() {}

  goToPickupCalls() {
    this.router.navigate(['pickup-calls']);
  }

}
