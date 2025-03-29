import MainPage from "./MainPage"

async function page({ params }: {
  params: Promise<{ locale: string }>
}) {
  return (
      <MainPage candId={await params}/>
  )
}
export default page