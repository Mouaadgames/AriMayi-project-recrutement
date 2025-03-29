"use client"
import { Content, Header } from "antd/es/layout/layout";
import { Button, ConfigProvider, theme } from "antd";
import { Link } from "@/i18n/navigation";
import { useState } from "react";

function AppWrapper({ children }: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(false);
  const { defaultAlgorithm, darkAlgorithm } = theme;
  return (
    <ConfigProvider
      theme={
        {
          algorithm: isDark ? darkAlgorithm : defaultAlgorithm
        }
      }>
      <body className="min-h-screen ">
        <Header className="bg-white flex justify-between items-center">
          <Link className="underline" href={"/Recruiter"}>Access Recruiter panel</Link>
          <Button  disabled onClick={_ => { setIsDark(p => !p) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>

          </Button>
        </Header>
        <Content>
          {children}
        </Content>
      </body>
    </ConfigProvider>
  )
}
export default AppWrapper