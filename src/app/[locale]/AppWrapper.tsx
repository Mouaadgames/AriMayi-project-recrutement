"use client"
import { Content, Header } from "antd/es/layout/layout";
import { Button, ConfigProvider, Menu, MenuProps, theme } from "antd";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations, } from "next-intl";

function AppWrapper({ children }: {
  children: React.ReactNode
}) {
  //[TODO] dark mode config 
  const [isDark, setIsDark] = useState(false);
  const { defaultAlgorithm, darkAlgorithm } = theme;


  const t = useTranslations("nav")

  const Langs = [{
    label: "",
    key: 'SubMenu',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
    </svg>,
    children: [
      {
        type: 'group',
        label: t("lang"),
        children: [
          { label: 'Francais', key: 'fr' },
          { label: 'English', key: 'en' },
        ],
      },
    ],
  }]

  const onClick: MenuProps['onClick'] = (e) => {
    location.href = "/" + e.key

  };
  return (
    <ConfigProvider
      theme={
        {
          algorithm: isDark ? darkAlgorithm : defaultAlgorithm
        }
      }>
      <Header className="bg-white flex justify-between items-center border-b">
        <div className="flex gap-4 items-center">
          <Link className="underline" href={"/"}>{t("Home")}</Link>
          <Link className="underline leading-4" href={"/Recruiter"}>{t("panel")}</Link>
        </div>
        <div className="flex gap-4 items-center">

          <Button disabled onClick={() => { setIsDark(p => !p) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </Button>
          <Menu onClick={onClick} mode="horizontal" items={Langs} />
        </div>


      </Header>
      <Content >
        {children}
      </Content>
    </ConfigProvider>
  )
}
export default AppWrapper