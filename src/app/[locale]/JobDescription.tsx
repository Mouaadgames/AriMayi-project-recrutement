"use client"
import { Job } from "@/lib/state/jobs/jobSlice"
import { Button, Input } from "antd"
import { useRef } from "react"



function JobDescription({ job }: { job: Job }) {
  const formRef = useRef<HTMLDivElement>(null)
  return (
    <div className="p-3 ">
      <div className="flex justify-between">

        <div className=" ">
          <h3 className="text-2xl font-bold">{job.roleName}</h3>
          <p className="text-xs italic text-gray-600">{job.location} - ({job.workMode}) / posted on : {job.postedDate.toDateString()}</p>
          <p></p>
        </div>

        <div className="">
          <Button type="primary" size="large" onClick={_ => {
            formRef.current?.scrollIntoView({
              behavior: 'smooth'
            })
          }} >Apply</Button>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-center my-6 mb-2">About this job</h2>
      <div className="whitespace-pre-line">
        {job.description}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-center my-6 mb-2">Apply form</h2>
        <div ref={formRef} className="max-w-sm mx-auto flex flex-col gap-2">

          <label >full name
            <Input />
          </label>

          <label >email address
            <Input />
          </label>

          <label >phone number
            <Input />
          </label>

          <label >address
            <Input />
          </label>

          <Button className="mx-auto " type="primary">Submit</Button>
        </div>
      </div>
    </div>
  )
}
export default JobDescription