import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Screen4.module.css";
const Screen4 = () => {
  const navigate = useNavigate();

  const onScreen4ContainerClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const onBtnsolidregulariconContainerClick = useCallback(() => {
    navigate("/product-detail-page-mockup");
  }, [navigate]);

  return (
    <div className={styles.screen4} onClick={onScreen4ContainerClick}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.selfCleaningBottle}>Self Cleaning bottle</div>
        <div className={styles.in60Seconds}>In 60 Seconds</div>
        <img className={styles.logoLarq1Icon} alt="" src="/logolarq-11.svg" />
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
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="/mask-group1@2x.png"
        />
        <b className={styles.aSmartWayContainer}>
          <p className={styles.aSmart}>A smart</p>
          <p className={styles.aSmart}>way to sip</p>
        </b>
      </div>
      <div className={styles.div}>
        <div className={styles.div1}>_</div>
      </div>
      <div
        className={styles.btnsolidregularicon}
        onClick={onBtnsolidregulariconContainerClick}
      >
        <div className={styles.btnText}>
          <img className={styles.cartIcon} alt="" />
          <b className={styles.addToCart}>Add to cart</b>
        </div>
      </div>
    </div>
  );
};

export default Screen4;
