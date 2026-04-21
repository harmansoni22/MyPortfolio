"use client";

import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import GradientText from "../../effects/TextEffects/GradientText";
import GradientOutlineText from "../../effects/TextEffects/GradientOutlineText";
import HoverDistortImage from "../../effects/Image/ImageDistortion";
import SplashCursor from "../../effects/cursor/SplashCursor";
import { useState } from "react";

const spaceGrotesk = Space_Grotesk({
  	subsets: ["latin"],
  	weight: ["500", "600"],
  	display: "swap",
});

const HeroSection = () => {
	const [isHovered, setIsHovered] = useState(false);

  	const myPicSource = "/my-pic_no-bg.png";

  	return (
    	<>
      		{
				isHovered && (
					<SplashCursor
        				BLEND_MODE="difference"
        				SPLAT_RADIUS={0.0245}
      				/>
				)
			}
      		<section
				className="relative min-h-screen w-full overflow-hidden"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
      			<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        			<div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,#0f23fa24,transparent_65%)] blur-3xl" />
        			<div className="absolute -right-20 top-8 h-80 w-80 rounded-full bg-[radial-gradient(circle,#0fe7fa20,transparent_65%)] blur-3xl" />
        			<div className="absolute bottom-4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#0f85fa1a,transparent_70%)] blur-3xl" />
      			</div>

      			<div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pb-10 pt-24 md:h-[700px] md:px-10 md:pt-0">
        			<div className="z-10 flex items-start justify-between gap-5 md:absolute md:left-0 md:right-0 md:top-16 md:px-10">
          				<div className="pointer-events-none relative max-w-[48%] md:max-w-none">
            				<p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              					Portfolio
            				</p>
            				<h1 className="mt-2 leading-none">
              					<GradientText
                					colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
                					className="!mx-0 !justify-start"
                					fontWeight={700}
                					fontSize={100}
                					skewX={0}
              					>
                  					Harman
              					</GradientText>
              					<GradientOutlineText
                					text="Soni"
                					fontSize={100}
                					strokeWidth={1.5}
                					colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
              					/>
            				</h1>
            				<p className="mt-3 max-w-[280px] text-xs uppercase tracking-[0.2em] text-neutral-500 md:text-sm">
              					Built with curiosity, shipped with care
            				</p>
          				</div>

          				<div className="pointer-events-none max-w-[52%] text-right md:max-w-[48%]">
            				<div className="mt-10 -me-5 flex flex-col items-end justify-center">
              					{/* <GradientOutlineText
                					text="Frontend Engineer"
                					className="w-[auto]"
                					colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
                					fontSize={45}
                					strokeWidth={1}
                					fontFamily="Georgia, 'Times New Roman', serif"
                					skewX={12}
              					/> */}
              					<div className="flex gap-2">
                					<GradientText
                  						colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
                  						fontSize={45}
                  						fontFamily="Georgia, 'Times New Roman', serif"
                  						skewX={12}
                					>
                  						Full Stack
                					</GradientText>
                					<GradientOutlineText
                						text="Developer"
                						className="w-[auto]"
                						colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
                						fontSize={45}
                						strokeWidth={1}
                						fontFamily="Georgia, 'Times New Roman', serif"
                						skewX={12}
              						/>
              					</div>
              					<GradientOutlineText
                					text="AI Product Builder"
                					className="w-[auto]"
                					colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
                					fontSize={40}
                					strokeWidth={1.5}
                					fontFamily="Georgia, 'Times New Roman', serif"
                					skewX={12}
              					/>
            				</div>
          				</div>
        			</div>

        			<div className="relative z-20 mt-12 flex flex-1 items-start justify-center pt-8 md:mt-0 md:pt-24">
          				<HoverDistortImage
            				src={myPicSource}
            				width={405}
            				height={560}
            				alt="My Photo"
            				intensity={0.28}
            				className="rounded-[22px] md:rounded-[26px]"
          				/>
        			</div>

        			<div className="z-30 mt-8 flex items-center gap-6 pointer-events-auto self-start text-sm md:absolute md:bottom-14 md:left-10 md:mt-0">
          				<Link
            				href="/projects"
            				className={`${spaceGrotesk.className} italic text-[20px] tracking-wide text-neutral-300 underline underline-offset-4 decoration-neutral-700 transition-colors duration-200 hover:text-white hover:decoration-sky-400`}
          				>
            				View Projects
          				</Link>
          				<a
            				href="https://github.com/harmansoni22"
            				target="_blank"
            				rel="noopener noreferrer"
            				className={`${spaceGrotesk.className} italic text-[20px] tracking-wide text-neutral-300 underline underline-offset-4 decoration-neutral-700 transition-colors duration-200 hover:text-white hover:decoration-sky-400`}
          				>
            				GitHub
          				</a>
        			</div>
      			</div>
    		</section>
    	</>
  	);
};

export default HeroSection;
