import Image from "next/image";
import BACKGROUND_IMAGE from "../assets/images/Group 1.png";

export default function HomePage() {
  return (
    <main className="w-full mx-24">
      <section className="grid lg:grid-cols-2 ">
        <div className="">
          <fieldset className="border border-teal-400 text-4xl font-medium p-6 rounded-md">
            <legend className="font-bold text-teal-600">HEXADEV</legend>
            <h1>PROVIDE SOFTWARE SOLUTIONS FOR YOUR BUSINESS</h1>
          </fieldset>
          <div className="prose prose-md lg:prose-xl p-6">
            <p>
              We specialize in creating software tailored to your business
              needs, whether it's streamlining operations, enhancing customer
              experiences, or boosting efficiency.
            </p>
            <p>
              Partner with us to unlock your business's full potential through
              technology. Contact us today to get started.
            </p>
          </div>
          <div className="px-6">
            <button className="px-8 p-2 text-white font-semibold bg-teal-500">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <Image
            src={BACKGROUND_IMAGE}
            width={600}
            height={600}
            alt="computer image"
          />
        </div>
      </section>
    </main>
  );
}
