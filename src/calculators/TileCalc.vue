<script setup lang="ts">
import { computed, reactive } from 'vue'
import { calcTile } from '@/lib/tile'
import { fmt, num } from '@/lib/units'
import ResultStat from '@/components/ResultStat.vue'

// 瓷砖尺寸选项（value 为 "长x宽" 英寸，计算时拆分）
const tileOptions = [
  { value: '12x12', label: '12 × 12 in' },
  { value: '12x24', label: '12 × 24 in' },
  { value: '18x18', label: '18 × 18 in' },
  { value: '6x6', label: '6 × 6 in' },
] as const

// 表单状态（字符串输入，计算时清洗为数字）
const form = reactive({
  lengthFt: '10',
  lengthIn: '0',
  widthFt: '12',
  widthIn: '0',
  tileSize: '12x12',
  wastePct: '10',
})

const tile = computed(() => tileOptions.find((o) => o.value === form.tileSize) ?? tileOptions[0])

const result = computed(() => {
  const [tileLengthIn, tileWidthIn] = form.tileSize.split('x').map(Number)
  return calcTile({
    lengthFt: num(form.lengthFt),
    lengthIn: num(form.lengthIn),
    widthFt: num(form.widthFt),
    widthIn: num(form.widthIn),
    tileLengthIn,
    tileWidthIn,
    wastePct: num(form.wastePct),
  })
})
</script>

<template>
  <div class="calc-grid">
    <!-- 输入区 -->
    <form class="calc-form" @submit.prevent>
      <fieldset class="calc-fieldset">
        <legend class="calc-legend">Length</legend>
        <div class="input-pair">
          <div class="input-suffix">
            <input
              v-model="form.lengthFt"
              class="input"
              type="number"
              min="0"
              inputmode="decimal"
              aria-label="Length in feet"
            />
            <span class="suffix">ft</span>
          </div>
          <div class="input-suffix">
            <input
              v-model="form.lengthIn"
              class="input"
              type="number"
              min="0"
              inputmode="decimal"
              aria-label="Length in inches"
            />
            <span class="suffix">in</span>
          </div>
        </div>
      </fieldset>

      <fieldset class="calc-fieldset">
        <legend class="calc-legend">Width</legend>
        <div class="input-pair">
          <div class="input-suffix">
            <input
              v-model="form.widthFt"
              class="input"
              type="number"
              min="0"
              inputmode="decimal"
              aria-label="Width in feet"
            />
            <span class="suffix">ft</span>
          </div>
          <div class="input-suffix">
            <input
              v-model="form.widthIn"
              class="input"
              type="number"
              min="0"
              inputmode="decimal"
              aria-label="Width in inches"
            />
            <span class="suffix">in</span>
          </div>
        </div>
      </fieldset>

      <div class="field">
        <label class="label" for="tile-size">Tile size</label>
        <select id="tile-size" v-model="form.tileSize" class="select">
          <option v-for="o in tileOptions" :key="o.value" :value="o.value">{{ o.label }}</option>
        </select>
      </div>

      <div class="field">
        <label class="label" for="waste">Waste allowance</label>
        <select id="waste" v-model="form.wastePct" class="select">
          <option value="10">10% — straight layout</option>
          <option value="15">15% — diagonal layout</option>
          <option value="20">20% — herringbone / many corners</option>
        </select>
        <span class="field-hint">Use 15–20% for diagonal layouts or intricate patterns</span>
      </div>
    </form>

    <!-- 结果区 -->
    <div class="calc-results">
      <template v-if="result">
        <ResultStat
          primary
          label="Tiles needed"
          :value="fmt(result.tiles, 0)"
          unit="tiles"
          :note="`${tile.label} · ${fmt(result.tileArea)} sq ft each`"
        />
        <div class="calc-results-grid">
          <ResultStat label="Area to tile" :value="fmt(result.area)" unit="sq ft" />
          <ResultStat label="Tile size" :value="tile.label" :note="`${fmt(result.tileArea)} sq ft per tile`" />
          <ResultStat label="Waste included" :value="`${form.wastePct}%`" note="for cuts & breakage" />
        </div>
      </template>
      <div v-else class="calc-empty">Enter the length and width of the area to see how many tiles you need.</div>
    </div>
  </div>
</template>
