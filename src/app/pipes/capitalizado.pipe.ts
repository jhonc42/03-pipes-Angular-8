import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
    // Para recibir argumentos uno por uno con nombre aparte:
    // transform(value: string, arg1: string, arg2: string): string {
        // Para recibir argumentos dentro de un array por posicion:
        // transform(value: string, ...args: any[]): string {
            // con un parametro que por defecto tiene true:
            transform(value: string, todas:boolean = true): string {
                value = value.toLocaleLowerCase();
                let nombres = value.split(' ');
                if (todas) {
                    for( let i in nombres) {
                        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
                    }
                }
                else {
                    nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
                }
                return nombres.join(' ');
    }
}
