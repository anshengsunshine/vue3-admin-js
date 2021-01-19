// 获取指定目录下，所有为 .svg 结尾的文件
const req = require.context("@/assets/svg", false, /\.svg$/);
// 解析获取的 .svg 文件的文件名称，并返回
const requireAll = (requireContext) => {
    return requireContext.keys().map(requireContext);
};
requireAll(req);