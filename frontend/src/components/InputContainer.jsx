import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-text"; // Language mode
import "ace-builds/src-noconflict/theme-monokai"; // Theme
import { useState } from "react";
import { useRecoilState } from "recoil";
import { testCaseAtom } from "../atoms/compiler-atoms";

function InputContainer() {
  let [testCase, setTestCase] = useRecoilState(testCaseAtom);

  return (
    <div>
      <div className="px-12  text-white border-y-2 border-green-900">
        input:
      </div>
      <div>
        <AceEditor
          mode="text"
          theme="monokai"
          name="blah3"
          onChange={(value) => {
            setTestCase(value);
          }}
          fontSize={14}
          showPrintMargin={false}
          showGutter={true}
          highlightActiveLine={false}
          value={testCase}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
          height="300px"
          width="100%"
        />
      </div>
    </div>
  );
}

export default InputContainer;
