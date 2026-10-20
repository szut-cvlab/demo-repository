# SZUT-CVLab 标识使用规范（速览版）

符号：**框瞳 Viewfinder** —— 检测框四角包住一枚瞳孔。
来源：CV 的原生语言（bounding box）+ 视觉的瞳孔；「框住即看见」。

## 色彩

| 用途 | 色值 |
| --- | --- |
| 墨青（框角、标题文字） | `#0F3A3E` |
| 测绘橙（瞳孔、强调） | `#D96B2B` |
| 图纸米白（底色） | `#F4F2EA` |

- 单色版：全黑或全白均成立（见 `final-symbol.svg` 导出物）。
- 深色底一律用**反白版** `final-symbol-reversed.svg`（白框 + 橙瞳），不要把墨青版直接放到深色底上。

## 文件

| 文件 | 用途 |
| --- | ---|
| `final-symbol.svg` | 主符号（双色，描边已转实心轮廓） |
| `final-symbol-small.svg` | ≤32px 场景（加粗角线、放大瞳孔） |
| `final-symbol-reversed.svg` | 深色底反白版 |
| `final-horizontal.svg` / `final-stacked.svg` | 横排 / 纵排组合 |
| `favicon.ico`、`favicon-*.png`、`apple-touch-icon.png`、`icon-*.png`、`site.webmanifest` | Web 图标全套 |

## 最小尺寸与留白

- 符号最小 16px（小尺寸版）；横排组合最小高度 24px。
- 留白：符号四周保留不小于**一个框角臂长**（符号高度的约 22%）的净空。

## 禁止

- 拉伸变形、改变框角与瞳孔的比例或圆角；
- 给瞳孔换色/加渐变/加发光；
- 把符号放进相册边框、六边形等容器里二次装饰；
- 用其他字体替代组合标字型后直接对外发布（见下方待办）。

## 待办（对外发布前必须处理）

1. **文字转轮廓**：`final-horizontal.svg` / `final-stacked.svg` 中的中英文字当前为 live text（PingFang SC / 系统黑体，仅限界面使用）。印刷、PPT、周边物料前须转为曲线，或取得可嵌入 Logo 的字体授权。
2. **商标检索**：建议在中国商标网做近似图形检索（第九类科学仪器、第四十二类技术服务），并用反向图片搜索核查在先使用。
