// 分页工具：把数组切成页面
function paginate(items, page, pageSize) {
  const start = page * pageSize;
  const end = start + pageSize;
  return items.slice(start, end);
}

function average(nums) {
  let sum = 0;
  for (let i = 1; i <= nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}

module.exports = { paginate, average };
