import PodcastGrid from "./components/PodcastGrid";
import XmlJsonParser from "./components/XmlJsonParser";
import { convertXML } from "simple-xml-to-json";

export default function App() {
  return (
    <div className="App">
      <h1> PodCast Player </h1>
      <PodcastGrid
        rssfeed="https://feeds.simplecast.com/tOjNXec5"
        width="100%"
        height="500px"
      />
      <XmlJsonParser />
    </div>
  );
}
