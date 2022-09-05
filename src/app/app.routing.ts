import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormationComponent } from './formation/formation.component';

const routes: Routes = [
    { path: "about", component: AboutComponent },
    { path: "formation", component: FormationComponent },
    { path: "portfolio", component: FormationComponent },
    { path: "contato", component: FormationComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
