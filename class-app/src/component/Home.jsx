import React from 'react';


import { data } from './../services'

const Home = (props) => {

    const showUserDetail = id => {
        props.history.push(`/detail/` + id);
    };

    return (
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Class</td>
                    <td />
                    <td />
                </tr>
            </thead>
            <tbody>
                {data.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.class}</td>
                            <td>

                                <button onClick={() => showUserDetail(user.id)}> show details </button>
                            
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default Home;