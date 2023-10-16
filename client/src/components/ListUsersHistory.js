import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import UsersStore from "../store/UsersStore";

const ListUsersHistory = observer(() => {
    const { usersHistory, sortIdHistory } = UsersStore;
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        sortIdHistory(flag);
    }, [flag, sortIdHistory]);

    return (
        <>
            {usersHistory.length ? (
                <table className="table mt-5 text-center">
                    <thead>
                        <tr>
                            <th
                                style={{
                                    cursor: "pointer",
                                    userSelect: "none",
                                }}
                                onClick={() => setFlag(!flag)}
                            >
                                ID {flag ? <>&#x25BC;</> : <>&#x25B2;</>}
                            </th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersHistory.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>
                                    {user.comments.map((e, idx) => (
                                        <p key={idx}>{e}</p>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>История пуста</div>
            )}
        </>
    );
});

export default ListUsersHistory;
