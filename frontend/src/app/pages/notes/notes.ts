import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../services/notes';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.html'
})
export class NotesComponent implements OnInit {

  notes:any[] = [];
  searchText:string = '';

  constructor(
    private notesService:NotesService,
    private cd:ChangeDetectorRef
  ){}

  ngOnInit(){
    this.getNotes();
  }

  getNotes(){
    this.notesService.getNotes().subscribe({
      next:(data:any)=>{
        this.notes = data;
        this.cd.detectChanges();   // forces UI refresh
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  download(id:any){
    window.open(`http://localhost:5000/api/notes/download/${id}`,"_blank");
  }
}