import GradientText from "../../effects/TextEffects/GradientText";
import HoverDistortImage from "../../effects/Image/ImageDistortion";
import { Suspense } from "react";

const HeroSection = () => {
  const fontSize = 50;
  const myPicSource = "/my-pic_no-bg.png";

  return (
    <>
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="relative w-full max-w-6xl h-[500px] flex items-start justify-center">
        <div className="absolute inset-0 bottom-0 z-0 flex items-center justify-center pointer-events-auto">
          <Suspense fallback={<h1 className="mt-50">Loading Image...</h1>}>
            <HoverDistortImage
              src={myPicSource}
              width={450}
              height={600}
              alt="My Photo"
              intensity={0.28}
              className="rounded-full"
            />
          </Suspense>
        </div>

        <div className="relative z-10 pointer-events-none">
          <div className="flex mt-20 gap-2 whitespace-nowrap text-center">
            <span style={{ fontSize: `${fontSize}px` }} data-fluid-interactive className="text-[#8d9eb0] font-bold">
              Hi, Welcome to
            </span>

            <GradientText
              fontSize={fontSize}
              colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
            >
              My Portfolio
            </GradientText>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-[30px] justify-start flex">I am a</span>
            <div className="flex flex-col h-[35px] text-[30px] justify-start items-start overflow-y-hidden">
                <span>
                    <GradientText
                        fontSize={30}
                        colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
                    >
                      Developer
                    </GradientText>
                </span>
                <span>
                    <GradientText
                        fontSize={30}
                        colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}
                    >
                      Student
                    </GradientText>
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;