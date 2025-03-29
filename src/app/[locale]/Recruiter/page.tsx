'use client'
import { useSelector } from "react-redux"
import { List } from "antd"
import { Candidate } from "@/lib/state/candidates/candidatesSlice"

function page() {
  const data = useSelector((s: any) => s.candidates)
  return (
    <div className="max-w-2xl mx-auto">
      <List
        size="large"
        header={<p className="text-center">Candidate List</p>}

        dataSource={data}
        renderItem={(item: Candidate) => <List.Item className="hover:bg-gray-200 cursor-pointer" onClick={_ => { location.href = "/Recruiter/" + item.id }}>
          <List.Item.Meta
            title={<p className="font-bold text-lg">{item.name}</p>}
            description={<div className="-translate-y-1 "><p className="italic text-xs">{` applied on ${(new Date(item.appliedTime)).toDateString()}`}</p></div>}
          />
        </List.Item>}
      />
    </div>
  )
}
export default page