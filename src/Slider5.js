import React from "react";

export default function Slider5() {
  return (
    <>
      <div className="wed-title">
        <h2>Wedding Categories</h2>
        <a className="wed-title-link" href="/vendors/delhi-ncr">
          View all Categories{" "}
        </a>
      </div>
      <div className="wedding-cat">
        {/* <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div> */}
        <div className="wedding-cat-sub color1">
          <div>
            <h3>Venues</h3>
            <p>Banquet Halls, Lawns / Farmhouses, R...</p>
          </div>
          <div>
            <img
              className="img-6"
              src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg"
            />
          </div>
        </div>
        <div className="wedding-cat-sub color2">
          <div>
            <h3>Photographers</h3>
            <p>Photographers, Cinema/Video, Pre We...</p>
          </div>
          <div>
            <img
              className="img-6"
              src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/2/photographers.jpg"
            />
          </div>
        </div>
        <div className="wedding-cat-sub color3">
          <div>
            <h3>Makeup</h3>
            <p>Bridal Makeup, Family Makeup</p>
          </div>
          <div>
            <img
              style={{ left: "75px" }}
              className="img-6"
              src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/3/makeup.jpg"
            />
          </div>
        </div>
        <div className="wedding-cat-sub color4">
          <div>
            <h3>Bridal Wear</h3>
            <p>Bridal Lehengas, Kanjeevaram / Silk Sa...</p>
          </div>
          <div>
            <img
              className="img-6"
              src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/4/bridal-wear.jpg"
            />
          </div>
        </div>
        <div className="wedding-cat-sub color5">
          <div>
            <h3>Groom Wear</h3>
            <p>Sherwani, Wedding Suits / Tuxes, Sher...</p>
          </div>
          <div>
            <img
              className="img-6"
              src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/5/groom-wear.jpg"
            />
          </div>
        </div>
        <div className="wedding-cat-sub color6">
          <div>
            <h3>Mehndi</h3>
            <p>Mehendi Artist</p>
          </div>
          <div>
            <img
              className="img-6"
              style={{ left: "112px" }}
              src="https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/6/mehendi-artists.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
