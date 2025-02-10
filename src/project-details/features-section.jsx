import { useState } from "react"
import Section from "../sections/section"
import FeatureCard from "./feature-card"
export default function FeaturesSection({features}){

    const [selectedI,setSelectedI] = useState(0)

    return <Section id="features" title="App Features" content=<div className="features-card-cont">
    {
       features.map((feature,i)=>{
        return <span key={feature.title} onClick={
            ()=>setSelectedI(i)
        }> <FeatureCard  feature={feature} isSelected={i==selectedI}/></span>
                }
            )
            }
            </div>>
    </Section>
}