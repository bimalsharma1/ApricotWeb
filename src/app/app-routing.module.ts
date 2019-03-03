import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './content/services/services.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
import { AboutUsComponent } from './content/about-us/about-us.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: '',
    redirectTo: '/services',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
