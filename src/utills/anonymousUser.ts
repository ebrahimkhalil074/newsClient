export function getAnonymousUserId() {
  let anonId = localStorage.getItem('anonUserId');
  if (!anonId) {
    anonId = crypto.randomUUID(); // UUID তৈরি করবে
    localStorage.setItem('anonUserId', anonId);
  }
  return anonId;
}