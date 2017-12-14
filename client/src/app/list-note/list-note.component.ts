import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { concat } from 'Rxjs/observable/concat';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css']
})
export class ListNoteComponent implements OnInit {

  notes : Note[] = [];
  constructor(private _noteService : NoteService) { }

  ngOnInit() {
    this._noteService.noteObserver.subscribe((notes)=>{
      console.log()
      this.notes = notes;
      this.notes.sort(function( a, b){

        console.log("a: ", a);
        console.log("b: ",b);
        var dateA = new Date(a.createdAt);
        var dateB = new Date(b.createdAt);
        if (!dateA) {
          return 0;
        } else if (!dateB) {
          return 1;
        } else {
          return (dateB.getTime() - dateA.getTime());
        }
        
      })
      console.log("list component notes: ", this.notes);
    });
    this._noteService.getAll();
  }

}
