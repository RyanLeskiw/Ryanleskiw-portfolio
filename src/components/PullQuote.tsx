type PullQuoteProps = {
  children: string
}

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <figure className="my-12">
      <blockquote className="font-quote text-xl leading-relaxed text-text-light">
        "{children}"
      </blockquote>
    </figure>
  )
}
