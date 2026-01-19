type PullQuoteProps = {
  children: string
}

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <figure className="my-12">
      <blockquote className="font-quote text-3xl sm:text-4xl leading-snug text-text-light">
        "{children}"
      </blockquote>
    </figure>
  )
}
