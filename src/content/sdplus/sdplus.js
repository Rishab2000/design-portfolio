import React from "react";
import ProjectIntro from "../../components/project-intro";
import ProjectSection from "../../components/project-page-components/green-section/projectSection";
import ProjectSubDescContainer from "../../components/project-page-components/sub-desc-container";

const SdPlus = () => {
  const miniDesc = {
    role: "My Role: Research, Product design roadmap, UX and UI design",
    duration: "Duration: 3 months, Apr - Jun 2020",
    firm: "Firm: Smarter Dharma",
  };
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectIntro
        title="SD+ | UX Internship"
        subTitle="Creating an experience roadmap"
        miniDesc={miniDesc}
        image={process.env.PUBLIC_URL + "/images/sdplus(hero-image).png"}
      />
      <ProjectSubDescContainer sectionTitle="Summary">
        <p className="font-avenir-book text-base mt-2 mb-8">
          As a part of this internship, I designed core features & UI elements
          for our product, SD+. For this effort, I carefully balanced usability,
          business and technical goals. The overall user experience of the
          redesigned product was proved easy to use by multiple users in
          hands-on demos conducted after the interim release.
        </p>
        <ProjectSection
          heading="Contributions"
          desc={
            <ul className="list-disc list-inside font-avenir-book mt-2">
              <li>Created an Experience Roadmap 🗺️</li>
              <li>
                Created high fidelity prototypes, wireframes and design
                specifications 📱
              </li>
              <li>
                Worked closely with engineering team to build the product 🔨
              </li>
            </ul>
          }
        />
        <div className="flex flex-col">
          <ProjectSection
            heading="About SD+"
            desc=" A real estate sustainability product that helps builders make
            informed decisions through data driven insights. We suggest best
            sustainable interventions to help construct green buildings"
          />
          <ProjectSection
            heading="Main components of the product"
            desc=" The product consists of two main components. Interventions designed
            for the architectural team to view our recommendations. Insights
            provides information for CEOs to understand the project progress."
          />
        </div>
        <div className="flex flex-col w-full gap-8 mb-8">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/sdplus-project/wireframes/pre/Insights_Unscrolled_1x.png"
            }
            alt="temp"
            className="w-full"
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/sdplus-project/wireframes/pre/Interventions.png"
            }
            alt="temp"
            className="w-full"
          />
        </div>
      </ProjectSubDescContainer>
      <ProjectSubDescContainer title="Scoping">
        <div className="flex flex-col">
          <ProjectSection
            heading="Understanding problems faced by users"
            desc="With the initial version of the product, we attempted to validate
            its usability through demos. Through this, we learned that they
            found the current usability & functionality insufficient for their
            needs."
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/sdplus-project/Comments/1(Client)-02.svg"
            }
            alt="temp"
            className="mb-12"
          />
        </div>
        <div className="flex flex-col">
          <ProjectSection
            heading="  We realized..."
            desc="That a well defined design goal was necessary. I recomended
            creating an Experience Roadmap (Exr), which aims to help teams
            stay focused, create stability & drive a consistent user
            experience."
          />

          <img
            src={
              process.env.PUBLIC_URL +
              "/images/sdplus-project/Comments/2(me).svg"
            }
            alt="temp"
            className="mb-12"
          />
        </div>
      </ProjectSubDescContainer>

      <div className="bg-blue-sdplus w-screen py-6 mb-8">
        <p className="w-10/12 mx-auto text-white font-avenir-bold opacity-60">
          Design Challenge
        </p>
        <p className="w-10/12 mx-auto text-white">
          How might we refocus and restructure the product's experience?
        </p>
      </div>
      <ProjectSubDescContainer sectionTitle="Approach">
        <ProjectSection
          heading="Defining user stages, from pre-sale to post-sale"
          desc="The first thing we took up was organizing our roadmap at a high level,
          as user stages and  calling them Experiences. From start to finish, we mapped five distinct
          stages our users would pass through."
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/sdplus-project/Roadmap/Customer_journey_task.png"
          }
          alt="temp"
          className="mt-4 mb-12"
        />
        <ProjectSection
          heading="Identifying touchpoints"
          desc="We now started defining our users' interactions by describing
          touchpoints our users would use to interact with our organization."
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/sdplus-project/Roadmap/Customer_journey_touchpoints.png"
          }
          alt="temp"
          className="mt-4 mb-12"
        />
      </ProjectSubDescContainer>
      <ProjectSection
        heading="Synethesizing insights"
        desc={
          <span>
            <p>
              We identified key user and business insights by focusing on
              answering three main questions
            </p>
            <ul className="list-disc list-inside font-avenir-book mt-2 mb-2">
              <li>What users are thinking at that time? </li>
              <li>What users are feeling at that time?</li>
              <li>Are there any points of friction the users face?</li>
            </ul>
            <p>
              Next plan of action was to conduct research by communicating
              directly with the users. For this we laid down key points we
              wanted to determine:
            </p>
            <ul className="list-disc list-inside font-avenir-book mt-2 mb-8">
              <li>What did they like about the product? </li>
              <li>What didn’t you like about the product?</li>
              <li>
                What are their feelings towards the current process in place?
                Does it meet their expectations?
              </li>
              <li>
                What touchpoints and steps does the user take in each phase to
                achieve their goal? How do they find and interact with these
                necessary touchpoints?
              </li>
              <li>
                Is there any friction as they pass through different customer
                phases?
              </li>
              <li>How easy is the transition between each phase?</li>
            </ul>
            <p>
              However, due to time constraints, we were not able to gather
              sufficient data and decided to do it after the next release of the
              product. This would help us investigate problems that may arise
              later.
            </p>
          </span>
        }
      />
      <img
        src="https://media.giphy.com/media/ftN31y6wNaJxCkLYNS/giphy.gif"
        alt="A GIF of a cute cat :)"
        className="mx-auto mt-4 mb-12"
      />
      <ProjectSubDescContainer sectionTitle="Detailing">
        <ProjectSection
          heading="Establishing gaps in our product's fical engagement"
          desc=" Using the Jobs to be Done framework, as a team we chalked up a few
          user stories. This showed multiple points in the experience which
          were misaligned to what the user needs. We boiled them all down to
          three main areas:"
        />

        <div className="flex flex-wrap justify-center font-avenir-book text-xs text-center gap-5 mt-8 mb-24">
          <div className="flex flex-col justify-center w-5/12 bg-cool-gray20 bg-opacity-40 rounded-md p-4">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/sdplus-project/Problems/icons-01.svg"
              }
              alt="A GIF of a cute cat :)"
              className="w-8/12 mx-auto"
            />
            <p className="mt-2">Minimal business insights for CEOs</p>
          </div>
          <div className="flex flex-col justify-center w-5/12 bg-cool-gray20 rounded-md bg-opacity-40 p-4">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/sdplus-project/Problems/icons-02.svg"
              }
              alt="A GIF of a cute cat :)"
              className="w-8/12 mx-auto"
            />
            <p className="mt-2">Missing dynamic & visual data</p>
          </div>
          <div className="flex flex-col justify-center w-5/12 bg-cool-gray20 rounded-md bg-opacity-40 p-4">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/sdplus-project/Problems/icons-03.svg"
              }
              alt="A GIF of a cute cat :)"
              className="w-8/12 mx-auto"
            />
            <p className="mt-2">
              Lack of collaboration & communication between architects
            </p>
          </div>
        </div>
        <ProjectSection
          heading=" Brainstorming for ideas"
          desc="     We conducted a brainstorming session to explore a vast number of
              ideas and approaches to solve the target problems. We later
              organized and filtered our ideas by creating two categories,
              Improvements and New. This helped us understand the nature of the
              idea and an overview plan of implementation."
        />
      </ProjectSubDescContainer>
      <img
        src={process.env.PUBLIC_URL + "/images/sdplus-project/Ideas/ideas.png"}
        alt="A GIF of a cute cat :)"
        className="mt-8 mb-24"
      />
      <ProjectSubDescContainer sectionTitle="Designing">
        <ProjectSection
          title="The make or break screen"
          desc="The existing Insights screen had minimal information useful for CEOs
            to make decisions. After many iterations, I came up with the new
            design which was more inline with our users needs"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/sdplus-project/wireframes/post/insights/Insights1.5x.png"
          }
          alt="A GIF of a cute cat :)"
          className="w-12/12 mx-auto"
        />
        <ProjectSection
          desc={
            <span>
              <p className="font-avenir-bold text-sm">After</p>
              <ul className="space-y-4">
                <li>
                  +Dashboard structure eliminated the need for scrolling for
                  information
                </li>
                <li>
                  +Displays calculated insights on financial investment and
                  saving
                </li>
                <li>+Provides location based suggestions for project</li>
                <li>
                  +Most important information always present on the right side
                </li>
                <li>
                  +Illustrative badges for the level of sustainability achieved
                </li>
              </ul>
            </span>
          }
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/sdplus-project/wireframes/pre/Insights_Unscrolled_1.5x.png"
          }
          alt="A GIF of a cute cat :)"
          className="w-12/12 mx-auto"
        />
        <ProjectSection
          desc={
            <span>
              <p className="font-avenir-bold text-sm">Before</p>
              <ul className=" text-gray50 space-y-4">
                <li>- User has to scroll to find most important information</li>
                <li>- There are no explicit insights about that project</li>
                <li>
                  - Much of the information is replicated from the interventions
                  page
                </li>
              </ul>
            </span>
          }
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/sdplus-project/wireframes/post/insights/InsightsScrolled_1.5x.png"
          }
          alt="A GIF of a cute cat :)"
          className="w-12/12 mx-auto"
        />
        <ProjectSection
          desc={
            <span>
              <p className="font-avenir-bold text-sm">After</p>
              <ul className="font-avenir-book text-base space-y-4">
                <li>
                  + "Role-based access" work flow implemented for architect
                  teams to approve interventions
                </li>
                <li>
                  + Transparency about what we recommended and the expected
                  govt. compliance
                </li>
                <li>+ Tabbing of resource type to prevent scrolling</li>
                <li>+ Added a more commonly used term "Rupee/Sqft</li>
              </ul>
            </span>
          }
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/sdplus-project/wireframes/pre/Interventions_Pre_Scrolled_1.5x.png"
          }
          alt="A GIF of a cute cat :)"
          className="w-12/12 mx-auto"
        />
        <ProjectSection
          desc={
            <span>
              <p className="font-avenir-bold text-sm">Before</p>
              <ul className="font-avenir-book text-base text-gray50 space-y-4">
                <li>
                  - User has to scroll extensively to read all interventions
                </li>
                <li>- Lack of information about govt. compliance</li>
                <li>- In the dark about whether an intervention is approved</li>
              </ul>
            </span>
          }
        />
      </ProjectSubDescContainer>

      <ProjectSubDescContainer sectionTitle="Wrapping it up">
        <ProjectSection
          heading="Result of experience roadmapping"
          desc=" We kept coming back to this mapping whenever we needed to take
            design or tech decisions, or sprint plannings. This almost acted as
            our “team agreement”. This helped keep the product aligned with the
            user needs."
        />
        <ProjectSection
          heading=" My manager's testimonial"
          desc={
            <span>
              He is an enterprising young UI / UX designer who’s integrated
              seamlessly into our development team. He’s naturally curious about
              products, asks great questions and tries to understand different
              perspectives of a problem before offering a range of solutions
              along with his reasoning. <br /> <br />
              His pragmatic approach coupled with his knack of improving his
              technical and functional skill set has been a driving factor in
              our product lifecycle.
            </span>
          }
        />
        <ProjectSection
          heading="Key Takeaways"
          desc={
            <span>
              Working with a goal oriented mindset rather than feature oriented.
              <br /> <br />
              Virtual collaboration. COVID-19 lockdown facilitated the team to
              learn how to trust, work & collaborate in a virtual sphere.
              <br />
              <br />
              Agile software development process. Following the agile
              methodology helped me in three main aspects: space for change &
              iteration, focus on the user through user stories & improve
              overall quality by breaking down tasks into manageable chunks.
            </span>
          }
        />
      </ProjectSubDescContainer>
    </div>
  );
};

export default SdPlus;
