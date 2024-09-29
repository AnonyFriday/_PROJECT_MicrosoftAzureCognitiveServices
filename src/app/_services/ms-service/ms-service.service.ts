import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MsServiceService {
  // ===========================
  // === Fields
  // ===========================

  private baseEndpointCv = environment.endpoint.concat('vision/v3.2/analyze');
  private key = environment.key1;
  private features = ['Caption', 'Read'];

  // ===========================
  // === Services
  // ===========================

  private httpClient = inject(HttpClient);

  // ===========================
  // === Lifecycle
  // ===========================

  constructor() {}

  // ===========================
  // === Methods
  // ===========================

  public computerVisionCompute(imageURL: string) {
    const cvUrl = this.baseEndpointCv.concat(
      '?visualFeatures=Categories,Description,Tags,Color,Brands,Faces,ImageType'
    );
    return this.httpClient.post(cvUrl, { url: imageURL });
  }
}
