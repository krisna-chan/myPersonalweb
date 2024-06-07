
    // ------------- CARD ---------------- //
    document.querySelectorAll(".card-sector").forEach((card) => {

        // image elements
        const image = document.createElement("div");
        image.classList.add("image-container", "m-auto");
        const source = card.getAttribute("data-imgSrc");
        image.innerHTML = `
        <div class = "img-container">
          <div class = "img">
            <img style= "width: 100% ; height: 100%;" class="img-top ; overflow-y: hidden;" src=${source}>
            </div>
        </div>
        `;
        card.appendChild(image);
  
  
  
  
        // ----------|fetching attributes (info)|-----------//
        const productPrice = card.getAttribute("data-price");
        const productName = card.getAttribute("data-price-item");
        const device1 = card.getAttribute("data-device-v1");
        const device2 = card.getAttribute("data-device-v2");
        const device3 = card.getAttribute("data-device-v3");
        const device4 = card.getAttribute("data-device-v4");
  
        const device1Price = card.getAttribute("data-v1-price");
        const device2Price = card.getAttribute("data-v2-price");
        const device3Price = card.getAttribute("data-v3-price");
        const device4Price = card.getAttribute("data-v4-price");
  
        const productTitle = card.getAttribute("data-price-estimate");
        
        const productPriceInfo = document.createElement('div');
        productPriceInfo.classList.add("trading-value");
  
        
        productPriceInfo.innerHTML = `
        <div class="trade">
                      <div class="title">
                          <h1 class="trading-price-title text-secondary">
                              Get <span class="text-dark">${productTitle}</span> when you trade in a <span class="text-dark">${productName}</span>.
                          </h1>
                      </div>
                      <div class="price-price-range">
                          <div class="price d-flex justify-content-between">
                              <div class="item-title">
                                  <h3 class="your-device" >
                                      Your device
                                  </h3>
                              </div>
                              <div class="price-range ">
                                  <h3 >
                                      Estimated trade-in value
                                  </h3>
                              </div>
                          </div>
                          <div class="price  d-flex justify-content-between ">
                              <div class="item-title">
                                  <h3> ${device1}</h3>
                              </div>
                              <div class="price-range">
                                  <h3>Up to ${device1Price}</h3>
                              </div>
                          </div>
                          <div class="price  d-flex justify-content-between">
                              <div class="item-title">
                                  <h3>${device2}</h3>
                              </div>
                              <div class="price-range">
                                  <h3>Up to ${device2Price}</h3>
                              </div>
                          </div>
                          <div class="price d-flex justify-content-between">
                              <div class="item-title">
                                  <h3>${device3}</h3>
                              </div>
                              <div class="price-range">
                                  <h3>Up to ${device3Price}</h3>
                              </div>
                          </div>
                          <div class="price d-flex justify-content-between">
                              <div class="item-title">
                                  <h3>${device4}</h3>
                              </div>
                              <div class="price-range">
                                  <h3>Up to ${device4Price}</h3>
                              </div>
                          </div>
                      </div>
                      <div class="all-value">
                          <a href="#" >See all ${productName} values ⊕</a>
                      </div>
                      <div class="btn-container">
                          <a href="#" class="btn btn-primary">Find all your trade-in
                            values</a>
                      </div>
                  </div>
        `
  
// ------- | insert product info | ----------
        card.appendChild(productPriceInfo);
      });