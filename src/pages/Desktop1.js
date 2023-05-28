import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop1.module.css";
const Desktop1 = () => {
  const navigate = useNavigate();

  const onDesktop1Click = useCallback(() => {
    navigate("/screen-5");
  }, [navigate]);

  return (
    <div className={styles.desktop1} onClick={onDesktop1Click}>
      <i className={styles.ourWork}>OUR WORK</i>
      <div className={styles.parent}>
        <div className={styles.div}>01</div>
        <b className={styles.getInspired}>
          <p className={styles.get}>Get</p>
          <p className={styles.get}>Inspired</p>
        </b>
        <div className={styles.satisfyAllOf}>
          Satisfy all of your inspiration needs in one place. .
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.div}>03</div>
        <b className={styles.getInspired}>
          <p className={styles.get}>PureV</p>
          <p className={styles.get}>Technology</p>
        </b>
        <div className={styles.proprietaryPurevTechnology}>
          Proprietary PureV™ technology improves the quality of your water by
          preventing water.
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.div}>04</div>
        <b className={styles.getInspired}>
          <p className={styles.get}>{`Self-Cleaning `}</p>
          <p className={styles.get}>Worry-Free</p>
        </b>
        <div className={styles.satisfyAllOf}>
          Neutralizes up to 99%* of bacteria such as E.coli using PureV
          technology.
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.div}>02</div>
        <b className={styles.getInspired}>
          <p className={styles.get}>Nano</p>
          <p className={styles.get}>Zero Filtration</p>
        </b>
        <div className={styles.satisfyAllOf}>
          Nano Zero Filtration is a completely reimagined plant-based filter.
        </div>
      </div>
      <div className={styles.div4}>
        <div className={styles.div5}>_</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.elanaloo571Icon}
          alt=""
          src="/elanaloo57-1@2x.png"
        />
        <div className={styles.a}>A</div>
        <b className={styles.oneMillionSingle}>
          One million single use plastic bottles are thrown out every minute!
        </b>
        <img className={styles.frameItem} alt="" src="/rectangle-136@2x.png" />
        <div className={styles.frameInner} />
        <div className={styles.b}>B</div>
        <b className={styles.thePlasticFreeContainer}>
          <span className={styles.thePlasticFreeContainer1}>
            <p className={styles.get}>
              The Plastic free year Challenges is Here.
            </p>
            <p className={styles.get}>REGISTER NOW!</p>
          </span>
        </b>
        <div className={styles.rectangleDiv} />
        <img
          className={styles.elanaloo1511Icon}
          alt=""
          src="/elanaloo151-1@2x.png"
        />
        <div className={styles.c}>C</div>
        <b className={styles.howToLiveContainer}>
          <span className={styles.thePlasticFreeContainer1}>
            <p className={styles.get}>
              How to live sustainably during a pandemic.
            </p>
            <p className={styles.readMore}>Read More.</p>
          </span>
        </b>
      </div>
    </div>
  );
};

export default Desktop1;
