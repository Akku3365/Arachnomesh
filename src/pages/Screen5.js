import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Screen5.module.css";
const Screen5 = () => {
  const navigate = useNavigate();

  const onScreen5ContainerClick = useCallback(() => {
    navigate("/product-detail-page-mockup");
  }, [navigate]);

  return (
    <div className={styles.screen5} onClick={onScreen5ContainerClick}>
      <img className={styles.bottle1Icon} alt="" src="/bottle-1@2x.png" />
      <div className={styles.screen11} />
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.selfCleaningBottle}>Self Cleaning bottle</div>
        <div className={styles.in60Seconds}>In 60 Seconds</div>
        <img className={styles.logoLarq1Icon} alt="" src="/logolarq-1.svg" />
        <div className={styles.home}>Home</div>
        <div className={styles.about}>About</div>
        <div className={styles.bottles}>Bottles</div>
        <div className={styles.about1}>About</div>
        <div className={styles.contact}>Contact</div>
        <div className={styles.login}>Login</div>
        <div className={styles.hitRefreshWith}>
          Hit refresh with the intelligently clean bottle built for adventure.
        </div>
        <div className={styles.knowMoreWrapper}>
          <div className={styles.knowMore}>KNOW MORE</div>
        </div>
        <div className={styles.loginWrapper}>
          <div className={styles.login1}>Login</div>
        </div>
        <div className={styles.fococlipping202201121711281Parent}>
          <img
            className={styles.fococlipping202201121711281Icon}
            alt=""
            src="/fococlipping20220112171128-11@2x.png"
          />
          <img
            className={styles.fococlipping202201121712581Icon}
            alt=""
            src="/fococlipping20220112171258-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.screen10}>
        <div className={styles.screen10Child} />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <b className={styles.aSmartWayContainer}>
          <p className={styles.aSmart}>A smart</p>
          <p className={styles.aSmart}>way to sip</p>
        </b>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.helpParent}>
          <b className={styles.help}>Help</b>
          <b className={styles.shop}>Shop</b>
          <b className={styles.about2}>About</b>
          <div className={styles.faq}>FAQ</div>
          <div className={styles.purev}>PureV</div>
          <div className={styles.magazine}>Magazine</div>
          <div className={styles.review}>Review</div>
          <div className={styles.gifts}>Gifts</div>
          <div className={styles.press}>Press</div>
          <div className={styles.travelSet}>Travel set</div>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.signUpForTheNewsletterParent}>
            <div className={styles.signUpFor}>Sign up for the newsletter</div>
            <div className={styles.instanceParent}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.instanceChild} />
              </div>
              <div className={styles.signUp}>SIGN UP</div>
              <div className={styles.enterYourEmail}>Enter your Email</div>
            </div>
          </div>
          <img className={styles.frameItem} alt="" src="/group-1540.svg" />
          <div className={styles.copyrightArachnomesh2022}>
            Copyright Arachnomesh 2022
          </div>
          <div className={styles.tc}>{`T&C`}</div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
          <div className={styles.myAccount}>My Account</div>
          <div className={styles.corporate}>Corporate</div>
          <div className={styles.contactUs1}>Contact Us</div>
          <div className={styles.ourStory}>Our Story</div>
          <div className={styles.accesories}>Accesories</div>
          <div className={styles.tech}>Tech</div>
        </div>
        <div className={styles.frameInner} />
        <div className={styles.ellipseDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameGroup}>
          <img className={styles.frameIcon} alt="" src="/frame-1.svg" />
          <div className={styles.maskGroup}>
            <i className={styles.oprahMagazine}>OPRAH MAGAZINE</i>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.srEditor}>Sr. Editor</div>
          <div className={styles.sayGoodbyeToContainer}>
            <p className={styles.aSmart}>
              Say goodbye to your reusable bottles persistent funk — and hello
              to this Jetsons-worthy update. My only regret is that I didn't
              here about this for my first 3 purchases.
            </p>
            <p className={styles.aSmart}>They did a great job!!</p>
          </div>
          <div className={styles.jaydonBator}>Jaydon Bator</div>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-2@2x.png" />
        </div>
        <div className={styles.frameContainer}>
          <img className={styles.frameChild3} alt="" src="/frame-11.svg" />
          <div className={styles.maskGroup1}>
            <i className={styles.adidas}>ADIDAS</i>
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.athelete}>Athelete</div>
          <div className={styles.sayGoodbyeToContainer1}>
            <p className={styles.aSmart}>
              Say goodbye to your reusable bottles persistent funk — and hello
              to this Jetsons-worthy update. My only regret is that I didn't
              here about this for my first 3 purchases.
            </p>
            <p className={styles.aSmart}>They did a great job!!</p>
          </div>
          <div className={styles.austinWade}>{`Austin Wade `}</div>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-21@2x.png" />
        </div>
        <div className={styles.frameDiv}>
          <img className={styles.frameChild5} alt="" src="/frame-12.svg" />
          <div className={styles.maskGroup2}>
            <i className={styles.bbc}>BBC</i>
            <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
          </div>
          <div className={styles.photographer}>Photographer</div>
          <div className={styles.sayGoodbyeToContainer2}>
            <p className={styles.aSmart}>
              Say goodbye to your reusable bottles persistent funk — and hello
              to this Jetsons-worthy update. My only regret is that I didn't
              here about this for my first 3 purchases.
            </p>
            <p className={styles.aSmart}>They did a great job!!</p>
          </div>
          <div className={styles.sarah}>Sarah</div>
          <img className={styles.frameChild6} alt="" src="/ellipse-22@2x.png" />
        </div>
        <i className={styles.testimonials}>tESTIMONIALS</i>
      </div>
      <div className={styles.div}>
        <div className={styles.div1}>_</div>
      </div>
      <img className={styles.screen5Child} alt="" src="/group-1531.svg" />
    </div>
  );
};

export default Screen5;
