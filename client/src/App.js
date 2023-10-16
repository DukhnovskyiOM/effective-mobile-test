import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import UsersStore from "./store/UsersStore";

import InputUser from "./components/InputUser";
import ListUsers from "./components/ListUsers";
import ListUsersHistory from "./components/ListUsersHistory";

const App = observer(() => {
    const { getUsersAction, users } = UsersStore;
    const [view, setView] = useState(false);

    React.useEffect(() => {
        getUsersAction();
    }, [getUsersAction]);

    if (!users.value) {
        return null;
    }

    return (
        <div className="container">
            <h1 className="text-center mt-5">Users List</h1>
            <InputUser />
            <button
                className="btn btn-success mt-2"
                onClick={() => setView(!view)}
            >
                Показать историю изменений
            </button>
            {view && <ListUsersHistory />}
            <ListUsers users={users.value} />
        </div>
    );
});

export default App;
