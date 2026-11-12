// 分页工具：把数组切成页面（page 从 0 开始）
function paginate(items, page, pageSize) {
  if (!Array.isArray(items) || page < 0 || pageSize <= 0) return [];
  const start = page * pageSize;
  const end = start + pageSize;
  return items.slice(start, end);
}

function average(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}

module.exports = { paginate, average };
