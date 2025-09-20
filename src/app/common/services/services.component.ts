import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}