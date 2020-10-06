import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.page.html',
  styleUrls: ['./detail-user.page.scss'],
})
export class DetailUserPage implements OnInit {
  name: string; email: string; password: string; amount: number; tran: string; chang: string; 
  state$: Observable<object>;
  constructor(public toastController: ToastController) {
    this.tran = 'Transfer';
    this.chang = 'Recharge';
    this.email = history.state.email;
    this.name = history.state.name;
    this.password = history.state.password;
    this.amount = Number(history.state.amount);
  }

  ngOnInit() {
  }

}
