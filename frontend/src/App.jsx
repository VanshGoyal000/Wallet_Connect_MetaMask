import { useState } from "react";
import './index.css'; // Make sure this path is correct

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  // checking wallet is present or not
  async function requestAccess() {
    console.log("Requesting acc..");
    if (window.ethereum) {
      console.log("present");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        setWalletAddress(accounts[0]);
        console.log(accounts);
      } catch (error) {
        setWalletAddress("Error: Unable to access wallet");
        console.log(error);
      }
    } else {
      console.log("wallet is not present");
      setWalletAddress("wallet not present");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-grey-100 ">
      <h1 className="text-3xl font-bold text-slate-500 mb-4">
        Wallet Connect
      </h1>
      <button
        onClick={requestAccess}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Connect
      </button>
      <h3 className="mt-4 text-lg">
        Wallet Address: {walletAddress}
      </h3>
      
    </div>
  );
}

export default App;
