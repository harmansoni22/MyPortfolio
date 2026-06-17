import GradientText from "../../effects/TextEffects/GradientText";

const Failures = () => {
    return (
        <>
            <section className="max-w-4xl mx-auto px-6 py-16">

  <GradientText colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}>
    <h2 className="text-2xl md:text-3xl font-semibold">
      Failures & Iterations
    </h2>
  </GradientText>

  <p className="mt-6 text-neutral-400 leading-relaxed">
    Early on, I built features that looked impressive in demos but fell apart in real use.
    That taught me fast that "working once" is not the same as "working well."
  </p>

  <p className="mt-4 text-neutral-400 leading-relaxed">
    Production also humbled me. Things like environment setup, error handling,
    and deployment reliability became impossible to ignore.
  </p>

  <p className="mt-4 text-neutral-400 leading-relaxed">
    Now I keep it simple: make the core flow solid first, then add complexity only when it clearly earns its place.
  </p>

</section>
        </>
    )
}

export default Failures;
