import { Component, OnInit } from '@angular/core';
import { } from '@fortawesome/free-regular-svg-icons';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {

  }

  ngOnInit(): void {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    // Verifica si browserLang no es undefined antes de usar match()
    if (browserLang && browserLang.match(/en|es/)) {
      this.translate.use(browserLang);
    } else {
      this.translate.use('en'); // Idioma predeterminado
    }
  }

}
