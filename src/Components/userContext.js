// 1. Create the context (this file)
// 2. Provide a context value (In App.js)
// 3. Consume the context value (inside desired component)

import React from "react";

const UserContext = React.createContext(); // comes with a provider and a consument component

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
