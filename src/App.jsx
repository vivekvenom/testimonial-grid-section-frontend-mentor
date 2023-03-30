import daniel from "./assets/images/image-daniel.jpg";
import jonathan from "./assets/images/image-jonathan.jpg";
import kira from "./assets/images/image-kira.jpg";
import jeanette from "./assets/images/image-jeanette.jpg";
import patrick from "./assets/images/image-patrick.jpg";
import bgimage from "./assets/images/bg-pattern-quotation.svg";

const App = () => {
  return (
    <div className="lg:h-[100vh] grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-6 mt-8 p-6 lg:max-w-[87%] lg:m-auto lg:mt-0">
      <div
        className="bg-no-repeat bg-[top_right_2rem] bg-purple-600 text-white p-6 rounded-lg lg:col-span-2"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="flex justify-start space-x-4 items-center">
          <img
            className="w-8 h-8 rounded-full border-2 border-purple-400"
            src={daniel}
            alt="profile-picture"
          />
          <div>
            <p className="font-bold text-sm">Daniel Clifford</p>
            <p className="opacity-50 text-xs">Verified Graduate</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mt-4 leading-tight">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </p>
          <p className="mt-4 opacity-70 text-[13px] font-medium">
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </div>
      </div>

      <div className="bg-gray-600 text-white p-8 rounded-lg">
        <div className="flex justify-start space-x-4 items-center">
          <img
            className="w-8 h-8 rounded-full border-2 border-white-400"
            src={jonathan}
            alt="profile-picture"
          />
          <div>
            <p className="font-bold text-sm">Jonathan Walters</p>
            <p className="opacity-50 text-xs">Verified Graduate</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mt-4 leading-tight">
            The team was very supportive and kept me motivated
          </p>
          <p className="mt-4 opacity-70 text-[13px] leading-tight">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg lg:row-start-2">
        <div className="flex justify-start space-x-4 items-center">
          <img
            className="w-8 h-8 rounded-full border-2 border-white-400"
            src={jeanette}
            alt="profile-picture"
          />
          <div>
            <p className="font-bold text-sm">Jeanette Harmon</p>
            <p className="opacity-50 text-xs">Verified Graduate</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mt-4 leading-tight">
            An overall wonderful and rewarding experience
          </p>
          <p className="mt-4 opacity-70 text-[13px] leading-tight">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </div>
      </div>

      <div className="bg-gray-900 text-white p-8 rounded-lg lg:col-span-2">
        <div className="flex justify-start space-x-4 items-center">
          <img
            className="w-8 h-8 rounded-full border-2 border-purple-400"
            src={patrick}
            alt="profile-picture"
          />
          <div>
            <p className="font-bold text-sm">Patrick Abrams</p>
            <p className="opacity-50 text-xs">Verified Graduate</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mt-4 leading-tight">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>
          <p className="mt-4 opacity-70 text-[13px] leading-tight">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg lg:row-start-1 lg:col-start-4 lg:row-span-2">
        <div className="flex justify-start space-x-4 items-center">
          <img
            className="w-8 h-8 rounded-full border-2 border-white-400"
            src={kira}
            alt="profile-picture"
          />
          <div>
            <p className="font-bold text-sm">Kira Whittle</p>
            <p className="opacity-50 text-xs">Verified Graduate</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mt-4 leading-tight">
            Such a life-changing experience. Highly recommended!
          </p>
          <p className="mt-4 opacity-70 text-[13px] leading-tight">
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
