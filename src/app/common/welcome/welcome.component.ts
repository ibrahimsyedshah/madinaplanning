import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-welcome',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}
