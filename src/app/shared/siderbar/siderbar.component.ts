import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent {

  constructor(private gifsService: GifsService) { }
  get historial(){
    return this.gifsService.historial;
  }
  buscar(termino: string){
    this.gifsService.buscarGifs(termino);
  }
}
