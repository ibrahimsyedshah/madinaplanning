import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-subscribe',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}