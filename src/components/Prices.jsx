import {motion, stagger} from "framer-motion";

export const Prices = ({subscriptionType, price, services, index}) => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                    delayChildren:  0.5,

                    staggerChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0, scale: 0 },
        show: { opacity: 1, scale: 1},

    }

    return (
        <motion.div variants={container} initial='hidden' whileInView="show"  className="flex flex-col max-w-xs justify-center content-center bg-red p-10 rounded-2xl w-full ">
            <motion.p variants={item}    className="text-white font-primary text-start mb-4 tablet:text-xl">{subscriptionType}</motion.p>
            <motion.h1 variants={item}  className="font-primary-title text-center mb-4 text-4xl ">{price}</motion.h1>
            <motion.div variants={item}  >
                {services.map((service) =>
                    <div key={Math.random()}>
                        <p className="flex flex-row gap-2 content-center text-start text-white mb-2">
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <motion.path

                                d="M 14.531 5.031 L 6.531 13.031 C 6.39 13.172 6.199 13.251 5.999 13.251 C 5.8 13.251 5.609 13.172 5.468 13.031 L 1.968 9.531 C 1.675 9.237 1.675 8.762 1.968 8.468 C 2.262 8.175 2.737 8.175 3.031 8.468 L 6 11.437 L 13.469 3.969 C 13.763 3.676 14.238 3.676 14.532 3.969 C 14.825 4.263 14.825 4.738 14.532 5.032 Z"
                                fill="#FFFFFF"></motion.path>
                        </motion.svg>

                        {service}
                        </p>
                    </div>
                )}
                <button className="bg-green w-full p-xl rounded-xl">Sign up</button>
            </motion.div>
        </motion.div>
    )
}
