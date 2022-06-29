import React, {createContext, useState } from 'react';

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
	
	const usuario = localStorage.getItem('usuario');
	const [user, setUser] = useState(JSON.parse(usuario));

	return (
		<UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
	)
}