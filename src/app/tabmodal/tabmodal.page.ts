import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-modal',
  standalone: true,
  templateUrl: './tabmodal.page.html',
  styleUrls: ['./tabmodal.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TabModalPage {

  @Input() book: Book | null = null;

  title = '';
  author = '';

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    if (this.book) {
      this.title = this.book.title;
      this.author = this.book.author;
    }
  }

  save() {
    if (!this.title || !this.author) return;

    this.modalCtrl.dismiss({
      id: this.book?.id || Date.now(),
      title: this.title,
      author: this.author
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }
}