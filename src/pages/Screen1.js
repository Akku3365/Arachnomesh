import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Screen1.module.css";
const Screen1 = () => {
  const navigate = useNavigate();

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

  const screenThreeNavigate = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  return (
    <div className={styles.screen1}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <div className={styles.frameParent}>
          <div className={styles.buyNowWrapper}>
            <div className={styles.buyNow}>BUY NOW</div>
          </div>
          <div className={styles.allNewFilteredTechParent}>
            <b className={styles.allNewFilteredTech}>All-new Filtered Tech.</b>
            <div className={styles.aRevolutionaryPortable}>
              A revolutionary portable water filtration system combining
              high-performance Nano Zero filter with a seamless, low-pressure
              drinking experience. Take hydration into your own hands.
            </div>
          </div>
        </div>
        <div className={styles.larqBottlePurevisParent}>
          <b className={styles.larqBottlePurevis}>LARQ Bottle PureVis</b>
          <div className={styles.intelligentlyActivatesEvery}>
            Intelligently activates every 2 hours to keep your water and bottle
            stink-free.
          </div>
          <div
            className={styles.selfCleaningWorryFree}
          >{`Self-cleaning & worry-free`}</div>
          <div className={styles.neutralizesUpToContainer}>
            <span className={styles.neutralizesUpToContainer1}>
              <p className={styles.neutralizesUpTo}>
                Neutralizes up to 99%* of bacteria such as E.coli using PureVis
                technology. Learn more.
              </p>
            </span>
          </div>
          <div className={styles.brilliantlyCleanWater}>
            Brilliantly clean water
          </div>
        </div>
        <div className={styles.ellipseDiv} />
        <div className={styles.selfCleaningBottle}>Self Cleaning bottle</div>
        <div className={styles.in60Seconds}>In 60 Seconds</div>
        <div className={styles.home}>Home</div>
        <div className={styles.about} onClick={aboutNavigate}>About</div>
        <div className={styles.bottles} onClick={bottlesNavigate} >Bottles</div>
        <div className={styles.about1} onClick={aboutNavigate}>About</div>
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
        <div className={styles.fococlipping202201121711281Parent} onMouseEnter={screenThreeNavigate}>
          <img
            className={styles.fococlipping202201121711281Icon}
            alt=""
            src="/fococlipping20220112171128-13@2x.png"
          />
          <img
            className={styles.fococlipping202201121712581Icon}
            alt=""
            src="/fococlipping20220112171258-1@2x.png"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.buyNowWrapper}>
            <div className={styles.buyNow}>BUY NOW</div>
          </div>
          <div className={styles.allNewFilteredTechParent}>
            <b className={styles.allNewFilteredTech}>All-new Filtered Tech.</b>
            <div className={styles.aRevolutionaryPortable}>
              A revolutionary portable water filtration system combining
              high-performance Nano Zero filter with a seamless, low-pressure
              drinking experience. Take hydration into your own hands.
            </div>
          </div>
        </div>
        <div className={styles.larqBottlePurevisGroup}>
          <b className={styles.larqBottlePurevis}>LARQ Bottle PureVis</b>
          <div className={styles.intelligentlyActivatesEvery}>
            Intelligently activates every 2 hours to keep your water and bottle
            stink-free.
          </div>
          <div
            className={styles.selfCleaningWorryFree}
          >{`Self-cleaning & worry-free`}</div>
          <div className={styles.neutralizesUpToContainer}>
            <span className={styles.neutralizesUpToContainer1}>
              <p className={styles.neutralizesUpTo}>
                Neutralizes up to 99%* of bacteria such as E.coli using PureVis
                technology. Learn more.
              </p>
            </span>
          </div>
          <div className={styles.brilliantlyCleanWater}>
            Brilliantly clean water
          </div>
        </div>
        <div className={styles.frameChild4} />
        <div className={styles.pngtreesplashedBlueWaterSpParent}>
          <img
            className={styles.pngtreesplashedBlueWaterSp}
            alt=""
            src="/pngtreesplashed-blue-water-splash-water-3845982-2@2x.png"
          />
          <img
            className={styles.fococlipping202201131140431Icon}
            alt=""
            src="/fococlipping20220113114043-1@2x.png"
          />
          <img
            className={styles.pngtreesplashedBlueWaterSp1}
            alt=""
            src="/pngtreesplashed-blue-water-splash-water-3845982-1@2x.png"
          />
        </div>
        <div className={styles.pngtreesplashedBlueWaterSpGroup}>
          <img
            className={styles.pngtreesplashedBlueWaterSp}
            alt=""
            src="/pngtreesplashed-blue-water-splash-water-3845982-21@2x.png"
          />
          <img
            className={styles.fococlipping202201131140431Icon}
            alt=""
            src="/fococlipping20220113114043-11@2x.png"
          />
          <img
            className={styles.pngtreesplashedBlueWaterSp1}
            alt=""
            src="/pngtreesplashed-blue-water-splash-water-3845982-11@2x.png"
          />
        </div>
        <div className={styles.pngtreesplashedBlueWaterSpContainer}>
          <img
            className={styles.pngtreesplashedBlueWaterSp}
            alt=""
            src="/pngtreesplashed-blue-water-splash-water-3845982-22@2x.png"
          />
          <img
            className={styles.fococlipping202201131140431Icon}
            alt=""
            src="/fococlipping20220113114043-12@2x.png"
          />
          <img
            className={styles.pngtreesplashedBlueWaterSp1}
            alt=""
            src="/pngtreesplashed-blue-water-splash-water-3845982-12@2x.png"
          />
        </div>
        <div className={styles.frameDiv}>
          <img
            className={styles.pngtreesplashedBlueWaterSp6}
            alt=""
            src="/pngtreesplashed-blue-water-splash-water-3845982-13@2x.png"
          />
          <img
            className={styles.pngtreesplashedBlueWaterSp7}
            alt=""
            src="/pngtreesplashed-blue-water-splash-water-3845982-23@2x.png"
          />
        </div>
        <b className={styles.drinking}>Drinking</b>
        <b className={styles.made}>Made</b>
        <b className={styles.safer}>Safer</b>
        <b className={styles.aRevolutionaryPortable2}>
          A revolutionary portable water filtration system combining
          high-performance Nano Zero filter with a seamless, low-pressure
          drinking experience. Take hydration into your own hands.
        </b>
        <div className={styles.frameChild5} />
        <div className={styles.frameChild6} />
        <div className={styles.signUp}>SIGN UP</div>
        <div className={styles.enterYourEmail}>Enter your Email</div>
      </div>
      <div className={styles.arachnomesh}>ARACHNOMESH</div>
      <div
        className={styles.btnsolidregularicon}
        // onClick={onBtnsolidregulariconContainerClick}
      >
        <div className={styles.btnText}>
          <img className={styles.cartIcon} alt="" src="/cart1.svg" />
          <b className={styles.addToCart}>Add to cart</b>
        </div>
      </div>
    </div>
  );
};

export default Screen1;
