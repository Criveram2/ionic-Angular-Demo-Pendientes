export class ListaItem {
  desc: string;
  comletado: boolean;

  constructor(desc: string) {
    this.desc = desc;
    this.comletado = false;
  }
}
