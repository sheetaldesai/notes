import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';
import { Note } from './note';

@Injectable()
export class NoteService {

  noteObserver = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {}
  

  getAll() {
    this._http.get('http://localhost:8000/notes').subscribe(
      (notes: any[])=>{
        console.log("Got notes from server: ",notes);
        this.noteObserver.next(notes)
      }),
      error => console.log(error);
  }

  create(note: string) {
    var newNote = new Note(note);
    console.log("Adding note to the serer: ",newNote);
    this._http.post('http://localhost:8000/notes', newNote).subscribe(
      response => this.getAll(),
      errorResponse => console.log(errorResponse)
    );
  }

}
