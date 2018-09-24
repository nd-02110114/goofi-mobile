import * as React from 'react'
import { Heading, ColoredLabel } from '../../atoms'
import { WHITE } from '../../../assets'

interface Props {
  count: number
}

const IssueInfo = (props: Props) => (
  <ColoredLabel width={100}>
    <Heading size={15} color={WHITE}>
      {`${props.count.toString()} Issues`}
    </Heading>
  </ColoredLabel>
)

export default IssueInfo
