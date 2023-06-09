import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReferenciasMaterialModule } from './referencias-material/referencias-material.module';
import { PaisComponent } from './componentes/pais/pais.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReferenciasMaterialModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
