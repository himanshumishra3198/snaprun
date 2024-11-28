import AceEditor from "react-ace";
import { useState } from "react";
// Import themes and modes
import "ace-builds/src-noconflict/mode-javascript"; // Language mode
import "ace-builds/src-noconflict/theme-monokai"; // Theme
import { useRecoilState, useRecoilValue } from "recoil";
import { codeAtom } from "../atoms/compiler-atoms";

function Editor() {
  const [code, setCode] = useRecoilState(codeAtom);

  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      name="blah2"
      onChange={(value) => {
        setCode(value);
      }}
      fontSize={16}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: false,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      height="800px"
      width="100%"
    />
  );
}

export default Editor;
