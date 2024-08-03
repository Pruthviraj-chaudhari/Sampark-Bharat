import React from 'react';
import script from "scriptjs"

const twitterWidgetJs = 'https://platform.twitter.com/widgets.js';

const methodName = 'createTimeline';

const TwitterTimelineEmbed = function TwitterTimelineEmbed(props) {
  const ref = React.useRef(null);

  const _React$useState = React.useState(true),
    loading = _React$useState[0],
    setLoading = _React$useState[1];

  const buildOptions = function buildOptions() {
    let options = Object.assign({}, props.options);

    if (props !== null && props !== void 0 && props.autoHeight) {
      let _ref$current, _ref$current$parentNo;

      options.height = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : (_ref$current$parentNo = _ref$current.parentNode) === null || _ref$current$parentNo === void 0 ? void 0 : _ref$current$parentNo.offsetHeight;
    }

    options = Object.assign({}, options, {
      theme: props === null || props === void 0 ? void 0 : props.theme,
      linkColor: props === null || props === void 0 ? void 0 : props.linkColor,
      borderColor: props === null || props === void 0 ? void 0 : props.borderColor,
      lang: props === null || props === void 0 ? void 0 : props.lang,
      tweetLimit: props === null || props === void 0 ? void 0 : props.tweetLimit,
      ariaPolite: props === null || props === void 0 ? void 0 : props.ariaPolite
    });
    return options;
  };

  const buildChromeOptions = function buildChromeOptions(options) {
    options.chrome = '';

    if (props.noHeader) {
      options.chrome = options.chrome + ' noheader';
    }

    if (props.noFooter) {
      options.chrome = options.chrome + ' nofooter';
    }

    if (props.noBorders) {
      options.chrome = options.chrome + ' noborders';
    }

    if (props.noScrollbar) {
      options.chrome = options.chrome + ' noscrollbar';
    }

    if (props.transparent) {
      options.chrome = options.chrome + ' transparent';
    }

    return options;
  };

  React.useEffect(function () {
    let isComponentMounted = true;



    script(twitterWidgetJs, 'twitter-embed', function () {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load');
        return;
      }

      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName]) {
          console.error("Method " + methodName + " is not present anymore in twttr.widget api");
          return;
        }

        let options = buildOptions();
        options = buildChromeOptions(options);
        window.twttr.widgets[methodName]({
          sourceType: props.sourceType,
          screenName: props.screenName,
          userId: props.userId,
          ownerScreenName: props.ownerScreenName,
          slug: props.slug,
          id: props.id || props.widgetId,
          url: props.url
        }, ref === null || ref === void 0 ? void 0 : ref.current, options).then(function (element) {
          setLoading(false);

          if (props.onLoad) {
            props.onLoad(element);
          }
        });
      }
    });
    return function () {
      isComponentMounted = false;
    };
  }, []);
  return React.createElement(React.Fragment, null, loading && React.createElement(React.Fragment, null, props.placeholder), React.createElement("div", {
    ref: ref
  }));
};

const methodName$1 = 'createShareButton';

const TwitterShareButton = function TwitterShareButton(props) {
  const ref = React.useRef(null);

  const _React$useState = React.useState(true),
    loading = _React$useState[0],
    setLoading = _React$useState[1];

  React.useEffect(function () {
    let isComponentMounted = true;

    script(twitterWidgetJs, 'twitter-embed', function () {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load');
        return;
      }

      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName$1]) {
          console.error("Method " + methodName$1 + " is not present anymore in twttr.widget api");
          return;
        }

        window.twttr.widgets[methodName$1](props.url, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function (element) {
          setLoading(false);

          if (props.onLoad) {
            props.onLoad(element);
          }
        });
      }
    });
    return function () {
      isComponentMounted = false;
    };
  }, []);
  return React.createElement(React.Fragment, null, loading && React.createElement(React.Fragment, null, props.placeholder), React.createElement("div", {
    ref: ref
  }));
};

const methodName$2 = 'createFollowButton';

