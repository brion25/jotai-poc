import React from "react";
import {useAtom} from "jotai";
import {Link} from "react-router-dom";

import {List, withSuspense} from "../core";
import {usersAtom} from "../../atoms";
import {User} from "../../entities";

const HomePage = () => {
    const [users] = useAtom<User[]>(usersAtom)

    return (
        <List>
            {users.map(({id, reason, createdAt, name, topMessage}) => (
                <Link to={`/messages/${id}`}>
                    <List.Item key={id} title={name} subtitle={reason} description={topMessage} date={createdAt} />
                </Link>
            ))}
        </List>
    )
}

export default withSuspense(HomePage)
