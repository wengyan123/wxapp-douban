var service = require('../../service/douban/douban'),
  utils = require('../../common/utils/utils'),
  _fn;

Page({
  data: {
    movies: {},
    tabs: {
      currentIndex: 0,
      list: [{
        text: '正在热映',
        type: '1'
      }, {
        text: '即将上映',
        type: '2'
      }]
    }
  },
  onReady: function () {
    // 进入便选择第一项
    _fn.selectTab.call(this, 0);
  },
  changeTab: function (e) {
    var target = e.target;
    // 选中不同项
    _fn.selectTab.call(this, target.dataset.index);
  }
});

_fn = {
  selectTab: function (index) {
    var self = this,
      tabs = self.data.tabs;
    // 切换状态
    self.setData({
      'tabs.currentIndex': index
    });
    utils.showLoading();
    // 获取数据
    service.getMovieList(tabs.list[index].type, function (data) {
      utils.hideLoading();
      // 渲染页面
      _fn.renderList.call(self, tabs.list[index].type, data);
      //_fn.renderList.call(self, data);
    });
  },
  renderList: function (req_type, data) {
    if (req_type == '1')
      data = data || listData_in_theaters;
    if (req_type == '2')
      data = data || listData_coming_sonn;
    // 可能会对数据进行处理
    this.setData({
      movies: data
    });
  }
}


