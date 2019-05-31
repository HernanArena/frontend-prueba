
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const pagesRoutes: Routes = [
    { path: 'dashboard',
     component: DashboardComponent,
     data:{ titulo:"Escritorio" }
    },
    {
      path: '',
      pathMatch: 'full',
      // canActivate:[VerificaTokenGuard],
      redirectTo: '/dashboard'
    }
];
export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
