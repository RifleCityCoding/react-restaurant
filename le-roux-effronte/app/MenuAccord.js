import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

export default function MenuAccord({ data, text }) {
    if (data !== null){
    let menuItem = data.filter((item) => item.category === text)
    return (
      <div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{text}</Accordion.Header>
            <AccordionBody>
             {
               menuItem.map((item) => (
                  <ol>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>Price: ${item.price.toFixed(2)}</p>
                  </ol>
                ))}
           
            </AccordionBody>
          </Accordion.Item>
        </Accordion>
      </div>
    );
    }
    
}
