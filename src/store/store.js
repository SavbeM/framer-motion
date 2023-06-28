import rec1 from "../assets/et-it.svg";
import rec2 from "../assets/speedtest.svg";
import emp1 from "../assets/emp1.jpg";
import emp2 from "../assets/emp2.jpg";
import emp3 from "../assets/emp3.jpg";
import emp4 from "../assets/emp4.jpg";

export const recommendations = [
    {
        logo: rec1,
        recommendationText: "Since implementing the groundbreaking solutions from Innovative IT Solutions, our productivity skyrocketed and profits soared. We’ll never look back!",
        companyName: "TechBlitz"
    },
    {
        logo: rec2,
        recommendationText: "These guys know their stuff! The team at Innovative IT Solutions was a joy to work with and our business has thrived as a result.",
        companyName: "CyberCore"
    }
]

export const team = [
    {img: emp1, name: "Thomas Edison", position: "CEO"},
    {img: emp2, name: "Grace Hopper", position: "CTO"},
    {img: emp3, name: "Alan Turing", position: "Head of AI"},
    {img: emp4, name: "Ada Lovelace", position: "Lead Developer"}
]

export const subscriptions = [
    {subscriptionType: "Starter", price: "29.99", services: ["Basic Support", "5 Users", "50GB Storage", "AI Tools"]},
    {
        subscriptionType: "Premium",
        price: "59.99",
        services: ["Priority Support", "Unlimited Users", "1TB Storage", "Advanced AI"]
    },
    {
        subscriptionType: "Advanced",
        price: "99.99",
        services: ["Dedicated Manager", "Custom Integrations", "10TB Storage", "Custom AI"]
    }
]
