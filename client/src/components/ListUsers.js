import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";

import UsersStore from "../store/UsersStore";

import EditUser from "./EditUser";

const ListUsers = observer(({ users = [] }) => {
    const { deleteUser, editHistory } = UsersStore;
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        setDataUsers(users);
        const localData = localStorage.getItem("stateUsers");
        if (localData != null) {
            const data = JSON.parse(localData);
            editHistory(data);
        }
    }, [users, editHistory]);

    // delete user function

    const delUser = (id) => {
        deleteUser(id);
        setDataUsers(dataUsers.filter((user) => user.user_id !== id));
    };

    return (
        <table className="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>City</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {dataUsers.map((user) => (
                    <tr key={user.user_id}>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.city}</td>
                        <td>{user.age}</td>
                        <td>
                            <EditUser user={user} />
                        </td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => delUser(user.user_id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
});

ListUsers.propTypes = {
    user_id: PropTypes.number,
    name: PropTypes.string,
    surname: PropTypes.string,
    city: PropTypes.string,
    age: PropTypes.number,
};

export default ListUsers;
