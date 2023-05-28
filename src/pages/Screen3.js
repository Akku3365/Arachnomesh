import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Screen3.module.css";
const Screen3 = () => {
  const navigate = useNavigate();

  const onScreen3ContainerClick = useCallback(() => {
    // navigate("/screen-4");
  }, [navigate]);

  const aboutNavigate = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const contactNavigate = useCallback(() => {
    navigate("/screen-5");
  }, [navigate]);

  const onBtnsolidregulariconContainerClick = useCallback(() => {
    navigate("/product-detail-page-mockup");
  }, [navigate]);

  const bottlesNavigate = useCallback(() => {
    navigate("/screen-4");
  }, [navigate]);

  return (
    <div className={styles.screen3}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.selfCleaningBottle}>Self Cleaning bottle</div>
        <div className={styles.in60Seconds}>In 60 Seconds</div>
        <div className={styles.home}>Home</div>
        <div className={styles.about} onClick={aboutNavigate}>About</div>
        <div className={styles.bottles} onClick={bottlesNavigate}>Bottles</div>
        <div className={styles.about1}onClick={aboutNavigate} >About</div>
        <div className={styles.contact} onClick={contactNavigate}>Contact</div>
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
            src="/fococlipping20220112171128-14@2x.png"
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
        <div className={styles.frame}>
          <b className={styles.aSmartWayContainer}>
            <span className={styles.aSmartWayContainer1}>
              <p className={styles.aSmart}>A smart</p>
              <p className={styles.aSmart}>way to sip</p>
            </span>
          </b>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group2@2x.png"
          />
        </div>
      </div>
      <div className={styles.screen11} />
      <div className={styles.frameParent}>
        <div className={styles.helpParent}>
          <b className={styles.help}>Help</b>
          <b className={styles.shop}>Shop</b>
          <b className={styles.about2}>About</b>
          <div className={styles.faq}>FAQ</div>
          <div className={styles.larqPurevis}>LARQ Purevis</div>
          <div className={styles.magazine}>Magazine</div>
          <div className={styles.review}>Review</div>
          <div className={styles.gifts}>Gifts</div>
          <div className={styles.press}>Press</div>
          <div className={styles.myAccount}>My Account</div>
          <div className={styles.travelSst}>Travel sst</div>
          <div className={styles.ourStory}>Our Story</div>
          <div className={styles.corporate}>Corporate</div>
          <div className={styles.accesories}>Accesories</div>
          <div className={styles.tech}>Tech</div>
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
          <div className={styles.copyrightLarq2022}>Copyright LARQ 2022</div>
          <div className={styles.tc}>{`T&C`}</div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
          <img className={styles.frameItem} alt="" src="/group-1528.svg" />
        </div>
        <div className={styles.frameInner} />
        <div className={styles.ellipseDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameGroup}>
          <img className={styles.frameIcon} alt="" src="/frame-16.svg" />
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
          <img className={styles.frameChild3} alt="" src="/frame-17.svg" />
          <div className={styles.maskGroup1}>
            <i className={styles.adidas}>ADIDAS</i>
            <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
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
          <img className={styles.frameChild5} alt="" src="/frame-18.svg" />
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
      <div
        className={styles.btnsolidregularicon}
        onClick={onBtnsolidregulariconContainerClick}
      >
        <div className={styles.btnText}>
          <img className={styles.cartIcon} alt="" src="/cart1.svg" />
          <b className={styles.addToCart}>Add to cart</b>
        </div>
      </div>
      <div className={styles.arachnomesh}>ARACHNOMESH</div>
    </div>
  );
};

export default Screen3;
