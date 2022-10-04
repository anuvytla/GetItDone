import { useQuery } from "@apollo/client";

import { FETCH_USERS_QUERY } from "../../utils/queries/fetchAllUsers";

// page for user home
const Home = () => {
    const { loading, data,} = useQuery(FETCH_USERS_QUERY);
    console.log(data);

    return (
        <div>
            <h1>Users</h1>
            {
                loading ?
                    <p>Just a moment....</p>
                    :
                    data?.users.map(user =>{
                        return (
                            <div key={user._id}>
                                <h1>Username: {user.username}</h1>
                                <h1>Email: {user.email}</h1>
                            </div>
                        )
                    })
            }

        </div>
    );
};

export default Home;