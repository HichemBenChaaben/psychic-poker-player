interface CardProps {
  name: string;
}
export default function CardHelper(props: CardProps) {
  return (
    <span className="card-helper">
      {props.name}
    </span>
  )
}