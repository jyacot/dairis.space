import { Component } from '@angular/core';
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent {
  icons = {
    instagram: faInstagram,
    whatsapp: faWhatsapp,
    linkedin: faLinkedin,
    mail: faEnvelope,
  };
}
