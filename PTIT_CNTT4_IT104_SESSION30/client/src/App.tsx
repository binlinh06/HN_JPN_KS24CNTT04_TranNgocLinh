import React from "react";
import BaiTap from "./components/BaiTap/BaiTap";
// import Loading from "./components/Loading";
// import axios from "axios";
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// };
export default function App() {
//   const [Loading1, setLoading] = useState<boolean>(true);
//   const [user, setUser] = useState<User[]>([]);
//   async function getAllUser() {
//     let result: any;
//     try {
//       const res = await axios.get("http://localhost:8080/user");
//       result = res.data;
//     } catch (error) {
//     } finally {
//       setTimeout(() => {
//         setLoading(false);
//         setUser([...result]);
//       }, 3000);
//     }
//   }
//   useEffect(() => {
//     getAllUser();
//   });

  return (
    <div>
      {/* Hoc API
      {Loading1 ? <Loading></Loading> : ""}
      {user.map((item) => (
        <div>
          {item.id} - {item.name} - {item.email}
        </div>
      ))} */}
      <BaiTap></BaiTap>
    </div>
  );
}
