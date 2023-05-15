import { Component } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})

export class CarteComponent {
  etages: string[] = ['Etage 1', 'Etage 2', 'Etage 3', 'Etage 4'];
  menuOpen: boolean = false;
  selectedEtage: string = 'Etage 1';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  choisirEtage(etage: string) {
    this.selectedEtage = etage;
    this.menuOpen = false;
  }

    onClickCarre(numeroCarre: number) {
      console.log("Carré cliqué :");
      // Ajoutez ici votre logique pour réagir au clic sur un carré spécifique
    }
}
