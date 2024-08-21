import { useLocation, useParams } from "react-router-dom";
import Login from "./LoginPage";
// import ErrorPage from "../components/ErrorPage";
import Register from "../components/Register";
import AccountPage from "../pages/AccountPage";
import { useEffect, useState } from "react";
import ErrorPage from "../components/ErrorPage";

function Club(props) {
  const location = useLocation();
  const endpoint = location.pathname;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      props.passParams(id);
    }
  }, [id, props]);

  const [userId, setUserId] = useState(null);
  function getUserId(id) {
    setUserId(id);
  }

  function renderContent() {
    if (!id) {
      return (
        <>
          <main className="epUgWD" style={{ minHeight: "400px" }}>
            <article id="benefits-buy-8-get-1-free" className="TSqrt">
              <div className="iXqvQq">
                <div className="erUGdY">
                  <div className="fApSXy">
                    <svg
                      className="gKjwnn campaign__StyledWaveBorder-sc-16ld8np-2 jEEIsK"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <path
                          d="M64.1992449,95.5093197 C64.1992449,58.9121251 99.628,37.1568942 99.628,-0.414 L35.6267259,-0.414 C35.6267259,37.1568942 0.114510812,58.9121251 0.114510812,95.5093197 C0.114510812,132.092604 35.6267259,153.847835 35.6267259,191.432639 C35.6267259,229.003534 0.114510812,250.758764 0.114510812,287.355959 C0.114510812,323.953154 35.6267259,345.694475 35.6267259,383.279279 C35.6267259,420.864083 0.114510812,442.619314 0.114510812,479.202598 C0.114510812,515.799793 35.6267259,537.555024 35.6267259,575.125918 C35.6267259,612.710722 0.114510812,634.465953 0.114510812,671.049238 C0.114510812,707.646432 35.6267259,729.401663 35.6267259,766.986468 C35.6267259,804.557362 0.114510812,826.312593 0.114510812,862.909787 C0.114510812,899.493072 35.6267259,921.248303 35.6267259,958.833107 C35.6267259,996.404001 0.114510812,1018.15923 0.114510812,1054.75643 C0.114510812,1091.35362 35.6267259,1113.09494 35.6267259,1150.67975 C35.6267259,1188.26455 0.114510812,1210.01978 0.114510812,1246.60307 C0.114510812,1283.20026 35.6267259,1304.95549 35.6267259,1342.52639 L99.628,1342.52639 C99.628,1304.95549 64.1992449,1283.20026 64.1992449,1246.60307 C64.1992449,1210.01978 99.628,1188.26455 99.628,1150.67975 C99.628,1113.09494 64.1992449,1091.35362 64.1992449,1054.75643 C64.1992449,1018.15923 99.628,996.404001 99.628,958.833107 C99.628,921.248303 64.1992449,899.493072 64.1992449,862.909787 C64.1992449,826.312593 99.628,804.557362 99.628,766.986468 C99.628,729.401663 64.1992449,707.646432 64.1992449,671.049238 C64.1992449,634.465953 99.628,612.710722 99.628,575.125918 C99.628,537.555024 64.1992449,515.799793 64.1992449,479.202598 C64.1992449,442.619314 99.628,420.864083 99.628,383.279279 C99.628,345.694475 64.1992449,323.953154 64.1992449,287.355959 C64.1992449,250.758764 99.628,229.003534 99.628,191.432639 C99.628,153.847835 64.1992449,132.092604 64.1992449,95.5093197 Z"
                          fill="currentColor"
                          transform="translate(49.871255, 671.056193) scale(-1, 1) translate(-49.871255, -671.056193) "
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="ZyPuC">
                    <h3>
                      Buy 10 drinks
                      <br />
                      to get 1 free in store
                    </h3>
                    <p>
                      Any handcrafted drink, any size.* On the house. Just visit
                      our shop to get 1 bean for every drink you buy.
                    </p>
                  </div>
                </div>
                <div className="jGsTUj">
                  <div
                    className="image_container image_container-constrained"
                    style={{
                      height: "100%",
                      minHeight: "300px",
                      width: "100%",
                    }}
                  >
                    <div style={{ maxWidth: "700px", display: "block" }}>
                      <img
                        alt=""
                        role="presentation"
                        src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='515'%20width='700'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
                        style={{
                          maxWidth: "100%",
                          display: "block",
                          position: "static",
                        }}
                      />
                    </div>
                    <img
                      style={{
                        opacity: "0",
                        transition: "opacity 500ms linear 0s",
                        objectFit: "cover",
                      }}
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAPABQDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABwgJCv/EACcQAAICAwABAgUFAAAAAAAAAAQFAgMBBgcIExQACREVIRIiQVGS/8QAGQEAAgMBAAAAAAAAAAAAAAAABwgEBQYJ/8QAKxEAAgMAAQIEAwkAAAAAAAAAAgMBBAUGEhMHERQhACNBCDEyQlGCkcHw/9oADAMBAAIRAxEAPwDPqRq7OKnWG4YZhouzXsFYlg9Gb427CtOhSSiHjR6llrCsA9CdkTMMESrdByhXKF1WZRBOCNi/zBI+31kTGJEvL9JLqGJ+sjMfT46Ry5YS2GGAQoIackXTApmC+aRF5DARIMiS85GICfOY94iuXj34l8y5Z2fib7olem9Sqe+PXRekPOQ9CT7GwCM30HWOihL1MEwQmvSYhLCE6ja1i4xnNm3DspMGBlRIEmwTcm5pyrIyL1vOwmXLEa+b6SSzrLAThW9elUsutVa9wbZ2a9B7bUMT8oQhb3AK+4peG2+V4GhWt5lPkUZdv1teiFtGhSSxlgH1+8mraZBqVByL1kbBgoIW1hgiXDWv9D5FHPu+DhdnF7is8fKOlr1+31ca1jkhzXX9Ag4CoJgmVF7L1299gaUJRN9ozt9wvtLtA9IasaAtBh4dm6+5xjE2NhXoNDToruvqKqtAEjYImV4hb3m5ZFWlJmtpdwDIhKBmJGFx3/tUU+I7OjxmtlJ5OrDslnTu2eQgh+g6vAhaNgV8UkTKrXerw1JEt4pFwGcMgyr3qvjp41eNFSh3498O0bS3CJsW2HiwCv2Ew6bIMde2guf7Ba52BA4KXi0VAnr3y5fMoVf9/EagCUj07axxV3Wu5jTXRoVxkeloySLaJLrmvYIi7kT1RPYaM+aJa7p8u6RQrFzx+1dtdrL8Q9ba08PSUKiZWfFd2faXDfSW00qSVUbKVuZDLtewhhvSvoSS2e5Lhv2uc26X0Rxv3RuT7CF0YfbND22e1X7mBkB1Ro68q/n6IBLqd4s1wukHHlMHOXBTH7zsl9sKbXOujr8j2HG+J6t69btchpIrjXfQtUjQ9fbc/wBF88BFD22BGm4uycWDEbLF90O4mfMh54qeK/DePcexc7w75TY3bl9fKszbrPx9GtYzM5O0Csy46xrZ9TPsM5HRUd+rGYlr8qk/0t4KejErAnWd4IjOeM3l4ziWcZx74z8fT+P2g/p/z+P6+CnHHJmImBD3iJ/AH9t/33/Cin4qRBlEudExMxMd+17T+2rA/wAe3x//2Q=="
                      alt=""
                    />
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="
                                https://images.ctfassets.net/royi30b2qd26/2FgdBMr1lKoIqvTL9Dc3ns/f5594b9f1d7fe91f9412954a3b3415e9/costa-club-buy10get1free-lilac-gradient-696x512.jpg?w=175&amp;h=129&amp;q=100&amp;fm=webp 175w,
                                https://images.ctfassets.net/royi30b2qd26/2FgdBMr1lKoIqvTL9Dc3ns/f5594b9f1d7fe91f9412954a3b3415e9/costa-club-buy10get1free-lilac-gradient-696x512.jpg?w=350&amp;h=258&amp;q=100&amp;fm=webp 350w,
                                https://images.ctfassets.net/royi30b2qd26/2FgdBMr1lKoIqvTL9Dc3ns/f5594b9f1d7fe91f9412954a3b3415e9/costa-club-buy10get1free-lilac-gradient-696x512.jpg?w=700&amp;h=515&amp;q=100&amp;fm=webp 700w
                            "
                        sizes="(min-width: 700px) 700px, 100vw"
                      />
                      <img
                        width="700"
                        height="515"
                        style={{ objectFit: "cover", opacity: "1" }}
                        sizes="(min-width: 700px) 700px, 100vw"
                        loading="lazy"
                        src="https://images.ctfassets.net/royi30b2qd26/2FgdBMr1lKoIqvTL9Dc3ns/f5594b9f1d7fe91f9412954a3b3415e9/costa-club-buy10get1free-lilac-gradient-696x512.jpg?w=700&amp;h=515&amp;fl=progressive&amp;q=100&amp;fm=jpg"
                        srcSet="
                                https://images.ctfassets.net/royi30b2qd26/2FgdBMr1lKoIqvTL9Dc3ns/f5594b9f1d7fe91f9412954a3b3415e9/costa-club-buy10get1free-lilac-gradient-696x512.jpg?w=175&amp;h=129&amp;fl=progressive&amp;q=100&amp;fm=jpg 175w,
                                https://images.ctfassets.net/royi30b2qd26/2FgdBMr1lKoIqvTL9Dc3ns/f5594b9f1d7fe91f9412954a3b3415e9/costa-club-buy10get1free-lilac-gradient-696x512.jpg?w=350&amp;h=258&amp;fl=progressive&amp;q=100&amp;fm=jpg 350w,
                                https://images.ctfassets.net/royi30b2qd26/2FgdBMr1lKoIqvTL9Dc3ns/f5594b9f1d7fe91f9412954a3b3415e9/costa-club-buy10get1free-lilac-gradient-696x512.jpg?w=700&amp;h=515&amp;fl=progressive&amp;q=100&amp;fm=jpg 700w
                            "
                        alt="Carlstons Club Buy 10 Drinks Get 1 Free"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </article>
            <article id="benefits-free-cake-on-your-birthday" className="TSqrt">
              <div className="fzYmkP">
                <div className="cVLYLk">
                  <div className="iLHITb">
                    <svg
                      className=" SKWzF gKjwnn cblEFG"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <path
                          d="M64.1992449,95.5093197 C64.1992449,58.9121251 99.628,37.1568942 99.628,-0.414 L35.6267259,-0.414 C35.6267259,37.1568942 0.114510812,58.9121251 0.114510812,95.5093197 C0.114510812,132.092604 35.6267259,153.847835 35.6267259,191.432639 C35.6267259,229.003534 0.114510812,250.758764 0.114510812,287.355959 C0.114510812,323.953154 35.6267259,345.694475 35.6267259,383.279279 C35.6267259,420.864083 0.114510812,442.619314 0.114510812,479.202598 C0.114510812,515.799793 35.6267259,537.555024 35.6267259,575.125918 C35.6267259,612.710722 0.114510812,634.465953 0.114510812,671.049238 C0.114510812,707.646432 35.6267259,729.401663 35.6267259,766.986468 C35.6267259,804.557362 0.114510812,826.312593 0.114510812,862.909787 C0.114510812,899.493072 35.6267259,921.248303 35.6267259,958.833107 C35.6267259,996.404001 0.114510812,1018.15923 0.114510812,1054.75643 C0.114510812,1091.35362 35.6267259,1113.09494 35.6267259,1150.67975 C35.6267259,1188.26455 0.114510812,1210.01978 0.114510812,1246.60307 C0.114510812,1283.20026 35.6267259,1304.95549 35.6267259,1342.52639 L99.628,1342.52639 C99.628,1304.95549 64.1992449,1283.20026 64.1992449,1246.60307 C64.1992449,1210.01978 99.628,1188.26455 99.628,1150.67975 C99.628,1113.09494 64.1992449,1091.35362 64.1992449,1054.75643 C64.1992449,1018.15923 99.628,996.404001 99.628,958.833107 C99.628,921.248303 64.1992449,899.493072 64.1992449,862.909787 C64.1992449,826.312593 99.628,804.557362 99.628,766.986468 C99.628,729.401663 64.1992449,707.646432 64.1992449,671.049238 C64.1992449,634.465953 99.628,612.710722 99.628,575.125918 C99.628,537.555024 64.1992449,515.799793 64.1992449,479.202598 C64.1992449,442.619314 99.628,420.864083 99.628,383.279279 C99.628,345.694475 64.1992449,323.953154 64.1992449,287.355959 C64.1992449,250.758764 99.628,229.003534 99.628,191.432639 C99.628,153.847835 64.1992449,132.092604 64.1992449,95.5093197 Z"
                          fill="currentColor"
                          transform="translate(49.871255, 671.056193) scale(-1, 1) translate(-49.871255, -671.056193) "
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="ZyPuC">
                    <h3>
                      Free cake <br />
                      on your birthday
                    </h3>
                    <p>
                      Celebrate your birthday with cake for free.** Just tell us
                      when it is on the app - open "Settings", then tap "View
                      and edit birthday".
                    </p>
                  </div>
                </div>
                <div className="jGsTUj">
                  <div
                    className="image_container image_container-constrained"
                    style={{
                      height: "100%",
                      minHeight: "300px",
                      width: "100%",
                    }}
                  >
                    <div style={{ maxWidth: "700px", display: "block" }}>
                      <img
                        alt=""
                        src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='515'%20width='700'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
                        style={{
                          maxWidth: "100%",
                          display: "block",
                          position: "static",
                        }}
                      />
                    </div>
                    <img
                      style={{
                        opacity: "0",
                        transition: "opacity 500ms linear 0s",
                        objectFit: "cover",
                      }}
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAPABQDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EACcQAAEEAgEDAgcAAAAAAAAAAAQCAwUGAQcICRIUCjIRExUWISJB/8QAFwEBAQEBAAAAAAAAAAAAAAAABQcJBv/EACkRAAICAQMDAgYDAAAAAAAAAAIDAQQFBhESABMhBwgUFiIjQWFk0eP/2gAMAwEAAhEDEQA/AAV1tSSrmdaH0DvvxdHoNz2JYvHFWU63AU+EJkz1tIwppjD/AOraRkkkitkP5bFacWW+MO8BmconF1kMaUCVu7UoIiS4yTrTYAYifM+BgymYieIxJFsAlMaJ5u3ao42xZprBtlXbIFsLiBjDQlokWxEPNUGEGC2mBEJwpnHjKf8AG7pMz3LmcXL6n3dq2C1CzFR8mu5TNoirfYT8H4SU+PB1SpFZdIIrY50ZEWhFnPpjgViSW00PkEmLeKUwNW3lxmLB102Bn6kjMy0lxA/cWmJMpXJzOxQwhgZASPucoiO6u9cqmhMPXu5rAZG3bulMVQo8Bxae2pazVkM2ySqLtssrtGFeoq0xdftQ1YsFkyiKfTl0nCG0uc1iVOpQlLy29JApaW7j3qaRnbTmUN5z7UZdezj8/F1X86z5XPx90/H8b/X++oqXvMDkW2jae288Y+aCmYj8RMxg4iZ/cREfqOk4mOGHFfWEHGx+jdF0mgIMssSbbynJi0+dZa7G5fJXW5Mt37kNsUKcZ8hqQrUueJEHgLMYWSMp7KlA6+9K36xx9BOEuUcTlcbcbar3rKGviFOqPrNr8gOHLFpGlhMXMmEoGA33nqL6c902WxN/I2df289qTF3cZ8EmjXnHqmtam5VcN6umEJpqtJSl4JbISXcaJFMcBmAfjelpvjjzvS63Xi9yPreoqcbaGrTSoUmIn7ZY6252u4H85RAkTBmFRMefN1kMsrM39TrMoWFNCvLKJy4tp70q1YldO1czuMRfqT4tURuMUZDyDudpg19+6ud3V2iSZIiGJKIEoL1l7yvTe1jr2BsaEz2co5OuEZGjkG4ykJtEfpcDksukhyi3lFyuY2FzAMGAkRGHDrO8LaHXoUW6TIUxbRowJiyStfHloGEkZlphCJA2KhjHpsmLBJJw46OC/LyLgzaktKLeynvzeK+m3whMPlDH9sO8xSRWo2cY5EtZ2GEATPmBIymPyUz1nxkvVegWQuljYv1aBWXTTrXLzrVpFaTmVKsWUY6ql7QDYTauukDmOULHfbr/2Q=="
                      alt=""
                    />
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="
                                https://images.ctfassets.net/royi30b2qd26/2Qhj5A5csEjIvKLpd0CAlo/d62f8729f9e27161e69a36e19cd29b64/costa-club-birthdaycakejul23-696x512.jpg?w=175&amp;h=129&amp;q=100&amp;fm=webp 175w,
                                https://images.ctfassets.net/royi30b2qd26/2Qhj5A5csEjIvKLpd0CAlo/d62f8729f9e27161e69a36e19cd29b64/costa-club-birthdaycakejul23-696x512.jpg?w=350&amp;h=258&amp;q=100&amp;fm=webp 350w,
                                https://images.ctfassets.net/royi30b2qd26/2Qhj5A5csEjIvKLpd0CAlo/d62f8729f9e27161e69a36e19cd29b64/costa-club-birthdaycakejul23-696x512.jpg?w=700&amp;h=515&amp;q=100&amp;fm=webp 700w
                            "
                        sizes="(min-width: 700px) 700px, 100vw"
                      />
                      <img
                        width="700"
                        height="515"
                        style={{ objectFit: "cover", opacity: "1" }}
                        sizes="(min-width: 700px) 700px, 100vw"
                        loading="lazy"
                        src="https://images.ctfassets.net/royi30b2qd26/2Qhj5A5csEjIvKLpd0CAlo/d62f8729f9e27161e69a36e19cd29b64/costa-club-birthdaycakejul23-696x512.jpg?w=700&amp;h=515&amp;fl=progressive&amp;q=100&amp;fm=jpg"
                        srcSet="
                                https://images.ctfassets.net/royi30b2qd26/2Qhj5A5csEjIvKLpd0CAlo/d62f8729f9e27161e69a36e19cd29b64/costa-club-birthdaycakejul23-696x512.jpg?w=175&amp;h=129&amp;fl=progressive&amp;q=100&amp;fm=jpg 175w,
                                https://images.ctfassets.net/royi30b2qd26/2Qhj5A5csEjIvKLpd0CAlo/d62f8729f9e27161e69a36e19cd29b64/costa-club-birthdaycakejul23-696x512.jpg?w=350&amp;h=258&amp;fl=progressive&amp;q=100&amp;fm=jpg 350w,
                                https://images.ctfassets.net/royi30b2qd26/2Qhj5A5csEjIvKLpd0CAlo/d62f8729f9e27161e69a36e19cd29b64/costa-club-birthdaycakejul23-696x512.jpg?w=700&amp;h=515&amp;fl=progressive&amp;q=100&amp;fm=jpg 700w
                            "
                        alt="3D graphic of a young woman sliding down a piece of Carlstons Coffee chocolate cake"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </article>
            <article id="benefits-buy-4-get-1-free" className="TSqrt">
              <div className="iXqvQq">
                <div className="erUGdY">
                  <div className="fApSXy">
                    <svg
                      className=" SKWzF gKjwnn campaign__StyledWaveBorder-sc-16ld8np-2 jEEIsK"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <path
                          d="M64.1992449,95.5093197 C64.1992449,58.9121251 99.628,37.1568942 99.628,-0.414 L35.6267259,-0.414 C35.6267259,37.1568942 0.114510812,58.9121251 0.114510812,95.5093197 C0.114510812,132.092604 35.6267259,153.847835 35.6267259,191.432639 C35.6267259,229.003534 0.114510812,250.758764 0.114510812,287.355959 C0.114510812,323.953154 35.6267259,345.694475 35.6267259,383.279279 C35.6267259,420.864083 0.114510812,442.619314 0.114510812,479.202598 C0.114510812,515.799793 35.6267259,537.555024 35.6267259,575.125918 C35.6267259,612.710722 0.114510812,634.465953 0.114510812,671.049238 C0.114510812,707.646432 35.6267259,729.401663 35.6267259,766.986468 C35.6267259,804.557362 0.114510812,826.312593 0.114510812,862.909787 C0.114510812,899.493072 35.6267259,921.248303 35.6267259,958.833107 C35.6267259,996.404001 0.114510812,1018.15923 0.114510812,1054.75643 C0.114510812,1091.35362 35.6267259,1113.09494 35.6267259,1150.67975 C35.6267259,1188.26455 0.114510812,1210.01978 0.114510812,1246.60307 C0.114510812,1283.20026 35.6267259,1304.95549 35.6267259,1342.52639 L99.628,1342.52639 C99.628,1304.95549 64.1992449,1283.20026 64.1992449,1246.60307 C64.1992449,1210.01978 99.628,1188.26455 99.628,1150.67975 C99.628,1113.09494 64.1992449,1091.35362 64.1992449,1054.75643 C64.1992449,1018.15923 99.628,996.404001 99.628,958.833107 C99.628,921.248303 64.1992449,899.493072 64.1992449,862.909787 C64.1992449,826.312593 99.628,804.557362 99.628,766.986468 C99.628,729.401663 64.1992449,707.646432 64.1992449,671.049238 C64.1992449,634.465953 99.628,612.710722 99.628,575.125918 C99.628,537.555024 64.1992449,515.799793 64.1992449,479.202598 C64.1992449,442.619314 99.628,420.864083 99.628,383.279279 C99.628,345.694475 64.1992449,323.953154 64.1992449,287.355959 C64.1992449,250.758764 99.628,229.003534 99.628,191.432639 C99.628,153.847835 64.1992449,132.092604 64.1992449,95.5093197 Z"
                          fill="currentColor"
                          transform="translate(49.871255, 671.056193) scale(-1, 1) translate(-49.871255, -671.056193) "
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="ZyPuC">
                    <h3>
                      Get your <br />
                      free drink faster
                    </h3>
                    <p>
                      Buy 5 drinks to get 1 free. Each time you use a reusable
                      cup in store, you'll get an extra bean.
                    </p>
                  </div>
                </div>
                <div className="jGsTUj">
                  <div
                    className="image_container image_container-constrained"
                    style={{
                      height: "100%",
                      minHeight: "300px",
                      width: "100%",
                    }}
                  >
                    <div style={{ maxWidth: "700px", display: "block" }}>
                      <img
                        alt=""
                        role="presentation"
                        src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='515'%20width='700'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
                        style={{
                          maxWidth: "100%",
                          display: "block",
                          position: "static",
                        }}
                      />
                    </div>
                    <img
                      style={{
                        opacity: "1",
                        transition: "opacity 500ms linear",
                        objectFit: "cover",
                      }}
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAPABQDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAACQj/xAAhEAACAwEAAgIDAQAAAAAAAAAEBQIDBgcBCAAUCQoREv/EABgBAAMBAQAAAAAAAAAAAAAAAAQGBwkF/8QAJREAAwEBAAEEAQQDAAAAAAAAAgMEAQUGAAcREiEIExQxCRYi/9oADAMBAAIRAxEAPwAL+Jc40/TNcUox+aa7PRK8+3eJ8ekzjPUtNS2FqgMqSjKVwBni6q1gYOa0+zctlJIC0qUGz0liQA4UquXJ8N69IyyfVn/W0qk024siSvHtMMASbgY0h3TFP30B0vjPWgPl9HQTxHq5lcXOruaiDOn0N+ZeZPSf1tvJeNSbqERZRsKgPBLoFLtGrkyhq0O55+LzVdXpG22z7Fx310zjQYQ5xT1XWZ3PaUbQXk6TxrEarnLF6teJZ5k9PctoA1bJZUZBW8Mpdefo/RiPtkjbGfwqeaXLaP70DN6k2NyfVc7Vq0aK2uoLTfb9aTMcNcgaRHr1uakp818i4fCghp8O818w8jkmGe2jg+M9arl1agGCHT3rx850JotStNRbEp5p2wAZMolvBKJoP15uZ6REm0Cb3mqcKnSsFovbKePpmCpmIePAkc5aaB2E0IkIim2Fg9wpxtFkPPidRV0JRl8b0ePbShNCqDJblA0CxAlmiwcLNwgeYb+Nz8iZD8/0W5+fUH6f6uaeP0ruV0fAlQ386t8dcdfkNE9Uz52EtqaEP8fS5TQMdwwalRjv4JY7m56QDrfpJ68cpp42+9W+C53nepynbM5o9Do1JciNERjI5vXK2i0xtqXlrJgmm2Zoi7k1Dn/VhQYhdQdv1Z+YJ/vD7f8AT8h8LfJ4xwJe72k2zul57qI5QYJA5LNOjo2RpwB/cEtDaBLdHNH5+PjZF7e/qSq/2Wvfc/zHop8fq4Vk4m+Wqqdd40x0TErncLm0fSg1IpUNRTbgAbAMxxmb6kTn3oJyvDa7Y6jsDAjrDFxp9A4SZy2xsGhUhnabS6BKzP8A4YPcVooD7HSr3EPNxyguDCNsRfN41BEaB4X7N8zkSShd+3UuSVccs+aYpUhCpVIw9Asa1yRnNZER4pgH86JFnz64HvH/AJEvMOvwuT4r7fzU+JDJzuYPX6x/xbOnZcgewvppkF6Gc6Ti3/y+XTOOSn05aOQr6UKW1i9vdT14DNKlmcQh1pESBeElSpVdlwKxQpVjVArli4IRdWKGCCJRSKIKNXXQOPVXTVCMIR8fLOrxkVrWtS1LUAACwBSxAAEcEBAcbmCIjmYI5mZmZ/Wes6uh7w19C+2/o322dC6qiy6uqy19VVlLTdTTQ85iNz3uM2uaZETGERlu7u76/9k="
                      alt=""
                    />
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="
                                https://images.ctfassets.net/royi30b2qd26/4XopMBQ0l062UiLLHnVm1U/fdf39c48cf25920c4485679720f2b295/costa-club-buy5get1free-696x512.jpg?w=175&amp;h=129&amp;q=100&amp;fm=webp 175w,
                                https://images.ctfassets.net/royi30b2qd26/4XopMBQ0l062UiLLHnVm1U/fdf39c48cf25920c4485679720f2b295/costa-club-buy5get1free-696x512.jpg?w=350&amp;h=258&amp;q=100&amp;fm=webp 350w,
                                https://images.ctfassets.net/royi30b2qd26/4XopMBQ0l062UiLLHnVm1U/fdf39c48cf25920c4485679720f2b295/costa-club-buy5get1free-696x512.jpg?w=700&amp;h=515&amp;q=100&amp;fm=webp 700w
                            "
                        sizes="(min-width: 700px) 700px, 100vw"
                      />
                      <img
                        width="700"
                        height="515"
                        style={{ objectFit: "cover", opacity: "0" }}
                        sizes="(min-width: 700px) 700px, 100vw"
                        loading="lazy"
                        src="https://images.ctfassets.net/royi30b2qd26/4XopMBQ0l062UiLLHnVm1U/fdf39c48cf25920c4485679720f2b295/costa-club-buy5get1free-696x512.jpg?w=700&amp;h=515&amp;fl=progressive&amp;q=100&amp;fm=jpg"
                        srcSet="
                                https://images.ctfassets.net/royi30b2qd26/4XopMBQ0l062UiLLHnVm1U/fdf39c48cf25920c4485679720f2b295/costa-club-buy5get1free-696x512.jpg?w=175&amp;h=129&amp;fl=progressive&amp;q=100&amp;fm=jpg 175w,
                                https://images.ctfassets.net/royi30b2qd26/4XopMBQ0l062UiLLHnVm1U/fdf39c48cf25920c4485679720f2b295/costa-club-buy5get1free-696x512.jpg?w=350&amp;h=258&amp;fl=progressive&amp;q=100&amp;fm=jpg 350w,
                                https://images.ctfassets.net/royi30b2qd26/4XopMBQ0l062UiLLHnVm1U/fdf39c48cf25920c4485679720f2b295/costa-club-buy5get1free-696x512.jpg?w=700&amp;h=515&amp;fl=progressive&amp;q=100&amp;fm=jpg 700w
                            "
                        alt="Carlstons Club graphic of a girl jumping over Carlstons Coffee reusable cups to her free drink"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </article>
            <article id="benefits-exclusive-rewards" className="TSqrt">
              <div className="fzYmkP">
                <div className="cVLYLk">
                  <div className="iLHITb">
                    <svg
                      className="SKWzF gKjwnn cblEFG"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <path
                          d="M64.1992449,95.5093197 C64.1992449,58.9121251 99.628,37.1568942 99.628,-0.414 L35.6267259,-0.414 C35.6267259,37.1568942 0.114510812,58.9121251 0.114510812,95.5093197 C0.114510812,132.092604 35.6267259,153.847835 35.6267259,191.432639 C35.6267259,229.003534 0.114510812,250.758764 0.114510812,287.355959 C0.114510812,323.953154 35.6267259,345.694475 35.6267259,383.279279 C35.6267259,420.864083 0.114510812,442.619314 0.114510812,479.202598 C0.114510812,515.799793 35.6267259,537.555024 35.6267259,575.125918 C35.6267259,612.710722 0.114510812,634.465953 0.114510812,671.049238 C0.114510812,707.646432 35.6267259,729.401663 35.6267259,766.986468 C35.6267259,804.557362 0.114510812,826.312593 0.114510812,862.909787 C0.114510812,899.493072 35.6267259,921.248303 35.6267259,958.833107 C35.6267259,996.404001 0.114510812,1018.15923 0.114510812,1054.75643 C0.114510812,1091.35362 35.6267259,1113.09494 35.6267259,1150.67975 C35.6267259,1188.26455 0.114510812,1210.01978 0.114510812,1246.60307 C0.114510812,1283.20026 35.6267259,1304.95549 35.6267259,1342.52639 L99.628,1342.52639 C99.628,1304.95549 64.1992449,1283.20026 64.1992449,1246.60307 C64.1992449,1210.01978 99.628,1188.26455 99.628,1150.67975 C99.628,1113.09494 64.1992449,1091.35362 64.1992449,1054.75643 C64.1992449,1018.15923 99.628,996.404001 99.628,958.833107 C99.628,921.248303 64.1992449,899.493072 64.1992449,862.909787 C64.1992449,826.312593 99.628,804.557362 99.628,766.986468 C99.628,729.401663 64.1992449,707.646432 64.1992449,671.049238 C64.1992449,634.465953 99.628,612.710722 99.628,575.125918 C99.628,537.555024 64.1992449,515.799793 64.1992449,479.202598 C64.1992449,442.619314 99.628,420.864083 99.628,383.279279 C99.628,345.694475 64.1992449,323.953154 64.1992449,287.355959 C64.1992449,250.758764 99.628,229.003534 99.628,191.432639 C99.628,153.847835 64.1992449,132.092604 64.1992449,95.5093197 Z"
                          fill="currentColor"
                          transform="translate(49.871255, 671.056193) scale(-1, 1) translate(-49.871255, -671.056193) "
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="ZyPuC">
                    <h3>Exclusive rewards</h3>
                    <p>
                      Discover exclusive bonus beans and money-off rewards.
                      Plus, we deliver an exciting Treat Drop surprise in the
                      app just for you.
                    </p>
                  </div>
                </div>
                <div className="jGsTUj">
                  <div
                    className="image_container image_container-constrained"
                    style={{
                      height: "100%",
                      minHeight: "300px",
                      width: "100%",
                    }}
                  >
                    <div style={{ maxHidth: "700px", display: "block" }}>
                      <img
                        alt=""
                        role="presentation"
                        src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='515'%20width='700'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
                        style={{
                          maxHidth: "100%",
                          display: "block",
                          position: "static",
                        }}
                      />
                    </div>
                    <img
                      style={{
                        opacity: "1",
                        transition: "opacity 500ms linear",
                        objectFit: "cover",
                      }}
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAPABQDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACAkK/8QAJBAAAgIDAQABAwUAAAAAAAAABAUCAwEGBwgTAAlBERIUITH/xAAZAQADAAMAAAAAAAAAAAAAAAAEBQYCBwj/xAAmEQACAgEDBAMAAwEAAAAAAAABAgMEEQUGEgATFCEHIkEjMTNR/9oADAMBAAIRAxEAPwDLpqSdaXdIJkCcRIuVGBSls8SOFthKWZxpAu/Qdn/KqlKqAcrQ7plRF+A6mPz0kLwFDhpJO3EqsZC3EKFOMOzMPqE9n+wCCc/hHctqDVUpyyaPRGpagg5w6cEnee+wVgKdXxw8i2p3KLC3ZnUv/GyDmZUrvyH7WHo70jxbofo7jnIRgNb101SKJzezYLaNlzGWtLdjfXa8ocMWLhpNUKwCHlhi0iMa3nsK1ZIgxJBdLBWgiirhbxuc8yeUohw8fKTgriFO2DjHIoFChQeTFiywej/JF6jrrbf3jor7Ys0ZJ6moC6s72YbiCPtxWFZYTVCuzLKzRS8jxbEKZbojLuWH4olWSFZURRdcPdVOGYyqtpl8dtco/iVdmJQlj8ZxnH9/79Fg59j2D7BH71to6kjcXidGjdVdGXDKysMqysDghhggj8PVRPWHO3Hirn/jFLzXkHDp6F0Tznom+uOjbJzDn7/qO29gblyedCgbu7KLToeuhrMYSLlomvN1SGSJgaqFJOGtKGFWXKA1CpZrySyRibCgofShWWRfpnDAsv2HrK5AK5z0l+Lt3PT3Lqe4o7Nt9W0LWtSrV6Xl24qVeg9SfTa7xRR8arThLFiWOaSOWWK1HFOYwUXk1/A/3Zt14BzjddTY8L0fZHe1tzWQ7FOynrS4iFaFWl1OpqNSITMYTVqlto9yxVVSI/FPsKxlG9y2cPx6GkNTh8d51dE/yZI+BUMSzqyZwckkq2eS5IPIFQkj8m7bG891z7lW3NWN8xNqyWZprk7zoMSWIJpAS7ypwUpKVRGRSpZB2+hJTowhkimB9YuDWZpbIrAw1VA+CDr5kXYooqjGqinFlkvioqjGuqv9sIRjGOMYdgYAH/PXR/ksgWNPSRokaDJ9LGoVRk+zgAZJ/ev/2Q=="
                      alt=""
                    />
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="
                                https://images.ctfassets.net/royi30b2qd26/38RUEI941x4Cl2hvDdDWpZ/702005dc021704a553556ceea7e8b202/costa-club-rockettrain-gradient-696x512.jpg?w=174&amp;h=128&amp;q=100&amp;fm=webp 174w,
                                https://images.ctfassets.net/royi30b2qd26/38RUEI941x4Cl2hvDdDWpZ/702005dc021704a553556ceea7e8b202/costa-club-rockettrain-gradient-696x512.jpg?w=348&amp;h=256&amp;q=100&amp;fm=webp 348w,
                                https://images.ctfassets.net/royi30b2qd26/38RUEI941x4Cl2hvDdDWpZ/702005dc021704a553556ceea7e8b202/costa-club-rockettrain-gradient-696x512.jpg?w=696&amp;h=512&amp;q=100&amp;fm=webp 696w
                            "
                        sizes="(min-width: 696px) 696px, 100vw"
                      />
                      <img
                        width="700"
                        height="515"
                        style={{ objectFit: "cover", opacity: "0" }}
                        sizes="(min-width: 696px) 696px, 100vw"
                        loading="lazy"
                        src="https://images.ctfassets.net/royi30b2qd26/38RUEI941x4Cl2hvDdDWpZ/702005dc021704a553556ceea7e8b202/costa-club-rockettrain-gradient-696x512.jpg?w=696&amp;h=512&amp;fl=progressive&amp;q=100&amp;fm=jpg"
                        srcSet="
                                https://images.ctfassets.net/royi30b2qd26/38RUEI941x4Cl2hvDdDWpZ/702005dc021704a553556ceea7e8b202/costa-club-rockettrain-gradient-696x512.jpg?w=174&amp;h=128&amp;fl=progressive&amp;q=100&amp;fm=jpg 174w,
                                https://images.ctfassets.net/royi30b2qd26/38RUEI941x4Cl2hvDdDWpZ/702005dc021704a553556ceea7e8b202/costa-club-rockettrain-gradient-696x512.jpg?w=348&amp;h=256&amp;fl=progressive&amp;q=100&amp;fm=jpg 348w,
                                https://images.ctfassets.net/royi30b2qd26/38RUEI941x4Cl2hvDdDWpZ/702005dc021704a553556ceea7e8b202/costa-club-rockettrain-gradient-696x512.jpg?w=696&amp;h=512&amp;fl=progressive&amp;q=100&amp;fm=jpg 696w
                            "
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </article>
            <article id="how-to-guides" className="eiIDKF">
              <div className="dHmxpK">
                <div
                  className="image_container image_container-constrained"
                  style={{ height: "100%" }}
                >
                  <div style={{ maxHidth: "700px", display: "block" }}>
                    <img
                      alt=""
                      role="presentation"
                      src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='504'%20width='700'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
                      style={{
                        maxHidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div>
                  <img
                    style={{
                      opacity: "1",
                      transition: "opacity 500ms linear",
                      objectFit: "cover",
                    }}
                    src="data:image/webp;base64,UklGRkADAABXRUJQVlA4TDQDAAAvE0ADAJcHt7Zt1cre13D3nEFIx7RCA/SgGek3uLY3VgQcybZVK+uc++R/3F3nzkxIyV1Ciui7XduQI0lSJEX1MvNz93UkwWl38t3/VGBm6J6prpx/tW3bMG6bndxRY6nYowpUDJyzgYzkOsIiLoKaWEZmZs1UEjSZc0sKX+swc6KFm11Ro0Psod6sa+JkREtu6qbFjF5a06u5aYxxVRvX/pBnX46s731VKDhk14fCQ9Rrx+bN0bxVy4/Ar61Hx34Aq6F28m+HL2q/nXYTO91ecbPdVZm15XpJdH1Oiz7qKnUnbk+t6WsEWIdkLABjBQNLIDGwxAAIBAMgFoAYWGIEggEEIxCM/H3xl0b+nrDEEkss+d8DYsESAwhA9i+uXfVhMBPtyIh9wOQYsDVCQzADTDADMwQEwNBAAAwBLaGBGJohgCFYQgNBFOwJDdFM8o7oAjrKGqV1HE6lvjrd7UHp268rT/9X5jxMN8Mboc2C/gVELTZyfbF28Nq1HF56tDsL/8b2SY8SP37ddMhl7Pm3GunHx/eX++ZcWg55MbMdq5L76B0xD1lj3ISxDihBiBQgWGJkSkQVhknqqnX+NZamNz/SPlZkuQu37ZncdNgnFBwbaFe2htDxn7qTrFc/vibu/OUgLCTWDqekW2PPppIbOA62x3DT6gZuip2jqS2GuMTdU/bwfMEBSQAAAk2abdu2bTbbtm3bZs22bdu27S+0R3SM6H8ZIpERoUEBPl5uDlamhjpa6onJqemR4SGB/j6eLvaWJvEtNeVJKakZWWHBgX7eHs525sZ6bQqKtdlpmTl5wQG+Xu5ONmZGutrdsp1dCZnI/ELEcLRGDDWVmCge5dz8ohIfT9f/vzVaTFRCpr2guLTC08XOwsQAqhk7MCglyM/X11FWCXO2NTfRh2qoivQPiY+O8cpLNsPg9XE9ShyX7Jwnn2wCI3/DQtK/8GpAYwPr/uzx8svbz/fX5MS4sFxVHQEhxcHc/PrT8+v76cfZLSN+EwSdlPpqZmdj5eFx+/D8YvqaiggNCKJkntrdWlu6v+O66SVhoqMnw0UF03Af7W2uLi6wkGNjYaJgMNAS4+EA"
                    alt=""
                  />
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="
                            https://images.ctfassets.net/royi30b2qd26/60jffGJe4VkPpoxonhENCp/5aabf57e000bd05d4df2632ff0513f11/costa-club-how-to-guides-389x280.jpg?w=97&amp;h=70&amp;q=100&amp;fm=webp    97w,
                            https://images.ctfassets.net/royi30b2qd26/60jffGJe4VkPpoxonhENCp/5aabf57e000bd05d4df2632ff0513f11/costa-club-how-to-guides-389x280.jpg?w=195&amp;h=140&amp;q=100&amp;fm=webp 195w,
                            https://images.ctfassets.net/royi30b2qd26/60jffGJe4VkPpoxonhENCp/5aabf57e000bd05d4df2632ff0513f11/costa-club-how-to-guides-389x280.jpg?w=389&amp;h=280&amp;q=100&amp;fm=webp 389w
                        "
                    />
                    <img
                      width="700"
                      height="504"
                      style={{ objectFit: "cover", opacity: "0" }}
                      loading="lazy"
                      alt="Carlstons Club How to Guides"
                    />
                  </picture>
                </div>
              </div>
              <div className="bfzeFG">
                <div className="iYOBBt">
                  <h4>How to guides to help get you going</h4>
                  <p>
                    Getting started with our Carlstons Club is as easy as one,
                    two, free! Follow our handy step-by-step guides to learn how
                    to get the most from Carlstons Club.
                  </p>
                </div>
                <ul className="dNSNqv">
                  <li>
                    <div className="jwGbBy linkCta">
                      <a href="/carlstons-club/how-to-guides">Learn how</a>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
            {/* <article
              id="app-promo"
              className="fbmffN"
            >
              <div className="byNeYN">
                <div className="hRutP">
                  <h3>The app is where it's at</h3>
                  <p>
                    Use our app to keep track of your beans, or ask your barista
                    when you scan your card in store. Download the app for the
                    best Carlstons Club experience.
                  </p>
                </div>
                <ul className="enhTis">
                  <li className="bIrHbT">
                    <a
                      href="https://apps.apple.com/app/id578627826"
                   
                      className="hucpiK"
                    >
                      <img
                        src="//images.ctfassets.net/royi30b2qd26/6eYanDnLtkVbCiZnjOc8aY/5eff88f78a85eefe8535d8940d7c401e/apple-cta-mobile_3x.png"
                        alt="IOS"
                        className="hYcCuN"
                      />
                    </a>
                  </li>
                  <li className="promoAppButtons__ListItem-sc-1x241nn-2 bIrHbT">
                    <a
                      href="https://play.google.com/store/apps/details?id=uk.co.club.costa.costa"
                   
                      className="hucpiK"
                    >
                      <img
                        src="//images.ctfassets.net/royi30b2qd26/JLx2EQieRalp2GUzG9W5h/1b3380a59dc7eb61414660ac9cb85ddc/google-cta-mobile_3x.png"
                        alt="Android"
                        className="hYcCuN"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="gVWkJc">
                <div
             
                  className="image_container image_container-constrained"
                  style={{ height: "100%" }}
                >
                  <div style={{ maxHidth: "700px", display: "block" }}>
                    <img
                      alt=""
                      role="presentation"
                    
                      src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='515'%20width='700'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
                      style={{
                        maxHidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div>
                  <img
                  
                
                    style={{
                      opacity: "1",
                      transition: "opacity 500ms linear",
                      objectFit: "cover",
                    }}
                
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="
                            https://images.ctfassets.net/royi30b2qd26/1tZcH146I4IzcGORgRh1TT/5887b58aa00e0481f25f1b65f940f0d2/App_Screen_Lifestyle_Free_Drink_June23.jpg?w=174&amp;h=128&amp;q=100&amp;fm=webp 174w,
                            https://images.ctfassets.net/royi30b2qd26/1tZcH146I4IzcGORgRh1TT/5887b58aa00e0481f25f1b65f940f0d2/App_Screen_Lifestyle_Free_Drink_June23.jpg?w=348&amp;h=256&amp;q=100&amp;fm=webp 348w,
                            https://images.ctfassets.net/royi30b2qd26/1tZcH146I4IzcGORgRh1TT/5887b58aa00e0481f25f1b65f940f0d2/App_Screen_Lifestyle_Free_Drink_June23.jpg?w=696&amp;h=512&amp;q=100&amp;fm=webp 696w
                        "
                      sizes="(min-width: 696px) 696px, 100vw"
                    />
                    <img
                      width="700"
                      height="515"
                  
                      style={{ objectFit: "cover", opacity: "0" }}
                      sizes="(min-width: 696px) 696px, 100vw"
                  
                      loading="lazy"
                      src="https://images.ctfassets.net/royi30b2qd26/1tZcH146I4IzcGORgRh1TT/5887b58aa00e0481f25f1b65f940f0d2/App_Screen_Lifestyle_Free_Drink_June23.jpg?w=696&amp;h=512&amp;fl=progressive&amp;q=100&amp;fm=jpg"
                      srcSet="
                            https://images.ctfassets.net/royi30b2qd26/1tZcH146I4IzcGORgRh1TT/5887b58aa00e0481f25f1b65f940f0d2/App_Screen_Lifestyle_Free_Drink_June23.jpg?w=174&amp;h=128&amp;fl=progressive&amp;q=100&amp;fm=jpg 174w,
                            https://images.ctfassets.net/royi30b2qd26/1tZcH146I4IzcGORgRh1TT/5887b58aa00e0481f25f1b65f940f0d2/App_Screen_Lifestyle_Free_Drink_June23.jpg?w=348&amp;h=256&amp;fl=progressive&amp;q=100&amp;fm=jpg 348w,
                            https://images.ctfassets.net/royi30b2qd26/1tZcH146I4IzcGORgRh1TT/5887b58aa00e0481f25f1b65f940f0d2/App_Screen_Lifestyle_Free_Drink_June23.jpg?w=696&amp;h=512&amp;fl=progressive&amp;q=100&amp;fm=jpg 696w
                        "
                      alt="Carlstons Club app screen"
                    />
                  </picture>
                </div>
              </div>
            </article> */}
            <article id="card-registration" className="dXbAhM">
              <div className="bEldKG">
                <div
                  className="image_container image_container-constrained"
                  style={{ height: "100%" }}
                >
                  <div style={{ maxHidth: "700px", display: "block" }}>
                    <img
                      alt=""
                      role="presentation"
                      src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='504'%20width='700'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
                      style={{
                        maxHidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div>
                  <img
                    style={{
                      opacity: "1",
                      transition: "opacity 500ms linear",
                      objectFit: "cover",
                    }}
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAOABQDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACQcI/8QAHxAAAgIDAQEBAQEAAAAAAAAAAwQFBgECBwgUCRMR/8QAGQEBAAIDAAAAAAAAAAAAAAAABwEFAwQG/8QAJhEAAgICAgEDBAMAAAAAAAAAAgMBBAUSBhETAAcUISIjJDIzQf/aAAwDAQACEQMRAD8AnXpX87aND0akWigdQpklzeMbmXYGatjclreoitMrA3FTsQtcqFkP1GFTNlCWqdlGzEkymuSDzWWTySbzBByjjjOEX7eXqkxuO5A5C/iAwS1uL8xlaBpvWlfkQYpsmkScxpqYz+HcuXtXzZPutVq4W5V8Wd45Uedqx8eFqOsUpSsWKaJODR6zNSHBKPGBePUd1xmfrHj6l2l3OaBRf5NEgo7fUe8ZNw9WknwCEuZKko3SQjpiYjjMYNICIWHwExzHJG5ImRPO5jS5dnaF5qLp1202WGFXlFiXXk04XEjZypRUCuhrD7WAItNPTWGQOpl6esl7f8es1SfEAuyACJpDdiwONugWtRT0Ez9YFqx6L/In7YNaz+LLElIa7WeSpFAk3NGWMVS3yDVUsscmGTkI5M0rByVdXIntJhRxKofw3bASKeQJuxo3s0mqmK5RGg+JNyyuQWYWEp86GwxYN7Q5bThiwk5URFoXlWyNZGBMgHIcfWu9bSNdfSHsT/bWWX2FMRJLdKyCSjo4GIKIAh7LfYRfHgfM6v7I6iiDx5vb/LK/Jxq5swsXEIKxLKyUkqdgUdzbFVvVVelGMj/1SdeNF4iDmaO1D2UJvi0qMyGXfWThbVxd6rccJJr3W3zXXsRBrGwD69mu1cD5Z3SAdtj6C9ExtPXYicXxa2WcimtF2KlxLreNo40LNimyajW1XTYRMN7KuuUtIvwzv+NkF1Feqv5bXPjkjYhdJ74HuUdMzMvZGa1OQVuqwEVlZkcwgyvOVy/gSan4lUfyxjQKTDKptkw8iJDC4FsVPISp1W0Tr01VrSF16jSStZjKtIGzCnOE7UQ85E5FjDmdOmGwi3Hew/KsnYo2UnYsN2tZW6q21wy5nyJSVCvYqwr4YKorSwP1xAT80aKWChAj39Ecb7qLqExvzCS51VKWcISxFfk7b0tk8ZpgrICCGSJSjFsBLuH6NRbCOUO5iC+swtBY0wY+3hVraq/WsPcp5BDgr0WSxfjUUE0rGxyyCIxme5ghECnoiKIluez8wk12a5eRMEUNW0NCg2BquKzEhK9REokgg4IiGZkRGfX/2Q=="
                    alt=""
                  />
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="
                            https://images.ctfassets.net/royi30b2qd26/7FUj1ZNp1SNKmLSJZ7qLCy/645a5f1d87d35f57787364f491dad307/costa-club-card-389x280.jpg?w=97&amp;h=70&amp;q=100&amp;fm=webp    97w,
                            https://images.ctfassets.net/royi30b2qd26/7FUj1ZNp1SNKmLSJZ7qLCy/645a5f1d87d35f57787364f491dad307/costa-club-card-389x280.jpg?w=195&amp;h=140&amp;q=100&amp;fm=webp 195w,
                            https://images.ctfassets.net/royi30b2qd26/7FUj1ZNp1SNKmLSJZ7qLCy/645a5f1d87d35f57787364f491dad307/costa-club-card-389x280.jpg?w=389&amp;h=280&amp;q=100&amp;fm=webp 389w
                        "
                      sizes="(min-width: 389px) 389px, 100vw"
                    />
                    <img
                      width="700"
                      height="504"
                      style={{ objectFit: "cover", opacity: "0" }}
                      sizes="(min-width: 389px) 389px, 100vw"
                      loading="lazy"
                      src="https://images.ctfassets.net/royi30b2qd26/7FUj1ZNp1SNKmLSJZ7qLCy/645a5f1d87d35f57787364f491dad307/costa-club-card-389x280.jpg?w=389&amp;h=280&amp;fl=progressive&amp;q=100&amp;fm=jpg"
                      srcSet="
                            https://images.ctfassets.net/royi30b2qd26/7FUj1ZNp1SNKmLSJZ7qLCy/645a5f1d87d35f57787364f491dad307/costa-club-card-389x280.jpg?w=97&amp;h=70&amp;fl=progressive&amp;q=100&amp;fm=jpg    97w,
                            https://images.ctfassets.net/royi30b2qd26/7FUj1ZNp1SNKmLSJZ7qLCy/645a5f1d87d35f57787364f491dad307/costa-club-card-389x280.jpg?w=195&amp;h=140&amp;fl=progressive&amp;q=100&amp;fm=jpg 195w,
                            https://images.ctfassets.net/royi30b2qd26/7FUj1ZNp1SNKmLSJZ7qLCy/645a5f1d87d35f57787364f491dad307/costa-club-card-389x280.jpg?w=389&amp;h=280&amp;fl=progressive&amp;q=100&amp;fm=jpg 389w
                        "
                      alt="Carlstons Club loyalty card"
                    />
                  </picture>
                </div>
              </div>
              <div className="bfzeFG">
                <div className="iYOBBt">
                  <h4>
                    {/* <a
                      href="#"
                      id="card-registration"
                      aria-label="card-registration anchor"
                    ></a> */}
                    Picked up a card?
                  </h4>
                  <p>
                    You'll get the most out of our Carlstons Club by using the
                    app. Download it today so you don't miss out on all the
                    extras you get when you use it. Want to sign up using a card
                    you've picked up in store? No problem. Follow the link below
                    to join.
                  </p>
                </div>
                <ul className="dNSNqv">
                  <li>
                    <div className="jwGbBy linkCta">
                      <a href="/carlstons-club/register/">
                        Join the Carlstons Club
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
            <article id="faqs" className="eiIDKF">
              <div className="dHmxpK">
                <div
                  className="image_container image_container-constrained"
                  style={{ height: "100%" }}
                >
                  <div style={{ maxHidth: "700px", display: "block" }}>
                    <img
                      alt=""
                      src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='504'%20width='700'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
                      style={{
                        maxHidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div>
                  <img
                    style={{
                      opacity: "1",
                      transition: "opacity 500ms linear",
                      objectFit: "cover",
                    }}
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAOABQDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACAkH/8QAJBAAAgICAgEEAwEAAAAAAAAABAUDBgECBxEIABUhURQxYdH/xAAYAQADAQEAAAAAAAAAAAAAAAAFBggEB//EACgRAAICAQMDAwQDAAAAAAAAAAECAwQFBhESEyExAAdRCBRBYRUiM//aAAwDAQACEQMRAD8ATKGqvKo8Xh8iHcdrRLYslsVF2UW3c1mWnHK0EMDfjmgBrBrCu2nF2ZL0bh57dgqCFpqtL31F9a9Le5keYyOex2cp1dNSYq9LDW/kMlXhks12t2YKnUinMRFqSGATzRwtJHH1FQOQyO9i5jT8dOlSt465LkhacwmOOnKJDLXrV5bk0QXnvSSawkNad+DWQryIoCOFdd55/wCAuHIuL6VP43N7uOyqKaZxdg7ADXVUNhZERwm7NrhEuKYblCGESdwb4wtiiwLBEFrFILBtPFv6lrSZLV7w4DLzVtN6tyOm4ZhdRcdeFS8a1W3EDWaWOG1A9axweCVkE4QswUuVevoDUORuxImpYaVu5YcwY3ovZnSMf5qtYTdB1bYqAH57huTFt9tBBpsm4+u2Is4+c46676/Xx31jvr7xjr69WKbKHiQeQKgggjuD4Pn49K8tvi5BJ3Hn9H8g7g7d/wAbnb59QQ8uuUOVR7BwJ43KrSQkuHGw93tKvkGaQCxLbJU522R1Y7+t7IK/ALZt170PLYgDeYWc6dxNmcnESX8Kdst7fYyt93UJaSnTVxAjOwlWtbsRtGrSRiLlIhVWPYf3MpLuZWJLXNeZPD5y1NBBC01haluV2PJDJDDIgURSxyhUc2CpHIhFVWjUMoHpc+L1VY+aLajXho+3qUPj65FovJ9FkFnsNev9iWTlPdmyhnKxXFe1u17jSEwawKSDAZtZICJrFjXLEhFxX080JdR3M/T1A0WmsjqTDais6XtYsWwj41KDWMeLkuQZLNXIvUJeSeqrV45+kYrLV0lkKUPdVrGJnc4podQCbIEZeraFboWLyqVnrpFCJI3rygzxsjxv1C3Fo+RY3dFRBQQaR5j12zjHznrH1/f8x6qvc+B2A2AC9gABsAAOw28ADsB47euXPPI7Fix3Pn5PyT+ye59f/9k="
                    alt=""
                  />
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="
                            https://images.ctfassets.net/royi30b2qd26/eP2VBxlFvogoj8MpDfurf/78db42bb15c46867e8edf66ca1e3a3d7/costa-club-boosterthefreeone-389x280.jpg?w=97&amp;h=70&amp;q=100&amp;fm=webp    97w,
                            https://images.ctfassets.net/royi30b2qd26/eP2VBxlFvogoj8MpDfurf/78db42bb15c46867e8edf66ca1e3a3d7/costa-club-boosterthefreeone-389x280.jpg?w=195&amp;h=140&amp;q=100&amp;fm=webp 195w,
                             https://images.ctfassets.net/royi30b2qd26/eP2VBxlFvogoj8MpDfurf/78db42bb15c46867e8edf66ca1e3a3d7/costa-club-boosterthefreeone-389x280.jpg?w=389&amp;h=280&amp;q=100&amp;fm=webp 389w
                        "
                      sizes="(min-width: 389px) 389px, 100vw"
                    />
                    <img
                      width="700"
                      height="504"
                      style={{ objectFit: "cover", opacity: "0" }}
                      sizes="(min-width: 389px) 389px, 100vw"
                      loading="lazy"
                      src="https://images.ctfassets.net/royi30b2qd26/eP2VBxlFvogoj8MpDfurf/78db42bb15c46867e8edf66ca1e3a3d7/costa-club-boosterthefreeone-389x280.jpg?w=389&amp;h=280&amp;fl=progressive&amp;q=100&amp;fm=jpg"
                      srcSet="
                            https://images.ctfassets.net/royi30b2qd26/eP2VBxlFvogoj8MpDfurf/78db42bb15c46867e8edf66ca1e3a3d7/costa-club-boosterthefreeone-389x280.jpg?w=97&amp;h=70&amp;fl=progressive&amp;q=100&amp;fm=jpg    97w,
                            https://images.ctfassets.net/royi30b2qd26/eP2VBxlFvogoj8MpDfurf/78db42bb15c46867e8edf66ca1e3a3d7/costa-club-boosterthefreeone-389x280.jpg?w=195&amp;h=140&amp;fl=progressive&amp;q=100&amp;fm=jpg 195w,
                            https://images.ctfassets.net/royi30b2qd26/eP2VBxlFvogoj8MpDfurf/78db42bb15c46867e8edf66ca1e3a3d7/costa-club-boosterthefreeone-389x280.jpg?w=389&amp;h=280&amp;fl=progressive&amp;q=100&amp;fm=jpg 389w
                        "
                      alt="Carlstons Club The Free One coffee cup"
                    />
                  </picture>
                </div>
              </div>
              <div className="bfzeFG">
                <div className="iYOBBt">
                  <h4>Want to know more?</h4>
                  <p>
                    Got a question for us? Here you’ll find the answers to some
                    of the most common questions we've been asked about
                    Carlstons Club.
                  </p>
                </div>
                <ul className="dNSNqv">
                  <li>
                    <div className="jwGbBy linkCta">
                      <a href="/faqs">Ask away</a>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
            <article className="iIYSRA">
              <div className="eIYIPq">
                <p></p>
              </div>
            </article>
            <article className="iIYSRA">
              <div className="eIYIPq">
                <p>
                  *
                  <a href="https://www.costa.co.uk/costa-club/terms-of-use">
                    See here
                  </a>{" "}
                  for full Carlstons Club membership terms and conditions. For
                  full information on birthday rewards,
                  <a href="https://www.costa.co.uk/costa-club/terms-of-use#birthday">
                    see here
                  </a>
                  .
                </p>
              </div>
            </article>
          </main>
        </>
      );
    }

    function checkLoggedIn(x) {
      props.getIsLoggedIn(x);
    }

    switch (id) {
      case "login":
        return <Login getUserId={getUserId} checkLoggedIn={checkLoggedIn} />;
      case "register":
        return <Register />;
      case "account":
        return <AccountPage userId={userId} />;
      default:
        return <ErrorPage />;
    }
  }

  return <div>{renderContent()}</div>;
}
export default Club;
