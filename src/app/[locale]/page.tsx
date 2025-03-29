"use client"

import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Button, Divider, Flex, List, Splitter, Switch } from 'antd';
import { Link } from "@/i18n/navigation";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addCandidate } from '@/lib/state/candidates/candidatesSlice'
import { useSelectedLayoutSegment } from "next/navigation";
import { Job } from "@/lib/state/jobs/jobSlice";
import JobDescription from "./JobDescription";
export default function Home() {
  const t = useTranslations('Home');

  // [TO-DO] get jobs from API
  const data = useSelector((state: any) => state.jobs)
  const [sizes, setSizes] = useState<(number | string)[]>(['30%', '70%']);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  return (
    <div className="flex flex-col ">
      <main className="flex-1 ">
        <div className="mt-4 ">


          <Flex vertical gap="middle" className="w-full  max-w-4xl mx-auto">
            <Splitter
              onResize={setSizes}
              className="max-h-[80vh] relative border rounded"
            >
              <Splitter.Panel size={sizes[0]} resizable={true}>
                <div>
                  <List
                    size="large"
                    header={<p className="text-center">available positions</p>}

                    dataSource={data}
                    renderItem={(item: Job) => <List.Item className="hover:bg-gray-200 cursor-pointer" onClick={_ => { setSelectedJob(item) }}>
                      <List.Item.Meta
                        title={<p className="font-bold text-lg">{item.roleName}</p>}
                        description={<div className="-translate-y-1 "><p className="text-black">{`${item.location} (${item.workMode})`}</p><p className="italic text-xs">{` posted on ${item.postedDate.toDateString()}`}</p></div>}
                      />
                    </List.Item>}
                  />

                </div>
              </Splitter.Panel>
              <Splitter.Panel size={sizes[1]}>
                <div>
                  {
                    !selectedJob ? (<h3 className="text-center my-6 text-gray-700 italic text-xl">Select a position from the list</h3>)
                      : (<JobDescription job={selectedJob} />)
                  }

                </div>
              </Splitter.Panel>
            </Splitter>
            <Flex gap="middle" justify="end">

              <Button onClick={() => setSizes(['30%', '70%'])}>Reset resize View</Button>
            </Flex>
          </Flex>

        </div>
      </main>
    </div>
  );

}
