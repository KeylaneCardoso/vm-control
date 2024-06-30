import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService{

    // private userData = {
    //   username: "Gustavo",
    //   email: "gustavo@email.com",
    //   senha: "123456",
    //   mvs: [
    //     {
    //       id: 1,
    //       displayName: "vm1",
    //       cpu: 2,
    //       memory: 1024,
    //       status: "RUNNING"
    //     },
    //     {
    //       id: 2,
    //       displayName: "vm2",
    //       cpu: 1,
    //       memory: 512,
    //       status: "PAUSED"
    //     },
    //     {
    //       id: 3,
    //       displayName: "vm3",
    //       cpu: 4,
    //       memory: 1024,
    //       status: "STOP"
    //     },
    //   ]
    // };


    // getUserData(): any {
    //   return this.userData;
    // }
    // constructor() {
    //   const userString = localStorage.getItem('user1'); // (opcional: verifique se o usuário já está salvo)
    //   if (userString) {
    //     this.userData = JSON.parse(userString); // (opcional: carregue dados do Local Storage na inicialização)
    //   }
    // }
  constructor() { }

  // name = 'Gustavo'  

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const valueString = localStorage.getItem(key);
    return valueString ? JSON.parse(valueString) : null;
  }
  // getItem(): any{
  //   return this.userData;
  // }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }


}
