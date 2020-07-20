import { Component, OnInit, Input } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Lista } from "../../models/lista.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"],
})
export class ListasComponent {
  @Input() terminada = true;

  constructor(public deseosService: DeseosService, private router: Router) {}

  /**
   * Redireccionar a la listaCreada
   * @author Camilo Rivera
   */
  listaSeleccionada(lista: Lista) {
    console.log(lista);

    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  /**
   * Metodo para borrar una lista
   * @param lista lista que se va ha borrar
   * @author Camilo Rivera
   */
  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }
}
