import { HOURS_IN_DAY, MIDNINGHT_HOUR } from '@/constants/main'
import { PAGES } from '@/constants/routes'

export function isPageValid(currentPage) {
  return !!PAGES[currentPage]
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function isSelectOptionsValid(options) {
  return options.every(isSelectOptionValid)
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isNumberOrNull(value) {
  return isNull(value) || isNumber(value)
}

function isSelectOptionValid(option) {
  return isNumber(option.value) && isString(option.label)
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNINGHT_HOUR, HOURS_IN_DAY)
}

function isBetween(value, min, max) {
  return value >= min && value <= max
}

function isNull(value) {
  return value === null
}

function isUndefined(value) {
  return value === undefined
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}
