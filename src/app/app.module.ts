import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGallaryComponent } from './image-gallary/image-gallary.component';
import { CarosalComponent } from './carosal/carosal.component';
import { ScrollDirective } from './directive/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImageGallaryComponent,
    CarosalComponent,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
