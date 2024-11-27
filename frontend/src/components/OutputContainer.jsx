import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-text"; // Language mode
import "ace-builds/src-noconflict/theme-monokai"; // Theme

function OutputContainer() {
  let [output, setOutput] = useState("// output");

  return (
    <div>
      <div className="px-12  text-white border-y-2 border-green-900">
        output:
      </div>
      <div>
        <AceEditor
          mode="text"
          theme="monokai"
          name="blah4"
          onChange={(value) => {
            setOutput(value);
          }}
          fontSize={14}
          showPrintMargin={false}
          showGutter={true}
          highlightActiveLine={false}
          value={output}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
          height="450px"
          width="100%"
        />
      </div>
    </div>
  );
}

export default OutputContainer;
