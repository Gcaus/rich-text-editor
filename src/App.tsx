import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleSelectionChange = (selection: ReactQuill.Range): void => {
    const text = selection;
    if(text?.length > 0) {
      const comment = prompt('Insira seu comentário:', '');
      if(comment) {
        setComments([...comments, comment])
        console.log(comments)
      }
      console.log('Text comentado:', comment);
    }
    console.log('Text selecionado:', text);
  };

  return (
    <div style={{display: "flex", gap: 45}}>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChangeSelection={handleSelectionChange}
        onChange={setValue}
        style={{ width: "80em", display: "flex", flexDirection: "column" }}
      />
      <div>
        {comments.map(comment => (
          <div>{comment}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
