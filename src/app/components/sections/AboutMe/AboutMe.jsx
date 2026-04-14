import GradientText from "../../effects/TextEffects/GradientText";
import SplashCursor from "../../effects/cursor/SplashCursor";

const WhoAmI = () => {
    return (
        <>
            {/* <section className="min-h-screen">
                <div className="flex flex-col justify-center items-center mt-20">
                    <div className="flex justify-center items-center">
                        <GradientText
                            colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
                            fontSize={50}
                        >
                            Who am I?
                        </GradientText>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-center font-bold">I am Harman Soni</div>
                        <div className="text-center">I am a web develper.</div>
                        <div className="text-center">I am 17 years old.</div>
                    </div>
                </div>
            </section> */}

            <section className="max-w-4xl mx-auto px-6 py-16">

  <GradientText colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}>
    <h2 className="text-2xl md:text-3xl font-semibold">
      About Me
    </h2>
  </GradientText>

  <p className="mt-6 text-neutral-400 leading-relaxed">
    I focus on building projects that actually work in real scenarios, not just demos.
    Most of what I have learned comes from building and fixing problems that show up during development.
  </p>

  <p className="mt-4 text-neutral-400 leading-relaxed">
    I usually start simple, then improve things step by step as I understand the system better.
    Instead of following tutorials, I rely on documentation and targeted problem solving.
  </p>

  <p className="mt-4 text-neutral-400 leading-relaxed">
    Right now, I am working on AI-based projects like OmniStart, where the goal is to make outputs structured and actually usable.
  </p>

</section>
        </>
    )
}

export default WhoAmI;