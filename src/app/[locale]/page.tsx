"use client"

import { Flex } from 'antd';
import { useState } from "react";

import { useSelector } from "react-redux";
import { Job } from "@/lib/state/jobs/jobSlice";
import JobDescription from "./JobDescriptionAndForm";
import JobsList from "./JobsList";
export default function Home() {

  // [TO-DO] get jobs from API
  const data = useSelector((state: any) => state.jobs)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  return (
    <div className="flex flex-col ">
      <main className="flex-1 ">
        <div className="mt-4 ">


          <Flex vertical gap="middle" className="w-full max-h-[80vh] overflow-y-scroll relative border rounded max-w-4xl mx-auto">
            {!selectedJob ? (
              <JobsList data={data} setSelectedJob={setSelectedJob} />
            ) : (
              <JobDescription job={selectedJob} setSelectedJob={setSelectedJob} />
            )
            }
          </Flex>

        </div>
      </main >
    </div >
  );

}
