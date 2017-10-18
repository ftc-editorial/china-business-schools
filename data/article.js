module.exports = (environment = 'development') => ({ // eslint-disable-line
  
    // link file UUID
    id: '4cb88d88-8814-11e7-bf50-e1c239b45787',
  
    // canonical URL of the published page
    // "$url" get filled in by the ./configure script
    url: 'https://ig.ft.com/greater-china-business-schools',
  
    // To set an exact publish date do this:
    //       new Date('2016-05-17T17:11:22Z')
    publishedDate: new Date('2017-09-28T00:00:00Z'),
  
    headline: 'Interactive: Business schools in China, Hong Kong and Taiwan',
  
    // summary === standfirst (Summary is what the content API calls it)
    summary: 'Compare starting salaries and other important data supplied by top schools in the region',
  
    topic: {
      name: 'Educating the next Chinese business leaders',
      url: 'http://www.ft.com/reports/educating-next-chinese-business-leaders',
    },
  
    relatedArticle: {
      text: 'Related article »',
      url: 'https://www.ft.com/content/1451d662-5da7-11e7-b553-e2df1b0c3220',
    },
  
    mainImage: {
      title: '',
      description: '',
      credit: 'FT graphic: Kari-Ruth Pedersen',
  
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
    title: 'Business schools in China, Hong Kong and Taiwan',
  
    // meta data
    description: 'Compare starting salaries and other important data supplied by top schools in the region',
  
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
    socialHeadline: 'Listing of Chinese business schools',
    socialDescription: 'Are you interested in the future of Chinese economies? Find out more about the business schools educating the region’s leaders of tomorrow.',
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
    ads: {
      // Ad unit hierarchy makes ads more granular.
      gptSite: 'ft.com',
      // Start with ft.com and /companies /markets /world as appropriate to your story
      gptZone: '/world/asia-pacific',
      // granular targeting is optional and will be specified by the ads team
      dfpTargeting: false,
    },
  
    tracking: {
    },
  });
  