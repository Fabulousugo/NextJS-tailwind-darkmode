import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'


export default function Home() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto">

          <h1 className="pb-10 text-3xl font-bold underline">
            Hello world!
          </h1>
          <select value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

      </div>

    </>
  )
}
