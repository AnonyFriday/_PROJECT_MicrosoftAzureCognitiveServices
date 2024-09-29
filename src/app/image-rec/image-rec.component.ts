import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MsServiceService } from '../_services/ms-service/ms-service.service';
import { error } from 'console';

@Component({
  selector: 'app-image-rec',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './image-rec.component.html',
  styleUrl: './image-rec.component.scss',
})
export class ImageRecComponent implements OnInit {
  // ===========================
  // === Fields
  // ===========================

  public imageURLPreview?: string;

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

    this.msService.computerVisionCompute(this.imageURLPreview!).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );

    form.reset();
  }
}
