import React, { use, useState } from "react";
import "./style.css";

export const Contact = () => {
  let [sucess, setSuccess] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [error, setError] = useState("");

  function submitMessage() {
    if (message === "") {
      setSuccess("Message cannot be empty...!");
      setError(1);
    }
    if (email === "") {
      setSuccess("Email cannot be empty...!");
      setError(1);
    }
    if (message !== "" && email !== "") {
      setSuccess("Messeage sent sucessfully...!");
      setError(0);
      setEmail("");
      setMessage("");
    }
  }

  return (
    <section id="contact" className="pt-20 ">
      <h2 className="text-5xl font-bold text-center text-neutral-800 mb-12">
        Contact Us
      </h2>
      <div className="bg-white p-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 ">
          <div className="inline-block m-2 pl-1 md:pl-6 md:m-5 w-full text-left">
            <h2 className="font-bold">Head Office :</h2>

            <p className="address">IT Online Training</p>
            <p className="address"> Colchester</p>
            <p className="address"> CO4 9EB</p>
            <p className="address"> Essex</p>
            <p className="address"> United Kingdom</p>
            <p className="pb-4"> +44 7572 056854</p>

            <h2 className=" pb-2 font-bold"> Branch : </h2>

            <div className="flex w-full  flex-row">
              <div className="flex-1">
                {" "}
                <h6 className="font-semibold"> Sri Lanka</h6>
                <p> People's Park Building</p>
                <p> Colombo</p>
                <p className="pb-2"> +94 7572 056854</p>
              </div>
              <div className="flex-1">
                {" "}
                <h6 className="font-semibold"> United Arab Emirates (UAE)</h6>
                <p> Tower Building</p>
                <p> Zayed</p>
                <p className="pb-2"> +971 7572 056854</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="inline-block m-2 md:m-5 w-full">
            <h6 className="block text-sm font-semibold mb-6 text-left ">
              Write us. We are always happy to help you..
            </h6>
            <label className="block text-sm font-medium mb-5 text-left ">
              Email{" "}
            </label>
            <input
              className="block w-full md:w-3/4 border border-gray-300 p-2 rounded-md"
              type="email"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <label className="block text-sm font-medium mb-5 text-left">
              Message
            </label>
            <textarea
              placeholder="Enter your message here"
              className="block w-full md:w-3/4 border border-gray-300 p-2 rounded-md h-32 resize-none"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <button
              id="button"
              className="block w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-10 my-4 rounded-md"
              onClick={() => {
                submitMessage();
              }}
            >
              {" "}
              SUBMIT
            </button>
            <label className={error == 1 ? "error" : "sucess"}>{sucess} </label>
          </div>
        </div>
      </div>
    </section>
  );
};
