/* eslint-disable react-hooks/exhaustive-deps */
import { Skeleton, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import Header from "./Header";

const Dashboard = () => {
    const [ users, setUsers ] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
	const [page, setPage] = useState(1);
    const handleScroll = () => {
		if (
			Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
			isFetching
		)
			return;
		setIsFetching(true);
		console.log(isFetching);
	};
    const getUsers = async () => {
		setTimeout(async () => {
			const result = await fetch(`https://reqres.in/api/users?page=${page}`);
			const data = await result.json();
			setPage(page + 1);
			setUsers(() => {
				return [...users, ...data.data];
			});
		}, 1000);
	};
    const fetchMoreListItems = () => {
		getUsers();
		setIsFetching(false);
	};
    useEffect(() => {
        getUsers();
        window.addEventListener('scroll', handleScroll);
      }, []);
      useEffect(() => {
		if (!isFetching) return;
		fetchMoreListItems();
	}, [isFetching]);

	console.log(users);
    return (
        <div className="app">
            <Header />
            <div align="center" justify="center" height="100vh" direction="column">
          {users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong style={{ color: "black" }}>{user.first_name}</strong>
                </p>
                <p style={{ color: "black"}}>{user.email}</p>
                <img alt={user.first_name} key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
          {!isFetching && <Stack>
  <Skeleton height="20px" />
  <Skeleton height="20px" />
  <Skeleton height="20px" />
</Stack>}
      </div>
        </div>
    )
}

export default Dashboard
