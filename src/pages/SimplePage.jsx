export default function SimplePage({ title }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <h1 className="text-3xl font-extrabold text-midnight dark:text-white">{title}</h1>
      <p className="text-neutral-400 dark:text-neutral-500">페이지 준비 중입니다.</p>
    </div>
  )
}
