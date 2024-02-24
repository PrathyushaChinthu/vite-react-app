import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import { original } from "immer";
//import { original } from "immer";
interface Props {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "prathyu" };
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;

import { useEffect, useState } from "react";
// import axios, { CanceledError } from "axios";
// import { original } from "immer";
// interface Props {
//   id: number;
//   name: string;
// }
// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users", {
//         signal: controller.signal,
//       })
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });
//     return () => controller.abort();
//   }, []);
//   const deleteUser = (user: User) => {
//     const originalUsers = [...users];
//     setUsers(users.filter((u) => u.id !== user.id));
//     axios
//       .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
//       .catch((err) => {
//         setError(err.message);
//         setUsers(originalUsers);
//       });
//   };
//   return (
//     <>
//       <ul className="list-group">
//         {error && <p className="text-danger">{error}</p>}
//         {isLoading && <div className="spinner-border"></div>}
//         {users.map((user) => (
//           <li
//             key={user.id}
//             className="list-group-item d-flex justify-content-between"
//           >
//             {user.name}
//             <button
//               className="btn btn-outline-danger"
//               onClick={() => deleteUser(user)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

// import { useEffect, useState } from "react";
// import axios, { CanceledError } from "axios";
// interface Props {
//   id: number;
//   name: string;
// }
// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users", {
//         signal: controller.signal,
//       })
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });
//     return () => controller.abort();
//   }, []);
//   return (
//     <>
//       <ul>
//         {error && <p className="text-danger">{error}</p>}
//         {isLoading && <div className="spinner-border"></div>}
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;
// import { useEffect, useState } from "react";
// import axios, { CanceledError } from "axios";
// interface Props {
//   id: number;
//   name: string;
// }
// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     const controller = new AbortController();
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users", {
//         signal: controller.signal,
//       })
//       .then((res) => setUsers(res.data))
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//       });
//     return () => controller.abort();
//   }, []);
//   return (
//     <>
//       <ul>
//         {error && <p className="text-danger">{error}</p>}
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

// import { useEffect, useState } from "react";
// import axios, { AxiosError } from "axios";
// interface Props {
//   id: number;
//   name: string;
// }
// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get<User[]>(
//           "https://jsonplaceholder.typicode.com/xusers"
//         );
//         setUsers(res.data);
//       } catch (err) {
//         setError((err as AxiosError).message);
//       }
//     };
//     fetchUsers();
//     //.catch((err) => setError(err.message));
//   }, []);
//   return (
//     <>
//       <ul>
//         {error && <p className="text-danger">{error}</p>}
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

// import { useEffect, useState } from "react";
// import axios from "axios";
// interface Props {
//   id: number;
//   name: string;
// }
// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
//       .then((res) => setUsers(res.data))
//       .catch((err) => setError(err.message));
//   }, []);
//   return (
//     <>
//       <ul>
//         {error && <p className="text-danger">{error}</p>}
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

// import { useEffect, useState } from "react";
// import axios from "axios";
// interface Props {
//   id: number;
//   name: string;
// }
// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   useEffect(() => {
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users")
//       .then((res) => setUsers(res.data));
//   }, []);
//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }
// export default App;

// import { useEffect } from "react";
// const connect = () => console.log("Connecting");
// const disconnect = () => console.log("Disconnecting");
// function App() {
//   useEffect(() => {
//     connect();
//     disconnect();
//   });
//   return <div></div>;
// }
// export default App;

// import { useEffect, useState } from "react";
// import ProductList from "./components/ProductList";
// function App() {
//   const [category, setCategory] = useState("");
//   return (
//     <div>
//       <select
//         className="form-select"
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option value=""></option>
//         <option value="clothing">clothing</option>
//         <option value="household">household</option>
//       </select>
//       <ProductList category={category} />
//     </div>
//   );
// }
// export default App;

