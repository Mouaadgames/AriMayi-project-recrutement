"use client"

import { Job } from '@/lib/state/jobs/jobSlice';
import { List } from 'antd';
import { useTranslations } from 'next-intl';


function JobsList({ data, setSelectedJob }: any) {
  const t = useTranslations("Home")
  return (
    <div>
      <List
        size="large"
        header={<p className="text-center">{t("available positions")}</p>}

        dataSource={data}
        renderItem={(item: Job) => <List.Item className="hover:bg-gray-200 cursor-pointer" onClick={_ => { setSelectedJob(item) }}>
          <List.Item.Meta
            title={<p className="font-bold text-lg">{item.roleName}</p>}
            description={<div className="-translate-y-1 "><p className="text-black">{`${item.location} (${item.workMode})`}</p><p className="italic text-xs">{` posted on ${(new Date(item.postedDate)).toDateString()}`}</p></div>}
          />
        </List.Item>}
      />

    </div>)
}
export default JobsList