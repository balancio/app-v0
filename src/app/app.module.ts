import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppViewComponent } from './ui/view/app-view.component';
import { SectionComponent } from './ui/comp/section.component';
import { WalletsSidebarViewComponent } from './ui/view/wallets-sidebar-view.component';
import { WalletViewComponent } from './ui/view/wallet-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AppViewComponent,
    SectionComponent,
    WalletsSidebarViewComponent,
    WalletViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
