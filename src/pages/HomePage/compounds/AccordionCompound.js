import AccordionBody from "../components/Accordion/AccordionBody";
import AccordionHeader from "../components/Accordion/AccordionHeader";
import AccordionItem from "../components/Accordion/AccordionItem";
import AccordionTitle from "../components/Accordion/AccordionTitle";
import AccordionWrapper from "../components/Accordion/AccordionWrapper";
import FAQData from './data/faqs.json';
import "./style/background.css"
 
function AccordionCompound() {
     return (
         <div className="background">
         <AccordionWrapper>
             <AccordionTitle>자주 묻는 질문</AccordionTitle>
              {FAQData.map((item) => (
                 <AccordionItem key={item.id}>
                     <AccordionHeader>{item.header}</AccordionHeader>
                     <AccordionBody>{item.body}</AccordionBody>
                 </AccordionItem>
              ))}
         </AccordionWrapper>
         </div>
     )
}

export default AccordionCompound;