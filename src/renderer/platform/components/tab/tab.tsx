import * as React from 'react'
import { CSSProperties } from 'react'
import { colors, spacing, fontSizes, Text, styles, cssProps } from '../..'
import { css, compose } from 'glamor'

export interface TabProps {
  text: string
  active?: boolean
  style?: CSSProperties | CSSProperties[]
  onClick: () => void
}

const BASE = compose(
  styles.noWindowDrag,
  cssProps({
    cursor: 'pointer',
    paddingTop: spacing.small,
    paddingBottom: spacing.small,
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
  }),
)

const ACTIVE = cssProps({
  borderBottom: colors.line,
  borderBottomWidth: 2,
  borderBottomStyle: 'solid',
})

const BASE_TEXT = cssProps({ color: colors.navInactive, fontSize: fontSizes.mediumPlus })
const ACTIVE_TEXT = cssProps({ color: colors.navActive })

/**
 * A tab component that you click on.  Not the tab panel.
 */
export function Tab(props: TabProps) {
  // work out the styles
  const styleProps = css(BASE, props.active && ACTIVE, props.style)
  const textStyle = css(BASE_TEXT, props.active && ACTIVE_TEXT)

  return (
    <div {...styleProps} onClick={props.onClick}>
      <Text style={textStyle} text={props.text} />
    </div>
  )
}
