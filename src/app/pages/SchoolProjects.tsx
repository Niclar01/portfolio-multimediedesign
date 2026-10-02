import { Link } from "react-router"
import { ReturnSection } from "../components/Shared"

const assetPathPrefix = "/portfolio/assets"
const imgGarnOgCraftPicture = `${assetPathPrefix}/40a2b.png`
const imgOnlineSikkerhedPicture = `${assetPathPrefix}/a7ae2.png`

export default function SchoolProjects() {
  return (
    <article className="flex flex-col" data-page="school">
      <ReturnSection to="/my-work" />
      <div
        className="bg-[#d5ae9e] h-[129.524px] overflow-clip w-full relative shrink-0 "
        data-node-id="2:382"
        data-name="Titel bar 'School Projects'"
      >
        <h1
          className="[word-break:break-word] absolute font-['Outfit:Regular'] font-normal leading-[normal] left-[calc(50%-146.46px)] text-[#4a3728] text-[40px] top-[calc(50%-25.82px)] whitespace-nowrap"
          data-node-id="2:383"
        >
          School Projects
        </h1>
      </div>
      <section className="ml-[calc(8.33%+2.33px)] mt-[98.916px] grid h-[342px] grid-cols-[385px_615px] gap-[70.092px]">
        <div
          className="[word-break:break-word] block h-[281px] text-[#4a3728] text-left w-[385px] relative shrink-0 "
          data-node-id="2:378"
          data-name="'Onlinesikkerhed' Text box"
        >
          <p
            className="absolute font-['Outfit:Regular'] font-normal leading-[normal] left-[calc(50%-192.5px)] text-[16px] top-0 whitespace-nowrap"
            data-node-id="2:379"
          >
            School project - 2nd semester
          </p>
          <div
            className="absolute font-['Outfit:Regular'] font-normal leading-[0] left-[calc(50%-192.5px)] text-[16px] top-[81px] w-[385px] whitespace-pre-wrap"
            data-node-id="2:380"
          >
            <p className="leading-[normal] mb-0">{`An individual school project focusing on UX design and the use of HTML, SCSS and JavaScript. `}</p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal] mb-0">
              This specific website showcases the importance of password
              security and shows students the consequences of their behavior
              online.
            </p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal]">
              In this project I learned how to create a functional interactive
              interface design based on a real life issue. I also learned the
              basics of JavaScript and SCSS.
            </p>
          </div>
          <h2
            className="absolute font-['Outfit:Bold'] font-bold leading-[normal] left-[calc(50%-192.5px)] text-[40px] top-[20px] whitespace-nowrap"
            data-node-id="2:381"
          >
            <Link to="/school-projects/online-sikkerhed">
              Onlinesikkerhed.dk
            </Link>
          </h2>
        </div>
        <Link
          to="/school-projects/online-sikkerhed"
          aria-label="Onlinesikkerhed.dk"
          className="block cursor-pointer h-[342px] rounded-[15px] shadow-[0px_9px_15.1px_-3px_rgba(0,0,0,0.19)] w-[615px] relative shrink-0 "
          data-node-id="2:377"
          data-name="Online sikkerhed picture"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15px]">
            <img
              alt=""
              className="absolute h-[194.81%] left-0 max-w-none top-[0.01%] w-full"
              src={imgOnlineSikkerhedPicture}
            />
          </div>
        </Link>
      </section>
      <section className="ml-[calc(8.33%+2.33px)] mt-[86px] grid h-[342px] grid-cols-[385px_615px] gap-[71.092px]">
        <div
          className="[word-break:break-word] h-[306px] text-[#4a3728] w-[385px] relative shrink-0 "
          data-node-id="2:373"
          data-name="Garn og craft Text box"
        >
          <p
            className="absolute font-['Outfit:Regular'] font-normal leading-[normal] left-[calc(50%-192.5px)] text-[16px] top-0 whitespace-nowrap"
            data-node-id="2:374"
          >
            School project - 1st semester
          </p>
          <div
            className="absolute font-['Outfit:Regular'] font-normal leading-[0] left-[calc(50%-192.5px)] text-[16px] top-[81px] w-[385px] whitespace-pre-wrap"
            data-node-id="2:375"
          >
            <p className="leading-[normal] mb-0">
              This group project was a real-life case for a local yarn store in
              Kolding.
            </p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal] mb-0">
              The project was about designing a website with a new visual
              identity and incorporating UI and UX design-principles, to make an
              engaging and inclusive user experience.
            </p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal]">
              I learned how to work with a real client with specific needs and
              requirements as well as working together with other group members.
            </p>
          </div>
          <h2
            className="absolute font-['Outfit:Bold'] font-bold leading-[normal] left-[calc(50%-192.5px)] text-[40px] top-[20px] whitespace-nowrap"
            data-node-id="2:376"
          >
            <Link to="/school-projects/garn-og-craft">Garn og Craft</Link>
          </h2>
        </div>
        <Link
          to="/school-projects/garn-og-craft"
          aria-label="Garn og Craft"
          className="block cursor-pointer h-[342px] rounded-[15px] shadow-[0px_9px_15.1px_-3px_rgba(0,0,0,0.19)] w-[615px] relative shrink-0 "
          data-node-id="2:372"
          data-name="Garn og Craft picture"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15px]">
            <img
              alt=""
              className="absolute h-[848.57%] left-0 max-w-none top-[-0.1%] w-full"
              src={imgGarnOgCraftPicture}
            />
          </div>
        </Link>
      </section>
      <div className="h-[98.852px]" />
    </article>
  )
}
