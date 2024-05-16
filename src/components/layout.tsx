"use client";
import React from "react";
import styles from "../app/page.module.css";
import { useUser } from "@clerk/nextjs";

const Layout = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user, "asdasdasd");
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          {!isLoaded || !isSignedIn ? (
            <>
              <p>Connect your Twitter account</p>
              <a href="/sign-in" className={styles.card}>
                <h3>Connect Twitter &rarr;</h3>
              </a>
            </>
          ) : (
            <>
              <p>Thank you for signing in&nbsp;</p>
              <div className={styles.card}>
                <div className={styles.imageBox}>
                  <label>User Image</label>
                  <img src={user.imageUrl} alt="User Image" />
                </div>
                <div className={styles.imageBox}>
                  <span></span>
                  <label>User Name</label>
                  <h3>{user.firstName}!</h3>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Layout;
