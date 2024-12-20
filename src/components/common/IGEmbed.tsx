/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import * as React from 'react';
import { DivProps, DivPropsWithoutRef } from 'react-html-props';
import styled from 'styled-components';

const defaultIgVersion = '14';
const defaultLinkText = 'View this post on Instagram';
const defaultProcessDelay = 100;
const defaultRetryInitialDelay = 1000;
const defaultRetryBackoffMaxDelay = 30000;

let embedScriptLoaded = false;

export interface IGEmbedProps extends DivProps {
  url: string;
  backgroundUrl?: string;
  igVersion?: string;
  linkText?: string;
  processDelay?: number;
  scriptLoadDisabled?: boolean;
  linkTextDisabled?: boolean;
  backgroundBlurDisabled?: boolean;
  backgroundBlurAnimationDisabled?: boolean;
  spinnerDisabled?: boolean;
  softFilterDisabled?: boolean;
  retryDisabled?: boolean;
  retryInitialDelay?: number;
  retryBackoffMaxDelay?: number;
}

export const IGEmbed = ({
  url,
  backgroundUrl,
  igVersion = defaultIgVersion,
  linkText = defaultLinkText,
  processDelay = defaultProcessDelay,
  scriptLoadDisabled = false,
  linkTextDisabled = false,
  backgroundBlurDisabled = false,
  backgroundBlurAnimationDisabled = false,
  spinnerDisabled = false,
  softFilterDisabled = false,
  retryDisabled = false,
  retryInitialDelay = defaultRetryInitialDelay,
  retryBackoffMaxDelay = defaultRetryBackoffMaxDelay,
  ...divProps
}: IGEmbedProps): JSX.Element => {
  const [initialized, setInitialized] = React.useState(false);
  const [processTime, setProcessTime] = React.useState(-1);
  const [retryDelay, setRetryDelay] = React.useState(retryInitialDelay);
  const [retrying, setRetrying] = React.useState(false);
  const [retryTime, setRetryTime] = React.useState(-1);
  const uuidRef = React.useRef(generateUUID());

  React.useEffect(() => {
    const win = typeof window !== 'undefined' ? window as any : undefined;
    if (win && processTime >= 0 && typeof win.instgrm !== 'undefined' && win.instgrm.Embeds) {
      win.instgrm.Embeds.process();
    }
  }, [processTime, url]);

  React.useEffect(() => {
    if (!initialized) {
      if (processDelay > 0) {
        setTimeout(() => {
          setProcessTime(Date.now());
          setInitialized(true);
        }, Math.max(0, processDelay));
      } else if (processDelay === 0) {
        setProcessTime(Date.now());
        setInitialized(true);
      }
    }
  }, [initialized, processDelay]);

  React.useEffect(() => {
    let timeout: any;
    if (initialized && !retryDisabled && typeof document !== 'undefined') {
      timeout = setTimeout(() => {
        const preEmbedElement = document.getElementById(uuidRef.current);
        if (!preEmbedElement) {
          setProcessTime(Date.now());
          setRetryDelay(Math.max(0, Math.min(retryDelay * 2, retryBackoffMaxDelay)));
          setRetryTime(Date.now());
          setRetrying(true);
        }
      }, Math.max(0, retryDelay));
    }
    return () => clearTimeout(timeout);
  }, [initialized, retryBackoffMaxDelay, retryDelay, retryDisabled, retryTime]);

  React.useEffect(() => {
    if (typeof document !== 'undefined' && !scriptLoadDisabled && !embedScriptLoaded) {
      const igScript = document.createElement('script');
      igScript.setAttribute('src', '//www.instagram.com/embed.js');
      document.head.appendChild(igScript);
      embedScriptLoaded = true;
    }
  }, [scriptLoadDisabled]);

  const urlWithNoQuery = url.replace(/[?].*$/, '');
  const cleanUrlWithEndingSlash = `${urlWithNoQuery}${urlWithNoQuery.endsWith('/') ? '' : '/'}`;

  return (
    <div
      className={classNames('instagram-media-container', divProps.className)}
      style={{ overflow: 'hidden', width: '100%', maxWidth: '540px', ...divProps.style }}
      key={`${uuidRef}-${retryTime}`}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${cleanUrlWithEndingSlash}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version={igVersion}
        style={{
          background: '#FFF',
          borderRadius: '3px',
          border: '1px solid #dee2e6',
          maxWidth: '540px',
          minWidth: '326px',
          padding: 0,
          width: 'calc(100% - 2px)',
          ...divProps.style,
        }}
      >
        <div className="instagram-media-pre-embed" id={uuidRef.current} style={{ padding: '16px 0' }}>
          <a
            href={`${cleanUrlWithEndingSlash}?utm_source=ig_embed&utm_campaign=loading`}
            style={{
              background: '#FFFFFF',
              lineHeight: 0,
              padding: '0 0',
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%',
            }}
            target="_blank"
            rel="noreferrer"
          >
            <IGHeader showSpinner={!spinnerDisabled} />
            <IGBody
              url={cleanUrlWithEndingSlash}
              backgroundUrl={backgroundUrl}
              linkText={linkText}
              linkTextDisabled={linkTextDisabled}
              backgroundBlurDisabled={backgroundBlurDisabled}
              backgroundBlurAnimationDisabled={retrying || backgroundBlurAnimationDisabled}
              softFilterDisabled={softFilterDisabled}
            />
            <IGFooter />
          </a>
        </div>
      </blockquote>
    </div>
  );
};

