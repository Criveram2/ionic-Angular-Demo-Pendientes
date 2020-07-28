import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Lista } from "../../models/lista.model";
import { Router } from "@angular/router";
import { AlertController, IonList } from "@ionic/angular";

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"],
})
export class ListasComponent {
  @ViewChild( 'lista') lista: IonList;
  @Input() terminada = true;

  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

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

  /**
   * Metodo para modificar una lista
   * @param lista lista que se va ha modifcar
   * @author Camilo Rivera
   */
  async modificarLista(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: "Editar Lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          value: lista.titulo,
          placeholder: "Nombre de la lista",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Cancelar");
            this.lista.closeSlidingItems();
          }
        },
        {
          text: "Modificar",
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            } else {
              lista.titulo = data.titulo;
              this.deseosService.guardarStorage();
              this.lista.closeSlidingItems();
            }
          },
        },
      ],
    });

    alert.present();
  }
}
