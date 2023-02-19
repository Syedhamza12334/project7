import React, { useRef } from 'react';
import {animate, motion} from "framer-motion";
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight, BsChevronBarDown} from "react-icons/bs";
import me from "../assets/logo.jpeg";
const Home = () => {
    const clientCount= useRef  (null);
    const projectCount= useRef  (null);
    const animationclientCount =() =>{
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>(clientCount.current.textContent=v.toFixed()),
        });
    };

    const animationprojectCount =() =>{
        animate(0,500,{
            duration:1,
            onUpdate:(v)=>(projectCount.current.textContent=v.toFixed()),
        });
    };

    const animations= {
        h1:{
            initial :{
                x:"-100%",
                opacity: 0,
             },
             whileInView:{
                x:0,
                opacity: 1,
             },
        },
        button:{
            initial :{
                y:"-100%",
                opacity: 0,
             },
             whileInView:{
                y:0,
                opacity: 1,
             },
            },
    };
  return (
    <div id="home">
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                    HI ,iam <br/> hamza 
                </motion.h1>

                <Typewriter 
                 options ={{
                    strings:["a developer " , "a content maker","a data scientist"],
                    autoStart : true,
                    loop:true,
                    wrapperClassName:"typewriterpara",
                    cursor:"",
                 }}
                />
                <div>
                <a href="mailto:syedhamzashamim@gmauil.com"> hire me 
                    </a>
                    <a href="work"> projects <BsArrowUpRight /> 
                    </a>
                </div>
                <article>
                    <p>+
                        <motion.span whileInView={animationclientCount} ref ={clientCount}></motion.span>
                    </p>
                    <span> clients worldwide</span>
                </article>
                <aside>
                <article>
                    <p>
                        +<motion.span ref={projectCount} whileInView={animationprojectCount}>500</motion.span>
                    </p>
                    <span> projects done</span>
                </article>

                <article data-special>
                    <p>
                      Contacts  
                    </p>
                    <span>syedhamzashamim@gmail.com</span>
                </article>
                </aside>
            </div>
        </section>
        <section>
            <img src={me} alt="hamza" />
        </section>
         <BsChevronBarDown/>
    </div>
  )
}

export default Home