var listData_in_theaters = {
  "count": 20,
  "start": 0,
  "total": 25,
  "subjects": [
    {
      "rating": {
        "max": 10,
        "average": 8.5,
        "stars": "45",
        "min": 0
      },
      "genres": [
        "剧情",
        "动作",
        "犯罪"
      ],
      "title": "红海行动",
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
        }
      ],
      "collect_count": 277624,
      "original_title": "红海行动",
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
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.jpg"
      },
      "alt": "https://movie.douban.com/subject/26861685/",
      "id": "26861685"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.1,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动作",
        "犯罪"
      ],
      "title": "唐人街探案2",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1274388/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356403251.95.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356403251.95.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356403251.95.jpg"
          },
          "name": "王宝强",
          "id": "1274388"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1336305/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473508881.63.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473508881.63.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473508881.63.jpg"
          },
          "name": "刘昊然",
          "id": "1336305"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274979/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518431956.11.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518431956.11.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518431956.11.jpg"
          },
          "name": "肖央",
          "id": "1274979"
        }
      ],
      "collect_count": 260105,
      "original_title": "唐人街探案2",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1274763/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1469073193.92.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1469073193.92.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1469073193.92.jpg"
          },
          "name": "陈思诚",
          "id": "1274763"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2511355624.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2511355624.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2511355624.jpg"
      },
      "alt": "https://movie.douban.com/subject/26698897/",
      "id": "26698897"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.6,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动画",
        "冒险"
      ],
      "title": "比得兔",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1017966/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1449532609.88.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1449532609.88.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1449532609.88.jpg"
          },
          "name": "詹姆斯·柯登",
          "id": "1017966"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1313116/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1361026097.22.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1361026097.22.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1361026097.22.jpg"
          },
          "name": "多姆纳尔·格里森",
          "id": "1313116"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1022562/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3186.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3186.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3186.jpg"
          },
          "name": "萝丝·拜恩",
          "id": "1022562"
        }
      ],
      "collect_count": 3508,
      "original_title": "Peter Rabbit",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1274281/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12038.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12038.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12038.jpg"
          },
          "name": "威尔·古勒",
          "id": "1274281"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511721149.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511721149.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511721149.jpg"
      },
      "alt": "https://movie.douban.com/subject/26649604/",
      "id": "26649604"
    },
    {
      "rating": {
        "max": 10,
        "average": 2.8,
        "stars": "15",
        "min": 0
      },
      "genres": [
        "剧情",
        "喜剧"
      ],
      "title": "闺蜜2",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1023827/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48497.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48497.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48497.jpg"
          },
          "name": "薛凯琪",
          "id": "1023827"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274316/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p31663.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p31663.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p31663.jpg"
          },
          "name": "陈意涵",
          "id": "1274316"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1257882/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425652900.34.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425652900.34.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425652900.34.jpg"
          },
          "name": "张钧甯",
          "id": "1257882"
        }
      ],
      "collect_count": 2423,
      "original_title": "閨蜜2之單挑越南黑幫",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1274280/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5139.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5139.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5139.jpg"
          },
          "name": "黄真真",
          "id": "1274280"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514909788.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514909788.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514909788.jpg"
      },
      "alt": "https://movie.douban.com/subject/25856453/",
      "id": "25856453"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "纪录片"
      ],
      "title": "厉害了，我的国",
      "casts": [],
      "collect_count": 101,
      "original_title": "厉害了，我的国",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1322050/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p52221.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p52221.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p52221.jpg"
          },
          "name": "卫铁",
          "id": "1322050"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514293556.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514293556.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514293556.jpg"
      },
      "alt": "https://movie.douban.com/subject/30152451/",
      "id": "30152451"
    },
    {
      "rating": {
        "max": 10,
        "average": 8.6,
        "stars": "45",
        "min": 0
      },
      "genres": [
        "剧情",
        "喜剧",
        "动作"
      ],
      "title": "小萝莉的猴神大叔",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1017831/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355291691.29.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355291691.29.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355291691.29.jpg"
          },
          "name": "萨尔曼·汗",
          "id": "1017831"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1350825/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1448788341.64.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1448788341.64.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1448788341.64.jpg"
          },
          "name": "哈莎莉·马洛特拉",
          "id": "1350825"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1049635/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5568.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5568.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5568.jpg"
          },
          "name": "卡琳娜·卡普尔",
          "id": "1049635"
        }
      ],
      "collect_count": 90133,
      "original_title": "Bajrangi Bhaijaan",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1304615/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57344.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57344.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57344.jpg"
          },
          "name": "卡比尔·汗",
          "id": "1304615"
        }
      ],
      "year": "2015",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510956726.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510956726.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510956726.jpg"
      },
      "alt": "https://movie.douban.com/subject/26393561/",
      "id": "26393561"
    },
    {
      "rating": {
        "max": 10,
        "average": 5.2,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "喜剧",
        "奇幻"
      ],
      "title": "捉妖记2",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1115918/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.jpg"
          },
          "name": "梁朝伟",
          "id": "1115918"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1275542/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21559.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21559.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21559.jpg"
          },
          "name": "白百何",
          "id": "1275542"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274628/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.jpg"
          },
          "name": "井柏然",
          "id": "1274628"
        }
      ],
      "collect_count": 96714,
      "original_title": "捉妖记2",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1287124/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42488.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42488.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42488.jpg"
          },
          "name": "许诚毅",
          "id": "1287124"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509643816.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509643816.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509643816.jpg"
      },
      "alt": "https://movie.douban.com/subject/26575103/",
      "id": "26575103"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.2,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "剧情",
        "犯罪",
        "悬疑"
      ],
      "title": "金钱世界",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1049491/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20908.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20908.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20908.jpg"
          },
          "name": "米歇尔·威廉姆斯",
          "id": "1049491"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1036321/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42033.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42033.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42033.jpg"
          },
          "name": "克里斯托弗·普卢默",
          "id": "1036321"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1035674/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1407766093.88.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1407766093.88.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1407766093.88.jpg"
          },
          "name": "马克·沃尔伯格",
          "id": "1035674"
        }
      ],
      "collect_count": 3199,
      "original_title": "All the Money in the World",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1054416/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p588.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p588.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p588.jpg"
          },
          "name": "雷德利·斯科特",
          "id": "1054416"
        }
      ],
      "year": "2017",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513253129.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513253129.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513253129.jpg"
      },
      "alt": "https://movie.douban.com/subject/26995719/",
      "id": "26995719"
    },
    {
      "rating": {
        "max": 10,
        "average": 8.7,
        "stars": "45",
        "min": 0
      },
      "genres": [
        "剧情",
        "犯罪"
      ],
      "title": "三块广告牌",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1010548/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1436865941.42.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1436865941.42.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1436865941.42.jpg"
          },
          "name": "弗兰西斯·麦克多蒙德",
          "id": "1010548"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1053560/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p501.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p501.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p501.jpg"
          },
          "name": "伍迪·哈里森",
          "id": "1053560"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1047972/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1358812490.58.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1358812490.58.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1358812490.58.jpg"
          },
          "name": "山姆·洛克威尔",
          "id": "1047972"
        }
      ],
      "collect_count": 113199,
      "original_title": "Three Billboards Outside Ebbing, Missouri",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1000304/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515679206.2.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515679206.2.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515679206.2.jpg"
          },
          "name": "马丁·麦克唐纳",
          "id": "1000304"
        }
      ],
      "year": "2017",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510081688.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510081688.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510081688.jpg"
      },
      "alt": "https://movie.douban.com/subject/26611804/",
      "id": "26611804"
    },
    {
      "rating": {
        "max": 10,
        "average": 6.8,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动画",
        "冒险"
      ],
      "title": "熊出没·变形记",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1336920/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196460.57.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196460.57.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196460.57.jpg"
          },
          "name": "张伟",
          "id": "1336920"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1336919/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196097.21.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196097.21.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196097.21.jpg"
          },
          "name": "张秉君",
          "id": "1336919"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1336930/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497954031.89.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497954031.89.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497954031.89.jpg"
          },
          "name": "谭笑",
          "id": "1336930"
        }
      ],
      "collect_count": 5283,
      "original_title": "熊出没·变形记",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1336904/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519556086.74.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519556086.74.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519556086.74.jpg"
          },
          "name": "丁亮",
          "id": "1336904"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1336917/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492836254.8.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492836254.8.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492836254.8.jpg"
          },
          "name": "林汇达",
          "id": "1336917"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506889386.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506889386.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506889386.jpg"
      },
      "alt": "https://movie.douban.com/subject/27176717/",
      "id": "27176717"
    },
    {
      "rating": {
        "max": 10,
        "average": 4.8,
        "stars": "25",
        "min": 0
      },
      "genres": [
        "喜剧",
        "奇幻"
      ],
      "title": "祖宗十九代",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1317663/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40756.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40756.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40756.jpg"
          },
          "name": "岳云鹏",
          "id": "1317663"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1000525/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58967.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58967.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58967.jpg"
          },
          "name": "吴京",
          "id": "1000525"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1275317/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1363935001.36.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1363935001.36.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1363935001.36.jpg"
          },
          "name": "吴秀波",
          "id": "1275317"
        }
      ],
      "collect_count": 17827,
      "original_title": "祖宗十九代",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1274305/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6569.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6569.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6569.jpg"
          },
          "name": "郭德纲",
          "id": "1274305"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2511560763.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2511560763.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2511560763.jpg"
      },
      "alt": "https://movie.douban.com/subject/27114417/",
      "id": "27114417"
    },
    {
      "rating": {
        "max": 10,
        "average": 4.7,
        "stars": "25",
        "min": 0
      },
      "genres": [
        "喜剧",
        "爱情",
        "奇幻"
      ],
      "title": "西游记女儿国",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1041390/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.jpg"
          },
          "name": "郭富城",
          "id": "1041390"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1275721/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36925.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36925.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36925.jpg"
          },
          "name": "冯绍峰",
          "id": "1275721"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1275620/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.jpg"
          },
          "name": "赵丽颖",
          "id": "1275620"
        }
      ],
      "collect_count": 49244,
      "original_title": "西游记女儿国",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1274240/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378782533.9.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378782533.9.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378782533.9.jpg"
          },
          "name": "郑保瑞",
          "id": "1274240"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511375626.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511375626.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511375626.jpg"
      },
      "alt": "https://movie.douban.com/subject/25829175/",
      "id": "25829175"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动画",
        "冒险"
      ],
      "title": "妈妈咪鸭",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1349631/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495370690.02.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495370690.02.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495370690.02.jpg"
          },
          "name": "赵路",
          "id": "1349631"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1385413/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331168.87.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331168.87.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331168.87.jpg"
          },
          "name": "武皓栋",
          "id": "1385413"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1350671/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331194.34.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331194.34.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331194.34.jpg"
          },
          "name": "殷筱瑜",
          "id": "1350671"
        }
      ],
      "collect_count": 406,
      "original_title": "妈妈咪鸭",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1385830/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331279.72.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331279.72.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331279.72.jpg"
          },
          "name": "赵锐",
          "id": "1385830"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1303136/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331306.63.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331306.63.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331306.63.jpg"
          },
          "name": "克里斯托弗·詹金斯",
          "id": "1303136"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2515018270.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2515018270.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2515018270.jpg"
      },
      "alt": "https://movie.douban.com/subject/26603666/",
      "id": "26603666"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "喜剧",
        "爱情",
        "科幻"
      ],
      "title": "宇宙有爱浪漫同游",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1264887/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486794435.79.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486794435.79.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486794435.79.jpg"
          },
          "name": "李昇炫",
          "id": "1264887"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274514/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1379398896.7.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1379398896.7.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1379398896.7.jpg"
          },
          "name": "郭碧婷",
          "id": "1274514"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1275547/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p11386.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p11386.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p11386.jpg"
          },
          "name": "白冰",
          "id": "1275547"
        }
      ],
      "collect_count": 254,
      "original_title": "宇宙有爱浪漫同游",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1388350/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517905331.56.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517905331.56.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517905331.56.jpg"
          },
          "name": "陈思行",
          "id": "1388350"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512322548.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512322548.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512322548.jpg"
      },
      "alt": "https://movie.douban.com/subject/26836837/",
      "id": "26836837"
    },
    {
      "rating": {
        "max": 10,
        "average": 8.2,
        "stars": "45",
        "min": 0
      },
      "genres": [
        "剧情",
        "爱情"
      ],
      "title": "爱在记忆消逝前",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1054390/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21169.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21169.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21169.jpg"
          },
          "name": "海伦·米伦",
          "id": "1054390"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1010556/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p47802.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p47802.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p47802.jpg"
          },
          "name": "唐纳德·萨瑟兰",
          "id": "1010556"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1027309/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12804.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12804.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12804.jpg"
          },
          "name": "简·默勒尼",
          "id": "1027309"
        }
      ],
      "collect_count": 6532,
      "original_title": "The Leisure Seeker",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1032708/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22206.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22206.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22206.jpg"
          },
          "name": "保罗·维尔齐",
          "id": "1032708"
        }
      ],
      "year": "2017",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2513341534.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2513341534.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2513341534.jpg"
      },
      "alt": "https://movie.douban.com/subject/3036465/",
      "id": "3036465"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.7,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "剧情",
        "爱情",
        "战争"
      ],
      "title": "无问西东",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1041014/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.jpg"
          },
          "name": "章子怡",
          "id": "1041014"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1041404/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.jpg"
          },
          "name": "黄晓明",
          "id": "1041404"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1077991/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1453574419.48.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1453574419.48.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1453574419.48.jpg"
          },
          "name": "张震",
          "id": "1077991"
        }
      ],
      "collect_count": 227858,
      "original_title": "无问西东",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1313682/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.jpg"
          },
          "name": "李芳芳",
          "id": "1313682"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg"
      },
      "alt": "https://movie.douban.com/subject/6874741/",
      "id": "6874741"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.9,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "剧情",
        "传记",
        "歌舞"
      ],
      "title": "马戏之王",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1010508/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22036.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22036.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22036.jpg"
          },
          "name": "休·杰克曼",
          "id": "1010508"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1049491/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20908.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20908.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20908.jpg"
          },
          "name": "米歇尔·威廉姆斯",
          "id": "1049491"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1016676/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56613.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56613.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56613.jpg"
          },
          "name": "扎克·埃夫隆",
          "id": "1016676"
        }
      ],
      "collect_count": 56816,
      "original_title": "The Greatest Showman",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1344735/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498127697.1.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498127697.1.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498127697.1.jpg"
          },
          "name": "迈克尔·格雷西",
          "id": "1344735"
        }
      ],
      "year": "2017",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2511346392.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2511346392.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2511346392.jpg"
      },
      "alt": "https://movie.douban.com/subject/3914513/",
      "id": "3914513"
    },
    {
      "rating": {
        "max": 10,
        "average": 8.6,
        "stars": "45",
        "min": 0
      },
      "genres": [
        "剧情",
        "儿童",
        "家庭"
      ],
      "title": "奇迹男孩",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1332866/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.jpg"
          },
          "name": "雅各布·特伦布莱",
          "id": "1332866"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1054532/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.jpg"
          },
          "name": "朱莉娅·罗伯茨",
          "id": "1054532"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1335870/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1383535512.2.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1383535512.2.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1383535512.2.jpg"
          },
          "name": "伊扎贝拉·维多维奇",
          "id": "1335870"
        }
      ],
      "collect_count": 118197,
      "original_title": "Wonder",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1070754/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.jpg"
          },
          "name": "斯蒂芬·卓博斯基",
          "id": "1070754"
        }
      ],
      "year": "2017",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.jpg"
      },
      "alt": "https://movie.douban.com/subject/26787574/",
      "id": "26787574"
    },
    {
      "rating": {
        "max": 10,
        "average": 8.6,
        "stars": "45",
        "min": 0
      },
      "genres": [
        "剧情",
        "传记",
        "动画"
      ],
      "title": "至爱梵高·星空之谜",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1314461/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43221.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43221.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43221.jpg"
          },
          "name": "道格拉斯·布斯",
          "id": "1314461"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1376200/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554583.31.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554583.31.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554583.31.jpg"
          },
          "name": "罗伯特·古拉奇克",
          "id": "1376200"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1275043/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360941730.7.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360941730.7.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360941730.7.jpg"
          },
          "name": "埃莉诺·汤姆林森",
          "id": "1275043"
        }
      ],
      "collect_count": 111258,
      "original_title": "Loving Vincent",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1326282/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1393488180.49.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1393488180.49.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1393488180.49.jpg"
          },
          "name": "多洛塔·科别拉",
          "id": "1326282"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1306202/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554460.64.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554460.64.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554460.64.jpg"
          },
          "name": "休·韦尔什曼",
          "id": "1306202"
        }
      ],
      "year": "2017",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506935748.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506935748.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506935748.jpg"
      },
      "alt": "https://movie.douban.com/subject/25837262/",
      "id": "25837262"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.7,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "动作",
        "冒险"
      ],
      "title": "太空救援",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1023442/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1368685365.9.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1368685365.9.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1368685365.9.jpg"
          },
          "name": "弗拉季米尔·弗多维琴科夫",
          "id": "1023442"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1194282/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416541847.87.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416541847.87.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416541847.87.jpg"
          },
          "name": "帕维尔·杰列维扬科",
          "id": "1194282"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1327850/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486282779.93.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486282779.93.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486282779.93.jpg"
          },
          "name": "柳波芙·阿克肖诺娃",
          "id": "1327850"
        }
      ],
      "collect_count": 19512,
      "original_title": "Салют-7",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1382988/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511446479.18.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511446479.18.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511446479.18.jpg"
          },
          "name": "克利姆·希片科",
          "id": "1382988"
        }
      ],
      "year": "2017",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2508922375.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2508922375.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2508922375.jpg"
      },
      "alt": "https://movie.douban.com/subject/27073291/",
      "id": "27073291"
    }
  ],
  "title": "正在上映的电影-北京"
};

