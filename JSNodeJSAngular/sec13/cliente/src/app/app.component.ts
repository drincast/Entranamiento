//importamos clase component para recompilar metadatos de configuración de componentes
import { Component } from '@angular/core';

//decorador de clase component
@Component({
  //etiqueta personalizada que permite crear angular en el html y donde se visualiza el componente.
  //se carga en la etiqueta <app-root> de index.html
  selector: 'app-root',
  //plantilla url, ruta de la vista html que se imprime en el componente
  templateUrl: './app.component.html',
  //ruta del archivo de estilos
  styleUrls: ['./app.component.css']
})

//exportamos la clase
export class AppComponent {
  par1 = 'que locos';
  title = 'app';
}
