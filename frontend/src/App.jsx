import { useState } from "react";
import InputContainer from "./components/InputContainer";
import OutputContainer from "./components/OutputContainer";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import LanguageDropdown from "./components/LanguageDropdown";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  return (
    <div className="grid grid-cols-3 grid-rows-8 h-screen gap-2 bg-grey-800">
      <div className="col-span-3 row-span-1 p-4">
        <Navbar />
      </div>
      <div className="grid grid-cols-3 col-span-3 row-span-7 bg-grey-800">
        <div className="col-span-2 bg-grey-800 border-r-2 border-green-900">
          <div className="border-y-2 border-green-900">
            <LanguageDropdown />
          </div>
          <Editor />
        </div>

        <div className="grid grid-rows-5 bg-grey-800">
          <div className="row-span-2">
            <InputContainer />
          </div>
          <div className="row-span-3">
            <OutputContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
