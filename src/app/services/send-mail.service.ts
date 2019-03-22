import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class SendMailService {
  loading = false;
  success = false;

  constructor(private afs: AngularFirestore) {
  }

  async submitHandler(submitted: {name: string, email: string, message: string, shouldAddToNewsletter: boolean}) {
    try {
      await this.afs.collection('contacts').add(submitted);
      this.success = true;
    } catch (err) {
      console.error(err);
    }

    this.loading = false;
  }
}
