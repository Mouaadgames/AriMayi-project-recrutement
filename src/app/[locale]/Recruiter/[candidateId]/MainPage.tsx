"use client"
import { useSelector, UseSelector } from "react-redux"
import { List } from "antd"
import { useRef } from "react"
import { Candidate } from "@/lib/state/candidates/candidatesSlice"
import { notFound } from "next/navigation"
import CopyButton from "./CopyButton"
import ViewPDF from "./ViewPDF"
import { useTranslations } from "next-intl"

function MainPage({ candId }: {
  candId: any
}) {
  const candidateData = useSelector((s: any) => s.candidates)
  const selectedCandidate = useRef<Candidate | undefined>(candidateData.find((v: Candidate) => v.id == candId.candidateId))
  console.log(candidateData.find((v: Candidate) => v.id == candId.candidateId));
  const t = useTranslations("candInfo")

  if (selectedCandidate.current == undefined)
    return <p className="text-center text-2xl my-4">not found</p>
  return (
    <div >
      <h2 className="text-center">candidate INFO</h2>
      <div className="mx-auto border max-w-xl flex flex-col shadow-md rounded-md p-2 h-[80vh]">
        <div className="pl-4 flex flex-col gap-1 my-4">
          <p> <b>{t("name")}</b> : {selectedCandidate.current?.name} <CopyButton text={selectedCandidate.current?.name} /></p>
          <p> <b>{t("email")}</b> : {selectedCandidate.current?.email} <CopyButton text={selectedCandidate.current?.email} /></p>
          <p> <b>{t("phone")}</b> : {selectedCandidate.current?.phone} <CopyButton text={selectedCandidate.current?.phone} /></p>
          <p> <b>{t("Job Title")}</b> : {selectedCandidate.current?.jobTitle}</p>
          <p> <b>{t("address")}</b> : {selectedCandidate.current?.address} <CopyButton text={selectedCandidate.current?.address} /></p>
        </div>
          <p className="flex items-center justify-center gap-1 mb-2">{t("Uploaded resume")} : <ViewPDF link={selectedCandidate.current?.cvLink}/></p>
        {/* @ts-ignore */}
        <iframe src={selectedCandidate.current?.cvLink} className="w-full flex-1 border rounded-md"></iframe>
      </div>
    </div>
  )
}
export default MainPage