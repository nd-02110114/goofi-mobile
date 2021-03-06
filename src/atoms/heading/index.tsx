import styled from 'styled-components/native'

export interface Props {
  bold?: boolean
  color?: string
  size?: number
}

const Heading = styled.Text<Props>`
  font-family: ${props => (props.bold ? 'bold' : 'regular')};
  color: ${props => props.color};
  font-size: ${props => props.size};
`

Heading.defaultProps = {
  bold: false,
  color: '#2c3e50',
  size: 20
}

export default Heading
