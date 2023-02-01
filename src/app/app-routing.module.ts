import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'servers', component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent},
      { path: ':id', component: ServerComponent},
    ]},
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent},
    ]},
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({

})
export class AppRoutingModule {

}