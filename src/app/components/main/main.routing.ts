import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PlaygamesComponent } from './playgames/playgames.component';
import { AboutUsComponent } from './about-us/about-us.component';
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


const routes: Routes =[
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'playgames',         component: PlaygamesComponent },
    // { path: 'leaderboard',      component: LeaderboardComponent },
    // { path: 'about-us',         component: AboutUsComponent },
    // { path: 'rules',     component: RulesComponent },
    // { path: 'refund-and-cancellation-policy',     component: RefundCancellationPolicyComponent },
    // { path: 'wallet',     component: WalletComponent },
    // { path: 'terms-and-conditions',     component: TermsConditionsComponent },
    // { path: 'privacy-policy',     component: PrivacyPolicyComponent },
    // { path: 'faqs',     component: FaqsComponent },
    // { path: 'blog',     component: BlogComponent },
    // { path: 'deposit-now',     component: DepositComponent },
    // { path: 'etor-points',     component: EtorPointsComponent },
    // { path: 'payment-process',     component: PaymentProcessComponent }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class MainRoutingModule { }
