import { useEffect, useState } from "react";
  import { ToastContainer, toast } from 'react-toastify';


const Content = () => {
  const notify = (message) => toast(message);

  const getInitialDetails = () => {
    const savedDetails = localStorage.getItem("passwordDetails");
    return savedDetails ? JSON.parse(savedDetails) : [];
  };

  const [detail, setdetail] = useState(getInitialDetails());
  const [website, setWebsite] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    localStorage.setItem("passwordDetails", JSON.stringify(detail));
  }, [detail]);

  const viewpassword = () =>{
    const passwordInput = document.querySelector('input[placeholder="Enter Password"]');
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }

  const handlesave = () => {
    if (!website || !username || !password) {
      notify("Please fill all the fields");
      return;
    }
    const id = new Date().getTime().toString();
    const newDetail = { id, website, username, password };
    setdetail([...detail, newDetail]);
    setWebsite("");
    setusername("");
    setpassword("");
    notify("Password Saved Successfully!");
  };

  function handleClearAll() {
    setdetail([]);
    notify("All Passwords Cleared!");
  }

  function handleEdit(id) {
    const itemToEdit = detail.find((item) => item.id === id);
    if (itemToEdit) {
      setWebsite(itemToEdit.website);
      setusername(itemToEdit.username);
      setpassword(itemToEdit.password);
      const updatedDetails = detail.filter((item) => item.id !== id);
      setdetail(updatedDetails);
      notify("Ready to edit!");
    }
  }

  function handleDelete(id) {
    const updatedDetails = detail.filter((item) => item.id !== id);
    setdetail(updatedDetails);
  }
function handlecopy(text) {
  navigator.clipboard.writeText(text);
  notify("Copied to clipboard!");
}

  return (
    <>
      <div className="grow bg-green-100 flex flex-col  items-center p-2 md:px-50 space-y-4 w-full">
        <div>
          <span className="text-2xl font-bold text-green-700">&lt;</span>
          <span className="text-xl font-bold text-black">PassOP</span>
          <span className="text-2xl font-bold text-green-700">/&gt;</span>
        </div>

        <div className="text-md text-green-900">Your Own Password Manager</div>

        <div className="w-full max-w-lg">
          <input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="border-2 rounded-3xl border-green-700 p-2 bg-white w-full"
            type="text"
            name=""
            id=""
            placeholder="Enter website URL"
          />

          <div className="flex space-x-4 w-full my-4">
            <input
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="border-2 rounded-3xl border-green-700 p-2 bg-white w-1/2 "
              type="text"
              name=""
              id=""
              placeholder="Enter UserName"
            />
            <div className="relative w-1/2 mx-auto">
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="border-2 rounded-3xl border-green-700 p-2 pr-12 bg-white w-full"
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
              
              />
              <span onClick={viewpassword} className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"><lord-icon
    src="https://cdn.lordicon.com/efmfrlbq.json"
    trigger="click"
    >
</lord-icon></span>
            </div>
          </div>
        </div>

        <div className="flex">
          <button
            className=" flex text-center justify-center gap-2 border-2 border-green-700 text-amber-50 bg-green-700 hover:bg-green-400 cursor-pointer p-2 m-2 rounded-2xl "
            onClick={handlesave}
            type="submit"
          >
            <lord-icon
              src="https://cdn.lordicon.com/lzsupfwm.json"
              trigger="click"
              stroke="bold"
            ></lord-icon>
            Add
          </button>
          {
            <button
              className="flex text-center justify-center gap-2 border-2 border-green-700 text-amber-50 bg-green-700  hover:bg-green-400 cursor-pointer p-2 m-2 rounded-2xl"
              onClick={handleClearAll}
              type="submit"
            >
              <lord-icon
                src="https://cdn.lordicon.com/sxhqklqh.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#ffffff,secondary:#e88c30,tertiary:#646e78"
              ></lord-icon>
              Clear All
            </button>
          }
        </div>

        <div>Your Passwords</div>

        <div className="w-full">
          {detail.length === 0 ? (
            <div>No Passwords Saved</div>
          ) : (
            <>
              <div className="flex justify-between w-full bg-green-900 text-white p-2 font-bold rounded-t-lg">
                <div className="w-1/3 text-left">Site</div>
                <div className="w-1/3 text-left">Username</div>
                <div className="w-1/3 text-left">Password</div>
                <div className="w-auto">Actions</div>
              </div>

              {detail.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between w-full p-3 pl-4 bg-green-200"
                >
                  <div className="w-1/4 text-left truncate">
                    <a href="{item.website}"target="_/">{item.website} </a>
                  </div>

                  <div className="w-1/4 text-left flex items-center gap-1">
                  <span>{item.username} 
                    </span>
                    <lord-icon
    src="https://cdn.lordicon.com/hmpomorl.json"
    trigger="click"
    className="h-5 w-5 cursor-pointer pt-1"
    onClick={()=>{handlecopy(item.username)}}
   >
</lord-icon></div>
                  <div className="w-1/4 text-left flex items-center gap-1"><span>{item.password}
                    </span>
                     <lord-icon
    src="https://cdn.lordicon.com/hmpomorl.json"
    trigger="click"
    className="h-5 w-5 cursor-pointer pt-1"
    onClick={()=>{handlecopy(item.password)}}
   >
</lord-icon></div>

                  <div className="w-1/6 flex justify-center space-x-3">
                    <button
                      className="text-red-600 text-sm cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => handleEdit(item.id)}
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/cbtlerlm.json"
                        trigger="hover"
                        stroke="bold"
                        style={{ width: '25px', height: '25px' }}></lord-icon>
                    </button>
                    <button
                      className="text-red-600 text-sm cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => handleDelete(item.id)}
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/sxhqklqh.json"
                        trigger="click"
                        stroke="bold"
                        style={{ width: '25px', height: '25px' }}></lord-icon>
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default Content;
