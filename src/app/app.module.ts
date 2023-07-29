import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppViewComponent } from './ui/view/app-view.component';
import { SectionComponent } from './ui/comp/section.component';
import { WalletsSidebarViewComponent } from './ui/view/wallets-sidebar-view.component';
import { WalletViewComponent } from './ui/view/wallet-view.component';
import { LoginViewComponent } from './ui/view/login-view.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './ui/comp/card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppViewComponent,
    SectionComponent,
    WalletsSidebarViewComponent,
    WalletViewComponent,
    LoginViewComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
