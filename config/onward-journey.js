// You can look for "data-concept-id" on any stream page to find its UUID,
// and then prefix this with 'thing/' to use it below.
//
// EXAMPLES:
//
// Graphics (Methode list): 'list/graphics'
// World: 'thing/d8009323-f898-3207-b543-eab4427b7a77'
// UK: 'thing/98815f9a-0c35-3824-98fb-f134965f56b7'

export default (environment = 'development') => ({ // eslint-disable-line
  relatedContent: [
    // { rows: 2, list: 'thing/0c9a33dd-55db-4cd2-ab9a-ce287ed82172' },
    {
      image: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fi.ftimg.net%2Fpicture%2F9%2F000072759_piclink.jpg?source=ftchinese&width=670&height=377&fit=cover",
      title: "2017年度FT管理硕士排行榜出炉",
      link: "http://www.ftchinese.com/story/001074209",
      datetime: "2017年9月11日"
    },
    {
      image: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fi.ftimg.net%2Fpicture%2F1%2F000069551_piclink.jpg?source=ftchinese&width=670&height=377&fit=cover",
      title: "聘请MBA申请顾问划算吗？",
      link: "http://www.ftchinese.com/story/001074932",
      datetime: "2017年11月6日"
    },
    {
      image: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fi.ftimg.net%2Fpicture%2F4%2F000046844_piclink.jpg?source=ftchinese&width=670&height=377&fit=cover",
      title: "在中国读EMBA的外国高管",
      link: "http://www.ftchinese.com/story/001074846",
      datetime: "2017年10月30日"
    },
    {
      image: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fi.ftimg.net%2Fpicture%2F2%2F000073152_piclink.jpg?source=ftchinese&width=670&height=377&fit=cover",
      title: "本国商学院对中国学员吸引力上升",
      link: "http://www.ftchinese.com/story/001074477",
      datetime: "2017年9月27日"
    },
    {
      image: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fi.ftimg.net%2Fpicture%2F3%2F000072903_piclink.jpg?source=ftchinese&width=670&height=377&fit=cover",
      title: "雇主最看重MBA应聘者的哪些技能？",
      link: "http://www.ftchinese.com/story/001074339",
      datetime: "2017年9月18日"
    },

    {
      image: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fi.ftimg.net%2Fpicture%2F1%2F000073561_piclink.jpg?source=ftchinese&width=670&height=377&fit=cover",
      title: "给MBA学生的忠告",
      link: "http://www.ftchinese.com/story/001074760",
      datetime: "2017年10月23日"
    },
     {
      image: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fi.ftimg.net%2Fpicture%2F3%2F000069043_piclink.jpg?source=ftchinese&width=670&height=377&fit=cover",
      title: "在线MBA课程对女性更有吸引力",
      link: "http://www.ftchinese.com/story/001071932",
      datetime: "2017年3月27日"
    },
     {
      image: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fi.ftimg.net%2Fpicture%2F0%2F000065220_piclink.jpg?source=ftchinese&width=670&height=377&fit=cover",
      title: "人工智能介入MBA学生就业咨询行业",
      link: "http://www.ftchinese.com/story/001074575",
      datetime: "2017年10月9日"
    },
  ],
});
