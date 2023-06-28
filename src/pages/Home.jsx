import image1 from "../assets/image1.jpg"
import {motion, useDragControls} from "framer-motion";
import {TechWizards} from "../components/TechWizards";
import {Prices} from "../components/Prices";
import {Recommendation} from "../components/Recomendations";
import {Footer} from "../components/Footer";
import {recommendations, subscriptions, team} from "../store/store";


const HomeStyles = {
    sectionContainer: "flex flex-col gap-y-6 mb-10 tablet:flex-row justify-between gap-10 mb-20",
    textContainer: "flex flex-col font-normal tablet:self-center basis-1/2",
    paragraphWhite: "font-primary text-white text-md mb-8 tablet:text-xl ",
    title: `w-full text-2xl text-black text-center font-bold font-primary-title mb-4 tablet:text-2xl laptop:text-4xl`,
    paragraph: "font-primary text-md mb-8 tablet:text-xl ",
    yellowButton: "bg-yellow h-11 rounded-xl font-primary w-full",
    img: 'mix-blend-luminosity w-full max-h-[210px] h-auto rounded-2xl tablet:max-h-[90vh] min-h-[500px] object-cover'
}



export const Home = () => {
    const controls = useDragControls()


    return (
        <div className="max-w-[1200px] m-auto h-full">
            <motion.div className={HomeStyles.sectionContainer}>
                <motion.div initial={{y: -200, opacity: 0}} transition={{type: "linear", duration: 1}}
                            whileInView={{y: 2, opacity: 1}} className={HomeStyles.textContainer}>
                    <h1 className={HomeStyles.title}>INNOVATENOW</h1>
                    <p className={HomeStyles.paragraph}>
                        Looking to dive headfirst into the tech revolution? Prepare to be amazed as we present the most
                        innovative IT solutions in today’s fast-paced digital landscape! Say goodbye to outdated systems
                        and
                        meet the startup that’s propelling businesses into the future.
                    </p>
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                        }}
                        transition={{type: "spring", stiffness: 400, damping: 10}}
                        whileTap={{scale: 0.9}}
                        className={HomeStyles.yellowButton}>GET STARTED
                    </motion.button>
                </motion.div>
                <div>
                    <motion.img initial={{opacity: 0, x: 200}} transition={{type: "spring", stiffness: 100}}
                                whileInView={{opacity: 1, x: 0}} dragElastic={0.2} dragConstraints={{left: 0, right: 0}}
                                useDragControls={controls} drag="x" className={HomeStyles.img} src={image1}/>
                </div>
            </motion.div>
            <motion.div initial={{
                x: 500, opacity: 0
            }} transition={{type: "linear", duration: 2}}
                        whileInView={{x: 0, opacity: 1}} className="flex flex-col gap-y-6 mb-10 tablet:max-w-xl mb-20">
                <h1 className="w-full text-2xl text-black text-start font-bold font-primary-title mb-4 tablet:text-2xl laptop:text-4xl">Our
                    Vision</h1>
                <p className={HomeStyles.paragraphWhite}>We're deeply committed to changing the face of the IT industry
                    through radical innovation. Our vision transcends traditional norms and pushes beyond boundaries,
                    shaking up the status quo with disruptive technologies.</p>
                <p className={HomeStyles.paragraphWhite}>Our team of dedicated experts works tirelessly to provide
                    impeccable
                    service and groundbreaking solutions for real-world challenges, arming businesses with the tools
                    needed to excel in a hyper-competitive environment.</p>
                <p className={HomeStyles.paragraphWhite}>With a focus on agility, scalability, and security, our
                    pioneering
                    IT solutions will catapult you to the forefront of this thrilling technological revolution. So strap
                    in, hold tight—it’s going to be a wild ride.</p>
            </motion.div>
            <div className="flex  overflow-hidden flex-col gap-y-6 mb-20 tablet:mb-40">
                <h1 className={HomeStyles.title}>Tech Wizards</h1>
                <p className="font-primary text-white text-md mb-8 text-center tablet:text-xl">Meet the masterminds
                    behind our groundbreaking solutions.</p>
                <div className="grid  tablet:grid-cols-2 gap-4">
                    {team.map((employer, index= 0) => {
                        index++
                        return  <TechWizards index={index} key={employer.name} image={employer.img} name={employer.name} position={employer.position}/>
                    })}
                </div>
            </div>
            <div
                className="flex flex-col content-center justify-center mb-20 tablet:flex-row flex-wrap w-full gap-8 mb-40 desktop:justify-between">
                {subscriptions.map((subscription, index) => <Prices index={index} key={subscription.subscriptionType}
                                                             price={subscription.price}
                                                             subscriptionType={subscription.subscriptionType}
                                                             services={subscription.services}/>)}
            </div>
            <div className="flex flex-col gap-8 mb-40 laptop:flex-row">
                {recommendations.map((recommendation, index) => <Recommendation index={index} logo={recommendation.logo}
                                                                         recommendationText={recommendation.recommendationText}
                                                                         company={recommendation.companyName}/>)}
            </div>
            <Footer/>
        </div>
    )
}
