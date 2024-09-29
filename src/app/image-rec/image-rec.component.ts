import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MsServiceService } from '../_services/ms-service/ms-service.service';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@Component({
  selector: 'app-image-rec',
  standalone: true,
  imports: [FormsModule, NgxJsonViewerModule],
  templateUrl: './image-rec.component.html',
  styleUrl: './image-rec.component.scss',
})
export class ImageRecComponent implements OnInit {
  // ===========================
  // === Fields
  // ===========================

  public imageURLPreview?: string;
  public imageObject: any;

  // ===========================
  // === Services
  // ===========================

  public msService = inject(MsServiceService);

  // ===========================
  // === Lifecycle
  // ===========================

  ngOnInit(): void {}

  // ===========================
  // === Methods
  // ===========================

  analyzeImage(form: NgForm) {
    this.imageURLPreview = form.value.imageURL;

    this.msService.computerVisionCompute(this.imageURLPreview!).subscribe({
      next: (value) => {
        this.imageObject = value;
      },
      error: (error) => {},
      complete: () => {},
    });

    form.reset();
  }
}
