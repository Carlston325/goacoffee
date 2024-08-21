import { useLocation, Link } from "react-router-dom";

function Hero(props) {
  const endpoint = useLocation().pathname;
  const param = props.getParams;

  let title = null;
  let subtitle = null;
  let currentPage;

  // loads the HERO for the endpoint that is loaded + default title and subtitle.
  switch (endpoint) {
    case "/":
      currentPage = "home";
      break;
    case "/about":
      currentPage = "about";
      break;
    case "/contact":
      currentPage = "contact";
      break;
    case "/menu":
      currentPage = "menu";
      break;
    case "/carlstons-club":
      currentPage = "carlstons-club";
      break;
    case "/order-online":
      currentPage = "order-online";
      break;
    case "/sustainability":
      currentPage = "sustainability";
      title = "Coffee with commitment";
      subtitle = "Our plan to drive positive change.";
      break;
    default:
      if (endpoint.startsWith("/order-online/")) {
        currentPage = "order-online";
      } else if (endpoint.startsWith("/sustainability/")) {
        currentPage = "sustainability";
      } else if (endpoint.startsWith("/carlstons-club/")) {
        currentPage = "carlstons-club";
      } else {
        currentPage = "/";
      }
  }

  // changes the title and subtitle depending on the page and route
  // ORDER ONLINE
  if (param === "delivery") {
    title = "Delivery Service";
    subtitle =
      "Freshly brewed coffee, tasty meals and delicious snacks prepared in-store and delivered to you.";
  } else if (param === "click-and-collect") {
    title = "Click & Collect";
    subtitle =
      "Skip the wait! Order your favorites and pay ahead with the Carlstons Coffee app—just pick up in-store without the line.";
  }
  // SUSTAINABILITY
  else if (param === "coffee") {
    title = "Coffee";
    subtitle =
      "We're committed to sourcing our coffee beans in a way that positively impacts nature and the lives of coffee farmers.";
  } else if (param === "cups-and-packaging") {
    title = "Cups and Packaging";
    subtitle =
      "We're committed to championing circular cups and packaging solutions. ";
  } else if (param === "climate") {
    title = "Climate";
    subtitle =
      "We're committed to cutting emissions, in line with climate science, to reach Net Zero by 2040. ";
  } else if (param === "communities") {
    title = "Communities";
    subtitle =
      "We're committed to uplifting the communities we're a part of and acting on the issues that matter most to them. ";
  }

  //class changes on route param
  let linedClass = "kOaOjQ";
  let normalClass = "kcgvpH";

  let heroHeightStyle = { height: "448px" };
  if (param === undefined && endpoint.startsWith("/order-online")) {
    heroHeightStyle = { height: "250px" };
  } else if (endpoint.startsWith("/carlstons-club/")) {
    heroHeightStyle = { height: "250px" };
  }

  return (
    <>
      {/* HOMEPAGE HERO */}
      {currentPage === "home" && (
        <div className="hero">
          <div className="hero__HeroImage hbxklg">
            <div
              style={{ width: "100%", height: "100%" }}
              alt="hero backgeound"
            ></div>
          </div>

          <div className="hero__ContentWrapper">
            <div className="hero__UpperContent">
              <div className="hero__UpperContentSection">
                <h1 className="title" style={{ fontSize: "160px" }}>
                  Welcome
                </h1>
                <h5 className="subtitle" style={{ fontSize: "40px" }}>
                  to the greatest coffee shop
                </h5>
                <div className="hero__UpperLink">
                  <ul>
                    <li className="upperLinkCTA">
                      <div className="linkCta prudY">
                        <a
                          href="/menu"
                          className="btnLight"
                          style={{ fontSize: "50px", padding: "15px 20px" }}
                        >
                          Our menu
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hero__ContentLower jLrlMs hero__MaskImage">
              <div className="gXMpMb">
                <h1 className="title darkFont">Buy 10 drinks, get 1 free</h1>
                <h5 className="subtitle darkFont">
                  Join Carlston's Coffee Club and earn 1 bean with every
                  handcrafted drink you buy. Collect 10 beans, and your next
                  drink is free.
                </h5>
                <div className="ZXxhu">
                  <ul>
                    <li>
                      <div className=" prudY linkCta">
                        <Link
                          className="btnLight"
                          to="/carlstons-club#app-promo"
                        >
                          Join The Club
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MENU PAGE HERO */}
      {currentPage === "menu" && (
        <div className="lbohIS">
          <div className="hero__HeroImage bmCkeb">
            <div
              style={{ width: "100%", height: "100%" }}
              alt="hero backgeound"
            ></div>
          </div>
          <div className="iJhQuc">
            <div className="QTmsr">
              <h1 className="title">Our menu</h1>
              <p className="subtitle">
                Whatever your diet or preferences, there’s enough choice
                everyone.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CLUB PAGE HERO */}
      {currentPage === "carlstons-club" && (
        <div>
          <div
            className="hero__HeroImage"
            style={
              param === "login" || param === "register" || param === "account"
                ? { ...heroHeightStyle, position: "relative" }
                : { position: "relative", height: "448px" }
            }
          >
            <div
              style={{ width: "100%", height: "100%" }}
              alt="hero backgeound"
            ></div>
          </div>
          {param === "login" ||
          param === "register" ||
          param === "account" ? null : (
            <div className="dYZPvR">
              <h1 className="title darkFont">Let the free times roll</h1>
              <p className="subtitle darkFont">
                Use our app for the best Carlston's Club experience.
                <br />
              </p>
              <ul>
                <li>
                  <span className=" jkcThw linkCta">
                    <a
                      href="https://swf3j.app.goo.gl/QbMrq"
                      className="link btnDark"
                    >
                      Join Carlstons Club
                    </a>
                  </span>
                </li>
                <li>
                  <span className=" kuucrm linkCta">
                    <a href="/carlstons-club/login/" className="link btnLight">
                      I'm already a member
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}

      {/* ORDER ONLINE PAGE HERO */}
      {currentPage === "order-online" && (
        <>
          <div className="cBlReJ" style={heroHeightStyle}>
            <div className="hero__HeroImage" style={heroHeightStyle}>
              <div
                style={{ width: "100%", height: "100%" }}
                alt="hero backgeound"
              ></div>
            </div>
            <div className="iJhQuc">
              <div className="ixksLY">
                <h1 className="title">{title}</h1>
                <p className="subtitle">{subtitle}</p>
              </div>
            </div>
          </div>
          <ul className="irxGhK">
            <li className={param === "delivery" ? linedClass : normalClass}>
              <a className="link" href="/order-online/delivery">
                Delivery
              </a>
            </li>
            <li
              className={
                param === "click-and-collect" ? linedClass : normalClass
              }
            >
              <a className="link" href="/order-online/click-and-collect">
                Click &amp; Collect
              </a>
            </li>
          </ul>
        </>
      )}

      {/* SUSTAINABILITY PAGE HERO */}
      {currentPage === "sustainability" && (
        <>
          <div className="cBlReJ" style={heroHeightStyle}>
            <div className="hero__HeroImage" style={{ height: "448px" }}>
              <div
                style={{ width: "100%", height: "100%" }}
                alt="hero backgeound"
              ></div>
            </div>
            <div className="iJhQuc">
              <div className="ixksLY">
                <h1 className="title">{title}</h1>
                <p className="subtitle">{subtitle}</p>
              </div>
            </div>
          </div>
          <ul className="irxGhK">
            <li className={param === "coffee" ? linedClass : normalClass}>
              <a className="link" href="/sustainability/coffee">
                Coffee
              </a>
            </li>
            <li
              className={
                param === "cups-and-packaging" ? linedClass : normalClass
              }
            >
              <a className="link" href="/sustainability/cups-and-packaging">
                Cups and packaging
              </a>
            </li>
            <li className={param === "climate" ? linedClass : normalClass}>
              <a className="link" href="/sustainability/climate">
                Climate
              </a>
            </li>
            <li className={param === "communities" ? linedClass : normalClass}>
              <a className="link" href="/sustainability/communities">
                Communities
              </a>
            </li>
          </ul>
        </>
      )}

      {/* ABOUT PAGE HERO */}
      {currentPage === "about" && (
        <>
          <div className="cCjZSE">
            <div className="eSYkUV"></div>
            <div className="iJhQuc">
              <div className="drhYgE">
                <h1>Our history</h1>
                <p>We know great tasting coffee.</p>
              </div>
            </div>
          </div>
          <ul className=" irxGhK">
            <li className="kOaOjQ">
              <a className="link" href="/behind-the-beans/our-story/history">
                Our history
              </a>
            </li>
            <li className="kcgvpH">
              <a className="link" href="/behind-the-beans/our-story/roastery">
                The Roastery
              </a>
            </li>
          </ul>
        </>
      )}

      {/* CONTACT PAGE HERO */}
      {currentPage === "contact" && (
        <div>
          {/* <div className="hqRUBn">
            <div className="hezRSH"></div>
            <div className="hTVhZY"></div>
          </div>
          <div className="dYZPvR">
            <h1>Let the free times roll</h1>
            <p>
              Use our app for the best carlstons Club experience.
              <br />
            </p>
            <ul>
              <li>
                <span className="jkcThw linkCta">
                  <a
                    href="https://swf3j.app.goo.gl/QbMrq"
          
                
                    className="link"
                  >
                    Join carlstons Club
                  </a>
                </span>
              </li>
              <li>
                <span className=" kuucrm linkCta">
                  <a href="/carlstons-club/login/" className="link">
                    I'm already a member
                  </a>
                </span>
              </li>
            </ul>
          </div> */}
        </div>
      )}
    </>
  );
}

export default Hero;
