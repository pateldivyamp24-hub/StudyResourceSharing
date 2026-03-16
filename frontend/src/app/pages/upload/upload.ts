import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../services/notes';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './upload.html'
})
export class UploadComponent {

  note:any = {
    title:'',
    subject:'',
    uploadedBy:'divya'
  };

  selectedFile:any;

  constructor(private notesService:NotesService){}

  onFileSelect(event:any){
    this.selectedFile = event.target.files[0];
  }

  uploadNote(){

    const formData = new FormData();

    formData.append("title",this.note.title);
    formData.append("subject",this.note.subject);
    formData.append("uploadedBy",this.note.uploadedBy);
    formData.append("file",this.selectedFile);

    this.notesService.uploadNote(formData).subscribe({
      next:(res)=>{
        alert("Note uploaded successfully");
        console.log(res);
      },
      error:(err)=>{
        alert("Upload failed");
        console.log(err);
      }
    });

  }

}