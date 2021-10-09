import { MouseEventHandler } from "react"
import {Spinner} from "react-bootstrap";

type Props = {
  href?: string;
  type?: string;
  style?: object;
  title: string;
  target?: string;
  onClick?: MouseEventHandler;
  variant?: string;
  loading?: boolean;
}

export default function Button({
  href = '',
  variant = 'primary',
  style = {},
  title = '',
  target = '_self',
  onClick = console.log,
  type = '',
  loading
}: Props) {
  return type === 'submit' ? (<button className={`${variant} button`} type='submit' style={{ ...style }} onClick={onClick}>
      {loading ? (
        <span style={{marginRight: '8px'}}>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </span>
      ) : ''}
    <span>{title}</span>
  </button>
  ) : (<a href={href || '#'} target={target} className={`${variant} button`} type={type} style={{ ...style }} onClick={onClick}>
    <span>{title}</span>
  </a>
  )


}
