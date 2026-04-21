import GradientText from "../../effects/TextEffects/GradientText";

const WhoAmI = () => {
    return (
        <>
            <section className="max-w-4xl mx-auto px-6 py-16">
                <GradientText colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        About Me
                    </h2>
                </GradientText>

                <p className="mt-6 text-neutral-400 leading-relaxed">
                    I am the kind of builder who gets excited by messy real-world problems.
                    I enjoy taking an idea from rough notes to something people can actually use.
                </p>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                    Most of my learning has come from shipping, breaking things, and fixing them.
                    That feedback loop taught me more than passive tutorial watching ever could.
                </p>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                    Right now I am focused on frontend and AI-driven products like OmniStart,
                    where clean UX and practical output matter as much as the model itself.
                </p>
            </section>
        </>
    )
}

export default WhoAmI;
