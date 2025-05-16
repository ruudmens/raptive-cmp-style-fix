document.addEventListener('DOMContentLoaded', function() {
  const observer = new MutationObserver(() => {
    const cmpWrapper = document.querySelector('#cmpwrapper');
    if (cmpWrapper && cmpWrapper.shadowRoot) {
      if (!cmpWrapper.shadowRoot.querySelector('style[data-cmp-style]')) {
        const style = document.createElement('style');
        style.setAttribute('data-cmp-style', 'true');
        style.textContent = `
            #cmpbox2.cmpboxBG {
            -webkit-backdrop-filter: blur(1px) !important;
                    backdrop-filter: blur(1px) !important;
            filter: blur(1px) !important;
            -webkit-filter: blur(1px) !important;
            }

            .cpmbox {
            box-shadow: 5px 4px 20px 9px rgba(66, 66, 66, 0.21) !important;
            border-radius: 16px !important;
            max-height: 70% !important;
            width: 600px !important;
            }

            @media (min-height: 926px) and (min-width: 480px), (min-width: 926px) and (min-height: 480px) {
            .cmpbox {
                box-shadow: 5px 4px 20px 9px rgba(66, 66, 66, 0.21) !important;
                border-radius: 16px !important;
                max-height: 70% !important;
                width: 600px !important;
            }
            }
            @media (max-height: 926px) and (max-width: 480px) and (orientation: portrait) {
            .cmpbox {
                overflow: auto;
                max-height: 90%;
                min-height: 90%;
            }
            .cmpbox3 {
                top: unset;
                bottom: 0 !important;
                left: 0 !important;
                transform: none !important;
                -webkit-transform: none !important;
                -moz-transform: none !important;
                -ms-transform: none !important;
                -o-transform: none !important;
            }
            }
            #cmpboxcontent.cmpboxcontent {
            border-bottom: 1px solid #e9e9e9 !important;
            overflow-y: hidden !important;
            }
            #cmpboxcontent .cmpboxhl {
            color: #000 !important;
            font-size: 12pt !important;
            }
            #cmpboxcontent .cmptxt_txt {
            text-align: left !important;
            color: #333 !important;
            }
            #cmpboxcontent .cmptxt_txt .cmplink.cmplinkvendors {
            color: #333 !important;
            text-decoration: underline !important;
            }
            #cmpboxcontent .cmpboxwelcomeprps {
            max-height: none !important;
            }
            #cmpboxcontent .cmpboxwelcomeprps .cmpwelcomeprps {
            color: #333 !important;
            line-height: 16px;
            }
            #cmpboxcontent .cmpboxwelcomeprps .cmpwelcomeprps label.cmpwelcomeprpstxt {
            color: #333 !important;
            }
            #cmpboxcontent .cmpwelcomeprpstxt {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            }
            #cmpboxcontent .cmpwelcomeprpstxt svg {
            flex-shrink: 0;
            margin-top: 2px;
            }
            #cmpboxcontent .cmpwelcomeprpstxt::before {
            content: "";
            }

            a.cmpboxbtnyes {
            background-color: var(--clrButton) !important;
            box-shadow: none !important;
            width: auto !important;
            padding: 10px 20px !important;
            }

            a.cmpboxbtncustom {
            width: auto !important;
            padding: 9px 20px !important;
            font-size: 11pt !important;
            color: #333 !important;
            border-color: #333 !important;
            }

            a.cmpboxbtnno {
            width: auto !important;
            padding: 9px 20px !important;
            font-size: 11pt !important;
            color: #333 !important;
            border-color: #333 !important;
            }

            .cmpwelcomeprps {
            color: #000 !important;
            }

            .cmpboxcontent {
            overflow-y: auto !important;
            border-bottom: 0px !important;
            }

            .cpmbox p {
            margin-bottom: -5px !important;
            }

            .cmpboxbtn {
            box-shadow: none !important;
            }

            .cmplanguage {
            left: 25px !important;
            bottom: 25px !important;
            }

            .cmplangicon {
            filter: none !important;
            }

            @media (max-height: 926px) and (max-width: 480px) and (orientation: portrait) {
            .cmpbox {
                overflow: auto;
                max-height: 90%;
                min-height: 90%;
            }
            .cmpbox3 {
                top: unset;
                bottom: 0 !important;
                left: 0 !important;
                transform: none !important;
                -webkit-transform: none !important;
                -moz-transform: none !important;
                -ms-transform: none !important;
                -o-transform: none !important;
            }
            }
      `;
       cmpWrapper.shadowRoot.appendChild(style);
      }
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});