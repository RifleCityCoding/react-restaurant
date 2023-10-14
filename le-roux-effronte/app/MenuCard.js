import MenuAccord from "./MenuAccord";
import Card from "react-bootstrap/Card";

export default function MenuCard({ data }) {
  return (
    <main>
        <div className="Row">
      <div>
        <Card style={{ width: "18rem" }} >
          <Card.Body>
          <MenuAccord data={data} text={"Appetizer"} />
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
          <MenuAccord data={data} text={"Breakfast"}/>

          </Card.Body>
        </Card>
      </div>
      </div>
      <div className="Row"></div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <MenuAccord data={data} text={"Lunch"} />
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
          <MenuAccord data={data} text={"Drink"}/>
          </Card.Body>
        </Card>
      </div>

    </main>
  );
}
