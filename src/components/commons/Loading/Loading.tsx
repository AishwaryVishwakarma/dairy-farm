import React from 'react'
import ReactLoading from 'react-loading'

interface PropType {
  loadingType?:
    | 'blank'
    | 'balls'
    | 'bars'
    | 'bubbles'
    | 'cubes'
    | 'cylon'
    | 'spin'
    | 'spinningBubbles'
    | 'spokes'
  color?: string
  height: number
  width: number
}

const Loading: React.FC<PropType> = ({
  loadingType = 'bubbles',
  color = '#4c52ea',
  height,
  width
}) => (
  <ReactLoading
    type={loadingType}
    color={color}
    height={height}
    width={width}
  />
)

export default Loading
