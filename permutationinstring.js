var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }
  let seen = {};

  for (let i = 0; i < s1.length; i++) {
    seen[s1[i]] = (seen[s1[i]] || 0) + 1;
  }
  let left = 0;
  let right = 0;
  let rest = s1.length;

  while (right < s2.length) {
    if (seen[s2[right]] > 0) {
      rest--;
    }
    seen[s2[right]]--;
    right++;
    if (rest === 0) {
      return true;
    }
    if (right - left === s1.length) {
      if (seen[s2[left]] >= 0) {
        rest++;
      }
      seen[s2[left]]++;
      left++;
    }
  }

  return false;
};

let s1 = "abc",
  s2 = "ccccbbbbaaaa";

console.log(checkInclusion(s1, s2));
