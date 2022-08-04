import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
  Link,
} from "react-router-dom";
const users = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] },
];
export default function Recursive() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/0"} />}></Route>
        <Route path=":id/*" element={<Person />} />
      </Routes>
    </Router>
  );
}
function Person() {
  const { id } = useParams();
  const person = users.find((e) => e.id === Number(id));
  console.log(person);
  return (
    <div>
      <h1>{person.name}'s friends</h1>
      <ul>
        {person.friends.map((item) => (
          <div>
            <li key={item}>
              <Link to={`${item}`}>
                {users.find((e) => e.id === item).name}
              </Link>
            </li>
          </div>
        ))}
      </ul>
      <Routes>
        <Route path={`:id/*`} element={<Person />} />
      </Routes>
    </div>
  );
}

// import * as React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useParams,
//   Navigate,
// } from "react-router-dom";

// const users = [
//   { id: 0, name: "Michelle", friends: [1, 2, 3] },
//   { id: 1, name: "Sean", friends: [0, 3] },
//   { id: 2, name: "Kim", friends: [0, 1, 3] },
//   { id: 3, name: "David", friends: [1, 2] },
// ];

// const Person = () => {
//   const { id } = useParams();
//   const person = users.find((p) => p.id === Number(id));

//   return (
//     <div>
//       <h3>{person.name}’s Friends</h3>
//       <ul>
//         {person.friends.map((id) => (
//           <li key={id}>
//             <Link to={`${id}`}>{users.find((p) => p.id === id).name}</Link>
//           </li>
//         ))}
//       </ul>

//       <Routes>
//         <Route path={`:id/*`} element={<Person />} />
//       </Routes>
//     </div>
//   );
// };

// export default function Apps() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/0" />} />
//         <Route path="/:id/*" element={<Person />} />
//       </Routes>
//     </Router>
//   );
// }
