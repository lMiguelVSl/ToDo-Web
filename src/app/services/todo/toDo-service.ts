import { HttpClient } from "@angular/common/http";
import { Endpoints, ToDo } from "..";
import { environment } from "../../../environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ToDoService {

    constructor(private http: HttpClient) { }

    getToDos() {
        return this.http.get<ToDo[]>(`${environment.baseUrl}${Endpoints.ToDo.getToDos.path()}`);
    }

    createToDo(toDo: ToDo) {
        return this.http.post<number>(`${environment.baseUrl}${Endpoints.ToDo.createToDo.path()}`, toDo);
    }

    updateToDo(toDo: ToDo) {
        return this.http.put(`${environment.baseUrl}${Endpoints.ToDo.updateToDo.path()}`, toDo);
    }

    deleteToDo(toDoId: any) {
        return this.http.delete(`${environment.baseUrl}${Endpoints.ToDo.updateToDo.path()}?Id=${toDoId}`);
    }

}