import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-details',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {}