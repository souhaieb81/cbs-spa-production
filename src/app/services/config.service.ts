import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: any;
  constructor(private http: HttpClient) { }

  async loadConfig() {
    try {
      const data = await firstValueFrom(this.http.get("/environments/config.json"));
      this.config = data;
    } catch (error) {
      console.error('Could not load configuration', error);
    }
  }

  getConfig() {
    return this.config;
  }
}
