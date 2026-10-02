import {
  ReturnSection,
  MediaSlot,
  MobileScrollControl,
} from "../components/Shared"

const assetPathPrefix = "/portfolio/assets"
const imgMoodboard = `${assetPathPrefix}/89a06.png`
const imgDog = `${assetPathPrefix}/5f69c.png`
const imgCapcut = `${assetPathPrefix}/cdc20.png`
const imgLine3 = `${assetPathPrefix}/1aaa3.svg`
const imgFrame64 = `${assetPathPrefix}/5b53f.svg`
const imgLine5 = `${assetPathPrefix}/3562f.svg`

export default function CreativeProduction() {
  return (
    <article className="flex flex-col" data-page="production">
      <ReturnSection to="/my-work" />
      <div
        className="bg-[#b3735e] h-[129.524px] overflow-clip w-full relative shrink-0 "
        data-node-id="2:272"
        data-name="Titel bar 'Creative Production'"
      >
        <h1
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Outfit:Regular'] font-normal leading-[normal] left-[calc(50%+0.64px)] text-[#f7f3ee] text-[40px] text-center top-[calc(50%-25.82px)] whitespace-nowrap"
          data-node-id="2:273"
        >
          Creative Production
        </h1>
      </div>
      <div
        className="h-[347px] w-[1071px] relative shrink-0 ml-[calc(8.33%+2.33px)] mt-[78.916px]"
        data-node-id="2:268"
        data-name="Hero section"
      >
        <div
          className="[word-break:break-word] absolute font-['Outfit:Regular'] font-normal leading-[0] left-[calc(50%-535.5px)] text-[#4a3728] text-[16px] top-[120px] w-[494px] whitespace-pre-wrap"
          data-node-id="2:269"
        >
          <p className="leading-[normal] mb-0">{`With more than five years of experience creating digital content, I now manage and produce creative content for Børkop Cykler alongside my studies. `}</p>
          <p className="leading-[normal] mb-0">​</p>
          <p className="leading-[normal]">
            Additionally, I have built and engaged a personal audience of more
            than 109,000 followers through my own social media channels. I love
            using my creative skills in different ways to create meaningful and
            engaging designs.
          </p>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Outfit:Bold'] font-bold leading-[normal] left-[calc(50%-535.5px)] text-[#4a3728] text-[40px] top-0 w-[494px]"
          data-node-id="2:270"
        >{`Digital content & Brand communication`}</p>
        <div
          className="absolute h-[266px] left-[599px] rounded-[6px] top-[10px] w-[472px]"
          data-node-id="2:271"
          data-name="BC-REKLAMEFILM-normal 1"
        >
          <MediaSlot
            id="borkop-intro"
            label="Børkop Cykler introduction video"
          />
        </div>
      </div>
      <div
        className="content-stretch flex flex-col gap-[27px] items-start w-[1074px] relative shrink-0 ml-[calc(8.33%+2.33px)] mt-[30px]"
        data-node-id="2:216"
        data-name="Videos"
      >
        <div className="h-0 relative shrink-0 w-full" data-node-id="2:217">
          <div className="absolute inset-[-2.54px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine3} />
          </div>
        </div>
        <div
          className="h-[371px] relative shrink-0 w-[1074px]"
          data-node-id="2:218"
          data-name="From idea to final product"
        >
          <p
            className="[word-break:break-word] absolute font-['Outfit:Bold'] font-bold leading-[normal] left-0 text-[#4a3728] text-[30px] top-0 w-[1074px]"
            data-node-id="2:219"
          >
            From idea to final product
          </p>
          <div
            className="absolute content-stretch flex gap-[10px] items-start left-0 top-[65px] w-[1074px]"
            data-node-id="2:220"
          >
            <div
              className="h-[306px] overflow-clip relative shrink-0 w-[172px]"
              data-node-id="2:221"
            >
              <div
                className="absolute border border-[#7a6558] border-solid h-[198px] left-0 rounded-[6px] top-[-0.29px] w-[172px]"
                data-node-id="2:222"
                data-name="Moodboard"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
                  <img
                    alt=""
                    className="absolute h-[104.04%] left-[-3.58%] max-w-none top-[-4.04%] w-[107.15%]"
                    src={imgMoodboard}
                  />
                </div>
              </div>
              <ul
                className="[word-break:break-word] absolute block font-['Outfit:Regular'] font-normal leading-[0] left-0 list-disc text-[#4a3728] text-[16px] top-[211.71px] whitespace-nowrap"
                data-node-id="2:223"
              >
                <li className="mb-0 ms-[24px]">
                  <span className="leading-[30px]">Trend research</span>
                </li>
                <li className="mb-0 ms-[24px]">
                  <span className="leading-[30px]">Target audience</span>
                </li>
                <li className="ms-[24px]">
                  <span className="leading-[30px]">Storytelling</span>
                </li>
              </ul>
            </div>
            <div
              className="h-[198px] relative shrink-0 w-[34px]"
              data-node-id="2:224"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgFrame64}
              />
            </div>
            <div
              className="h-[306px] overflow-clip relative shrink-0 w-[172px]"
              data-node-id="2:226"
            >
              <div
                className="absolute h-[198px] left-0 rounded-[6px] top-[-0.29px] w-[172px]"
                data-node-id="2:227"
                data-name="Dog"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
                  <img
                    alt=""
                    className="absolute h-[151.39%] left-0 max-w-none top-[-51.52%] w-full"
                    src={imgDog}
                  />
                </div>
              </div>
              <ul
                className="[word-break:break-word] absolute block font-['Outfit:Regular'] font-normal leading-[0] left-0 list-disc text-[#4a3728] text-[16px] top-[211.71px] whitespace-nowrap"
                data-node-id="2:228"
              >
                <li className="mb-0 ms-[24px]">
                  <span className="leading-[30px]">Filming</span>
                </li>
                <li className="mb-0 ms-[24px]">
                  <span className="leading-[30px]">Setting the scene</span>
                </li>
                <li className="ms-[24px]">
                  <span className="leading-[30px]">Attention to detail</span>
                </li>
              </ul>
            </div>
            <div
              className="h-[198px] relative shrink-0 w-[34px]"
              data-node-id="2:229"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgFrame64}
              />
            </div>
            <div
              className="h-[306px] overflow-clip relative shrink-0 w-[172px]"
              data-node-id="2:231"
            >
              <div
                className="absolute h-[198px] left-0 rounded-[6px] top-[-0.29px] w-[172px]"
                data-node-id="2:232"
                data-name="Capcut"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full"
                  src={imgCapcut}
                />
              </div>
              <ul
                className="[word-break:break-word] absolute block font-['Outfit:Regular'] font-normal leading-[0] left-0 list-disc text-[#4a3728] text-[16px] top-[211.71px] whitespace-nowrap"
                data-node-id="2:233"
              >
                <li className="mb-0 ms-[24px]">
                  <span className="leading-[30px]">Editing in CapCut</span>
                </li>
                <li className="mb-0 ms-[24px]">
                  <span className="leading-[30px]">{`Sound & captions`}</span>
                </li>
                <li className="ms-[24px]">
                  <span className="leading-[30px]">Final retouches</span>
                </li>
              </ul>
            </div>
            <div
              className="h-[198px] relative shrink-0 w-[34px]"
              data-node-id="2:234"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgFrame64}
              />
            </div>
            <div
              className="h-[306px] overflow-clip relative shrink-0 w-[172px]"
              data-node-id="2:236"
            >
              <div
                className="absolute h-[295px] left-0 rounded-[6px] top-0 w-[172px]"
                data-node-id="2:237"
                data-name="Knitting"
              >
                <MediaSlot
                  id="process-knitting"
                  label="Knitting — final production"
                  className="rounded-[6px]"
                />
              </div>
            </div>
            <div
              className="h-[198px] relative shrink-0 w-[34px]"
              data-node-id="2:238"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgFrame64}
              />
            </div>
            <div
              className="[word-break:break-word] bg-[#e8e2dc] h-[295px] overflow-clip relative rounded-[6px] shrink-0 text-[#4a3728] w-[167px]"
              data-node-id="2:240"
            >
              <p
                className="absolute font-['Outfit:Regular'] font-normal h-[167px] leading-[normal] left-[calc(50%-63.5px)] text-[16px] top-[107px] w-[128px] whitespace-pre-wrap"
                data-node-id="2:241"
              >{`This video was created for my personal TikTok  profile and gained more than 2,000 new followers.`}</p>
              <p
                className="absolute font-['Outfit:Bold'] font-bold leading-[81.88500213623047%] left-[calc(50%-63.5px)] text-[32px] top-[26px] w-[128px]"
                data-node-id="2:242"
              >
                88,000+ views
              </p>
            </div>
          </div>
          <MobileScrollControl
            targetId="2:220"
            label="Scroll from idea to final product"
          />
        </div>
        <div className="h-0 relative shrink-0 w-full" data-node-id="2:243">
          <div className="absolute inset-[-2.54px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine5} />
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[22px] h-[1151px] items-start relative shrink-0 w-full"
          data-node-id="2:244"
          data-name="Video section"
        >
          <div
            className="h-[527.667px] relative shrink-0 w-[1074px]"
            data-node-id="2:245"
            data-name="Nicoline Søe"
          >
            <p
              className="[word-break:break-word] absolute font-['Outfit:Bold'] font-bold leading-[normal] left-0 text-[#4a3728] text-[30px] top-0 w-[1074px]"
              data-node-id="2:246"
            >
              Nicoline Søe
            </p>
            <div
              className="absolute gap-x-[36px] gap-y-[5px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] left-0 top-[60px] w-[1074px]"
              data-node-id="2:247"
              data-name="videoer"
            >
              <div
                className="col-1 h-[402.667px] justify-self-stretch relative rounded-[6px] row-1 shrink-0"
                data-node-id="2:248"
                data-name="Desenio Campaign"
              >
                <MediaSlot
                  id="desenio"
                  label="Desenio Campaign"
                  className="rounded-[6px]"
                />
              </div>
              <div
                className="col-2 h-[402.667px] justify-self-stretch relative rounded-[6px] row-1 shrink-0"
                data-node-id="2:249"
                data-name="Jysk"
              >
                <MediaSlot
                  id="jysk"
                  label="Jysk Interior Inspiration"
                  className="rounded-[6px]"
                />
              </div>
              <div
                className="col-3 h-[402.667px] justify-self-stretch relative rounded-[6px] row-1 self-start shrink-0"
                data-node-id="2:250"
                data-name="Knitting"
              >
                <MediaSlot
                  id="knitting"
                  label="Knitting"
                  className="rounded-[6px]"
                />
              </div>
              <div
                className="col-4 h-[402.667px] justify-self-stretch relative rounded-[6px] row-1 shrink-0"
                data-node-id="2:251"
                data-name="Slippers"
              >
                <MediaSlot
                  id="slippers"
                  label="Knitted Slippers"
                  className="rounded-[6px]"
                />
              </div>
              <div
                className="[word-break:break-word] col-1 font-['Outfit:Regular'] font-normal h-[59px] justify-self-stretch leading-[0] relative row-2 self-start shrink-0 text-[#4a3728] text-[0px] text-center"
                data-node-id="2:252"
              >
                <p className="font-['Outfit:Bold'] font-bold leading-[30px] mb-0 text-[16px]">
                  Desenio Campaign
                </p>
                <p className="text-[16px]">
                  <span className="leading-[30px]">300</span>
                  <span className="leading-[30px]">,</span>
                  <span className="leading-[30px]">000+ views</span>
                </p>
              </div>
              <div
                className="[word-break:break-word] col-2 font-['Outfit:Bold'] font-bold h-[59px] justify-self-stretch leading-[0] relative row-2 self-start shrink-0 text-[#4a3728] text-[0px] text-center"
                data-node-id="2:253"
              >
                <p className="leading-[30px] mb-0 text-[16px]">
                  Jysk Interior Inspiration
                </p>
                <p className="font-['Outfit:Regular'] font-normal leading-[30px] text-[16px]">
                  600,000+ views
                </p>
              </div>
              <div
                className="[word-break:break-word] col-3 font-['Outfit:Bold'] font-bold h-[59px] justify-self-stretch leading-[0] relative row-2 self-start shrink-0 text-[#4a3728] text-[0px] text-center"
                data-node-id="2:254"
              >
                <p className="leading-[30px] mb-0 text-[16px]">Knitting</p>
                <p className="font-['Outfit:Regular'] font-normal leading-[30px] text-[16px]">
                  88,000+ views
                </p>
              </div>
              <div
                className="[word-break:break-word] col-4 font-['Outfit:Bold'] font-bold justify-self-stretch leading-[0] relative row-2 self-stretch shrink-0 text-[#4a3728] text-[0px] text-center"
                data-node-id="2:255"
              >
                <p className="leading-[30px] mb-0 text-[16px]">
                  Knitted Slippers
                </p>
                <p className="font-['Outfit:Regular'] font-normal leading-[30px] text-[16px]">
                  191,000+ views
                </p>
              </div>
            </div>
            <MobileScrollControl
              targetId="2:247"
              label="Scroll Nicoline Søe videos"
            />
          </div>
          <div className="h-0 relative shrink-0 w-full" data-node-id="2:256">
            <div className="absolute inset-[-2.54px_0_0_0]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgLine5}
              />
            </div>
          </div>
          <div
            className="h-[518px] relative shrink-0 w-[1074px]"
            data-node-id="2:257"
            data-name="Børkop Cykler"
          >
            <p
              className="[word-break:break-word] absolute font-['Outfit:Bold'] font-bold leading-[normal] left-0 text-[#4a3728] text-[30px] top-0 w-[1074px]"
              data-node-id="2:258"
            >
              Børkop Cykler
            </p>
            <div
              className="absolute gap-x-[36px] gap-y-[5px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] left-0 top-[60px] w-[1074px]"
              data-node-id="2:259"
              data-name="videoer"
            >
              <div
                className="col-1 h-[402.667px] justify-self-stretch relative rounded-[6px] row-1 shrink-0"
                data-node-id="2:260"
                data-name="Event Marketing - 1"
              >
                <MediaSlot
                  id="event-1"
                  label="Event Marketing"
                  className="rounded-[6px]"
                />
              </div>
              <div
                className="col-2 h-[402.667px] justify-self-stretch relative rounded-[6px] row-1 shrink-0"
                data-node-id="2:261"
                data-name="Q36"
              >
                <MediaSlot
                  id="q36"
                  label="Q36.5 Clothing Showcase"
                  className="rounded-[6px]"
                />
              </div>
              <div
                className="col-3 h-[402.667px] justify-self-stretch relative rounded-[5.269px] row-1 self-start shrink-0"
                data-node-id="2:262"
                data-name="Event Marketing - 2"
              >
                <MediaSlot
                  id="event-2"
                  label="Event Marketing"
                  className="rounded-[6px]"
                />
              </div>
              <div
                className="col-4 h-[402.667px] justify-self-stretch relative rounded-[6px] row-1 shrink-0"
                data-node-id="2:263"
                data-name="Event Marketing - 3"
              >
                <MediaSlot
                  id="event-3"
                  label="Event Marketing"
                  className="rounded-[6px]"
                />
              </div>
              <p
                className="[word-break:break-word] col-1 font-['Outfit:Bold'] font-bold h-[50.333px] justify-self-stretch leading-[30px] relative row-2 shrink-0 text-[#4a3728] text-[16px] text-center"
                data-node-id="2:264"
              >
                Event Marketing
              </p>
              <p
                className="[word-break:break-word] col-2 font-['Outfit:Bold'] font-bold h-[50.333px] justify-self-stretch leading-[30px] relative row-2 shrink-0 text-[#4a3728] text-[16px] text-center"
                data-node-id="2:265"
              >
                Q36.5 Clothing Showcase
              </p>
              <p
                className="[word-break:break-word] col-3 font-['Outfit:Bold'] font-bold h-[50.333px] justify-self-stretch leading-[30px] relative row-2 shrink-0 text-[#4a3728] text-[16px] text-center"
                data-node-id="2:266"
              >
                Event Marketing
              </p>
              <p
                className="[word-break:break-word] col-4 font-['Outfit:Bold'] font-bold h-[50.333px] justify-self-stretch leading-[30px] relative row-2 shrink-0 text-[#4a3728] text-[16px] text-center"
                data-node-id="2:267"
              >
                Event Marketing
              </p>
            </div>
            <MobileScrollControl
              targetId="2:259"
              label="Scroll Børkop Cykler videos"
            />
          </div>
        </div>
      </div>
      <div className="h-[106.852px]" />
    </article>
  )
}
