import React from 'react';
import Image from "next/image";
import img from "../../../public/images/img/footerlogo.webp"

const Footer = () => {
  return (
    <footer className="bg-[#1b8057] text-white">
      <div id="footer-1" className="footer-area">
        <div className="footer-top-area">
          <div className="footer-content-area">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-wrap justify-start"> {/* Changed justify-center to justify-start */}
                <div className="footer-item xl:w-1/5 lg:w-1/4 md:w-1/2 px-4 mb-8">
                  <div className="footer-custom-logo widget widget_media_image">
                    <a href="#">
                      <Image
                        width="267"
                        height="450"
                        src={img}
                        alt="mahaagromart"
                        className="max-w-full h-auto"
                        decoding="async"
                      />
                    </a>
                  </div>
                  <div className="widget widget_zilly_address">
                    <p className="rtin-des">
                      When an unknown printer took a galley of type scrambled it to make a type specimen book.
                    </p>
                    <ul className="corporate-address">
                      <li>
                        <i className="fas fa-location"></i>
                        <span>23/A Road, New York City</span>
                      </li>
                      <li>
                        <i className="fas fa-phone"> </i>
                        <span>
                          <a href="tel:+9888-256-666">+9888-256-666</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="widget rt_footer_social_widget">
                    <ul className="footer-social flex space-x-4">
                      <li>
                        <a href="#" target="_blank" aria-label="Social Link">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" aria-label="Social Link">
                          <i className="fab fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" aria-label="Social Link">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" aria-label="Social Link">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-tiktok"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="footer-item xl:w-1/5 lg:w-1/4 md:w-1/2 px-4 mb-8">
                  <div className="widget widget_nav_menu">
                    <h3 className="widgettitle has-animation">Quick Links</h3>
                    <ul className="menu">
                      <li><a href="#">Smartphones</a></li>
                      <li><a href="#">Headphones</a></li>
                      <li><a href="#">Laptop &amp; Tablet</a></li>
                      <li><a href="#">Monitors</a></li>
                      <li><a href="#">Printers</a></li>
                      <li><a href="#">Gadgets</a></li>
                    </ul>
                  </div>
                </div>

                <div className="footer-item xl:w-1/5 lg:w-1/4 md:w-1/2 px-4 mb-8">
                  <div className="widget widget_nav_menu">
                    <h3 className="widgettitle has-animation">Accounts</h3>
                    <ul className="menu">
                      <li><a href="#">My Orders</a></li>
                      <li><a href="#">Cart</a></li>
                      <li><a href="#">Checkout</a></li>
                      <li><a href="#">Compare</a></li>
                      <li><a href="#">My account</a></li>
                      <li><a href="#">Wishlist</a></li>
                    </ul>
                  </div>
                </div>

                <div className="footer-item xl:w-1/5 lg:w-1/4 md:w-1/2 px-4 mb-8">
                  <div className="widget widget_nav_menu">
                    <h3 className="widgettitle has-animation">Privacy Policy</h3>
                    <ul className="menu">
                      <li><a href="#">Returns &amp; Exchanges</a></li>
                      <li><a href="#">Payment Terms</a></li>
                      <li><a href="#">Delivery Terms</a></li>
                      <li><a href="#">Payment &amp; Pricing</a></li>
                      <li><a href="#">Terms Of Use</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>

                <div className="footer-item xl:w-1/5 lg:w-1/4 md:w-1/2 px-4 mb-8">
                  <div className="widget widget_zilly_address">
                    <h3 className="widgettitle has-animation">Sign Up Newsletter</h3>
                    <p className="rtin-des">
                      When an unknown printer took a galley of type and scrambled
                    </p>
                  </div>
                  <div className="widget widget_fluentform_widget">
                    <form className="fluentform ff-default fluentform_wrapper_4 ffs_default_wrap">
                      <fieldset className="border-none m-0 p-0 bg-transparent shadow-none outline-none min-w-full">
                        <legend className="sr-only">Newsletter Footer</legend>
                        <input type="hidden" name="__fluent_form_embded_post_id" value="176" />
                        <input type="hidden" name="_fluentform_4_fluentformnonce" value="72bb87070e" />
                        <input type="hidden" name="_wp_http_referer" value="/demo/wordpress/themes/zilly/" />
                        <div className="flex">
                          <div className="flex-grow">
                            <input
                              type="email"
                              name="email"
                              placeholder="Type Your E-mail"
                              className="ff-el-form-control w-full"
                              required
                            />
                          </div>
                          <div className="ml-2">
                            <button type="submit" className="ff-btn ff-btn-submit ff-btn-md">
                              <i className="fas fa-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>

                  <div className="widget_text footer-google-app widget widget_custom_html">
                    <h4>Download App on Mobile :</h4>
                    <p>15% discount on your first purchase</p>
                    <ul className="flex space-x-4">
                      <li>
                        <img
                          src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/google-play.jpg"
                          alt="google play"
                          className="w-24 h-auto"
                        />
                      </li>
                      <li>
                        <img
                          src="https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/app-stoe.jpg"
                          alt="app store"
                          className="w-24 h-auto"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-area bg-[#1b8057]">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="text-center md:text-left">
                <div className="text-white font-semibold">
                  © 2025 Mahaagromart. All Rights Reserved by Mahaagromart
                </div>
              </div>
              <div className="text-center md:text-right">
                <img
                  width="286"
                  height="23"
                  src={"https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/themes/zilly/assets/img/payment-logo.svg"}
                  alt="zilly"
                  className="mx-auto md:mx-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
