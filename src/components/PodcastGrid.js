import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useEffect, useState } from "react";

const PodcastGrid = (props) => {
  const [rows, setRows] = useState([
    { Title: "Mpney for Nothing", pubDate: new Date(), mp3: "Mtv$4None.mp3" }
  ]);
  var cols = [
    {
      headerName: "Episode Title",
      field: "title"
    },
    {
      headerName: "Published",
      field: "pubDate"
    },
    {
      headerName: "Episode",
      field: "mp3"
    }
  ];

  useEffect(() => {
    fetch(props.rssfeed)
      .then((resp) => resp.text())
      .then((str) => {
        const parser = new window.DOMParser();
        const data = parser.parseFromString(str, "text/xml");
        const itemlist = data.querySelectorAll("item");
        const items = [];
        console.log(itemlist);
        itemlist.forEach((el) => {
          items.push({
            title: el.querySelector("title"),
            pubDate: new Date(el.querySelector("pubDate").textContent),
            mp3: el.querySelector("enclosure").getAttribute("url")
          });
        });
        setRows(items);
      });
  }, [props.rssfeed]);
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: props.height, width: props.width }}
    >
      <AgGridReact columnDefs={cols} rowData={rows} />
    </div>
  );
};

export default PodcastGrid;
