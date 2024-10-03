// app/ReduxProvider.tsx
"use client";

import { Provider } from "react-redux";
import  store  from "@/store/store"; // Adjust the path to your store
import { useEffect } from "react";
import Cookies from "js-cookie";
import { loginWithToken } from "@/store/authSlice";
import { logout } from "@/store/authSlice";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
          store.dispatch(loginWithToken(token));
        } else {
          store.dispatch(logout());
        }
    
        const intervalId = setInterval(() => {
          const token = Cookies.get('token');
          if (token) {
            store.dispatch(loginWithToken(token));
          } else {
            store.dispatch(logout());
          }
        }, 1000); // Check every second (adjust the interval as needed)
    
        return () => clearInterval(intervalId);
      }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