const TwitterFollowButton = function TwitterFollowButton(props) {
  const ref = React.useRef(null);

  const _React$useState = React.useState(true),
    loading = _React$useState[0],
    setLoading = _React$useState[1];

  React.useEffect(function () {
    let isComponentMounted = true;


    script(twitterWidgetJs, 'twitter-embed', function () {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load');
        return;
      }

      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName$2]) {
          console.error("Method " + methodName$2 + " is not present anymore in twttr.widget api");
          return;
        }

        window.twttr.widgets[methodName$2](props.screenName, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function (element) {
          setLoading(false);

          if (props.onLoad) {
            props.onLoad(element);
          }
        });
      }
    });
    return function () {
      isComponentMounted = false;
    };
  }, []);
  return React.createElement(React.Fragment, null, loading && React.createElement(React.Fragment, null, props.placeholder), React.createElement("div", {
    ref: ref
  }));
};

const methodName$3 = 'createHashtagButton';

const TwitterHashtagButton = function TwitterHashtagButton(props) {
  const ref = React.useRef(null);

  const _React$useState = React.useState(true),
    loading = _React$useState[0],
    setLoading = _React$useState[1];

  React.useEffect(function () {
    let isComponentMounted = true;


    script(twitterWidgetJs, 'twitter-embed', function () {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load');
        return;
      }

      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName$3]) {
          console.error("Method " + methodName$3 + " is not present anymore in twttr.widget api");
          return;
        }

        window.twttr.widgets[methodName$3](props.tag, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function (element) {
          setLoading(false);

          if (props.onLoad) {
            props.onLoad(element);
          }
        });
      }
    });
    return function () {
      isComponentMounted = false;
    };
  }, []);
  return React.createElement(React.Fragment, null, loading && React.createElement(React.Fragment, null, props.placeholder), React.createElement("div", {
    ref: ref
  }));
};

const methodName$4 = 'createMentionButton';

const TwitterMentionButton = function TwitterMentionButton(props) {
  const ref = React.useRef(null);

  const _React$useState = React.useState(true),
    loading = _React$useState[0],
    setLoading = _React$useState[1];

  React.useEffect(function () {
    let isComponentMounted = true;


    script(twitterWidgetJs, 'twitter-embed', function () {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load');
        return;
      }

      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName$4]) {
          console.error("Method " + methodName$4 + " is not present anymore in twttr.widget api");
          return;
        }

        window.twttr.widgets[methodName$4](props.screenName, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function (element) {
          setLoading(false);

          if (props.onLoad) {
            props.onLoad(element);
          }
        });
      }
    });
    return function () {
      isComponentMounted = false;
    };
  }, []);
  return React.createElement(React.Fragment, null, loading && React.createElement(React.Fragment, null, props.placeholder), React.createElement("div", {
    ref: ref
  }));
};

const methodName$5 = 'createTweet';

const TwitterTweetEmbed = function TwitterTweetEmbed(props) {
  const ref = React.useRef(null);

  const _React$useState = React.useState(true),
    loading = _React$useState[0],
    setLoading = _React$useState[1];

  React.useEffect(function () {
    let isComponentMounted = true;


    script(twitterWidgetJs, 'twitter-embed', function () {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load');
        return;
      }

      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName$5]) {
          console.error("Method " + methodName$5 + " is not present anymore in twttr.widget api");
          return;
        }

        window.twttr.widgets[methodName$5](props.tweetId, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function (element) {
          setLoading(false);

          if (props.onLoad) {
            props.onLoad(element);
          }
        });
      }
    });
    return function () {
      isComponentMounted = false;
    };
  }, []);
  return React.createElement(React.Fragment, null, loading && React.createElement(React.Fragment, null, props.placeholder), React.createElement("div", {
    ref: ref
  }));
};

const methodName$6 = 'createMoment';

