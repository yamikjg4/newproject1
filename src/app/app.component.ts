import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExportService } from './export.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private exportService: ExportService){

  }
  downloadExcel() {
    this.exportService.exportToExcel().subscribe({
      next: (response) => {
        // Create a blob from the response
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        // Create a link element to trigger the download
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ExportedData.xlsx';
        link.click();

        // Clean up
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error('Error downloading the Excel file:', error);
      }
    });
  }
  title = 'newproject1';
}
