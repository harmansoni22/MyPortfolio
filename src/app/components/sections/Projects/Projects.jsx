import BorderGlow from "../../effects/border/BorderGlow";
import ElectricBorder from "../../effects/border/ElectricBorder";
import GradientText from "../../effects/TextEffects/GradientText";

const ProjectSection = () => {
    return (
        <>
            <section className="max-w-6xl mx-auto px-6 py-16">
                <GradientText
                    colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
                    fontSize={50}
                >
                    My Projects
                </GradientText>

                <p className="mt-4 max-w-2xl text-neutral-400 leading-relaxed">
                    A few projects that pushed me to think deeper about product quality,
                    system behavior, and what makes software actually useful in daily work.
                </p>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    {/* <ElectricBorder
                        color="#4323f1"
                        chaos={0.1}
                        speed={0.5}
                    > */}
                    <BorderGlow
                        coneSpread={35}
                        glowRadius={10}
                        animated={true}
                        edgeSensitivity={82}
                    >
                        <div className="p-6">
                            <h3 className="text-white font-medium text-lg">
                                OmniStart
                            </h3>
                            <p className="mt-2 text-neutral-400 font-body">
                                Turns raw ideas into structured execution plans so teams can move from thinking to doing faster.
                            </p>
                            <a href="/projects/omnistart" className="mt-4 inline-block text-sm text-white">
                                View details -&gt;
                            </a>
                        </div>
                    </BorderGlow>
                    {/* </ElectricBorder> */}

                    {/* <ElectricBorder
                        color="#4323f1"
                        chaos={0.1}
                        speed={0.5}
                    > */}
                    <BorderGlow
                        animated={true}
                        coneSpread={35}
                        glowRadius={10}
                        edgeSensitivity={81}
                    >
                        <div className="p-6">
                            <h3 className="text-white font-medium text-lg">
                                AI Education Platform
                            </h3>
                            <p className="mt-2 text-neutral-400 font-body">
                                An AI support layer for student questions, designed to stay clear, fast, and scalable.
                            </p>
                            <a href="/projects/ai-platform" className="mt-4 inline-block text-sm text-white">
                                View details -&gt;
                            </a>
                        </div>
                    </BorderGlow>
                    {/* </ElectricBorder> */}

                    {/* <ElectricBorder
                        color="#4323f1"
                        chaos={0.1}
                        speed={0.5}
                    > */}
                    <BorderGlow
                        animated={true}
                        coneSpread={35}
                        glowRadius={10}
                        edgeSensitivity={15}
                    >
                        <div className="p-6">
                            <h3 className="text-white font-medium text-lg">
                                Backend &amp; Deployment
                            </h3>
                            <p className="mt-2 text-neutral-400 font-body">
                                Hands-on deployment and debugging work where reliability mattered more than perfect local setups.
                            </p>
                        </div>
                    </BorderGlow>
                    {/* </ElectricBorder> */}
                </div>
            </section>
        </>
    );
};

export default ProjectSection;
