import GradientText from "../components/effects/TextEffects/GradientText";

const AboutMe = () => {
    return (
        <section className="max-w-4xl mx-auto px-6 py-20">
          	<GradientText colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}>
            	<h1 className="text-3xl md:text-4xl font-semibold">
              		About Me
            	</h1>
          	</GradientText>

          	<p className="mt-6 text-neutral-400 leading-relaxed">
            	I don’t really enjoy building things that just look good and stop there.
            	I like figuring out how things actually work when you try to use them.
          	</p>

          	<p className="mt-4 text-neutral-400 leading-relaxed">
            	Most of what I’ve learned came from starting something, breaking it, and then fixing it.
            	That cycle repeats more than any tutorial ever could.
          	</p>

          	<p className="mt-4 text-neutral-400 leading-relaxed">
          	  	I usually begin with something simple, then keep improving it as real problems show up.
          	  	It’s slower at first, but it leads to projects that actually hold up.
          	</p>

          	<p className="mt-4 text-neutral-400 leading-relaxed">
            	Right now, I’m working on AI-based projects like OmniStart, trying to make outputs more structured and usable instead of just generated.
          	</p>
		</section>
    )
}

export default AboutMe;