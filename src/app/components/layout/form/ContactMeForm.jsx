"use client"

import { useState } from "react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import { sendContactEmail } from "@/libs/mail";

const ContactMeForm = () => {
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function clientFormDataAction(formData) {
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        const result = await sendContactEmail(formData);

        if (result?.success) {
            setStatus({
                type: "success",
                message: result.message || "Message sent! I will get back to you soon.",
            });
        } else {
            setStatus({
                type: "error",
                message: result?.message || "Something went wrong. Please try again!",
            });
        }

        setIsSubmitting(false);
    }

    return (
        <>
            <div className="form-container mt-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/60 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur md:p-6">
                <div className="mb-5 flex flex-col gap-2 md:mb-6">
                    <h3 className="text-lg font-semibold text-white">Let&apos;s Work Together</h3>
                    <p className="text-sm leading-relaxed text-neutral-400">
                        Share a quick brief and I will reply with next steps, timeline, and how I can help.
                    </p>
                </div>

                <form
                    className="form space-y-4"
                    action={clientFormDataAction}
                    autoComplete="off"
                >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="input-container">
                            <Input
                                name="name"
                                label="Full Name"
                                type="text"
                                isLabelFloating
                                isAnimated
                                required
                                maxLength={80}
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck={false}
                            />
                        </div>
                        <div className="input-container">
                            <Input
                                name="email"
                                label="Work Email"
                                type="email"
                                isLabelFloating
                                required
                                maxLength={254}
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck={false}
                            />
                        </div>
                        <div className="input-container">
                            <Input
                                name="subject"
                                label="Subject"
                                type="text"
                                isLabelFloating
                                required
                                maxLength={120}
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck={false}
                            />
                        </div>
                        <div className="input-container">
                            <Input
                                name="number"
                                label="Phone (Optional)"
                                type="tel"
                                isLabelFloating
                                maxLength={20}
                                pattern="^[0-9+\-() ]{0,20}$"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck={false}
                            />
                        </div>
                    </div>

                    <div className="input-container">
                        {/* <Input label="..." type="text" /> */}
                        <Textarea
                            name="message"
                            label="Project details, goals, and timeline..."
                            isLabelFloating
                            required
                            rows={6}
                            maxLength={2000}
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck={false}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-xs text-neutral-500">
                            Typical response time: within 24-48 hours.
                        </p>

                        {status.message ? (
                            <p
                                className={`text-sm ${status.type === "success" ? "text-emerald-400" : "text-rose-400"}`}
                                role="status"
                                aria-live="polite"
                            >
                                {status.message}
                            </p>
                        ) : null}

                        <div className="input-container">
                            <Button type="submit" fullWidth isAnimated disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}


export default ContactMeForm;
