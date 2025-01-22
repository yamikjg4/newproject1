import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes this service globally available
})
export class ExportService {
  private apiUrl = 'https://localhost:44309/api/ExportExcel/Export';

  constructor(private http: HttpClient) { }

  exportToExcel(): Observable<Blob> {
    return this.http.get(this.apiUrl, { responseType: 'blob' });
  }
}
