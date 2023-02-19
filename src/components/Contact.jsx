import React,{useState} from 'react'
import { toast } from 'react-hot-toast';
import vg from "../assets/vg.png";
import {addDoc,collection} from "firebase/firestore";
import {db} from "../Firebase"


const Contact  = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [disableBtn,setDisablebtn] = useState(false);

    const submitHandler = async(e) =>{
        e.preventDefault();
        setDisablebtn(true);  
        try {    
        await addDoc(collection(db, "contacts"),
        {
            name,
            email,
            message,
        });
        setName("");
        setEmail("");
        setMessage("");
        toast.success("message sent");
        setDisablebtn(false); 
    } catch(error){
        toast.success("invalid ");
        setDisablebtn(false); 
    }
    };
  return (
    <div id="contact">
    <section>
        <form onSubmit={submitHandler}>
            <h2>
                Contact Me
            </h2>
            <input type="text" 
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name" required/>
            <input type="email" 
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email" required/>
            <input type="text"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
             placeholder="Your  Message" required/>
            <button disabled={disableBtn} 
            className={disableBtn ? "disableBtn " : ""}
            type="submit">Send</button>
        </form>
    </section>
    <aside>
        <img src={vg} alt="Graphics" />
    </aside>
    </div>
  )
}

export default Contact
