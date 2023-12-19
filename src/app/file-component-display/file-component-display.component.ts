import { Component, OnInit } from '@angular/core';
import { FMServiceService } from '../services/fmservice.service';

@Component({
  selector: 'app-file-component-display',
  standalone: true,
  template: `
    <div *ngFor="let file of files">
      <p>{{ file.name }} - File Size: {{ file.size }}</p>
    </div>
  `,
  imports: [],
  templateUrl: './file-component-display.component.html',
  styleUrl: './file-component-display.component.css',
})
export class FileComponentDisplayComponent implements OnInit {
  files: any[] = [];

  constructor(private fmService: FMServiceService) {}

  ngOnInit() {
    this.fmService.getDir('yourDirectoryId').then((dir) => {
      this.files = dir.files || [];
    });
  }
}
