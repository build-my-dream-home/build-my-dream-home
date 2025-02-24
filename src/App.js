import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
  Image,
  Card
} from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import { get, post } from "@aws-amplify/api";
import { GraphQLAPI, graphqlOperation } from "@aws-amplify/api-graphql";
import { onCreateComment } from "./graphql/subscriptions";
import awsconfig from "./aws-exports";


//const client = generateClient();

function App({ user, signOut }) {
  const [chats, setChats] = React.useState([]);
  // console.log(user);
  return (
    <div>
      <div className="flex justify-end px-4 py-2">
        <button
          type="button"
          className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
      <div className="flex justify-center items-center h-screen w-full">
        <div className={`w-3/4 flex flex-col`}>
          {chats}
          <div>
            <div className="relative mt-2 flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                onKeyUp={async (e) => {
                  if (e.key === "Enter") {
                    setChats([...chats, e.target.value]);
                  }
                }}
                className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                  Enter
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign out</Button>
    </View>
  )
}*/

export default withAuthenticator(App, {
  socialProviders: ['google', 'facebook']
}); 