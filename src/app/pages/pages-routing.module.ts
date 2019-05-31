
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

import { HomeComponent } from './home/home.component';

const pagesRoutes: Routes = [
    { path: 'dashboard',
     component: DashboardComponent,
     data:{ titulo:"Escritorio" }
    },
    { path: 'search',
     component: SearchComponent,
     data:{ titulo:"Búsqueda" }
    },
    { path: 'inicio',
     component: HomeComponent,
     data:{ titulo:"Inicio" }
    },
    {
      path: '',
      pathMatch: 'full',
      // canActivate:[VerificaTokenGuard],
      redirectTo: '/search'
    }
];
export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
