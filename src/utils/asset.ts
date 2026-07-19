// public/ 静态资源的 base 感知路径（GitHub Pages 子路径部署时自动带上 BASE_URL 前缀）
export const asset = (path: string): string => `${import.meta.env.BASE_URL}${path}`