const TwitterMomentShare = function TwitterMomentShare(props) {
  const ref = React.useRef(null);

  const _React$useState = React.useState(true),
    loading = _React$useState[0],
    setLoading = _React$useState[1];

  React.useEffect(function () {
    let isComponentMounted = true;


    script(twitterWidgetJs, 'twitter-embed', function () {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load');
        return;
      }

      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName$6]) {
          console.error("Method " + methodName$6 + " is not present anymore in twttr.widget api");
          return;
        }

        window.twttr.widgets[methodName$6](props.momentId, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function (element) {
          setLoading(false);

          if (props.onLoad) {
            props.onLoad(element);
          }
        });
      }
    });
    return function () {
      isComponentMounted = false;
    };
  }, []);
  return React.createElement(React.Fragment, null, loading && React.createElement(React.Fragment, null, props.placeholder), React.createElement("div", {
    ref: ref
  }));
};

const methodName$7 = 'createDMButton';

const TwitterDMButton = function TwitterDMButton(props) {
  const ref = React.useRef(null);

  const _React$useState = React.useState(true),
    loading = _React$useState[0],
    setLoading = _React$useState[1];

  React.useEffect(function () {
    let isComponentMounted = true;


    script(twitterWidgetJs, 'twitter-embed', function () {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load');
        return;
      }

      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName$7]) {
          console.error("Method " + methodName$7 + " is not present anymore in twttr.widget api");
          return;
        }

        window.twttr.widgets[methodName$7](props.id, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function (element) {
          if (isComponentMounted) {
            setLoading(false);

            if (props.onLoad) {
              props.onLoad(element);
            }
          }
        });
      }
    });
    return function () {
      isComponentMounted = false;
    };
  }, []);
  return React.createElement(React.Fragment, null, loading && React.createElement(React.Fragment, null, props.placeholder), React.createElement("div", {
    ref: ref
  }));
};

const methodName$8 = 'createVideo';

const TwitterVideoEmbed = function TwitterVideoEmbed(props) {
  const ref = React.useRef(null);

  const _React$useState = React.useState(true),
    loading = _React$useState[0],
    setLoading = _React$useState[1];

  React.useEffect(function () {
    let isComponentMounted = true;


    script(twitterWidgetJs, 'twitter-embed', function () {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load');
        return;
      }

      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName$8]) {
          console.error("Method " + methodName$8 + " is not present anymore in twttr.widget api");
          return;
        }

        window.twttr.widgets[methodName$8](props.id, ref === null || ref === void 0 ? void 0 : ref.current).then(function (element) {
          setLoading(false);

          if (props.onLoad) {
            props.onLoad(element);
          }
        });
      }
    });
    return function () {
      isComponentMounted = false;
    };
  }, []);
  return React.createElement(React.Fragment, null, loading && React.createElement(React.Fragment, null, props.placeholder), React.createElement("div", {
    ref: ref
  }));
};

const methodName$9 = 'createPeriscopeOnAirButton';

const TwitterOnAirButton = function TwitterOnAirButton(props) {
  const ref = React.useRef(null);

  const _React$useState = React.useState(true),
    loading = _React$useState[0],
    setLoading = _React$useState[1];

  React.useEffect(function () {
    let isComponentMounted = true;


    script(twitterWidgetJs, 'twitter-embed', function () {
      if (!window.twttr) {
        console.error('Failure to load window.twttr, aborting load');
        return;
      }

      if (isComponentMounted) {
        if (!window.twttr.widgets[methodName$9]) {
          console.error("Method " + methodName$9 + " is not present anymore in twttr.widget api");
          return;
        }

        window.twttr.widgets[methodName$9](props.username, ref === null || ref === void 0 ? void 0 : ref.current, props.options).then(function (element) {
          setLoading(false);

          if (props.onLoad) {
            props.onLoad(element);
          }
        });
      }
    });
    return function () {
      isComponentMounted = false;
    };
  }, []);
  return React.createElement(React.Fragment, null, loading && React.createElement(React.Fragment, null, props.placeholder), React.createElement("div", {
    ref: ref
  }));
};

export { TwitterDMButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterMomentShare, TwitterOnAirButton, TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed, TwitterVideoEmbed };
