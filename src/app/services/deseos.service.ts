import { Injectable } from "@angular/core";
import { Lista } from "../models/lista.model";

@Injectable({
  providedIn: "root",
})
export class DeseosService {
  public listas: Lista[] = [];
  constructor() {
    this.cargarStorage();
  }

  /**
   * Crea una lista
   * @author Camilo Rivera
   * @param titulo titulo de la lista a crear
   * @returns identificador de la lista
   */
  crearLista(titulo: string): number {
    const lista = new Lista(titulo);
    this.listas.push(lista);
    this.guardarStorage();
    return lista.id;
  }

  /**
   * Consulta una lista por id
   * @author Camilo Rivera
   * @param id identificador de la lista
   */
  obtenerListaPorId(id: string | number) {
    id = Number(id);
    return this.listas.find((ListaData) => ListaData.id === id);
  }

  /**
   * Guarda la informacion en storage
   * @author Camilo Rivera
   */
  guardarStorage() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  /**
   * Carga la informacion de el storage
   * @author Camilo Rivera
   */
  cargarStorage() {
    if (localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    } else {
      this.listas = [];
    }
  }

  /**
   * Metodo que permite eliminar una lista por su id
   * @author Camilo Rivera
   */
  borrarLista(lista: Lista) {
  this.listas =  this.listas.filter(listaData => listaData.id !== lista.id );
  this.guardarStorage();
  }
}
