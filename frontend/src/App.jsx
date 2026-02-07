import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [nodes, setNodes] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [showResult, setShowResult] = useState(false);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/node");
      setNodes(res.data.node || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const createUser = async () => {
    const res = await axios.post("http://localhost:3000/api/node", {
      name,
      age,
    });
    getUsers();
  };
  const deleteUser = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/node/${id}`);
    getUsers();
  };
  const updateUser = async (id, modiName) => {
    const res = await axios.patch(`http://localhost:3000/api/node/${id}`, {
      age: modiName,
    });
    getUsers();
  };

  const updatedResource = async (id, obj) => {
    const res = await axios.put(`http://localhost:3000/api/node/${id}`, obj);
    getUsers();
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getUsers();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name == "" && !age == "") {
      setShowResult(true);
      createUser();
      setName("");
      setAge("");
    }
  };

  const handelBack = () => {
    setShowResult(false);
  };
  const handelShowUser = () => {
    setShowResult(true);
    getUsers();
  };
  const handelDelete = (id) => {
    deleteUser(id);
  };
  const handelUpdateName = (id) => {
    const updatedNameis = prompt("enter name");
    if (updatedNameis) {
      updateUser(id, updatedNameis);
    }
  };
  const handleedit = (id) => {
    const updateName = prompt("Enter Name");
    const updatedAge = prompt("Enter Age");
    if (updateName && updatedAge) {
      const obj = {
        name: updateName,
        age: updatedAge,
      };
      updatedResource(id, obj);
    }
  };
  if (showResult) {
    return (
      <>
        <button onClick={handelBack} className="backButton">
          Back
        </button>
        <div className="container">
          {nodes.map((eachNode) => {
            return (
              <div key={eachNode._id} className="card">
                <h1>{eachNode.name}</h1>
                <span>{eachNode.age} Years</span>
                <div className="buttonCon">
                  <button
                    onClick={() => handelDelete(eachNode._id)}
                    className="deleteButton"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handelUpdateName(eachNode._id)}
                    className="deleteButton update"
                  >
                    Edit age
                  </button>
                  <button
                    onClick={() => handleedit(eachNode._id)}
                    className="deleteButton edit"
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="formCon">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
            />
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              placeholder="Enter Age "
            />

            <button>Submit</button>
          </form>
          <button onClick={handelShowUser} className="showAllUsers">
            show all user's
          </button>
        </div>
      </>
    );
  }
}

export default App;
