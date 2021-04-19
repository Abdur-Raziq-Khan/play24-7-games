import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ElementsComponent } from './components/elements/elements.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { PlaygamesComponent } from './components/main/playgames/playgames.component';
import { LeaderboardComponent } from './components/main/leaderboard/leaderboard.component';
import { AboutUsComponent } from './components/main/about-us/about-us.component';
import { RulesComponent } from './components/main/rules/rules.component';
import { RefundCancellationPolicyComponent } from './components/main/refund-cancellation-policy/refund-cancellation-policy.component';
import { WalletComponent } from './components/main/wallet/wallet.component';
import { TermsConditionsComponent } from './components/main/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/main/privacy-policy/privacy-policy.component';
import { FaqsComponent } from './components/main/faqs/faqs.component';
import { BlogComponent } from './components/main/blog/blog.component';
import { DepositComponent } from './components/main/deposit/deposit.component';
import { EtorPointsComponent } from './components/main/etor-points/etor-points.component';
import { PaymentProcessComponent } from './components/main/payment-process/payment-process.component';
import { ShooterGameComponent } from './components/main/playgames/shooter-game/shooter-game.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'elements',         component: ElementsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'main',      component: MainComponent ,
      children: [
        { path: 'playgames',      component: PlaygamesComponent, children: [
          {
            path: 'shooter', component: ShooterGameComponent
          }
        ] },
        { path: 'leaderboard',      component: LeaderboardComponent },
        { path: 'about-us',      component: AboutUsComponent },
        { path: 'rules',     component: RulesComponent },
        { path: 'refund-and-cancellation-policy',     component: RefundCancellationPolicyComponent },
        { path: 'wallet',     component: WalletComponent },
        { path: 'terms-and-conditions',     component: TermsConditionsComponent },
        { path: 'privacy-policy',     component: PrivacyPolicyComponent },
        { path: 'faqs',     component: FaqsComponent },
        { path: 'blog',     component: BlogComponent },
        { path: 'deposit-now',     component: DepositComponent },
        { path: 'etor-points',     component: EtorPointsComponent },
        { path: 'payment-process',     component: PaymentProcessComponent }
      ]
    }
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
