import { Component } from '@angular/core';
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  icons = {
    instagram: faInstagram,
    whatsapp: faWhatsapp,
    linkedin: faLinkedin,
    mail: faEnvelope,
  };
}
