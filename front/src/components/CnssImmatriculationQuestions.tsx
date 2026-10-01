import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const CnssImmatriculationQuestions: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      question: t("cnss.immatriculation.questions.question1"),
      answer: t("cnss.immatriculation.questions.answer1"),
    },
    {
      question: t("cnss.immatriculation.questions.question2"),
      answer: t("cnss.immatriculation.questions.answer2"),
    },
    {
      question: t("cnss.immatriculation.questions.question3"),
      answer: t("cnss.immatriculation.questions.answer3"),
    },
  ];

  return (
    <>
      {/* Image before the section */}
      <div className="w-full">
        <img
          src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png"
          alt="BaridCash Decorative Banner"
          className="w-full h-auto"
        />
      </div>

      <section className="py-16 bg-barid-orange">
        <div className="container mx-auto px-4">
          <h2
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
          >
            {t("cnss.immatriculation.questions.title")}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-barid-brown p-8 shadow-lg">
              <div className="space-y-4">
                {questions.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-orange-200 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full py-4 flex justify-between items-center text-left text-white hover:text-orange-200 transition-colors"
                    >
                      <span
                        lang={i18n.language === "ar" ? "ar" : "fr"}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                        className="font-semibold text-base pr-4"
                      >
                        {item.question}
                      </span>
                      {openQuestion === index ? (
                        <ChevronUp className="h-5 w-5 flex-shrink-0 text-barid-orange" />
                      ) : (
                        <ChevronDown className="h-5 w-5 flex-shrink-0 text-barid-orange" />
                      )}
                    </button>
                    {openQuestion === index && (
                      <div
                        lang={i18n.language === "ar" ? "ar" : "fr"}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                        className={`pb-4 text-white text-sm leading-relaxed ${
                          i18n.language === "ar" ? "text-right" : "text-left"
                        }`}
                      >
                        {(() => {
                          const lines = item.answer.split("\n");
                          const result = [];
                          let currentList = [];
                          let listKey = 0;
                          let isNestedList = false;

                          lines.forEach((line, lineIndex) => {
                            if (line.startsWith("•")) {
                              currentList.push(line.substring(1));
                            } else {
                              if (currentList.length > 0) {
                                result.push(
                                  <ul
                                    key={`list-${listKey++}`}
                                    className={`mb-2 list-disc ${
                                      i18n.language === "ar"
                                        ? isNestedList
                                          ? "ml-6"
                                          : "ml-4"
                                        : isNestedList
                                        ? "mr-6"
                                        : "mr-4"
                                    } ${
                                      i18n.language === "ar"
                                        ? "text-right"
                                        : "text-left"
                                    }`}
                                    style={{
                                      direction:
                                        i18n.language === "ar" ? "rtl" : "ltr",
                                      listStyleType: "disc",
                                      listStylePosition:
                                        i18n.language === "ar"
                                          ? "inside"
                                          : "outside",
                                      marginLeft:
                                        i18n.language === "ar"
                                          ? 0
                                          : isNestedList
                                          ? "1.5rem"
                                          : "1rem",
                                      marginRight:
                                        i18n.language === "ar"
                                          ? isNestedList
                                            ? "1.5rem"
                                            : "1rem"
                                          : 0,
                                    }}
                                  >
                                    {currentList.map((item, index) => (
                                      <li key={index} className="mb-1">
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                );
                                currentList = [];
                                isNestedList = false;
                              }
                              if (line.trim() === "") {
                                result.push(<br key={lineIndex} />);
                              } else if (
                                line.includes("لتصريح الزوج/الزوجة:")
                              ) {
                                isNestedList = true;
                                result.push(
                                  <p
                                    key={lineIndex}
                                    className={`mb-2 ${
                                      i18n.language === "ar"
                                        ? "text-right"
                                        : "text-left"
                                    }`}
                                    style={{
                                      direction:
                                        i18n.language === "ar" ? "rtl" : "ltr",
                                      fontFamily:
                                        i18n.language === "ar"
                                          ? "Cairo, Arial, sans-serif"
                                          : "Inter, Arial, sans-serif",
                                      marginLeft: 0,
                                      marginRight: 0,
                                      paddingLeft: 0,
                                      paddingRight: 0,
                                    }}
                                  >
                                    {line}
                                  </p>
                                );
                              } else {
                                result.push(
                                  <p
                                    key={lineIndex}
                                    className={`mb-2 ${
                                      i18n.language === "ar"
                                        ? "text-right"
                                        : "text-left"
                                    }`}
                                    style={{
                                      direction:
                                        i18n.language === "ar" ? "rtl" : "ltr",
                                      fontFamily:
                                        i18n.language === "ar"
                                          ? "Cairo, Arial, sans-serif"
                                          : "Inter, Arial, sans-serif",
                                      marginLeft: 0,
                                      marginRight: 0,
                                      paddingLeft: 0,
                                      paddingRight: 0,
                                    }}
                                  >
                                    {line}
                                  </p>
                                );
                              }
                            }
                          });

                          if (currentList.length > 0) {
                            result.push(
                              <ul
                                key={`list-${listKey++}`}
                                className={`mb-2 list-disc ${
                                  i18n.language === "ar"
                                    ? isNestedList
                                      ? "ml-6"
                                      : "ml-4"
                                    : isNestedList
                                    ? "mr-6"
                                    : "mr-4"
                                } ${
                                  i18n.language === "ar"
                                    ? "text-right"
                                    : "text-left"
                                }`}
                                style={{
                                  direction:
                                    i18n.language === "ar" ? "rtl" : "ltr",
                                  listStyleType: "disc",
                                  listStylePosition:
                                    i18n.language === "ar"
                                      ? "inside"
                                      : "outside",
                                  marginLeft:
                                    i18n.language === "ar"
                                      ? 0
                                      : isNestedList
                                      ? "1.5rem"
                                      : "1rem",
                                  marginRight:
                                    i18n.language === "ar"
                                      ? isNestedList
                                        ? "1.5rem"
                                        : "1rem"
                                      : 0,
                                }}
                              >
                                {currentList.map((item, index) => (
                                  <li key={index} className="mb-1">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            );
                          }

                          return result;
                        })()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CnssImmatriculationQuestions;
