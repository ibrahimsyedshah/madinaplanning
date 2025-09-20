import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [RouterLink, CarouselModule],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {

    constructor(
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    homeSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 500,
		autoHeight: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		]
    }

}