import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormationComponent } from './formation/formation.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
    { path: "about", component: AboutComponent },
    { path: "formation", component: FormationComponent },
    { path: "portfolio", component: PortfolioComponent },
    { path: "contact", component: ContactComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
