import { RegularButton, MediaSlot } from "../components/Shared"

const assetPathPrefix = "/portfolio/assets"
const imgChildPicture = `${assetPathPrefix}/a2acf.png`
const imgProfilePicture = `${assetPathPrefix}/eeabb.png`
const imgArrow5 = `${assetPathPrefix}/f4d78.svg`

export default function Home() {
  return (
    <article className="flex flex-col" data-page="home">
      <section
        className="h-[720.435px] w-full min-[1024px]:relative min-[1024px]:left-1/2 min-[1024px]:m-0 min-[1024px]:-translate-x-1/2 min-[1024px]:aspect-[1280/720.435] min-[1024px]:h-auto min-[1024px]:max-w-none min-[1024px]:p-0 min-[1280px]:w-screen"
        aria-label="Home hero video"
        data-node-id="2:463"
      >
        <MediaSlot id="home-hero" label="Home flat-lay video" />
        <a
          href="#introduction"
          onClick={(event) => {
            if (
              event.button !== 0 ||
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey
            )
              return
            const hash = event.currentTarget.hash
            const destination = document.getElementById(hash.slice(1))
            if (!destination) return
            event.preventDefault()
            if (window.location.hash !== hash)
              window.history.pushState(window.history.state, "", hash)
            destination.scrollIntoView({ behavior: "smooth", block: "start" })
          }}
          className="absolute -translate-x-1/2 left-1/2 bottom-[104.4675px] flex gap-[15px] items-end overflow-clip border-[1.099px] border-[#7a6558] bg-[#fcf9f5] px-[19px] py-[17px] max-[1024px]:hidden"
          data-node-id="2:458"
          data-name="Learn More BTN"
        >
          <div
            className="flex h-[13.968px] items-center justify-center relative shrink-0 w-0"
            data-node-id="2:459"
          >
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[13.968px]">
                <div className="absolute inset-[-4.9px_-4.76%_-4.9px_0]">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgArrow5}
                  />
                </div>
              </div>
            </div>
          </div>
          <p
            className="[word-break:break-word] font-['Outfit:Regular'] font-normal leading-[normal] relative shrink-0 text-[#4a3728] text-[16px] text-left tracking-[3px] uppercase whitespace-nowrap"
            data-node-id="2:460"
          >
            LEARN MORE
          </p>
          <div
            className="flex h-[13.968px] items-center justify-center relative shrink-0 w-0"
            data-node-id="2:461"
          >
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[13.968px]">
                <div className="absolute inset-[-4.9px_-4.76%_-4.9px_0]">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgArrow5}
                  />
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>
      <section
        id="introduction"
        className="ml-[calc(8.33%+2.33px)] grid h-[634px] w-[1064px] grid-cols-[480px_450.37px] gap-[63px] min-[1024px]:mt-[208.435px]"
      >
        <div
          className="h-[634px] w-[480px] relative shrink-0 "
          data-node-id="2:457"
          data-name="Profile Picture"
        >
          <img
            alt="Nicoline Søe Larsen"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgProfilePicture}
          />
        </div>
        <div className="relative h-full">
          <div
            role="heading"
            aria-level={1}
            className="[word-break:break-word] absolute top-[147.14px] left-0 font-['Lora:Medium_Italic'] font-medium italic leading-[0] text-[#4a3728] text-[48px] whitespace-nowrap"
            data-node-id="2:456"
          >
            <p className="leading-[normal] mb-0">NICOLINE</p>
            <p className="leading-[normal]">SØE LARSEN</p>
          </div>
          <div
            className="[word-break:break-word] absolute top-[283px] left-0 font-['DM_Sans:Regular'] font-normal leading-[0] text-[#4a3728] text-[0px] w-[450.37px] whitespace-pre-wrap"
            data-node-id="2:455"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            <p className="font-['Outfit:Regular'] leading-[20px] mb-0 text-[16px]">{`I’m a passionate  Multimedia Design student with a strong visual eye and experience with creating digital content. I turn creative ideas into visual experiences through design, photography, video, and digital interfaces.`}</p>
            <p className="leading-[20px] mb-0 text-[16px]">​</p>
            <p className="font-['Outfit:Regular'] leading-[20px] mb-0 text-[16px]">
              Some might say that i’m a 50 year old grandma with way too many
              hobbies and a ridiculous amount of screen time..
            </p>
            <p className="leading-[20px] mb-0 text-[16px]">​</p>
            <p className="font-['Outfit:Regular'] leading-[20px] mb-0 text-[16px]">
              So SUE ME (actually please don’t) for being absolutely obsessed
              with creative ideas and combining modern technology with
              traditional crafts.
            </p>
            <p className="leading-[20px] mb-0 text-[16px]">​</p>
            <p className="text-[16px]">
              <span className="font-['Outfit:Regular'] font-normal leading-[20px]">{`Maybe they’re right. I’m definitely not average! And that’s my `}</span>
              <span className="font-['Outfit:Bold'] font-bold leading-[20px]">
                why
              </span>
              <span className="font-['Outfit:Regular'] font-normal leading-[20px]">
                .
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="ml-[calc(8.33%+2.33px)] mt-[83px] grid h-[640px] w-[1064px] grid-cols-[450.37px_479px] justify-between">
        <div className="relative">
          <div
            role="heading"
            aria-level={2}
            className="[word-break:break-word] absolute top-[119.73px] left-0 font-['Lora:Medium_Italic'] font-medium italic leading-[0] text-[#4a3728] text-[48px] whitespace-nowrap"
            data-node-id="2:453"
          >
            <p className="leading-[normal] mb-0">MY INNER</p>
            <p className="leading-[normal]">CREATIVE CHILD</p>
          </div>
          <div
            className="[word-break:break-word] absolute top-[255.59px] left-0 font-['Outfit:Regular'] font-normal leading-[0] text-[#4a3728] text-[16px] w-[450.37px] whitespace-pre-wrap"
            data-node-id="2:452"
          >
            <p className="leading-[normal] mb-0">
              Aren’t we all just creative kids in adult bodies?
            </p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal]">
              I’m curious, playful and I use my delusional inner child to solve
              problems and most of the time, it actually takes me somewhere I’d
              never thought I was capable of reaching.
            </p>
          </div>
          <RegularButton to="/my-work" className="absolute left-0 top-[373px]">
            VIEW MY WORK
          </RegularButton>
        </div>
        <div
          className="h-[640px] w-[479px] relative shrink-0 "
          data-node-id="2:454"
          data-name="Child Picture"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt="Nicoline as a child"
              className="absolute h-full left-[-11.27%] max-w-none top-0 w-[133.5%]"
              src={imgChildPicture}
            />
          </div>
        </div>
      </section>
      <div className="h-[60px]" />
    </article>
  )
}
