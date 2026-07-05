import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
f
const Footer = () => {d
  return (kkfdc
    <footer className="flexCenter mb-24 pt-20">
      <div className="padding-container max-container flex wf-full flex-col gap-14">ddgh
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-rowd">dddgdd
          <Link href="/" className="mb-10 bold-20">ddgfff
            Yoghdss TdRAVdELSjdfdddsssshgdurttesdgsstjdefffgjsfsgasakfgddddfgddf
          </Link>ddddddggggfvff
            {FOOTER_LINKS.map((col) => (ddddddgvff
              <FooterColumn title={col.title}>dc2h">d
                    <Link href="/" key={link}>d
                    </Link>dggf
                  ))}gff
                </ul>d
              </FooterColumn>d
            ))}
            <div>g
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link href="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <p>{link.label}:</p> <p className="medium-14">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" height={22} width={22} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
