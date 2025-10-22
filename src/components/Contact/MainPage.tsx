"use client";
import React, { useState, useRef, useEffect } from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import { motion, easeInOut } from "framer-motion";
import Paragraph from "../Paragraph";
import Loading from "../Loading";
import { Turnstile } from "@marsidev/react-turnstile";
import { useTheme } from "next-themes";

// Cloudflare Turnstile Configuration
const TURNSTILE_SITE_KEY = "0x4AAAAAAB8CGDLMi_kzY9-4";
const TURNSTILE_SECRET_KEY = "0x4AAAAAAB8CGBARj-wDiPuxuq_UsfUvT9I";

function MainPage() {
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [verified, setVerified] = useState(false);
  const turnstileRef = useRef<any>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const EASING = [0.83, 0, 0.17, 1];

  const rise = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.5,
      },
    },
  };

  const scale = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 0.7,
      },
    },
  };

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 0.7,
      },
    },
  };

  function handleSubmit(e: React.FormEvent) {
    if (!turnstileToken || !verified) {
      e.preventDefault();
      alert("Please complete the security verification first.");
      return;
    }

    setLoading(true);
    // Form will be submitted normally to FormSubmit
  }

  return (
    <div>
      <section className="my-[8vh]">
        <div className="sm:w-[75%] md:w-[60%] mx-auto">
          <div className="overflow-hidden">
            <motion.h1
              variants={rise}
              initial="initial"
              animate="animate"
              className={`${spectralBridgeRegular.className} leading-[1] uppercase text-center text-[20vw] sm:text-[12vw]`}
            >
              Let&apos;s <span className="italic lowercase">get</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={rise}
              initial="initial"
              animate="animate"
              className={`${spectralBridgeRegular.className} leading-[1] uppercase text-center text-[20vw] sm:text-[12vw]`}
            >
              <span className="italic lowercase">in</span> touch
            </motion.h1>
          </div>
          <div className="flex justify-end">
            <motion.div
              variants={appear}
              initial="initial"
              animate="animate"
              className="w-[70%] sm:w-[60%] md:w-[55%]"
            >
              <Paragraph text="Ready to bring your vision to life? Simply fill out the form, and let's start turning your ideas into reality. Or if you're reaching out to offer a new opportunity, feel free to message me—let's connect today!" />
            </motion.div>
          </div>
          <div className="mt-14">
            <form
              action="https://formsubmit.co/mwaleedkhalil@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              {/* FormSubmit Configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission - Muhammad Waleed Khalil Portfolio"
              />
              <input
                type="hidden"
                name="_next"
                value={
                  typeof window !== "undefined"
                    ? `${window.location.origin}/contact?success=true`
                    : "/contact?success=true"
                }
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="_honey"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              {/* Cloudflare Turnstile Token */}
              <input
                type="hidden"
                name="cf-turnstile-response"
                value={turnstileToken}
              />

              <div className="flex flex-col xs:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-y-2">
                  <motion.label
                    variants={appear}
                    initial="initial"
                    animate="animate"
                    className="text-[14px]"
                    htmlFor="name"
                  >
                    Name *
                  </motion.label>
                  <motion.input
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className="py-2 px-2 origin-left border-b-[1.5px] border-b-lightText dark:border-b-darkText outline-none bg-transparent"
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-y-2">
                  <motion.label
                    variants={appear}
                    initial="initial"
                    animate="animate"
                    className="text-[14px]"
                    htmlFor="email"
                  >
                    Email *
                  </motion.label>
                  <motion.input
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className="py-2 px-2 origin-left border-b-[1.5px] border-b-lightText dark:border-b-darkText outline-none bg-transparent"
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="mt-6">
                <div className="flex-1 flex flex-col gap-y-2">
                  <motion.label
                    variants={appear}
                    initial="initial"
                    animate="animate"
                    className="text-[14px]"
                    htmlFor="message"
                  >
                    Message *
                  </motion.label>
                  <motion.textarea
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className="py-2 px-2 origin-left border-b-[1.5px] border-b-lightText dark:border-b-darkText outline-none bg-transparent"
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project or inquiry..."
                  ></motion.textarea>
                </div>
              </div>

              {/* Optional: Phone number field */}
              <div className="mt-6">
                <div className="flex-1 flex flex-col gap-y-2">
                  <motion.label
                    variants={appear}
                    initial="initial"
                    animate="animate"
                    className="text-[14px]"
                    htmlFor="phone"
                  >
                    Phone Number (Optional)
                  </motion.label>
                  <motion.input
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className="py-2 px-2 origin-left border-b-[1.5px] border-b-lightText dark:border-b-darkText outline-none bg-transparent"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>

              {/* Cloudflare Turnstile */}
              <div className="mt-6 flex justify-center">
                <motion.div
                  variants={appear}
                  initial="initial"
                  animate="animate"
                  className="flex flex-col items-center"
                >
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={TURNSTILE_SITE_KEY}
                    onSuccess={(token) => {
                      setTurnstileToken(token);
                      setVerified(true);
                    }}
                    onError={() => {
                      setTurnstileToken("");
                      setVerified(false);
                      alert("Security verification failed. Please try again.");
                    }}
                    onExpire={() => {
                      setTurnstileToken("");
                      setVerified(false);
                    }}
                    theme={
                      mounted ? (theme === "dark" ? "dark" : "light") : "light"
                    }
                    size="normal"
                  />
                  {verified && (
                    <p className="text-green-600 dark:text-green-400 text-xs mt-2">
                      ✓ Verified
                    </p>
                  )}
                </motion.div>
              </div>

              <div className="mt-6">
                <motion.button
                  variants={appear}
                  initial="initial"
                  animate="animate"
                  type="submit"
                  disabled={loading || !verified}
                  className="group hover:bg-lightText hover:text-lightBg dark:hover:bg-darkText dark:hover:text-darkBg duration-300 text-[16px] 2xl:text-[26px] w-full sm:w-[45%] py-3 border-[1px] border-lightText dark:border-darkText rounded-full outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loading classNameSize="w-7 h-7" />
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </div>

              <motion.div
                variants={appear}
                initial="initial"
                animate="animate"
                className="mt-4"
              >
                <p className="text-[12px] opacity-60">
                  * Required fields. Your information is secure and will only be
                  used to respond to your inquiry. Protected by Cloudflare
                  Turnstile.
                </p>
              </motion.div>
            </form>

            {/* Success Message Display */}
            {typeof window !== "undefined" &&
              new URLSearchParams(window.location.search).get("success") ===
                "true" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-100 dark:bg-green-900 border border-green-500 rounded-lg"
                >
                  <p className="text-green-800 dark:text-green-100 text-center">
                    ✓ Thank you for your message! I&apos;ll get back to you as
                    soon as possible.
                  </p>
                </motion.div>
              )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
