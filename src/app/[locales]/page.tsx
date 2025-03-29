import Image from "next/image";
import {useTranslations} from 'next-intl';


export default function Home() {

  const t = useTranslations('Home');
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main >
        <h1 className="text-4xl font-bold text-center">{t("title")}</h1>
      </main>
    </div>
  );
}