// import { useRef, useEffect } from "react";
// function App() {
//   const ref = useRef<HTMLInputElement>(null);
//   useEffect(() => {
//     if (ref.current) ref.current.focus;
//   });
//   useEffect(() => {
//     document.title = "My App";
//   });
//   return (
//     <div>
//       <input type="text" className="form-control" />
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";
// import ExpenseList from "./expense-tracker/components/ExpenseList";
// import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
// import ExpenseForm from "./expense-tracker/components/ExpenseForm";
// import categories from "./expense-tracker/categories";
// function App() {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [expenses, setExpenses] = useState([
//     { id: 1, description: "a", amount: 10, category: "utilities" },
//     { id: 2, description: "b", amount: 10, category: "utilities" },
//     { id: 3, description: "c", amount: 10, category: "utilities" },
//     { id: 4, description: "d", amount: 10, category: "utilities" },
//   ]);
//   const visibleExpenses = selectedCategory
//     ? expenses.filter((e) => e.category === selectedCategory)
//     : expenses;
//   return (
//     <div>
//       <div className="mb-5">
//         <ExpenseForm
//           onSubmit={(expense) =>
//             setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
//           }
//         />
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectedCategory(category)}
//         ></ExpenseFilter>
//       </div>
//       <ExpenseList
//         expenses={visibleExpenses}
//         onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
//       />
//     </div>
//   );
// }
// export default App;

import Form from "./components/Form";
function App() {
  return (
    <div>
      <Form />
    </div>
  );
}
export default App;
// import ExpandableText from "./components/ExpandableText";
// function App() {
//   return (
//     <div>
//       <ExpandableText maxChars={10}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus
//         alias, odit temporibus nesciunt illo quae similique recusandae, sequi
//         quia laudantium, adipisci perferendis molestias veniam omnis nulla
//         commodi ab vitae? Harum possimus quam temporibus iusto fugit, eum
//         exercitationem dolorem inventore soluta obcaecati veniam, autem sequi
//         et, porro magni quibusdam nam laboriosam recusandae cupiditate tempora
//         amet vel! Explicabo quas numquam nisi similique maxime, illum autem
//         soluta ratione! Eius ipsum totam reiciendis aliquid id quaerat fuga
//         tempore qui autem repellendus et, nemo modi pariatur sit hic voluptate
//         sequi iusto sint eos vero. Ratione ad odit facere illo, officiis velit
//         inventore distinctio. Eaque.
//       </ExpandableText>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";
// function App() {
//   const [cartItems, setCartItems] = useState(["product1", "product2"]);
//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//     </div>
//   );
// }
// export default App;

// import produce from "immer";
// import { useState } from "react";
// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "bug 1", fixed: false },
//     { id: 2, title: "bug 2", fixed: false },
//   ]);
//   const handleClick = () => {
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };

//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title}
//           {bug.fixed ? "fixed" : "new"}
//         </p>
//       ))}
//       <button onClick={handleClick}>Clickme</button>
//     </div>
//   );
// }

// export default App;
// import Like from "./components/Like";
// function App() {
//   return (
//     <div>
//       <Like onClick={() => console.log("clicked")} />
//     </div>
//   );
// }
// export default App;git

//import Button from "./components/Buttons/Button";
//function App() {
//return (
//<div>
//<Button onClick={() => {}}>My button</Button>
//</div>
//);
//}
//export default App;

//import ListGroup from "./components/ListGroup";
//function App() {
//const items = ["New York", "San Francisco", "Tokyo", "London"];
//const handleSelectItem = (item: string) => {
//console.log(item);
//};
//return (
//<div>
//<ListGroup
//items={items}
//heading="cities"
//onSelectItem={handleSelectItem}
///>
//</div>
//);
//}
//export default App;

//import Alert from "./components/Alert";
//import Button from "./components/Button";
//import { useState } from "react";
//function App() {
//const [alertVisibe, setAlertVisibility] = useState(false);
//return (
//  <div>
//  {alertVisibe && (
//  <Alert onClose={() => setAlertVisibility(false)}>my alert</Alert>
//)}
//<Button onClick={() => setAlertVisibility(true)}>my Button</Button>
//</div>
//);
//}
//export default App;
