import { useQuery } from "@apollo/client";

import { FETCH_USERS_QUERY } from "../../utils/queries/fetchAllUsers.js"

// page for user home
const Home = () => {
    const { loading, data,} = useQuery(FETCH_USERS_QUERY);
    console.log(data);

    return (
        <div>
            <h1>Registered Users</h1>
            {
                loading ?
                    <p>Just a moment....</p>
                    :
                    data?.users.map(user =>{
                        return (
                            <div key={user._id}>
                                <h2>Username: {user.username}</h2>
                                <h2>Email: {user.email}</h2>
                            </div>
                        )
                    })
            }

        </div>
    );
};

export default Home;