/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState, useEffect } from 'react';
import script from 'scriptjs';

const twitterWidgetJs = 'https://platform.twitter.com/widgets.js';

interface JSONObject {
  [key: string]: any;
}

interface TwitterEmbedProps {
  options?: JSONObject;
  autoHeight?: boolean;
  theme?: 'dark' | 'light';
  linkColor?: string;
  borderColor?: string;
  lang?: string;
  tweetLimit?: number;
  ariaPolite?: string;
  noHeader?: boolean;
  noFooter?: boolean;
  noBorders?: boolean;
  noScrollbar?: boolean;
  transparent?: boolean;
  sourceType?: string;
  screenName?: string;
  userId?: string;
  ownerScreenName?: string;
  slug?: string;
  id?: string;
  widgetId?: string;
  url?: string;
  tweetId?: string;
  momentId?: string;
  tag?: string;
  username?: string;
  onLoad?: (element: HTMLElement) => void;
  placeholder?: React.ReactNode;
}

declare global {
  interface Window {
    twttr: any;
  }
}

const useScript = (src: string, id: string) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    script(src, id, () => {
      setLoaded(true);
    });
  }, [src, id]);

  return loaded;
};

const TwitterTimelineEmbed: React.FC<TwitterEmbedProps> = (props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

  const buildOptions = () => {
    let options = { ...props.options };
  
    if (props.autoHeight) {
      options.height = (ref.current?.parentNode as HTMLElement)?.offsetHeight;
    }
  
    options = {
      ...options,
      theme: props.theme,
      linkColor: props.linkColor,
      borderColor: props.borderColor,
      lang: props.lang,
      tweetLimit: props.tweetLimit,
      ariaPolite: props.ariaPolite,
    };
    return options;
  };
  

  const buildChromeOptions = (options: JSONObject) => {
    options.chrome = '';

    if (props.noHeader) options.chrome += ' noheader';
    if (props.noFooter) options.chrome += ' nofooter';
    if (props.noBorders) options.chrome += ' noborders';
    if (props.noScrollbar) options.chrome += ' noscrollbar';
    if (props.transparent) options.chrome += ' transparent';

    return options;
  };

  const loaded = useScript(twitterWidgetJs, 'twitter-embed');

  useEffect(() => {
    let isComponentMounted = true;

    if (loaded && window.twttr && isComponentMounted) {
      const { createTimeline } = window.twttr.widgets;
      if (!createTimeline) {
        console.error('createTimeline method is not available in twttr.widgets');
        return;
      }

      let options = buildOptions();
      options = buildChromeOptions(options);

      createTimeline(
        {
          sourceType: props.sourceType,
          screenName: props.screenName,
          userId: props.userId,
          ownerScreenName: props.ownerScreenName,
          slug: props.slug,
          id: props.id || props.widgetId,
          url: props.url,
        },
        ref.current,
        options
      ).then((element: HTMLElement) => {
        setLoading(false);
        props.onLoad?.(element);
      });
    }

    return () => {
      isComponentMounted = false;
    };
  }, [loaded, props]);

  return (
    <>
      {loading && <>{props.placeholder}</>}
      <div ref={ref} />
    </>
  );
};

// Similarly, you can define the other components like TwitterShareButton, TwitterFollowButton, etc., using the same pattern.

export {
  TwitterTimelineEmbed,
  // Export other components like TwitterShareButton, TwitterFollowButton, etc.
};
