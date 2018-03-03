var service = require('../../service/douban/douban'),
  utils = require('../../common/utils/utils'),
  _fn;

Page({
  data: {
    movie: {},
    screen: {
      minHeight: 'auto'
    }
  },
  onLoad: function (query) {
    var self = this;
    utils.showLoading();
    // 设置页面高度，避免底部出现白色区域。
    wx.getSystemInfo({
      success: function (info) {
        self.setData({
          'screen.minHeight': info.windowHeight + 'px'
        });
      }
    })
    // 获取数据
    service.getMovieDetail(query.id, function (data) {
      data = data || movieDetail;
      utils.hideLoading();
      _fn.render.call(self, data);

    });
  }
});

_fn = {
  render: function (data) {
    // 设置描述
    data.genresStr = data.genres.join('/');
    // 把演员和导演都罗列出来
    data.staff = data.directors.concat(data.casts);
    this.setData({
      movie: data
    });
  }
}

var movieDetail = {
  "rating": {
    "max": 10,
    "average": 8.5,
    "stars": "45",
    "min": 0
  },
  "reviews_count": 4331,
  "wish_count": 35975,
  "douban_site": "",
  "year": "2018",
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.jpg",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.jpg",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.jpg"
  },
  "alt": "https://movie.douban.com/subject/26861685/",
  "id": "26861685",
  "mobile_url": "https://movie.douban.com/subject/26861685/mobile",
  "title": "红海行动",
  "do_count": null,
  "share_url": "http://m.douban.com/movie/subject/26861685",
  "seasons_count": null,
  "schedule_url": "https://movie.douban.com/subject/26861685/cinema/",
  "episodes_count": null,
  "countries": [
    "中国大陆",
    "香港"
  ],
  "genres": [
    "剧情",
    "动作",
    "犯罪"
  ],
  "collect_count": 277727,
  "casts": [
    {
      "alt": "https://movie.douban.com/celebrity/1274761/",
      "avatars": {
        "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.jpg",
        "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.jpg",
        "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.jpg"
      },
      "name": "张译",
      "id": "1274761"
    },
    {
      "alt": "https://movie.douban.com/celebrity/1354442/",
      "avatars": {
        "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458138265.51.jpg",
        "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458138265.51.jpg",
        "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458138265.51.jpg"
      },
      "name": "黄景瑜",
      "id": "1354442"
    },
    {
      "alt": "https://movie.douban.com/celebrity/1272245/",
      "avatars": {
        "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49399.jpg",
        "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49399.jpg",
        "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49399.jpg"
      },
      "name": "海清",
      "id": "1272245"
    },
    {
      "alt": "https://movie.douban.com/celebrity/1322949/",
      "avatars": {
        "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502100680.45.jpg",
        "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502100680.45.jpg",
        "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502100680.45.jpg"
      },
      "name": "杜江",
      "id": "1322949"
    }
  ],
  "current_season": null,
  "original_title": "红海行动",
  "summary": "索马里海域外，中国商船遭遇劫持，船员全数沦为阶下囚。蛟龙突击队沉着应对，潜入商船进行突袭，成功解救全部人质。\n返航途中，非洲北部伊维亚共和国发生政变，恐怖组织连同叛军攻入首都， 当地华侨面临危险，海军战舰接到上级命令改变航向，前往执行撤侨任务。蛟龙突击队八人，整装待发。\n时间紧迫，在“撤侨遇袭可反击，相反则必须避免交火，以免引起外交冲突”的大原则下，海军战舰及蛟龙突击队深入伊维亚，在恶劣的环境之下，借助海陆等多种装备，成功转移等候在码头的中国侨民，并在激烈的遭遇战之后，营救了被恐怖分子追击的中国领事馆巴士。\n然而事情尚未完结，就在掩护华侨撤离之际，蛟龙突击队收到中国人质被恐怖分子劫持的消息。众人深感责任重大，义无反顾地再度展开营救行动。前方路途险恶，蛟龙突击队即将遭遇的，远不止人质营救那么简单,恐怖分子的惊天阴谋即将浮出水面…..",
  "subtype": "movie",
  "directors": [
    {
      "alt": "https://movie.douban.com/celebrity/1275075/",
      "avatars": {
        "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.jpg",
        "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.jpg",
        "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.jpg"
      },
      "name": "林超贤",
      "id": "1275075"
    }
  ],
  "comments_count": 128557,
  "ratings_count": 268367,
  "aka": [
    "刀锋·红海行动",
    "Operation Red Sea"
  ]
};