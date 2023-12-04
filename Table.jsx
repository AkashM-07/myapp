import React,{useEffect,useState} from "react";
import axios from "axios";
import TableRow from "./TableRow.jsx";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
function TableTop()
{
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  }, []);

  console.log(posts.length);

  function onCellEditComplete(e) {
    let { rowData, newValue, field, originalEvent: event } = e;
    console.log(rowData.id, newValue);
    rowData[field] = newValue;
  }
  function textEditor(options) {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  }
  const customstyle = {
    headCells: {
      style: {
        backgroundColor: "red"
      }
    }
  };
  return (
    <div>
      <DataTable
        customStyle={customstyle}
        value={posts}
        editMode="cell"
        responsiveLayout="scroll"
        dataKey="id"
        paginator
        emptyMessage="No data found."
        className="datatable-responsive dt1"
        rows={7}
        style={{ marginLeft: "20vw", width: "50%", fontSize: "20px" }}
      >
        <Column
          field="userId"
          header="userId"
        ></Column>
        <Column field="id" header="id"></Column>
        <Column
          field="title"
          header="title"
          editor={(options) => textEditor(options)}
          onCellEditComplete={onCellEditComplete}
        ></Column>
      </DataTable>
    </div>
  );
}
function TableBottom()
{
     const interfaces=[["eth1","2405:200:5f02:a392:101::210","2405:200:5f02:a392::1","---"],
                    ["eth1","2405:200:5f02:a392:101::210","2405:200:5f02:a392::1","---"],
                    ["eth1","2405:200:5f02:a392:101::210","2405:200:5f02:a392::1","---"]]

                    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  }, []);

  //console.log(posts.length);
  function textEditor(options) {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  }
  function onRowEditComplete(e) {
    let { newData, index } = e;
    console.log(newData);
    //console.log(index);
    posts[index] = newData;
    //console.log(_posts[index]);
    setPosts(posts);
    console.log(posts);
  }
  return (
    <div>
      <DataTable 
        value={posts}
        onRowEditComplete={onRowEditComplete}
        editMode="row"
        responsiveLayout="scroll"
        dataKey="id"
        paginator
        emptyMessage="No data found."
        className="datatable-responsive dt2"
        rows={3}
        style={{ marginLeft: "13vw", width: "70%", fontSize: "20px" }}
        >
        <Column
          field="userId"
          header="userId"
          editor={(options) => textEditor(options)}
        ></Column>
        <Column
          field="id"
          header="id"
          editor={(options) => textEditor(options)}
        ></Column>
        <Column
          field="title"
          header="title"
          editor={(options) => textEditor(options)}
        ></Column>
        <Column
          rowEditor
        //   headerStyle={{ width: "15%", minWidth: "8rem" }}
          style={{textAlign:"left",padding:"0",margin:"0"}}
        ></Column>
      </DataTable>
    </div>
  );
      
}
export {TableTop,TableBottom};
