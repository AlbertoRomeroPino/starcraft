import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonMenuButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircleOutline, downloadOutline } from 'ionicons/icons';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
    IonBackButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    CommonModule,
    IonMenuButton
  ],
})
export class HeaderComponent implements OnInit {
  @Input({ required: true }) title!: string;
  @Input() backButtonURL: string | null = null;
  @Input() isModal: boolean = false;
  @Input() showMenuButton: boolean = false;

  deferredPrompt: any;
  utilsService = inject(UtilsService);

  constructor() {
    addIcons({ closeCircleOutline, downloadOutline });
  }

  ngOnInit() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
  }

  dismissModal() {
    this.utilsService.dismissModal();
  }

  async installPWA() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      this.deferredPrompt = null;
    } else {
      console.log('No deferred prompt available');
    }
  }
}