const IGHeader = (props: { showSpinner: boolean }) => {
  return (
    <div className="instagram-media-header" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0 16px' }}>
      <div
        style={{
          backgroundColor: '#F4F4F4',
          borderRadius: '50%',
          flexGrow: 0,
          height: '40px',
          marginRight: '14px',
          width: '40px',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
        <div
          style={{
            backgroundColor: '#F4F4F4',
            borderRadius: '4px',
            flexGrow: 0,
            height: '14px',
            marginBottom: '6px',
            width: '100px',
          }}
        />
        <div
          style={{
            backgroundColor: '#F4F4F4',
            borderRadius: '4px',
            flexGrow: 0,
            height: '14px',
            width: '60px',
          }}
        />
      </div>
      {props.showSpinner && (
        <div>
          <Spinner size={30} />
        </div>
      )}
    </div>
  );
};

interface IGBodyProps {
  url: string;
  backgroundUrl?: string;
  linkText?: string;
  linkTextDisabled?: boolean;
  backgroundBlurDisabled?: boolean;
  backgroundBlurAnimationDisabled?: boolean;
  softFilterDisabled?: boolean;
}
const IGBody = (props: IGBodyProps) => {
  return (
    <IGBodyDiv
      className="instagram-media-body"
      style={{
        backgroundImage: props.backgroundUrl ? `url("${props.backgroundUrl}")` : undefined,
        backgroundRepeat: props.backgroundUrl ? 'no-repeat' : undefined,
        backgroundPosition: props.backgroundUrl ? 'center' : undefined,
        backgroundSize: props.backgroundUrl ? 'cover' : undefined,
        marginTop: props.backgroundUrl ? '16px' : undefined,
        marginBottom: props.backgroundUrl ? '16px' : undefined,
      }}
    >
      <div
        className={props.backgroundBlurDisabled || props.backgroundBlurAnimationDisabled ? undefined : 'backdrop-blur'}
        style={{
          backdropFilter: props.backgroundBlurDisabled || !props.backgroundBlurAnimationDisabled ? undefined : 'blur(4px)',
          WebkitBackdropFilter: props.backgroundBlurDisabled || !props.backgroundBlurAnimationDisabled ? undefined : 'blur(4px)',
          backgroundColor: props.softFilterDisabled ? undefined : 'rgba(255,255,255,0.7)',
        }}
      >
        <div style={{ padding: '16% 0' }} />
        <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
          {!props.linkTextDisabled && !!props.linkText && (
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 60 60"
              version="1.1"
              xmlns="https://www.w3.org/2000/svg"
              xmlnsXlink="https://www.w3.org/1999/xlink"
            >
              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                  <g>
                    <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                  </g>
                </g>
              </g>
            </svg>
          )}
          {props.linkTextDisabled && <span style={{ visibility: 'hidden' }}>&nbsp;</span>}
        </div>
        <div style={{ paddingTop: '8px' }}>
          <div
            style={{
              color: '#000000',
              fontFamily: 'Arial,sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 550,
              lineHeight: '18px',
            }}
          >
            {!props.linkTextDisabled && !!props.linkText && props.linkText}
            {props.linkTextDisabled && <span style={{ visibility: 'hidden' }}>&nbsp;</span>}
          </div>
        </div>
        <div style={{ padding: '15.5% 0' }} />
      </div>
    </IGBodyDiv>
  );
};

const IGFooter = () => {
  return (
    <div className="instagram-media-footer" style={{ padding: '0 16px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
        <div>
          <div
            style={{
              backgroundColor: '#F4F4F4',
              borderRadius: '50%',
              height: '12.5px',
              width: '12.5px',
              transform: 'translateX(0px) translateY(7px)',
            }}
          />
          <div
            style={{
              backgroundColor: '#F4F4F4',
              height: '12.5px',
              transform: 'rotate(-45deg) translateX(3px) translateY(1px)',
              width: '12.5px',
              flexGrow: 0,
              marginRight: '14px',
              marginLeft: '2px',
            }}
          />
          <div
            style={{
              backgroundColor: '#F4F4F4',
              borderRadius: '50%',
              height: '12.5px',
              width: '12.5px',
              transform: 'translateX(9px) translateY(-18px)',
            }}
          />
        </div>
        <div style={{ marginLeft: '8px' }}>
          <div
            style={{
              backgroundColor: '#F4F4F4',
              borderRadius: '50%',
              flexGrow: 0,
              height: '20px',
              width: '20px',
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: '2px solid transparent',
              borderLeft: '6px solid #f4f4f4',
              borderBottom: '2px solid transparent',
              transform: 'translateX(16px) translateY(-4px) rotate(30deg)',
            }}
          />
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <div
            style={{
              width: '0px',
              borderTop: '8px solid #F4F4F4',
              borderRight: '8px solid transparent',
              transform: 'translateY(16px)',
            }}
          />
          <div
            style={{
              backgroundColor: '#F4F4F4',
              flexGrow: 0,
              height: '12px',
              width: '16px',
              transform: 'translateY(-4px)',
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: '8px solid #F4F4F4',
              borderLeft: '8px solid transparent',
              transform: 'translateY(-4px) translateX(8px)',
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'center',
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            backgroundColor: '#F4F4F4',
            borderRadius: '4px',
            flexGrow: 0,
            height: '14px',
            marginBottom: '6px',
            width: '224px',
          }}
        />
        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '144px' }} />
      </div>
    </div>
  );
};

// https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
const generateUUID = () => {
  // Public Domain/MIT
  let d = new Date().getTime(); //Timestamp
  let d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

interface SpinnerProps extends DivPropsWithoutRef {
  size: number;
}

const Spinner: (props: SpinnerProps) => JSX.Element = styled.div`
  & {
    border: ${(props: SpinnerProps) => Math.max(Math.round(0.13333 * props.size), 1)}px solid #f3f3f3; /* Light grey */
    border-top: ${(props: SpinnerProps) => Math.max(Math.round(0.13333 * props.size), 1)}px solid #000000; /* Black */
    border-radius: 50%;
    width: ${(props: SpinnerProps) => Math.max(props.size, 1)}px;
    height: ${(props: SpinnerProps) => Math.max(props.size, 1)}px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const IGBodyDiv = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 340px;
  max-height: 540px;
  background: rgba(0, 0, 0, 0.05);
`;