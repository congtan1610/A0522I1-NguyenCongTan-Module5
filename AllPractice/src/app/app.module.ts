import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {TodoComponent} from './todo/todo.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {HttpClientModule} from "@angular/common/http";
import {ImageGalleryModule} from "./image-gallery/image-gallery.module";
import {GalleryConfig} from "./image-gallery/token";

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBarComponent,
    TodoComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,ImageGalleryModule
  ],
  providers: [{provide: GalleryConfig, useValue: 3}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
