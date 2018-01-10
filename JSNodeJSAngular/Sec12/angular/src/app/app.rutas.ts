import { ModuleWithProviders } from '@angular/core';

//servicio opcional, presenta una vista de componente particular para una determinada url
import { Routes, RouterModule } from '@angular/router';

import { IndexComponente } from './componentes/index';

import { ApiComponente } from './componentes/api';

//conjunto de rutas donde se puede desplazar (cambiar de vista) en la aplicación
const appRoutes: Routes = [
  {path: "", component: IndexComponente},
  {path: "index", component: IndexComponente},
  {path: "api", component: ApiComponente},
  {path: "**", component: IndexComponente}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
