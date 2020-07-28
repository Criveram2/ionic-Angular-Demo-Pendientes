import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { literalArr } from '@angular/compiler/src/output/output_ast';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], compleatada: boolean = true): Lista[] {
    return listas.filter(lista => lista.terminada === compleatada);
  }

}
