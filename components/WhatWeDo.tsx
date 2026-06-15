import Image from "next/image";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <section className="section what-we-do" id="about">
      <div className="container two-col reverse">
        <div className="col-image">
          <Image
            src="/images/whatwedo.png"
            alt="Community in action — workshops, support, healing"
            width={480}
            height={480}
            className="img-frame img-whatwedo"
          />
        </div>
        <div className="col-text">
          <h2 className="text-green">What We Do</h2>
          <p>
            Sanctuary Forward provides trauma&#8209;informed shelter and
            supportive services for adults ages 21 and older across New York
            State.
          </p>
          <p>
            We welcome individuals from all walks of life, including those
            experiencing homelessness, recovery, reentry, mental health
            challenges, chronic health conditions, and other major life
            transitions.
          </p>
          <p>
            More than a temporary place to stay, we offer a safe and
            healing&#8209;centered environment where people can regain
            stability, rebuild their lives, and move forward with dignity and
            purpose.
          </p>
          <Link href="/#programs" className="btn btn-primary">Start Your Journey</Link>
        </div>
      </div>
    </section>
  );
}
