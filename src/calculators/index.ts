import type { Component } from 'vue'
import ConcreteCalc from './ConcreteCalc.vue'
import PaintCalc from './PaintCalc.vue'
import FlooringCalc from './FlooringCalc.vue'
import MulchCalc from './MulchCalc.vue'
import GravelCalc from './GravelCalc.vue'
import DrywallCalc from './DrywallCalc.vue'
import TileCalc from './TileCalc.vue'
import RoofingCalc from './RoofingCalc.vue'

// 计算器 slug → 工具组件注册表（CalculatorPage 按 slug 动态渲染）
export const calcComponents: Record<string, Component> = {
  concrete: ConcreteCalc,
  paint: PaintCalc,
  flooring: FlooringCalc,
  mulch: MulchCalc,
  gravel: GravelCalc,
  drywall: DrywallCalc,
  tile: TileCalc,
  roofing: RoofingCalc,
}
