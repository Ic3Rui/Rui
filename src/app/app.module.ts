import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './Tutorial/server/server.component';
import { ServersComponent } from './Tutorial/servers/servers.component';
import { ServersInlineTemplateComponent } from './Tutorial/servers-inline-template/servers-inline-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ServersInlineTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
