export const Endpoints = {
    ToDo: {
        getToDos: { method: 'get', path: () => `/ToDos` },
        createToDo: { method: 'post', path: () => `/ToDos` },
        updateToDo: { method: 'put', path: () => `/ToDos` },
        deleteToDo: { method: 'delete', path: () => `/ToDos` },
    },
    Authentication: {
        login: { method: 'post', path: () => `/Authentication/login` }
    }
}