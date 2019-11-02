import format from 'date-fns/format'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import id from 'date-fns/locale/id'

export const dateFormat = (date, fmt) => format(date, fmt, {locale: id})

export const timeago = (date) => formatDistanceToNow(date, {locale: id})
