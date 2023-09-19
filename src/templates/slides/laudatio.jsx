import React from "react";
import Cover from "../cover";
import ImageText from "../image-text";
import timeImg from "../../ions/images/time.jpg";

const Laudatio = [

    () => <Cover title="Welcome" subtitle={"Koltin"} />,
    () => <ImageText
    image={timeImg}
    body={
        <div>
           
        </div>
    }
    title="Coach"
    subtitle={``}
/>,


];

export default Laudatio;
