import CustomScroll from "../components/CustomScrollbar";
import GradientText from "../components/effects/TextEffects/GradientText";
import ContactMeForm from "../components/layout/form/ContactMeForm";
import Button from "@/components/ui/button";

export const metadata = {
  	title: "Contact",
  	description:
    	"Contact Harman Soni for freelance work, collaboration, and frontend/AI project discussions.",
  	openGraph: {
    	title: "Contact | Harman Soni",
    	description:
      		"Contact Harman Soni for freelance work, collaboration, and frontend/AI project discussions.",
    	images: ["/og-image.jpg"],
  	},
};


const Contact = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
    const whatsappMessage = encodeURIComponent(
        "Hi Harman, I found your portfolio and want to discuss a project."
    );
    const whatsappUrl = whatsappNumber
        ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
        : "";

    return (
		<>
			<CustomScroll />
        	<section className="max-w-4xl mx-auto px-6 py-16">
				<GradientText colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}>
    				<h1 className="text-2xl md:text-3xl font-semibold">
      					Contact
    				</h1>
  				</GradientText>

  				<p className="mt-6 text-neutral-400 leading-relaxed">
    				If you want to discuss projects, ideas, or collaboration, feel free to reach out.
  				</p>

  				{/* <div className="mt-8 flex gap-4">
  					<a
    					href="mailto:youremail@example.com"
    					className="px-5 py-2 bg-white text-black rounded-md"
  					>
    					Email Me
  					</a>

  					<a
    					href="https://github.com/yourusername"
    					target="_blank"
    					className="px-5 py-2 border border-neutral-700 rounded-md"
  					>
    					GitHub
  					</a>
				</div> */}

				<div className="">
					<ContactMeForm />
				</div>

                <section className="mt-8 rounded-2xl border border-emerald-400/25 bg-[linear-gradient(135deg,rgba(6,78,59,0.45),rgba(15,23,42,0.85))] p-5 shadow-[0_20px_50px_rgba(16,185,129,0.18)] md:p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-white md:text-xl">
                                Prefer WhatsApp?
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-emerald-50/85">
                                For quick discussion, updates, and faster replies, you can start a chat with me on WhatsApp.
                            </p>
                        </div>

                        {whatsappUrl ? (
                            <Button
                                as="a"
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                isAnimated
                                isPseudoAnimated
                            >
                                Chat on WhatsApp
                            </Button>
                        ) : (
                            <p className="text-xs text-emerald-100/75 md:text-sm">
                                Add <code className="rounded bg-black/30 px-1.5 py-0.5">NEXT_PUBLIC_WHATSAPP_NUMBER</code> to enable this button.
                            </p>
                        )}
                    </div>
                </section>
			</section>
		</>
    )
}

export default Contact;
