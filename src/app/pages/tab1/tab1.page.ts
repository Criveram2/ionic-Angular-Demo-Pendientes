import { Component } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Lista } from "src/app/models/lista.model";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  /**
   * Agregar una lista
   * @author Camilo Rivera
   */
  async agregarLista() {
    const alert = await this.alertCtrl.create({
      header: "Nueva Lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          placeholder: "Nombre de la lista",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => console.log("Cancelar"),
        },
        {
          text: "Crear",
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            } else {
              const listaId = this.deseosService.crearLista(data.titulo);
              console.log(listaId);
              this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
            }
          },
        },
      ],
    });

    alert.present();
  }

  /**
   * Redireccionar a la listaCreada
   * @author Camilo Rivera
   */
  listaSeleccionada(lista: Lista) {
    console.log(lista);
    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
  }
}
