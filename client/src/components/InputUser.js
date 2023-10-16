import React, { useState } from "react";
import UsersStore from "../store/UsersStore";

const InputUser = () => {
    const { addUser } = UsersStore;

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [city, setCity] = useState("");
    const [age, setAge] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        const body = { name, surname, city, age };
        addUser(body);
    };

    return (
        <form
            className="d-flex mt-5 flex-column align-items-center"
            onSubmit={onSubmitForm}
        >
            <div className="mb-3 row col-6">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                    Name:
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-3 row col-6">
                <label htmlFor="surname" className="col-sm-2 col-form-label">
                    Surname:
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="surname"
                        defaultValue={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-3 row col-6">
                <label htmlFor="city" className="col-sm-2 col-form-label">
                    City:
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        defaultValue={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-3 row col-6">
                <label htmlFor="age" className="col-sm-2 col-form-label">
                    Age:
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="age"
                        defaultValue={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
            </div>
            <button className="btn btn-success col-3">Add</button>
        </form>
    );
};

export default InputUser;
