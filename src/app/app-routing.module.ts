import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './auth/login.component';
import {RegistroComponent} from './auth/registro.component';
import {UserGuardService as guard} from './guards/user-guard.service';
import {RankingComponent} from './rankingTOP/ranking.component';
import {SummonerNameInfoComponent} from './summonerNameInfo/summoner-name-info.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'ranking', component: RankingComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']} },
  { path: 'summoner', component: SummonerNameInfoComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']} }
  // Ejemplo de si necesitara permisos de admin o user
  // { path: 'lista', component: Component, canActivate [guard], data: { expectedRol: ['admin', 'user']}}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
