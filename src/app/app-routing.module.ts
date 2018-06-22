import { RouterModule, Routes } from '@angular/router';
import { TrusteesComponent } from './trustees/trustees.component';
import { StudentComponent } from './student/student.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: 'trustees', component: TrusteesComponent },
    { path: 'students', component: StudentComponent },
    { path: '',
      redirectTo: '/trustees',
      pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
  ];
  
  @NgModule({
    imports: [
        RouterModule,
      RouterModule.forRoot(
        appRoutes
      )
      // other imports here
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }