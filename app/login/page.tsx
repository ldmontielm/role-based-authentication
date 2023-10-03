import { FormLogin, TitleLogin } from "./components"
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-24">
      <div className="z-10 max-w-5xl h-full w-full items-center justify-center text-sm flex">
        <div className="md:w-96">
          <TitleLogin />
          <FormLogin />
        </div>
      </div>
    </main>
  )
}
