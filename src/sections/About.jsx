import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopy, setHasCopy] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("wawerumuturi57@gmail.com")

        setHasCopy(true)

        setTimeout(() => {
            setHasCopy(false)
        }, 2000)
    }

    return (
        <section className={"c-space my-20"} id={"about"}>
            <div className={"grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"}>
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img
                            src={"/assets/grid1.png"}
                            alt={"grid-1"}
                            className={"w-full sm:h-[276px] h-fit object-contain"} />
                        <div>
                            <p className={"grid-headtext"}>Hi, I&apos;am Derrick</p>
                            <p className={"grid-subtext"}>With 2 years of experience, I have honed my skills in frontend and
                                backend development, with a  focus on animated 3D websites.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid2.png"} alt={'grid-2'} className={"w-full sm:w-[276px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>Tech Stack</p>
                            <p className={"grid-subtext"}>I specialize on Javascript/TypeScript with a focus on React and Next.js ecosystems.</p>
                        </div>
                    </div>
                </div>
                <div className={"col-span-1 xl:row-span-4"}>
                    <div className={"grid-container"}>
                        <div className={"rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center "}>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="https://raw.githubusercontent.com/vasturiano/three-globe/master/example/img/earth-night.jpg"
                                bumpImageUrl="https://raw.githubusercontent.com/vasturiano/three-globe/master/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className={"grid-headtext"}>I work remotely across most timezones</p>
                            <p className={"grid-subtext"}>I&apos;m based in Kenya, with remote work available</p>
                            <Button name={"Contact me"} isBeam containerClass={"w-full mt-10"}></Button>
                        </div>
                    </div>
                </div>
                <div className={"xl:col-span-2 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid3.png"} alt={"grid-3"} className={"w-full sm:h-[266px] h-fit object-contain"} />
                        <div>
                            <p className={"grid-headtext"}>My passion for coding</p>
                            <p className={"grid-subtext"}>I love solving problems and building things through code. Coding isn&apos;t just my profession - it is my passion.</p>
                        </div>
                    </div>
                </div>
                <div className={"xl:col-span-1 xl:row-span-2"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid4.png"} alt={"grid-4"} className={"w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"} />
                        <div className={"space-y-2"}>
                            <p className={"grid-subtext text-center"}>Contact me</p>
                            <div className={"copy-container"} onClick={handleCopy}>
                                <img src={hasCopy ? '/assets/tick.svg': 'assets/copy.svg'} alt={'copy'} />
                                <p className={"lg:text-2xl md:text-lg font-medium text-gray_gradient text-white"}>wawerumuturi57@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
