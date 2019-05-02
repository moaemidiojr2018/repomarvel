import { HttpClient } from "@angular/common/http";
import { delay, tap, take } from "rxjs/operators"

export class CrudService<T> {

    constructor(protected http: HttpClient, private API_URL) { }

    list() {
       return this.http.get<T[]>(this.API_URL)
            .pipe(
                delay(2000),
                tap(console.log)
            );
    }

    loadById(id) {
        return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
    }

}