import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-cta',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './cta.component.html',
    styleUrls: ['./cta.component.scss']
})
export class CtaComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}