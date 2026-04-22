import GradientText from "../../effects/TextEffects/GradientText";

const HowIWork = () => {
    return (
        <>
            <section className="max-w-4xl mx-auto px-6 py-16">

  <GradientText colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}>
    <h2 className="text-2xl md:text-3xl font-semibold">
      How I Work
    </h2>
  </GradientText>

  <p className="mt-6 text-neutral-400 leading-relaxed">
    I start with a small version that works end-to-end, even if it is not polished yet.
    Shipping early helps me learn what really matters.
  </p>

  <p className="mt-4 text-neutral-400 leading-relaxed">
    Then I iterate in short loops: test, break, debug, improve, repeat.
    That rhythm keeps momentum high and decisions grounded in reality.
  </p>

  <p className="mt-4 text-neutral-400 leading-relaxed">
    I care about the details people actually feel:
    clear interfaces, predictable behavior, and fewer "why did this break?" moments.
  </p>

</section>
        </>
    )
}

export default HowIWork;
