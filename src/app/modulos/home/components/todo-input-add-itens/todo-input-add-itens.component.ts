import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public emitirEvento = new EventEmitter()
  public tarefas:string=''

  getEventt(tarefas:string){
    tarefas = tarefas.trim()
    if(tarefas){
      this.emitirEvento.emit(tarefas)
      this.tarefas=''
    }
    

  }

}
