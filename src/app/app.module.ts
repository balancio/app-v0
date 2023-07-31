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
import { AddTransactionViewComponent } from './ui/view/add-transaction-view.component';
import { AddWalletViewComponent } from './ui/view/add-wallet-view.component';
import { RegisterViewComponent } from './ui/view/register-view.component';
import { SettingsViewComponent } from './ui/view/settings-view.component';
import { TransactionInfoViewComponent } from './ui/view/transaction-info-view.component';
import { WalletInfoViewComponent } from './ui/view/wallet-info-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AppViewComponent,
    SectionComponent,
    WalletsSidebarViewComponent,
    WalletViewComponent,
    LoginViewComponent,
    CardComponent,
    AddTransactionViewComponent,
    AddWalletViewComponent,
    RegisterViewComponent,
    SettingsViewComponent,
    TransactionInfoViewComponent,
    WalletInfoViewComponent
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
