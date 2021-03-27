import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Gallery1Component } from './gallery1/gallery1.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { NewEvent1Component } from './new-event1/new-event1.component';
import { NewEventComponent } from './new-event/new-event.component';
import { NewTestimonialsComponent } from './new-testimonials/new-testimonials.component';
import { NewGallaryComponent } from './new-gallary/new-gallary.component';
import { NewNewsComponent } from './new-news/new-news.component';
import { NewNews1Component } from './new-news1/new-news1.component';
import { NewContactUsComponent } from './new-contact-us/new-contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    Gallery1Component,
    NewsComponent,
    EventsComponent,
    NewEvent1Component,
    NewEventComponent,
    NewTestimonialsComponent,
    NewGallaryComponent,
    NewNewsComponent,
    NewNews1Component,
    NewContactUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
