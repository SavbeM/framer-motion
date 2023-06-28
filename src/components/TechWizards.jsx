import {motion, useInView} from "framer-motion";
import {useEffect, useRef, useState} from "react";

export const TechWizards = ({position, name, image, index}) => {

    const ref = useRef(null)
    const isInView = useInView(ref)
    const [transform, setTransform] = useState("none")
    const [opacity, setOpacity] = useState("0")

    useEffect(() => {
        setTransform(!isInView ? `translateX(${index % 2 === 0 ? "500px" : "-500px"})` : "none")
        setOpacity(!isInView ? "0" : "1")
    }, [isInView])

    return (
        <motion.div
                    style={{
                        transform: transform,
                        opacity: opacity,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }} ref={ref}
                    className="flex flex-col justify-center content-center bg-red p-10 rounded-2xl ">
            <div className="overflow-hidden w-[100px] h-[100px] m-auto rounded-full mb-4">
                <img src={image}/>
            </div>
            <h2 className="font-primary-title text-center mb-4">
                {name}
            </h2>
            <p className="font-primary text-center text-white">
                {position}
            </p>
        </motion.div>
    )
}
