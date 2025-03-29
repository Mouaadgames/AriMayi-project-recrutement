"use client"
import { Link } from "@/i18n/navigation"
import { addCandidate } from "@/lib/state/candidates/candidatesSlice"
import { Job } from "@/lib/state/jobs/jobSlice"
import { Button, Input } from "antd"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"



function JobDescription({ job, setSelectedJob }: { job: Job, setSelectedJob: any }) {
  const formRef = useRef<HTMLDivElement>(null)
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    // every thing should be filled
    setIsFilled(!!(name && email && phone && address))
  }, [name, email, phone, address]);

  const dispatch = useDispatch()
  return (
    <div className="p-3 ">
      <div className="flex justify-between items-center">
        <div>
          <button onClick={_ => setSelectedJob(null)} className="hover:bg-gray-200 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">{job.roleName}</h3>
          <p className="text-xs italic text-gray-600">{job.location} - ({job.workMode}) / posted on : {(new Date(job.postedDate)).toDateString()}</p>
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
            <Input value={name} onChange={e => setName(e.target.value)} />
          </label>

          <label >email address
            <Input value={email} onChange={e => setEmail(e.target.value)} />
          </label>

          <label >phone number
            <Input value={phone} onChange={e => setPhone(e.target.value)} />
          </label>

          <label >address
            <Input value={address} onChange={e => setAddress(e.target.value)} />
          </label>

          <Button className="mx-auto " type="primary" disabled={!isFilled} onClick={_ => {
            setIsFilled(false)
            dispatch(addCandidate({
              id: Math.floor(Math.random() * 10e10),
              appliedTime: Date.now(),
              cvLink: "/example.pdf",
              email,
              jobId: job.id,
              name,
              state: "pending",
              phone,
              address
            }))
            location.href = "/thankyou"
          }}>Submit</Button>
        </div>
      </div>
    </div>
  )
}
export default JobDescription