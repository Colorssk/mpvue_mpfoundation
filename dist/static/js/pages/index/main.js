global.webpackJsonp([1],{

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_navbar_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_270beff0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_navbar_vue__ = __webpack_require__(133);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_navbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_270beff0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_navbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/navbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-270beff0", Component.options)
  } else {
    hotAPI.reload("data-v-270beff0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_swiper_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4f580858_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_swiper_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_swiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4f580858_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_swiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/swiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f580858", Component.options)
  } else {
    hotAPI.reload("data-v-4f580858", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('scroll-view', {
    attrs: {
      "scroll-x": ""
    }
  }, [_c('view', {
    staticClass: "item"
  }, _vm._l((_vm.navs), function(nav, index) {
    return _c('view', {
      key: index,
      staticClass: "scroll-view-item_H",
      class: [index === _vm.activeIndex ? 'scroll-view-item_H_active' : ''],
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.activeTab(index, $event)
        }
      }
    }, [_vm._v("\n          " + _vm._s(nav.title) + "\n        ")])
  }))]), _vm._v(" "), _c('scroll-view', {
    style: ({
      height: _vm.pageHeight
    }),
    attrs: {
      "scroll-y": _vm.pageScrollY
    }
  }, [_c('view', {
    staticClass: "page page_no_scroll",
    style: ({
      marginLeft: _vm.pageMarginLeft
    })
  }, _vm._l((_vm.navs), function(nav, index) {
    return _c('view', {
      key: index,
      staticClass: "scroll-view-page_H",
      class: [index === _vm.activeIndex ? 'scroll-view-page_H_active' : '']
    }, [_c('navPage', {
      attrs: {
        "data": _vm.data,
        "mpcomid": '0-' + index
      }
    }), _vm._v(" "), _c('view', {
      style: ({
        width: '100vw',
        height: _vm.pageBottomPadding
      })
    })], 1)
  }))])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-270beff0", esExports)
  }
}

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('swiper', {
    attrs: {
      "list": _vm.list,
      "config": _vm.swiperConfig
    }
  }), _vm._v(" "), _c('navbar', {
    attrs: {
      "pageHeight": '100vh',
      "pageBottomPadding": '40vh',
      "navs": _vm.navs,
      "pageScrollY": false,
      "config": _vm.swiperConfig,
      "listen": _vm.tabChanged,
      "data": _vm.navDataList[_vm.navIndex],
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4ba34c5e", esExports)
  }
}

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('swiper', {
    style: (_vm.defaultConfig.style),
    attrs: {
      "indicator-dots": _vm.defaultConfig.indicatorDots,
      "indicator-color": _vm.defaultConfig.indicatorColor,
      "indicator-active-color": _vm.defaultConfig.indicatorActiveColor,
      "autoplay": _vm.defaultConfig.autoplay,
      "current": _vm.defaultConfig.current,
      "interval": _vm.defaultConfig.interval,
      "duration": _vm.defaultConfig.duration,
      "circular": _vm.defaultConfig.circular,
      "vertical": _vm.defaultConfig.vertical,
      "previous-margin": _vm.defaultConfig.previousMargin,
      "next-margin": _vm.defaultConfig.nextMargin,
      "display-multiple-items": _vm.defaultConfig.displayMultipleItems
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('block', {
      key: item
    }, [(item.jumpUrl) ? _c('a', {
      attrs: {
        "href": item.jumpUrl
      }
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      style: (_vm.defaultConfig.style),
      attrs: {
        "src": item.url
      }
    })])], 1) : _vm._e(), _vm._v(" "), (!item.jumpUrl) ? _c('swiper-item', {
      attrs: {
        "mpcomid": '1-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      style: (_vm.defaultConfig.style),
      attrs: {
        "src": item.url
      }
    })]) : _vm._e()], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4f580858", esExports)
  }
}

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_navPage_vue__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5cbdefa2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_navPage_vue__ = __webpack_require__(159);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(158)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_navPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5cbdefa2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_navPage_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/navPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] navPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cbdefa2", Component.options)
  } else {
    hotAPI.reload("data-v-5cbdefa2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['data'],
  data: function data() {
    return {};
  },

  comments: {},
  methods: {},
  created: function created() {}
});

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nav_page_item",
    staticStyle: {
      "display": "block"
    }
  }, _vm._l((_vm.data), function(item, index) {
    return _c('div', {
      key: item,
      staticStyle: {
        "height": "100rpx",
        "text-align": "left",
        "line-height": "100rpx"
      }
    }, [_vm._v("\n    " + _vm._s(item.title) + "\n  ")])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5cbdefa2", esExports)
  }
}

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4ba34c5e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(137);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(122)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4ba34c5e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4ba34c5e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ba34c5e", Component.options)
  } else {
    hotAPI.reload("data-v-4ba34c5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(50);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_navPage__ = __webpack_require__(156);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['navs', 'config', 'listen', 'data', 'pageHeight', 'pageBottomPadding', 'pageScrollY'],
  data: function data() {
    return {
      activeIndex: 0,
      pageMarginLeft: '0vw'
    };
  },

  components: {
    navPage: __WEBPACK_IMPORTED_MODULE_0__components_navPage__["a" /* default */]
  },
  methods: {
    activeTab: function activeTab(index, ev) {
      this.activeIndex = index;
      var offset = index * 100;
      this.pageMarginLeft = '-' + offset + 'vw';
      this.listen(index, this.navs[index]);
    }
  },
  created: function created() {
    this.activeTab(0);
  }
});

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['list', 'config'],
  data: function data() {
    return {
      defaultConfig: {
        style: 'width:100%;width:100vw',
        width: '100%',
        height: 150,
        indicatorDots: true,
        indicatorColor: 'rgba(0, 0, 0, .3)',
        indicatorActiveColor: '#000000',
        autoplay: false,
        current: 0,
        interval: 5000,
        duration: 500,
        circular: false,
        vertical: false,
        previousMargin: '0px',
        nextMargin: '0px',
        displayMultipleItems: 1
      }
    };
  },

  methods: {
    generateConfig: function generateConfig() {
      this.config = this.config || {};
      for (var i in this.defaultConfig) {
        if (this.config[i]) {
          this.defaultConfig[i] = this.config[i];
        }
      }
    }
  },
  created: function created() {
    this.generateConfig();
  }
});

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_swiper__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_navbar__ = __webpack_require__(131);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      motto: 'Hello World',
      list: [{ url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525973905279&di=00933624d6cba7c666fec41046cae35d&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa5c27d1ed21b0ef48c509cecd1c451da80cb3ec3.jpg' }, { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525973905279&di=00933624d6cba7c666fec41046cae35d&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa5c27d1ed21b0ef48c509cecd1c451da80cb3ec3.jpg' }, { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525975376412&di=b93889ffb5fafd9031096630eccdf8e9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F9345d688d43f8794f7940c9ede1b0ef41bd53a12.jpg' }],
      navs: [{ title: 'nav1', id: 1 }, { title: 'nav2', id: 2 }, { title: 'nav3', id: 3 }, { title: 'nav4', id: 4 }, { title: 'nav5', id: 5 }, { title: 'nav6', id: 6 }],
      navIndex: 0,
      navDataList: [[{ title: '0rua' }, { title: '0rua' }, { title: '0rua' }, { title: '0rua' }, { title: '0rua' }, { title: '0rua' }, { title: '0rua' }, { title: '0rua' }, { title: '0rua' }, { title: '0rua' }, { title: '0rua' }, { title: '0rua' }, { title: '0rua' }]],
      userInfo: {},
      swiperConfig: {
        // style: 'width:50vw'
      }
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */],
    swiper: __WEBPACK_IMPORTED_MODULE_1__components_swiper__["a" /* default */],
    navbar: __WEBPACK_IMPORTED_MODULE_2__components_navbar__["a" /* default */]
  },

  methods: {
    tabChanged: function tabChanged(index, nav) {
      this.navIndex = index;
      console.log('tabChanged');
      console.log(index, nav);
      this.navDataList[index] = [{ title: index + '0rua' + 1 }, { title: index + '0rua' + 2 }, { title: index + '0rua' + 3 }, { title: index + '0rua' + 4 }, { title: index + '0rua' + 5 }, { title: index + '0rua' + 6 }, { title: index + '0rua' + 7 }, { title: index + '0rua' + 8 }, { title: index + '0rua' + 9 }, { title: index + '0rua' + 10 }, { title: index + '0rua' + 11 }, { title: index + '0rua' + 12 }, { title: index + '0rua' + 13 }, { title: index + '0rua' + 14 }, { title: index + '0rua' + 15 }, { title: index + '0rua' + 16 }];
    },
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  },
  onShow: function onShow() {
    wx.request({
      url: 'https://api.mokyun.com/wxusers/info',
      header: {
        Authorization: 'Bearer ' + wx.getStorageSync('token')
      }
    });
  }
});

/***/ })

},[59]);
//# sourceMappingURL=main.js.map