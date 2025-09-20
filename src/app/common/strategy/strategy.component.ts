import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-strategy',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './strategy.component.html',
    styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}