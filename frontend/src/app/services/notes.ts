import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  apiUrl = "https://studyresourcebackend.onrender.com/api/notes";

  constructor(private http: HttpClient){}

  getNotes(){
    return this.http.get(this.apiUrl);
  }

  uploadNote(data:any){
    return this.http.post(`${this.apiUrl}/upload`, data);
  }

}