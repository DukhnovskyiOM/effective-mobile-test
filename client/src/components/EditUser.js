import React, { useState } from "react";
import UsersStore from "../store/UsersStore";

const EditUser = ({ user }) => {
    const { editUser } = UsersStore;

    const [name, setName] = useState(user.name);
    const [surname, setSurname] = useState(user.surname);
    const [city, setCity] = useState(user.city);
    const [age, setAge] = useState(user.age);

    //edit user data function

    const updateUserData = async (e) => {
        e.preventDefault();
        const body = { name, surname, city, age };
        editUser(body, user.user_id);
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${user.user_id}`}
            >
                Edit
            </button>
            <div className="modal" id={`id${user.user_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit User</h4>
                        </div>

                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={(e) => updateUserData(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditUser;
