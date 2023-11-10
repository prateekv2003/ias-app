import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [user, setuser] = useState({ value: null });
  const [key, setkey] = useState(0);

  const logout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    setkey(Math.random());
    setuser({ value: null });
    router.push("http://localhost:3000/");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setuser({ value: token });
    }
    setkey(Math.random());
  }, [router.query]);

  return (
    <div>
      <NavBar logout={logout} user={user} key={key} />
      <Component {...pageProps} />
    </div>
  );
}