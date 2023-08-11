import InnerContent from "./InnerContent";
import { concepts } from "../App";

function Content(props) {
  return (
    <div>
      <ul id="concepts">
        <InnerContent
          title={concepts[0].title}
          image={concepts[0].image}
          description={concepts[0].description}
        />
        <InnerContent
          title={concepts[1].title}
          image={concepts[1].image}
          description={concepts[1].description}
        />
        <InnerContent
          title={concepts[2].title}
          image={concepts[2].image}
          description={concepts[2].description}
        />
      </ul>
    </div>
  );
}

export default Content;
