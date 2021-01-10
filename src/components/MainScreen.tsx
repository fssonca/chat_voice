import * as React from "react";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";

function MainScreen() {
  const [txtUserValue, setTxtUserValue] = React.useState("");
  const [response, setResponse] = React.useState("");

  React.useEffect(() => {
	  
	  console.log("REACT EFFECT")
	  
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data: any) => {
		 console.log("SOCKET setResponse")
      setResponse(data);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setTxtUserValue(v);
  };

  return (
    <div className="bg-yellow-100 transition-all h-full min-h-screen w-screen flex flex-col items-center p-2 	">
      <div className="w-full max-w-screen-lg flex flex-col sm:flex-row bg-green-200">
        .
        <p>
         <span>{response}</span>
        </p>
      </div>

      <div className="w-full max-w-screen-lg flex flex-col sm:flex-row bg-blue-600 text-white">
        Seu código: abc123
      </div>
      <div className="w-full max-w-screen-lg flex flex-col sm:flex-row bg-green-500 text-white">
        <div className="h-20   sm:w-1/3  w-full ">
          <span className="text-primaryTXT">Digite o código do seu amigo</span>
          <input
            type="text"
            value={txtUserValue}
            onChange={handleChange}
            className="border border-gray-300 h-10 w-full p-2 text-xl	text-black text-right font-medium my-1.5"
          />
        </div>
      </div>
    </div>
  );
}
export default MainScreen;
