import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { SidebarModule } from 'ng-sidebar';

import { MainRoutingModule } from './main.routing';
import { MainComponent } from './main.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PlaygamesComponent } from './playgames/playgames.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { RulesComponent } from './rules/rules.component';
import { RefundCancellationPolicyComponent } from './refund-cancellation-policy/refund-cancellation-policy.component';
import { WalletComponent } from './wallet/wallet.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BlogComponent } from './blog/blog.component';
import { DepositComponent } from './deposit/deposit.component';
import { EtorPointsComponent } from './etor-points/etor-points.component';
import { PaymentProcessComponent } from './payment-process/payment-process.component';
import { LoginComponent } from '../login/login.component';
import { ShooterGameComponent } from './playgames/shooter-game/shooter-game.component'

@NgModule({
  declarations: [
    LeftSidebarComponent,
    RightSidebarComponent,
    LeaderboardComponent, 
    PlaygamesComponent, 
    AboutUsComponent,
    MainComponent,
    FooterComponent,
    RulesComponent,
    RefundCancellationPolicyComponent,
    WalletComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    FaqsComponent,
    BlogComponent,
    DepositComponent,
    EtorPointsComponent,
    PaymentProcessComponent,
    LoginComponent,
    ShooterGameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    SidebarModule.forRoot(),
    MainRoutingModule
  ],
  exports: [ MainComponent ],
  providers: [],
  bootstrap: [ MainComponent ]
})
export class MainModule { }


// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     FooterComponent
//   ],
//   imports: [
//     BrowserModule,
//     NgbModule.forRoot(),
//     FormsModule,
//     RouterModule,
//     ComponentsModule,
//     ExamplesModule,
//     AppRoutingModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
