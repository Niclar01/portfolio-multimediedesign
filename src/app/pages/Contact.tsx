const assetPathPrefix = "/portfolio/assets"
const imgContactPicture = `${assetPathPrefix}/c8234.png`

export default function Contact() {
  return (
    <article className="flex flex-col" data-page="contact">
      <section className="ml-[calc(8.33%+2.33px)] mt-[69.87px] grid h-[484px] w-[1008px] grid-cols-[500px_373px] gap-[156.48px]">
        <div className="pt-[1px]">
          <div
            className="[word-break:break-word] h-[192px] text-[#4a3728] w-[500px] relative shrink-0 "
            data-node-id="2:49"
            data-name="Text box"
          >
            <div
              className="absolute font-['Outfit:Regular'] font-normal leading-[0] left-0 text-[16px] top-[72px] w-[500px] whitespace-pre-wrap"
              data-node-id="2:50"
            >
              <p className="mb-0">
                <span className="[word-break:break-word] font-['Outfit:Bold'] font-bold leading-[normal]">{`THANK YOU `}</span>
                <span className="leading-[normal]">
                  for making it all the way to this part of my portfolio.
                </span>
              </p>
              <p className="leading-[normal] mb-0">​</p>
              <p className="leading-[normal] mb-0">
                I’m always up for a good cup of coffee and sharing creativity.
              </p>
              <p className="leading-[normal] mb-0">​</p>
              <p className="leading-[normal]">
                If you have any questions, suggestions or ideas for a future
                collaboration, I’d love to hear from you!
              </p>
            </div>
            <h1
              className="absolute font-['Outfit:Bold'] font-bold leading-[normal] left-0 text-[40px] top-0 w-[482px]"
              data-node-id="2:51"
            >
              You’re still here?
            </h1>
          </div>
          <div
            className="[word-break:break-word] font-['Outfit:Regular'] font-normal h-[188.783px] w-[323.386px] relative shrink-0 mt-[56px]"
            data-node-id="2:46"
            data-name="Contact info"
          >
            <div
              className="absolute leading-[0] left-0 text-[#4a3728] text-[0px] top-[28.78px] w-[323.386px] whitespace-pre-wrap"
              data-node-id="2:47"
            >
              <p className="font-['Outfit:Bold'] font-bold leading-[normal] mb-0 text-[16px]">
                E-mail
              </p>
              <p className="leading-[normal] mb-0 text-[16px]">
                <a href="mailto:Nicoline944@gmail.com">Nicoline944@gmail.com</a>
              </p>
              <p className="leading-[normal] mb-0 text-[16px]">​</p>
              <p className="font-['Outfit:Bold'] font-bold leading-[normal] mb-0 text-[16px]">
                Phone number
              </p>
              <p className="leading-[normal] mb-0 text-[16px]">
                <a href="tel:+4542576057">+45 42576057</a>
              </p>
              <p className="leading-[normal] mb-0 text-[16px]">​</p>
              <p className="font-['Outfit:Bold'] font-bold leading-[normal] mb-0 text-[16px]">
                Location
              </p>
              <p className="leading-[normal] text-[16px]">Børkop, Denmark</p>
            </div>
            <p
              className="absolute leading-[12.698px] left-0 text-[#7a6558] text-[16px] top-0 tracking-[2.5397px] uppercase whitespace-nowrap"
              data-node-id="2:48"
            >
              CONTACT INFORMATION
            </p>
          </div>
        </div>
        <div
          className="h-[484px] w-[373px] relative shrink-0 "
          data-node-id="2:43"
          data-name="Contact picture"
        >
          <picture className="contents">
            <source media="(width < 1024px)" srcSet="/portfolio/assets/a076e.png" />
            <img
              alt="Nicoline wearing a knitted sweater"
              className="absolute block inset-0 max-w-none size-full"
              height="484"
              src={imgContactPicture}
              width="373"
            />
          </picture>
        </div>
      </section>
      <div className="h-[67.852px]" />
    </article>
  )
}
