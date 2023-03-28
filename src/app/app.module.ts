import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './home/videos/videos.component';
import { ManuaisComponent } from './home/manuais/manuais.component';
import { LegislacaoComponent } from './home/legislacao/legislacao.component';
import { DocumentosComponent } from './home/documentos/documentos.component';
import { DownloadsComponent } from './home/downloads/downloads.component';
import { HomePageComponent } from './home/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideosComponent,
    ManuaisComponent,
    LegislacaoComponent,
    DocumentosComponent,
    DownloadsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
