import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    private _historial: string[] = [];
    private apiKey = '4NUvbyj664e95dpFEVTAv2D4LXNu773h'

    public results: any[] = [];

    get historial() {
        return [...this._historial];
    }

    constructor(private http: HttpClient) { }

    buscarGifs(query: string) {
        query = query.trim().toLowerCase();
        if (!this._historial.includes(query)) {
            this._historial.unshift(query);
            this._historial = this._historial.splice(0, 5);
        }

        this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
        ).subscribe((resp: any) => {
            //console.log(resp.data);
            this.results = resp.data;
        });
    }
}
