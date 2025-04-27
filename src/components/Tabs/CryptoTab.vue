<template>
  <section>
    <div
      class="flex gap-6 mb-4 max-sm:flex-col"
      v-for="data in newData"
      :key="data.title"
    >
      <div class="max-sm:w-full">
        <img
          class="h-[160px] w-[230px] max-sm:w-full"
          :src="data.img"
          alt="btc"
        />
      </div>
      <div class="flex flex-col flex-1 justify-between">
        <div>
          <div>
            <h2 class="text-secondary text-[1.01rem] font-medium">
              {{ data.title }}
            </h2>
            <h3 class="text-gray text-[0.9rem]">{{ data.subHeading }}</h3>
          </div>
          <div class="mt-2">
            <p class="text-white text-[0.85rem]">{{ data.decription }}</p>
          </div>
        </div>

        <div class="flex justify-end items-end">
          <a
            :href="data.link"
            class="px-3 py-2 text-sm bg-secondary text-white"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newData: [
        {
          img: `https://cdn.benzinga.com/files/images/story/2025/04/04/Import-Trade-Tariffs-Increase-Concept-Wi.jpeg?width=1200&height=800&fit=crop`,
          title: "Trump's Reciprocal Tariffs Threaten To Derail Big Tech's.",
          subHeading:
            " President Donald Trump's new reciprocal tariffs on tech imports are threatening to disrupt Big Tech's multi-billion-dollar AI.",
          decription:
            "President Donald Trump's new reciprocal tariffs could undermine the billion-dollar AI infrastructure projects being spearheaded by leading tech companies, analy...",
          link: "https://www.benzinga.com/25/04/44641631/trumps-reciprocal-tariffs-threaten-to-derail-big-techs-billion-dollar-ai-infrastructure-plans-analysts-warn-starg",
        },
        {
          img: `https://www.benzinga.com/files/images/story/2025/04/03/Trumps-Reciprocal-Tariff-Math-A-Mastercl_1.jpeg`,
          title: "Trump Gets Sued Over China Tariffs",
          subHeading:
            "Congress Did Not Grant Presidents 'Blank Check To Write Domestic Policy",
          decription:
            "President Donald Trump is facing a lawsuit over the 20% tariffs imposed on Chinese goods. This marks the first known legal challenge against these tariffs...",
          link: "https://www.benzinga.com/25/04/44639682/trump-gets-sued-over-china-tariffs-congress-did-not-grant-presidents-blank-check-to-write-domestic-policy",
        },
        {
          img: `https://www.benzinga.com/files/images/story/2023/valuestock_image_4.jpeg`,
          title:
            "If You Invested $1000 In This Stock 10 Years Ago, You Would Have This Much Today",
          subHeading: "",
          decription:
            "Buying $1000 In AMZN: If an investor had bought $1000 of AMZN stock 10 years ago, it would be worth $9,530.19 today based on a price of $178.40 for AMZN at the time of writing...",
          link: "https://www.benzinga.com/insights/news/25/04/44638864/if-you-invested-1000-in-this-stock-10-years-ago-you-would-have-this-much-today",
        },
        {
          img: `https://www.benzinga.com/files/images/story/2025/04/03/Golden-Bitcoin-Lies-On-The-Banknotes-new.jpeg`,
          title:
            "BlackRock's Larry Fink Warns Dollar Risks Losing Reserve Currency Status To Bitcoin",
          subHeading: "",
          decription:
            "BlackRock CEO Larry Fink has warned that Bitcoin could usurp the U.S. dollar....",
          link: "https://www.benzinga.com/personal-finance/25/04/44638765/blackrocks-larry-fink-warns-dollar-risks-losing-reserve-currency-status-to-bitcoin",
        },
        {
          img: `https://www.benzinga.com/files/images/story/2023/valuestock_image_0.jpeg`,
          title:
            "Here's How Much $1000 Invested In Microsoft 20 Years Ago Would Be Worth Today",
          subHeading: "Microsoft 20 Years Ago Would Be Worth Today?",
          decription:
            "Microsoft has outperformed the market over the past 20 years by 6.56% on an annualized basis producing an average annual return of 14.4%. Currently, Microsoft has a market capitalization of $2.77 trillion. ...",
          link: "https://www.benzinga.com/insights/news/25/04/44638413/heres-how-much-1000-invested-in-microsoft-20-years-ago-would-be-worth-today",
        },
      ],
    };
  },
};
</script>

<style></style>
