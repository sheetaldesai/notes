import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  note : string = "";
  constructor(private _noteService : NoteService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Submit note: ", this.note);
    this._noteService.create(this.note);
  }

}
