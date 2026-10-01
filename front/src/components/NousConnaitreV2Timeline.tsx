import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isSubItem?: boolean;
}

const NousConnaitreV2Timeline: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const timelineRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const timelineData: TimelineItem[] = [
    {
      year: "2014",
      title: t("nousConnaitre.timeline.2014.title"),
      description: t("nousConnaitre.timeline.2014.description"),
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 8v8l6 4"
            stroke="#f47c2c"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      year: "2016",
      title: t("nousConnaitre.timeline.2016.title"),
      description: t("nousConnaitre.timeline.2016.description"),
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none">
          <rect
            x="6"
            y="10"
            width="6"
            height="8"
            fill="#f47c2c"
            opacity="0.3"
          />
          <rect
            x="13"
            y="6"
            width="6"
            height="12"
            fill="#f47c2c"
            opacity="0.6"
          />
          <rect x="20" y="8" width="6" height="10" fill="#f47c2c" />
          <path
            d="M4 28h24"
            stroke="#5A433D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      year: "2018",
      title: t("nousConnaitre.timeline.2018.title"),
      description: t("nousConnaitre.timeline.2018.description"),
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none">
          <rect
            x="8"
            y="6"
            width="16"
            height="10"
            rx="2"
            fill="#f47c2c"
            opacity="0.2"
          />
          <rect
            x="8"
            y="6"
            width="16"
            height="10"
            rx="2"
            stroke="#5A433D"
            strokeWidth="2"
          />
          <path
            d="M10 20h12"
            stroke="#5A433D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 24h8"
            stroke="#5A433D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      year: "",
      title: t("nousConnaitre.timeline.2018Sub1.title"),
      description: t("nousConnaitre.timeline.2018Sub1.description"),
      isSubItem: true,
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none">
          <rect
            x="6"
            y="8"
            width="20"
            height="16"
            rx="2"
            fill="#f47c2c"
            opacity="0.2"
          />
          <rect
            x="6"
            y="8"
            width="20"
            height="16"
            rx="2"
            stroke="#5A433D"
            strokeWidth="2"
          />
          <circle cx="10" cy="12" r="1" fill="#5A433D" />
          <circle cx="13" cy="12" r="1" fill="#5A433D" />
          <circle cx="16" cy="12" r="1" fill="#5A433D" />
          <path d="M8 16h16" stroke="#5A433D" strokeWidth="1" />
          <path d="M8 18h12" stroke="#5A433D" strokeWidth="1" />
          <path d="M8 20h8" stroke="#5A433D" strokeWidth="1" />
        </svg>
      ),
    },
    {
      year: "",
      title: t("nousConnaitre.timeline.2018Sub2.title"),
      description: t("nousConnaitre.timeline.2018Sub2.description"),
      isSubItem: true,
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none">
          <rect
            x="10"
            y="4"
            width="12"
            height="20"
            rx="2"
            fill="#f47c2c"
            opacity="0.2"
          />
          <rect
            x="10"
            y="4"
            width="12"
            height="20"
            rx="2"
            stroke="#5A433D"
            strokeWidth="2"
          />
          <rect
            x="12"
            y="8"
            width="8"
            height="6"
            rx="1"
            fill="#f47c2c"
            opacity="0.3"
          />
          <circle cx="16" cy="18" r="1" fill="#5A433D" />
          <path d="M13 20h6" stroke="#5A433D" strokeWidth="1" />
        </svg>
      ),
    },
    {
      year: "2019",
      title: t("nousConnaitre.timeline.2019.title"),
      description: t("nousConnaitre.timeline.2019.description"),
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none">
          <rect
            x="6"
            y="12"
            width="20"
            height="12"
            rx="2"
            fill="#f47c2c"
            opacity="0.3"
          />
          <rect
            x="6"
            y="12"
            width="20"
            height="12"
            rx="2"
            stroke="#5A433D"
            strokeWidth="2"
          />
          <rect x="8" y="16" width="4" height="2" fill="#5A433D" />
        </svg>
      ),
    },
    {
      year: "2021",
      title: t("nousConnaitre.timeline.2021.title"),
      description: t("nousConnaitre.timeline.2021.description"),
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z"
            fill="#f47c2c"
            opacity="0.3"
          />
          <path
            d="M16 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z"
            stroke="#5A433D"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      year: "2022",
      title: t("nousConnaitre.timeline.2022.title"),
      description: t("nousConnaitre.timeline.2022.description"),
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none">
          <rect
            x="10"
            y="4"
            width="12"
            height="20"
            rx="2"
            fill="#f47c2c"
            opacity="0.2"
          />
          <rect
            x="10"
            y="4"
            width="12"
            height="20"
            rx="2"
            stroke="#5A433D"
            strokeWidth="2"
          />
          <rect x="12" y="8" width="8" height="1" fill="#5A433D" />
          <rect x="12" y="12" width="8" height="1" fill="#5A433D" />
        </svg>
      ),
    },
    {
      year: "2024",
      title: t("nousConnaitre.timeline.2024.title"),
      description: t("nousConnaitre.timeline.2024.description"),
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 32 32" fill="none">
          <path
            d="M8 16l6 6 10-12"
            stroke="#f47c2c"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px",
      }
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="py-10 md:py-20 bg-barid-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-16 h-16 md:w-32 md:h-32 rounded-full bg-barid-orange"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 md:w-24 md:h-24 rounded-full bg-barid-brown"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 md:w-16 md:h-16 rounded-full bg-barid-orange"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-barid-brown mb-4 md:mb-6"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("nousConnaitre.timeline.title")}
          </h2>
          <p
            className="text-sm md:text-lg text-gray-700 max-w-3xl mx-auto px-2"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("nousConnaitre.timeline.description")}
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Central timeline line - hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-barid-orange via-barid-brown to-barid-orange h-full"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center ${
                item.isSubItem ? "mb-4 md:mb-8" : "mb-8 md:mb-16"
              } transition-all duration-1000 ease-out ${
                visibleItems.has(index) 
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Mobile Layout */}
              <div className="md:hidden w-full">
                <div
                  className={`flex items-start space-x-4 ${
                    item.isSubItem ? "ml-8" : ""
                  }`}
                >
                  {/* Icon for mobile */}
                  <div
                    className={`flex-shrink-0 bg-white rounded-full p-2 md:p-3 border-2 md:border-4 ${
                      item.isSubItem
                        ? "border-barid-brown"
                        : "border-barid-orange"
                  } shadow-lg transition-all duration-500 ${
                      visibleItems.has(index)
                        ? "scale-110 rotate-0"
                        : "scale-75 rotate-180"
                    } ${item.isSubItem ? "w-12 h-12" : ""}`}
                  >
                    {item.icon}
                  </div>
                  
                  {/* Content for mobile */}
                  <div
                    className={`flex-1 bg-white rounded-xl p-4 md:p-6 shadow-lg border-l-4 ${
                      item.isSubItem
                        ? "border-barid-brown"
                        : "border-barid-orange"
                  } transform transition-transform duration-500 ${
                      visibleItems.has(index) ? "scale-100" : "scale-95"
                    }`}
                  >
                    {item.year && (
                      <span
                        className={`text-xl md:text-3xl font-bold block mb-2 ${
                          item.isSubItem
                            ? "text-barid-brown"
                            : "text-barid-orange"
                        }`}
                      >
                        {item.year}
                      </span>
                    )}
                    <h3
                      className="text-lg md:text-xl font-semibold text-barid-brown mb-2 md:mb-3"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm md:text-base text-gray-600 leading-relaxed"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              {index % 2 === 0 ? (
                <>
                  {/* Left side content (even indexes) - Desktop only */}
                  <div
                    className={`hidden md:block w-1/2 ${
                      i18n.language === "ar" ? "pl-8" : "pr-8"
                    } text-right ${
                      item.isSubItem
                        ? i18n.language === "ar"
                          ? "pl-12"
                          : "pr-12"
                        : ""
                    }`}
                  >
                    <div
                      className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                        item.isSubItem
                          ? "border-barid-brown"
                          : "border-barid-orange"
                    } transform transition-transform duration-500 ${
                        visibleItems.has(index) ? "scale-100" : "scale-95"
                      }`}
                    >
                      {item.year && (
                        <span
                          className={`text-3xl font-bold block mb-2 ${
                            item.isSubItem
                              ? "text-barid-brown"
                              : "text-barid-orange"
                          }`}
                        >
                          {item.year}
                        </span>
                      )}
                      <h3
                        className="text-xl font-semibold text-barid-brown mb-3"
                        lang={i18n.language === "ar" ? "ar" : "fr"}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-gray-600 leading-relaxed"
                        lang={i18n.language === "ar" ? "ar" : "fr"}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon - Desktop only */}
                  <div
                    className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 border-4 ${
                      item.isSubItem
                        ? "border-barid-brown"
                        : "border-barid-orange"
                  } shadow-lg transition-all duration-500 ${
                      visibleItems.has(index)
                        ? "scale-110 rotate-0"
                        : "scale-75 rotate-180"
                    } ${item.isSubItem ? "scale-90" : ""}`}
                  >
                    {item.icon}
                  </div>

                  <div className="hidden md:block w-1/2 pl-8"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block w-1/2 pr-8"></div>

                  {/* Center icon - Desktop only */}
                  <div
                    className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 border-4 ${
                      item.isSubItem
                        ? "border-barid-brown"
                        : "border-barid-orange"
                  } shadow-lg transition-all duration-500 ${
                      visibleItems.has(index)
                        ? "scale-110 rotate-0"
                        : "scale-75 rotate-180"
                    } ${item.isSubItem ? "scale-90" : ""}`}
                  >
                    {item.icon}
                  </div>

                  {/* Right side content (odd indexes) - Desktop only */}
                  <div
                    className={`hidden md:block w-1/2 ${
                      i18n.language === "ar" ? "pr-8" : "pl-8"
                    } ${
                      item.isSubItem
                        ? i18n.language === "ar"
                          ? "pr-12"
                          : "pl-12"
                        : ""
                    }`}
                  >
                    <div
                      className={`bg-white rounded-xl p-6 shadow-lg border-r-4 ${
                        item.isSubItem
                          ? "border-barid-brown"
                          : "border-barid-orange"
                    } transform transition-transform duration-500 ${
                        visibleItems.has(index) ? "scale-100" : "scale-95"
                      }`}
                    >
                      {item.year && (
                        <span
                          className={`text-3xl font-bold block mb-2 ${
                            item.isSubItem
                              ? "text-barid-brown"
                              : "text-barid-orange"
                          }`}
                        >
                          {item.year}
                        </span>
                      )}
                      <h3
                        className="text-xl font-semibold text-barid-brown mb-3"
                        lang={i18n.language === "ar" ? "ar" : "fr"}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-gray-600 leading-relaxed"
                        lang={i18n.language === "ar" ? "ar" : "fr"}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NousConnaitreV2Timeline;
