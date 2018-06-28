import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    currentLang = 'du';
    toggleClass = 'ft-maximize';
    constructor(public translate: TranslateService,private router: Router,
        private route: ActivatedRoute) {
        //const browserLang: string = translate.getBrowserLang();
        const browserLang: string = this.currentLang;
        translate.use(browserLang.match(/en|du|es|pt|de/) ? browserLang : 'du');
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
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
