
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';


const pagesRoutes: Routes = [
    { path: 'dashboard',
     component: DashboardComponent,
     data:{ titulo:"Escritorio" }
    },
    { path: 'search',
     component: SearchComponent,
     data:{ titulo:"Búsqueda" }
    },
    {
      path: '',
      pathMatch: 'full',
      // canActivate:[VerificaTokenGuard],
      redirectTo: '/search'
    }
];
export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