var listData_coming_sonn = {
  "count": 20,
  "start": 0,
  "total": 73,
  "subjects": [
    {
      "rating": {
        "max": 10,
        "average": 6.1,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "动画",
        "冒险",
        "家庭"
      ],
      "title": "飞鸟历险记",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1325771/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356409123.23.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356409123.23.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356409123.23.jpg"
          },
          "name": "亚瑟·杜彭",
          "id": "1325771"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1027553/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46644.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46644.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46644.jpg"
          },
          "name": "莎拉·弗里斯蒂",
          "id": "1027553"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1146937/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371536557.48.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371536557.48.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371536557.48.jpg"
          },
          "name": "布鲁诺·萨拉曼",
          "id": "1146937"
        }
      ],
      "collect_count": 366,
      "original_title": "Gus - Petit oiseau, grand voyage",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1379647/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1503308250.72.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1503308250.72.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1503308250.72.jpg"
          },
          "name": "克里斯蒂安·德·维塔",
          "id": "1379647"
        }
      ],
      "year": "2014",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2514910133.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2514910133.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2514910133.jpg"
      },
      "alt": "https://movie.douban.com/subject/25899334/",
      "id": "25899334"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "剧情",
        "喜剧"
      ],
      "title": "疯狂的公牛",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1275965/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500536910.66.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500536910.66.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500536910.66.jpg"
          },
          "name": "杜奕衡",
          "id": "1275965"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1388943/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "黎楚楚",
          "id": "1388943"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1388944/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "杨刚",
          "id": "1388944"
        }
      ],
      "collect_count": 5,
      "original_title": "疯狂的公牛",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1388942/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "陈家俊",
          "id": "1388942"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2515007073.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2515007073.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2515007073.jpg"
      },
      "alt": "https://movie.douban.com/subject/27180882/",
      "id": "27180882"
    },
    {
      "rating": {
        "max": 10,
        "average": 6.9,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "动作",
        "科幻",
        "冒险"
      ],
      "title": "黑豹",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1327680/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518765586.91.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518765586.91.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518765586.91.jpg"
          },
          "name": "查德维克·博斯曼",
          "id": "1327680"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1334862/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1385433474.91.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1385433474.91.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1385433474.91.jpg"
          },
          "name": "露皮塔·尼永奥",
          "id": "1334862"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1107320/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1398492835.92.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1398492835.92.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1398492835.92.jpg"
          },
          "name": "迈克尔·B·乔丹",
          "id": "1107320"
        }
      ],
      "collect_count": 6380,
      "original_title": "Black Panther",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1326531/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pPjZDSsF679kcel_avatar_uploaded1359524956.71.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pPjZDSsF679kcel_avatar_uploaded1359524956.71.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pPjZDSsF679kcel_avatar_uploaded1359524956.71.jpg"
          },
          "name": "瑞恩·库格勒",
          "id": "1326531"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2512123434.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2512123434.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2512123434.jpg"
      },
      "alt": "https://movie.douban.com/subject/6390825/",
      "id": "6390825"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.5,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "喜剧",
        "运动"
      ],
      "title": "恋爱回旋",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1018562/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1747.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1747.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1747.jpg"
          },
          "name": "新垣结衣",
          "id": "1018562"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1037363/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6642.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6642.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6642.jpg"
          },
          "name": "瑛太",
          "id": "1037363"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1098533/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50678.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50678.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50678.jpg"
          },
          "name": "广末凉子",
          "id": "1098533"
        }
      ],
      "collect_count": 855,
      "original_title": "ミックス。",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1337094/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1483245452.11.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1483245452.11.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1483245452.11.jpg"
          },
          "name": "石川淳一",
          "id": "1337094"
        }
      ],
      "year": "2017",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512312626.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512312626.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512312626.jpg"
      },
      "alt": "https://movie.douban.com/subject/26972275/",
      "id": "26972275"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动画",
        "冒险"
      ],
      "title": "妈妈咪鸭",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1349631/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495370690.02.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495370690.02.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495370690.02.jpg"
          },
          "name": "赵路",
          "id": "1349631"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1385413/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331168.87.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331168.87.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331168.87.jpg"
          },
          "name": "武皓栋",
          "id": "1385413"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1350671/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331194.34.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331194.34.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331194.34.jpg"
          },
          "name": "殷筱瑜",
          "id": "1350671"
        }
      ],
      "collect_count": 406,
      "original_title": "妈妈咪鸭",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1385830/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331279.72.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331279.72.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331279.72.jpg"
          },
          "name": "赵锐",
          "id": "1385830"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1303136/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331306.63.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331306.63.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331306.63.jpg"
          },
          "name": "克里斯托弗·詹金斯",
          "id": "1303136"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2515018270.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2515018270.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2515018270.jpg"
      },
      "alt": "https://movie.douban.com/subject/26603666/",
      "id": "26603666"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "爱情",
        "科幻",
        "悬疑"
      ],
      "title": "灵魂当铺之时间典当",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1313627/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19251.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19251.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19251.jpg"
          },
          "name": "乔乔",
          "id": "1313627"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1323793/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57236.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57236.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57236.jpg"
          },
          "name": "蒋方婷",
          "id": "1323793"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1337942/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408984409.67.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408984409.67.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408984409.67.jpg"
          },
          "name": "曹卫宇",
          "id": "1337942"
        }
      ],
      "collect_count": 10,
      "original_title": "灵魂当铺之时间典当",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1350162/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pHndirp4d8TMcel_avatar_uploaded1434688897.05.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pHndirp4d8TMcel_avatar_uploaded1434688897.05.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pHndirp4d8TMcel_avatar_uploaded1434688897.05.jpg"
          },
          "name": "刘赫尧",
          "id": "1350162"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2514809851.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2514809851.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2514809851.jpg"
      },
      "alt": "https://movie.douban.com/subject/27085923/",
      "id": "27085923"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.4,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "剧情",
        "爱情",
        "奇幻"
      ],
      "title": "水形物语",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1044915/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425095456.73.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425095456.73.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425095456.73.jpg"
          },
          "name": "莎莉·霍金斯",
          "id": "1044915"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1019031/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18795.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18795.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18795.jpg"
          },
          "name": "道格·琼斯",
          "id": "1019031"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1144415/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57057.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57057.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57057.jpg"
          },
          "name": "迈克尔·珊农",
          "id": "1144415"
        }
      ],
      "collect_count": 60204,
      "original_title": "The Shape of Water",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1027182/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4294.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4294.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4294.jpg"
          },
          "name": "吉尔莫·德尔·托罗",
          "id": "1027182"
        }
      ],
      "year": "2017",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2513567112.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2513567112.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2513567112.jpg"
      },
      "alt": "https://movie.douban.com/subject/26752852/",
      "id": "26752852"
    },
    {
      "rating": {
        "max": 10,
        "average": 8.3,
        "stars": "45",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动画",
        "冒险"
      ],
      "title": "大坏狐狸的故事",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1385549/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512709389.68.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512709389.68.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512709389.68.jpg"
          },
          "name": "纪尧姆·达尔诺",
          "id": "1385549"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1385552/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512709841.36.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512709841.36.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512709841.36.jpg"
          },
          "name": "席琳·荣特",
          "id": "1385552"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1385555/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512710135.63.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512710135.63.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512710135.63.jpg"
          },
          "name": "达米安·维特卡",
          "id": "1385555"
        }
      ],
      "collect_count": 2006,
      "original_title": "Le Grand Méchant Renard et autres contes...",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1327904/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512439428.52.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512439428.52.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512439428.52.jpg"
          },
          "name": "本杰明·雷内",
          "id": "1327904"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1385323/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512436051.38.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512436051.38.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512436051.38.jpg"
          },
          "name": "帕特里克·英伯特",
          "id": "1385323"
        }
      ],
      "year": "2017",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2513435650.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2513435650.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2513435650.jpg"
      },
      "alt": "https://movie.douban.com/subject/27042405/",
      "id": "27042405"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "动作",
        "冒险"
      ],
      "title": "古墓丽影：源起之战",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1233154/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1427204716.36.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1427204716.36.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1427204716.36.jpg"
          },
          "name": "艾丽西亚·维坎德",
          "id": "1233154"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1027173/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4228.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4228.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4228.jpg"
          },
          "name": "多米尼克·威斯特",
          "id": "1027173"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1098551/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50351.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50351.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p50351.jpg"
          },
          "name": "沃尔顿·戈金斯",
          "id": "1098551"
        }
      ],
      "collect_count": 56,
      "original_title": "Tomb Raider",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1051062/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492880241.68.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492880241.68.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492880241.68.jpg"
          },
          "name": "罗阿尔·乌索格",
          "id": "1051062"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512717509.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512717509.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512717509.jpg"
      },
      "alt": "https://movie.douban.com/subject/3445906/",
      "id": "3445906"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "动画"
      ],
      "title": "虎皮萌企鹅",
      "casts": [
        {
          "alt": null,
          "avatars": null,
          "name": "Philippe Bozo",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "Laurent Morteau",
          "id": null
        },
        {
          "alt": null,
          "avatars": null,
          "name": "Pascal Casanova",
          "id": null
        }
      ],
      "collect_count": 27,
      "original_title": "Les As de la Jungle",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1381275/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pMe815TL3qFkcel_avatar_uploaded1505356619.35.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pMe815TL3qFkcel_avatar_uploaded1505356619.35.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pMe815TL3qFkcel_avatar_uploaded1505356619.35.jpg"
          },
          "name": "大卫阿拉克斯",
          "id": "1381275"
        }
      ],
      "year": "2017",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2513337070.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2513337070.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2513337070.jpg"
      },
      "alt": "https://movie.douban.com/subject/27076492/",
      "id": "27076492"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "剧情",
        "爱情",
        "歌舞"
      ],
      "title": "十七后 与青春化敌为友",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1355356/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1457094385.68.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1457094385.68.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1457094385.68.jpg"
          },
          "name": "中泽祥",
          "id": "1355356"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1355352/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1457092978.88.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1457092978.88.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1457092978.88.jpg"
          },
          "name": "翁滋蔓",
          "id": "1355352"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1384709/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511511024.17.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511511024.17.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511511024.17.jpg"
          },
          "name": "邦邦",
          "id": "1384709"
        }
      ],
      "collect_count": 95,
      "original_title": "終極舞班",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1331629/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511511192.18.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511511192.18.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511511192.18.jpg"
          },
          "name": "罗颂其",
          "id": "1331629"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2514909553.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2514909553.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2514909553.jpg"
      },
      "alt": "https://movie.douban.com/subject/26731790/",
      "id": "26731790"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "悬疑",
        "惊悚"
      ],
      "title": "玲珑井",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1329270/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1400230886.32.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1400230886.32.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1400230886.32.jpg"
          },
          "name": "宋睿",
          "id": "1329270"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1341569/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1406089479.1.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1406089479.1.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1406089479.1.jpg"
          },
          "name": "罗翔",
          "id": "1341569"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1354039/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6yqPZc1SzQcel_avatar_uploaded1452747554.83.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6yqPZc1SzQcel_avatar_uploaded1452747554.83.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6yqPZc1SzQcel_avatar_uploaded1452747554.83.jpg"
          },
          "name": "曾漪莲",
          "id": "1354039"
        }
      ],
      "collect_count": 20,
      "original_title": "玲珑井",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1379657/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "海鹏",
          "id": "1379657"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2457901479.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2457901479.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2457901479.jpg"
      },
      "alt": "https://movie.douban.com/subject/26984234/",
      "id": "26984234"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动画",
        "奇幻"
      ],
      "title": "勇者闯魔城",
      "casts": [
        {
          "alt": null,
          "avatars": null,
          "name": "李仰",
          "id": null
        }
      ],
      "collect_count": 4,
      "original_title": "勇者闯魔城",
      "subtype": "movie",
      "directors": [
        {
          "alt": null,
          "avatars": null,
          "name": "杨汉钊",
          "id": null
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/f/movie/b6dc761f5e4cf04032faa969826986efbecd54bb/pics/movie/movie_default_small.png",
        "large": "http://img7.doubanio.com/f/movie/30c6263b6db26d055cbbe73fe653e29014142ea3/pics/movie/movie_default_large.png",
        "medium": "http://img3.doubanio.com/f/movie/5081e011b4b06f1a8c3735122b38e781bd852ab6/pics/movie/movie_default_medium.png"
      },
      "alt": "https://movie.douban.com/subject/30125089/",
      "id": "30125089"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "动作",
        "科幻",
        "冒险"
      ],
      "title": "环太平洋：雷霆再起",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1339915/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1447164061.84.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1447164061.84.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1447164061.84.jpg"
          },
          "name": "约翰·博耶加",
          "id": "1339915"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1000188/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1418720473.76.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1418720473.76.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1418720473.76.jpg"
          },
          "name": "斯科特·伊斯特伍德",
          "id": "1000188"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1275432/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1407683852.1.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1407683852.1.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1407683852.1.jpg"
          },
          "name": "景甜",
          "id": "1275432"
        }
      ],
      "collect_count": 565,
      "original_title": "Pacific Rim: Uprising",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1340823/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pqiCuEHOtvNIcel_avatar_uploaded1403339434.41.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pqiCuEHOtvNIcel_avatar_uploaded1403339434.41.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pqiCuEHOtvNIcel_avatar_uploaded1403339434.41.jpg"
          },
          "name": "斯蒂文·S·迪奈特",
          "id": "1340823"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2512983475.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2512983475.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2512983475.jpg"
      },
      "alt": "https://movie.douban.com/subject/20435622/",
      "id": "20435622"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "爱情",
        "运动"
      ],
      "title": "青春24秒",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1365468/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1481047138.17.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1481047138.17.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1481047138.17.jpg"
          },
          "name": "黄俊捷",
          "id": "1365468"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1377254/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500193979.66.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500193979.66.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500193979.66.jpg"
          },
          "name": "魏晚秋",
          "id": "1377254"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1370165/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489143675.42.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489143675.42.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489143675.42.jpg"
          },
          "name": "闫露娢",
          "id": "1370165"
        }
      ],
      "collect_count": 16,
      "original_title": "青春24秒",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1377251/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500293338.87.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500293338.87.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500293338.87.jpg"
          },
          "name": "季钢",
          "id": "1377251"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512337269.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512337269.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512337269.jpg"
      },
      "alt": "https://movie.douban.com/subject/26828415/",
      "id": "26828415"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "惊悚"
      ],
      "title": "碟仙实录",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1339425/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pjIjJYvA6dRkcel_avatar_uploaded1395890060.84.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pjIjJYvA6dRkcel_avatar_uploaded1395890060.84.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/pjIjJYvA6dRkcel_avatar_uploaded1395890060.84.jpg"
          },
          "name": "李漫荻",
          "id": "1339425"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1349812/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1435994595.87.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1435994595.87.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1435994595.87.jpg"
          },
          "name": "齐炫宇",
          "id": "1349812"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1358861/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467122681.57.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467122681.57.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467122681.57.jpg"
          },
          "name": "马丁",
          "id": "1358861"
        }
      ],
      "collect_count": 52,
      "original_title": "碟仙实录",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1338541/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486356015.36.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486356015.36.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486356015.36.jpg"
          },
          "name": "程中豪",
          "id": "1338541"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1338542/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1485166628.86.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1485166628.86.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1485166628.86.jpg"
          },
          "name": "王凯",
          "id": "1338542"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513010136.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513010136.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513010136.jpg"
      },
      "alt": "https://movie.douban.com/subject/26961483/",
      "id": "26961483"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "喜剧",
        "冒险",
        "家庭"
      ],
      "title": "萌犬好声音",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1326635/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pW9hxsnIJhQ4cel_avatar_uploaded1359787172.67.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pW9hxsnIJhQ4cel_avatar_uploaded1359787172.67.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pW9hxsnIJhQ4cel_avatar_uploaded1359787172.67.jpg"
          },
          "name": "麦肯泽·摩斯",
          "id": "1326635"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1268703/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10746.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10746.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10746.jpg"
          },
          "name": "凯特林·马希尔",
          "id": "1268703"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1148334/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p55049.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p55049.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p55049.jpg"
          },
          "name": "杰德·瑞斯",
          "id": "1148334"
        }
      ],
      "collect_count": 26,
      "original_title": "Pup Star",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1300097/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1414661698.13.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1414661698.13.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1414661698.13.jpg"
          },
          "name": "罗伯特·文斯",
          "id": "1300097"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2512417830.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2512417830.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2512417830.jpg"
      },
      "alt": "https://movie.douban.com/subject/26846031/",
      "id": "26846031"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "动作",
        "科幻",
        "冒险"
      ],
      "title": "头号玩家",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1328390/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464678182.3.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464678182.3.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1464678182.3.jpg"
          },
          "name": "泰伊·谢里丹",
          "id": "1328390"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1327806/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371301550.93.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371301550.93.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371301550.93.jpg"
          },
          "name": " 奥利维亚·库克",
          "id": "1327806"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1000248/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5681.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5681.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5681.jpg"
          },
          "name": "本·门德尔森",
          "id": "1000248"
        }
      ],
      "collect_count": 58,
      "original_title": "Ready Player One",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1054440/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p617.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p617.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p617.jpg"
          },
          "name": "史蒂文·斯皮尔伯格",
          "id": "1054440"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2515034911.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2515034911.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2515034911.jpg"
      },
      "alt": "https://movie.douban.com/subject/4920389/",
      "id": "4920389"
    },
    {
      "rating": {
        "max": 10,
        "average": 7,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "剧情",
        "爱情",
        "战争"
      ],
      "title": "红色恋人",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1003494/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p67.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p67.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p67.jpg"
          },
          "name": "张国荣",
          "id": "1003494"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1047083/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6732.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6732.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6732.jpg"
          },
          "name": "梅婷",
          "id": "1047083"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1057389/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36998.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36998.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36998.jpg"
          },
          "name": "泰德·巴勃考克",
          "id": "1057389"
        }
      ],
      "collect_count": 13231,
      "original_title": "红色恋人",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1275742/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p32972.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p32972.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p32972.jpg"
          },
          "name": "叶大鹰",
          "id": "1275742"
        }
      ],
      "year": "1998",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p939585430.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p939585430.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p939585430.jpg"
      },
      "alt": "https://movie.douban.com/subject/1298207/",
      "id": "1298207"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动作",
        "悬疑"
      ],
      "title": "我说的都是真的",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1315726/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1417885062.06.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1417885062.06.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1417885062.06.jpg"
          },
          "name": "刘仪伟",
          "id": "1315726"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274081/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34055.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34055.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34055.jpg"
          },
          "name": "小沈阳",
          "id": "1274081"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274316/",
          "avatars": {
            "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p31663.jpg",
            "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p31663.jpg",
            "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p31663.jpg"
          },
          "name": "陈意涵",
          "id": "1274316"
        }
      ],
      "collect_count": 41,
      "original_title": "我说的都是真的",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1315726/",
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1417885062.06.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1417885062.06.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1417885062.06.jpg"
          },
          "name": "刘仪伟",
          "id": "1315726"
        }
      ],
      "year": "2018",
      "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2512881794.jpg",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2512881794.jpg",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2512881794.jpg"
      },
      "alt": "https://movie.douban.com/subject/26806316/",
      "id": "26806316"
    }
  ],
  "title": "即将上映的电影"
};