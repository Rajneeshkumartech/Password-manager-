import { useEffect, useState } from "react";

const Content = () => {

  const getInitialDetails = () => {
    const savedDetails = localStorage.getItem("passwordDetails");
    return savedDetails ? JSON.parse(savedDetails) : [];
  }

  const [detail, setdetail] = useState(getInitialDetails());
  const [website, setWebsite] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    localStorage.setItem("passwordDetails", JSON.stringify(detail));
  }, [detail])
  

  const handlesave = () => {
    if (!website || !username || !password) {
      alert("Please fill all the fields");
      return;
    }
    const id = new Date().getTime().toString();
    const newDetail = { id, website, username, password };
    setdetail([...detail, newDetail]);
    setWebsite("");
    setusername("");
    setpassword("");
    console.log(newDetail);
  };

  function handleClearAll() {
    setdetail([]);
  }

  function handleEdit(id) {
    const itemToEdit = detail.find((item) => item.id === id);
    if (itemToEdit) {
      setWebsite(itemToEdit.website);
      setusername(itemToEdit.username);
      setpassword(itemToEdit.password);
      const updatedDetails = detail.filter((item) => item.id !== id);
      setdetail(updatedDetails);
    }

  }

  function handleDelete(id) {
    const updatedDetails = detail.filter((item) => item.id !== id);
    setdetail(updatedDetails);
  }

  return (
    <>
      <div className="grow bg-green-100 flex flex-col  items-center p-8 space-y-4 w-full">
        <div className="text-green-700 font-extrabold text-2xl">PassOp</div>

        <div className="text-xs">Your Own Password Manager</div>

        <div className="w-full">
          <input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="border-2 rounded-3xl border-green-700 p-2 bg-white w-full"
            type="text"
            name=""
            id=""
            placeholder="Enter website URL"
          />
        </div>

        <div className="flex space-x-4 w-full">
          <input
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="border-2 rounded-3xl border-green-700 p-2 bg-white w-full"
            type="text"
            name=""
            id=""
            placeholder="Enter UserName"
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="border-2 rounded-3xl border-green-700 p-2 bg-white"
            type="password"
            name=""
            id=""
            placeholder="Enter Password"
            src=""
          />
        </div>
        <div>
          <button
          className="border-2 border-green-700 text-amber-50 bg-green-700 cursor-pointer p-2 m-2 rounded-2xl "
          onClick={handlesave}
          type="submit"
        >
          Save
        </button>
        {
           <button
          className="border-2 border-green-700 text-amber-50 bg-green-700 cursor-pointer p-2 m-2 rounded-2xl "
          onClick={handleClearAll}
          type="submit"
        >
          Clear All
        </button>
        }
        </div>

        <div>Your Passwords</div>

       <div className="w-full">
        {
          detail.length === 0 ? (<div>No Passwords Saved</div>) : (
            <>
            <div className="flex justify-between w-full bg-green-900 text-white p-2 font-bold rounded-t-lg">
                <div className="w-1/3 text-left">Site</div>
                <div className="w-1/3 text-left">Username</div>
                <div className="w-1/3 text-left">Password</div>
                <div className="w-auto">Actions</div>
              </div>

              {detail.map((item)=>(
                  <div key={item.id} className="flex justify-between w-full p-3 bg-green-200">
                 
                  <div className="w-1/3 text-left">{item.website}</div> 
                  <div className="w-1/3 text-left">{item.username}</div>
                  <div className="w-1/3 text-left">{item.password}</div>


                  <div className="w-auto flex space-x-4">
                    <button className="text-red-600 text-sm cursor-pointer" onClick={() => handleEdit(item.id)} >Edit</button>
                    <button className="text-red-600 text-sm cursor-pointer" onClick={() => handleDelete(item.id)} >Delete</button>
                  </div>
                </div>
                ))
              }
            </>
          )
        }
      
       </div>

      </div>
    </>
  );
};

export default Content;
