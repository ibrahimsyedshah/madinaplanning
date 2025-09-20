import { Routes } from '@angular/router';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeTwoComponent } from './home-two/home-two.component';
import { HomeThreeComponent } from './home-three/home-three.component';
import { HomeFourComponent } from './home-four/home-four.component';
import { HomeFiveComponent } from './home-five/home-five.component';
import { HomeSixComponent } from './home-six/home-six.component';
import { HomeSevenComponent } from './home-seven/home-seven.component';
import { HomeEightComponent } from './home-eight/home-eight.component';
import { HomeNineComponent } from './home-nine/home-nine.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { HomeTwelveComponent } from './home-twelve/home-twelve.component';
import { HomeElevenComponent } from './home-eleven/home-eleven.component';
import { HomeTenComponent } from './home-ten/home-ten.component';
import { HomeThirteenComponent } from './home-thirteen/home-thirteen.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'home-four', component: HomeFourComponent},
    {path: 'home-five', component: HomeFiveComponent},
    {path: 'home-six', component: HomeSixComponent},
    {path: 'home-seven', component: HomeSevenComponent},
    {path: 'home-eight', component: HomeEightComponent},
    {path: 'home-nine', component: HomeNineComponent},
    {path: 'home-ten', component: HomeTenComponent},
    {path: 'home-eleven', component: HomeElevenComponent},
    {path: 'home-twelve', component: HomeTwelveComponent},
    {path: 'home-thirteen', component: HomeThirteenComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];