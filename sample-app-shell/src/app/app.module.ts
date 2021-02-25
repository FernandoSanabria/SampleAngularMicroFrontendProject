import { AppService } from './app.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleLoadService } from 'src/shared/services/module-load.service';
import { MessageBusModule } from 'cross-cutting-concern';
import { DynamicMicroModule } from 'src/shared/dynamic-micro/dynamic-micro.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DynamicMicroModule,
    MessageBusModule.forRoot()
  ],
  providers: [
    ModuleLoadService,
    AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
