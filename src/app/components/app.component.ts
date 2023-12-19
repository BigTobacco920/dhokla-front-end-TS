import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FMServiceService } from '../services/fmservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: '../../index.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: any[] = []; // Declare Files property

  constructor(private fmService: FMServiceService) {}

  ngOnInit(): void {
    this.loadFiles();
  }

  private async loadFiles(): Promise<void> {
    try {
      const dir = await this.fmService.getDir('yourDirectoryId');
      this.files = dir.files || [];
    } catch (error) {
      console.error('Error loading files:', error);
      // Handle the error as needed
    }
  }
}
