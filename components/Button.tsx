import { MouseEventHandler } from "react"

type Props = {
  href?: string;
  type?: string;
  style?: object;
  title: string;
  target?: string;
  onClick?: MouseEventHandler;
  variant?: string;
}

export default function Button({
  href = '',
  variant = 'primary',
  style = {},
  title = '',
  target = '_self',
  onClick = console.log,
  type = ''
}: Props) {
  return type === 'submit' ? (<button className={`${variant} button`} type='submit' style={{ ...style }} onClick={onClick}>
    <span>{title}</span>
  </button>
  ) : (<a href={href || '#'} target={target} className={`${variant} button`} type={type} style={{ ...style }} onClick={onClick}>
    <span>{title}</span>
  </a>
  )


}
