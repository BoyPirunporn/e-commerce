'use client' // Error boundaries must be Client Components

import { useStoreAlert } from '@/zustandStore/store-alert'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const alert = useStoreAlert();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
    alert.onOpen("Something went wrong!", {
      callback: reset
    })
  }, [error, alert.onOpen])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}