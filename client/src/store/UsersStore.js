import { makeAutoObservable, runInAction } from "mobx";
import { fromPromise } from "mobx-utils";
import { getUsers } from "../api/getUsers";
import { deleteUser } from "../api/deleteUser";
import { putUser } from "../api/putUser";
import { postUser } from "../api/postUser";

class Store {
    users = [];
    usersHistory = [];

    constructor() {
        makeAutoObservable(this);
    }

    getUsersAction = () => {
        this.users = fromPromise(getUsers());
    };

    editHistory = (data) => {
        this.usersHistory = [...data];
    };

    addUser = async (user) => {
        try {
            const data = await postUser(user);

            runInAction(() => {
                const time = new Date().toLocaleDateString("en-GB");
                const history = {
                    id: data.user_id,
                    comments: [`User created - ${time}`],
                };
                this.usersHistory.push(history);
                this.getUsersAction();
                localStorage.setItem(
                    "stateUsers",
                    JSON.stringify(this.usersHistory)
                );
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    sortIdHistory = (flag) => {
        flag
            ? this.usersHistory.sort((a, b) => a.id - b.id)
            : this.usersHistory.sort((a, b) => b.id - a.id);
    };

    editUser = async (user, id) => {
        const index = this.usersHistory.findIndex((e) => e.id === id);
        const time = new Date().toLocaleDateString("en-GB");
        try {
            const data = await putUser(user, id);
            runInAction(() => {
                console.log(data);
                this.usersHistory[index] = {
                    ...this.usersHistory[index],
                    comments: [
                        ...this.usersHistory[index].comments,
                        `User edit - ${time}`,
                    ],
                };
                this.getUsersAction();
                localStorage.setItem(
                    "stateUsers",
                    JSON.stringify(this.usersHistory)
                );
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    deleteUser = async (id) => {
        try {
            const data = await deleteUser(id);
            runInAction(() => {
                console.log(data);
            });
        } catch (error) {
            console.error(error.message);
        }
    };
}
const UsersStore = new Store();

export default UsersStore;
