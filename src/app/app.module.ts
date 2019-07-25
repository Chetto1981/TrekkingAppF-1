import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import { InMemoryStore } from './in-memori-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { GaleryComponent } from './galery/galery.component';
import { ShopComponent } from './shop/shop.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { HeaderComponent } from './home/header/header.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { VideoComponent } from './home/video/video.component';
import { HomegaleryComponent } from './home/homegalery/homegalery.component';
import { ContactComponent } from './home/contact/contact.component';
import { AutentifikacijaService } from './autentifikacija.service';
import { PostblogService } from './postblog.service';
import { ShoppingService } from './shopping.service';
import { CartComponent } from './cart/cart.component';
import { OpisproizvodaComponent } from './opisproizvoda/opisproizvoda.component';
import { PostblogComponent } from './blog/postblog/postblog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddblogComponent } from './addblog/addblog.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'galery', component: GaleryComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'cart', component: CartComponent},
  {path: 'opis/:proizvodId', component: OpisproizvodaComponent},
  {path: 'postblog', component:PostblogComponent},
  {path: 'addblog', component: AddblogComponent},
  {path: 'pagenotfound', component: PagenotfoundComponent},
  {path: '**', redirectTo:'/pagenotfound'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    GaleryComponent,
    ShopComponent,
    SigninComponent,
    SignupComponent,
    NavComponent,
    ShoppingComponent,
    HeaderComponent,
    CarouselComponent,
    VideoComponent,
    HomegaleryComponent,
    ContactComponent,
    CartComponent,
    OpisproizvodaComponent,
    PostblogComponent,
    PagenotfoundComponent,
    AddblogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyA7A6MSueZUOlgpxBsj2WbOP3rufjXG1Ys"
    }),
    HttpClientInMemoryWebApiModule.forRoot(
       InMemoryStore,{dataEncapsulation: false}
    )

  ],
  providers: [AutentifikacijaService, PostblogService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
