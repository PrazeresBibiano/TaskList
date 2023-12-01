import { Component, DoCheck, OnInit } from '@angular/core';
import { ListaTarefas } from '../../model/lista-tarefas';
import { last } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  public tarefas:Array<ListaTarefas>= JSON.parse(localStorage.getItem('list') || '[]')
  
  constructor(){

  }
  ngDoCheck(): void {
    this.setLocalStorage()
    
  }

  public setEvent(event:string){
    this.tarefas.push({listaTarefas:event, checked:false})
  }

  public eliminarElemento(index:number){
    this.tarefas.splice(index,1)

  }

  public eliminarTudo(){

    let confirm = window.confirm("Ten a certeza que pretende eliminar tudo ?")
    if(confirm){
      this.tarefas = []
    } 
  }

  public eliminarTarefaVazia(event:string, index:number){

    if(!event.length){
      let confirm = window.confirm("Campo Vazio, Deseja Apagar ?")
      if(confirm){
        this.eliminarElemento(index)
      }
    }
  }

  public setLocalStorage(){
    if(this.tarefas){
      this.tarefas.sort((first,last)=>Number(first.checked) - Number(last.checked))
      localStorage.setItem('list', JSON.stringify(this.tarefas))
    }
  }
}
