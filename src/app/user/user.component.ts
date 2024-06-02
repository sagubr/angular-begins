import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from './user.model';
import { v5 as uuidv5 } from 'uuid';

const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit{
  /**
   * @Input() é um decorator que define uma propriedade como uma entrada de um componente Angular.
   * @Input({required: true}) -> O Angular exige que a propriedade seja fornecida. A partir da v16
   * Obs: Há também o método com Signals, também a partir da v16
   */
  @Input() user?: User;

  /**
   * @Output() é um decorator que define uma propriedade como uma saída de um componente Angular.
   */
  @Output() select: EventEmitter<User> = new EventEmitter<User>();
  private _hash?: string;

  ngOnInit() {
    this._hash = uuidv5(this.user?.id ?? '', MY_NAMESPACE);
  }

  get hash(): string {
    return this._hash ?? '';
  }

  /**
   * prefixo 'on' é comum para métodos que lidam com eventos
   */
  onSelectUser(user?: User): void {
    this.select.emit(user);
  }
}
