export default (environment = 'development') => ({ // eslint-disable-line

  // link file UUID
  id: '4cb88d88-8814-11e7-bf50-e1c239b45787',

  // canonical URL of the published page
  // "$url" get filled in by the ./configure script
  url: 'http://www.ftchinese.com/interactive/10571',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: '2017年11月10日',

  headline: '互动表格：两岸三地商学院',

  // summary === standfirst (Summary is what the content API calls it)
  summary: '英国《金融时报》首次蒐集两岸三地商学院的数据，比较顶尖商学院的毕业生起薪及其他重要指标。',

  topic: {
    name: 'FT商学院',
    url: 'http://www.ftchinese.com/tag/%E6%95%99%E8%82%B2',
  },

  relatedArticle: {
    text: '延伸阅读 »',
    url: 'http://www.ftchinese.com/story/001074512',
  },

  mainImage: {
    title: '',
    description: '',
    credit: '图片设计: Kari-Ruth Pedersen',

    // You can provide a UUID to an image and it was populate everything else
    uuid: '25439648-9e27-11e7-8cd4-932067fbf946',

    // You can also provide a URL
    // url: 'https://image.webservices.ft.com/v1/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fc4bf0be4-7c15-11e4-a7b8-00144feabdc0?source=ig&fit=scale-down&width=700',
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Patricia Nilsson', url: 'https://www.ft.com/stream/4b347066-9e59-385e-a7a4-f7f225b58154' },
    { name: 'David Blood', url: 'https://www.ft.com/david-blood' },
  ],

  // Appears in the HTML <title>
  title: '互动表格：两岸三地商学院--FT中文网',

  // meta data
  description: '英国《金融时报》首次蒐集两岸三地商学院的数据，找出下一代商业领袖的教育摇篮。',

  /*
  TODO: Select Twitter card type -
        "summary" or "summary_large_image"

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

 //  /*
 //  TODO: Do you want to tweak any of the
 //        optional social meta data?
 //
 // General social
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A25439648-9e27-11e7-8cd4-932067fbf946?source=ig&width=1400',
  socialHeadline: '两岸三地商学院--FT中文网',
  socialDescription: '英国《金融时报》首次蒐集两岸三地商学院的数据，找出下一代商业领袖的教育摇篮。',

  share: {
    url: "http://www.ftchinese.com/interactive/10571",
    title: "互动表格：两岸三地商学院--FT中文网",
    summary: "英国《金融时报》首次蒐集两岸三地商学院的数据，找出下一代商业领袖的教育摇篮。"
  },
 //  // twitterCreator: '@someone', // shows up in summary_large_image cards
 //
 //  */
  // TWEET BUTTON CΩUSTOM TEXT
  // tweetText: '',
  //
  // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)
  // twitterRelatedAccounts: ['authors_account_here', 'ftdata'],

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the "General social" options above

  // TWITTER METADATA (for Twitter cards)
  // twitterImage: '',
  // twitterHeadline: '',
  // twitterDescription: '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',
  // facebookDescription: '',

  // ADVERTISING
  // ads: {
  //   // Ad unit hierarchy makes ads more granular.
  //   gptSite: 'ft.com',
  //   // Start with ft.com and /companies /markets /world as appropriate to your story
  //   gptZone: '/world/asia-pacific',
  //   // granular targeting is optional and will be specified by the ads team
  //   dfpTargeting: false,
  // },

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to "IG"
    however another value may be needed
    */
    // product: '',
  },
});
