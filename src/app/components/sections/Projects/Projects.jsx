import GradientText from "../../effects/TextEffects/GradientText";

const ProjectSection = () => {
    return (
        <>
            <section className="min-h-screen">
                <div className="flex flex-col justify-center items-center mt-20">
                    {/* <h1 className="text-center font-bold text-[35px]">My Projects</h1> */}
                    <GradientText
                        colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
                        fontSize={50}
                    >
                        My Projects
                    </GradientText>
                </div>
            </section>
        </>
    )
}

export default ProjectSection;