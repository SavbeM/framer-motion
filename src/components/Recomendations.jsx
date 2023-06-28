import {motion} from "framer-motion";

export const Recommendation = ({recommendationText, company, logo}) => {


    return (
        <motion.div initial={{opacity: 0, background: "#8AC926"}} transition={{type: "linear", duration: 1}} whileInView={{opacity: 1, background: "#FF4046"}} className="flex flex-col  content-center justify-center flex-wrap bg-red p-20 ">
            <div className="m-auto text-center w-20 h-20 mb-10">
                <img src={logo}/>
            </div>
            <p className="text-center text-white font-primary text-xl mb-10">{recommendationText}</p>
            <p className="text-center">{company}</p>
        </motion.div>
    )
}
