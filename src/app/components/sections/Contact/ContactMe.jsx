import GradientText from "../../effects/TextEffects/GradientText";
import ContactMeForm from "../../layout/form/ContactMeForm";

const ContactMe = () => {
    return (
        <>
            {/* <section className="min-h-screen">
                <div className="flex flex-col justify-center items-center mt-20">
                    <GradientText
                        colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
                        fontSize={50}
                    >
                        Contact Me
                    </GradientText>
                </div>
            </section> */}

            <section className="max-w-4xl mx-auto px-6 py-16">
            	<GradientText colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}>
    				<h2 className="text-2xl md:text-3xl font-semibold">
      					Contact
    				</h2>
  				</GradientText>

  				<p className="mt-6 text-neutral-400 leading-relaxed">
    				If you have an idea, a project, or just want to talk tech, I am always open to a good conversation.
  				</p>

  				<div className="mt-6 space-y-2 text-neutral-400">
    				<p>Email: harman.codes.dev@gmail.com</p>
    				<p>GitHub: github.com/harmansoni22</p>
  				</div>
			</section>
        </>
    )
}

export default ContactMe;
