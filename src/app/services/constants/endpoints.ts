export const Endpoints = {
    todo: {
        getToDos: { method: 'get', path: () => `api/v1/ToDos` },
        createToDo: { method: 'post', path: () => `api/v1/ToDos` },
        updateToDo: { method: 'put', path: () => `api/v1/ToDos` },
        deleteToDo: { method: 'delete', path: () => `api/v1/ToDos` },
    }
}