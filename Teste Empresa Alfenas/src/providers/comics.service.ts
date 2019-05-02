import { RequestOptions } from '@angular/http/src/base_request_options';

import { CrudService } from './curd-service';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { PUBLIC_KEY, PRIVATE_KEY } from '../shared/keyMavel';
import { GetHasMD5 } from '../shared/getHashMd5';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ComicsServce extends CrudService<any>{

    constructor(protected httpClient: HttpClient) {
        super(httpClient, `${environment.API}comics`);
    }

    onGetListComics(): Observable<any> {
        const timestamp = Number(new Date());
        const hash = GetHasMD5.hashMd5(timestamp, PUBLIC_KEY.publickey, PRIVATE_KEY.privatekey);
        const API_URL = environment.API + `/comics?ts=${timestamp}&limit=12&apikey=${PUBLIC_KEY.publickey}&hash=${hash}`;
        return this.httpClient.request('GET', API_URL, { responseType: 'json' });
    }

    onGettAllComics(): Observable<any> {
        const timestamp = Number(new Date());
        const hash = GetHasMD5.hashMd5(timestamp, PUBLIC_KEY.publickey, PRIVATE_KEY.privatekey);
        const API_URL = environment.API + `/comics?ts=${timestamp}&limit=50&apikey=${PUBLIC_KEY.publickey}&hash=${hash}`;
        return this.httpClient.request('GET', API_URL, { responseType: 'json' });
    }

    onGetComicById(id: number): Observable<any> {
        const timestamp = Number(new Date());
        const hash = GetHasMD5.hashMd5(timestamp, PUBLIC_KEY.publickey, PRIVATE_KEY.privatekey);
        const API_URL = environment.API + `comics?ts=${timestamp}&id=${id}&apikey=${PUBLIC_KEY.publickey}&hash=${hash}`;  
        return this.httpClient.request('GET', API_URL, { responseType: 'json' });
    }
}