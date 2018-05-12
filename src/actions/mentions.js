export const mentionTypes = {
  CHECK_MENTIONS: 'mentions/CHECK_MENTIONS',
  CHECK_MENTIONS_SUCCESS: 'mentions/CHECK_MENTIONS_SUCCESS',
  CHECK_MENTIONS_FAIL: 'mentions/CHECK_MENTIONS_FAIL'
}

export const checkMentions = (handle) => (
  {
    type: mentionTypes.CHECK_MENTIONS,
    handle: handle
  }
)
