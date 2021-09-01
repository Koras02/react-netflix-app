import React from "react";
import JumboImageWrapper from "../components/Jumnotron/JumboImageWrapper";
import JumboItem from "../components/Jumnotron/JumboItem";
import JumboSubTitle from "../components/Jumnotron/JumboSubTitle";
import JumboTextWrapper from "../components/Jumnotron/JumboTextWrapper";
import JumboTitle from "../components/Jumnotron/JumboTitle";
 
import JumboWrapper from "../components/Jumnotron/JumboWrapper";
import JumboData from './data/Jumbo.json';
import './style/background.css'


function JumboCompound() {
    return (
         <JumboWrapper className="background">
          {JumboData.map((item) => (
              <> 
                 <JumboItem key={item.id}>
                    <JumboTextWrapper>
                        <JumboTitle>{item.title}</JumboTitle>
                        <JumboSubTitle>{item.subTitle}</JumboSubTitle>
                    </JumboTextWrapper>
                    <JumboImageWrapper>
        
                   
                    </JumboImageWrapper>
                 </JumboItem>
              </>
          ))}
         </JumboWrapper>
    )
};


export default JumboCompound;