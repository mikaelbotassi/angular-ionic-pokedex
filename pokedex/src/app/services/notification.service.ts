import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastController: ToastController) {}

  async showSuccess(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // Duração em milissegundos
      position: 'top', // Posição do toast: top, middle ou bottom
      cssClass: 'toastr-success' // Cor de sucesso (pode ser personalizada)
    });

    toast.present();
  }

  async showError(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // Duração em milissegundos
      position: 'top', // Posição do toast: top, middle ou bottom
      cssClass: 'toastr-danger' // Cor de erro (pode ser personalizada)
    });

    toast.present();
  }
}
