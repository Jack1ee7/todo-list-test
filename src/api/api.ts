const baseUrl = "http://localhost:3000";


type User = {
    email: string;
    password: string;
};

type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

export const createUser = (user: User) => {
    return fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
};
export const getTodos = () => {
  return fetch(`${baseUrl}/tasks`).then((res) => res.json());
};