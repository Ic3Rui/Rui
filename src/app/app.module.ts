import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './Tutorial/server/server.component';
import { ServersComponent } from './Tutorial/servers/servers.component';
import { ServersInlineTemplateComponent } from './Tutorial/servers-inline-template/servers-inline-template.component';
import { SuccessAlertComponent } from './Tutorial/Practice/success-alert/success-alert.component';
import { WarningAlertComponent } from './Tutorial/Practice/warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ServersInlineTemplateComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
