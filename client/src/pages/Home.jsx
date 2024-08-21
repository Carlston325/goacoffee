function Home() {
  return (
    <>
      <main style={{ minHeight: "400px" }} className="layout__Main">
        <div className="egFTCM">
          <div>
            <h2 className="jYcxPR">Check out our meals</h2>
          </div>
          <div className="iLfAmY">
            <div className="promo__container">
              <div className="promo__card_first">
                <a href="/menu/breakfast">
                  <div className="ffKpmw"></div>
                </a>
                <div className="fUZYAO">
                  <div className="eVwvzo">
                    <h3>
                      Breakfast <br />
                      deals
                    </h3>
                    <p>
                      Let's make your mornings a whole lot tastier with our
                      breakfast deal! Enjoy any Breakfast meal &amp; Coffee from
                      only £7.99** before 11am.
                    </p>
                  </div>
                  <div className="jIQMGF linkCta">
                    <a href="/menu/breakfast" className="btnDark">
                      Our menu
                    </a>
                  </div>
                </div>
              </div>
              <div className="promo__card_second">
                <a href="/menu">
                  <div className="lhjGVk"></div>
                </a>
                <div className="fUZYAO">
                  <div className=" eVwvzo">
                    <h3>
                      Our <br />
                      Coffees
                    </h3>
                    <p>
                      Elevate your lunch with our mouthwatering new Chicken
                      Shawarma and tantalising Tandoori Bhaji Flatbreads. Enjoy
                      with a refreshing Peach Ice Tea - guaranteed to make life
                      peachy.
                    </p>
                  </div>
                  <div className="jIQMGF linkCta">
                    <a href="/menu/coffee-over-ice" className="btnDark">
                      Our menu
                    </a>
                  </div>
                </div>
              </div>
              <div className="promo__card_third">
                <a id="dessert" href="/menu">
                  <div className="dniyWw"></div>
                </a>
                <div className="fUZYAO">
                  <div className=" eVwvzo">
                    <h3>
                      Our <br />
                      Desserts
                    </h3>
                    <p>
                      Enjoy our wide range of desserts, like the
                      Chocolate-glazed Espresso Cheesecake. It's a pick-me-up
                      teamed with a shiny choclate glaze, they're sure to
                      brighten any moment.
                    </p>
                  </div>
                  <div className="jIQMGF linkCta">
                    <a href="/menu/dessert" className="btnDark">
                      Our menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <article className="iIYSRA">
          <div className="eIYIPq">
            <p>
              <strong>Breakfast Deal terms and conditions: </strong>
              **£7.99 Breakfast Deal available in select GB stores.
              <a href="https://www.costa.co.uk/terms-and-conditions#terms-and-conditions-offers-and-promotions">
                Check here
              </a>
              for store lists, pricing, and T&amp;Cs. Exclusions apply. Subject
              to availability.
            </p>
          </div>
        </article>
        <article className="iIYSRA">
          <div className="eIYIPq">
            <p>All products are subject to availability and sold separately.</p>
          </div>
        </article>
      </main>
    </>
  );
}
export default Home;
