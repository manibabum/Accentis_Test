import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-horizontal-navbar',
    templateUrl: './horizontal-navbar.component.html',
    styleUrls: ['./horizontal-navbar.component.scss']
})

export class HorizontalNavbarComponent {
    currentLang = 'du';
    toggleClass = 'ft-maximize';
    constructor(public translate: TranslateService,private router: Router,
        private route: ActivatedRoute) {
        //const browserLang: string = translate.getBrowserLang();
        const browserLang: string = this.currentLang;
        translate.use(browserLang.match(/en|es|pt|de|du/) ? browserLang : 'du');
    }

    ChangeLanguage(language: string) {
        this.translate.use(language);
    }

    ToggleClass() {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else
            this.toggleClass = 'ft-maximize'
    }

    Logout() {
        localStorage.removeItem('userToken');
        this.router.navigate(['/login']);
    }
}
