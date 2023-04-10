import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div className="fixed-top border" style={{ backgroundColor: "orange" }}>
      <nav className="navbar">
        <div>
          <img
            src="logo150.png"
            width={35}
            height={35}
            alt="logo"
            className="ms-5"
          />
        </div>
        <Link className="nav-link" to="/">
          Anasayfa{" "}
        </Link>
        <div>
          {user && (
            <>
              <span className="pe-4">
                Blog Yazarı: {user.displayName || user.email}
              </span>
              <button className="btn btn-dark btn-sm me-3"
              onClick={()=>{signOut(auth)}}
              >Çıkış</button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}