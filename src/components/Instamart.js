import { useState } from "react";

const SectionInstamart = ({title,description,isVisible,onShow, onHide})=>{
    return (
        <div className="sectionInstamart">
            <h1>{title}</h1>
            {
                isVisible==false ? 
                (
                    <button onClick = {onShow}>Show</button>
                ) 
                : 
                (
                    <>
                    <p>{description}</p>
                    <button onClick = {onHide}>Hide</button>
                    </>
                )
            }
            
            
        </div>
    )
}
//parent component i am using lif the state up concept here
const Instamart = ()=>{
    const [isVisible,setIsVisible] = useState(0);

    return (
        <div className="Instamart-container">
            <SectionInstamart isVisible = {isVisible===0} onShow = {()=>{setIsVisible(0)}} onHide = {()=>{setIsVisible(false)}} title = {"About Instamart"} description = {"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}/>
            <SectionInstamart isVisible = {isVisible===1} onShow = {()=>{setIsVisible(1)}} onHide = {()=>{setIsVisible(false)}} title = {"Details of Instamart"} description = {"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}/>
            <SectionInstamart isVisible = {isVisible===2} onShow = {()=>{setIsVisible(2)}} onHide = {()=>{setIsVisible(false)}} title = {"Team of Instamart"} description = {"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}/>
        </div>

    );
}
export default Instamart;