import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  constructor() { }

  inc(): void {
    console.log("ESTAS USANDO UN SERVICIO1");    
  }
}
