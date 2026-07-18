<script setup lang="ts">
import { computed, reactive } from 'vue'
import { calcDrywall } from '@/lib/drywall'
import { fmt, num } from '@/lib/units'
import ResultStat from '@/components/ResultStat.vue'

// 板尺寸选项（value 为单张覆盖面积 sq ft）
const sheetOptions = [
  { value: '32', label: '4 × 8 ft', hint: '32 sq ft per sheet' },
  { value: '40', label: '4 × 10 ft', hint: '40 sq ft per sheet' },
  { value: '48', label: '4 × 12 ft', hint: '48 sq ft per sheet' },
] as const

// 表单状态（字符串输入，计算时清洗为数字）
const form = reactive({
  lengthFt: '12',
  lengthIn: '0',
  widthFt: '12',
  widthIn: '0',
  heightFt: '8',
  doors: '1',
  windows: '1',
  sheetArea: '32',
})

const sheet = computed(() => sheetOptions.find((o) => o.value === form.sheetArea) ?? sheetOptions[0])

const result = computed(() =>
  calcDrywall({
    lengthFt: num(form.lengthFt),
    lengthIn: num(form.lengthIn),
    widthFt: num(form.widthFt),
    widthIn: num(form.widthIn),
    heightFt: num(form.heightFt),
    doors: num(form.doors),
    windows: num(form.windows),
    sheetArea: num(form.sheetArea),
  }),
)
</script>

<template>
  <div class="calc-grid">
    <!-- 输入区 -->
    <form class="calc-form" @submit.prevent>
      <fieldset class="calc-fieldset">
        <legend class="calc-legend">Room length</legend>
        <div class="input-pair">
          <div class="input-suffix">
            <input
              v-model="form.lengthFt"
              class="input"
              type="number"
              min="0"
              inputmode="decimal"
              aria-label="Room length in feet"
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
              aria-label="Room length in inches"
            />
            <span class="suffix">in</span>
          </div>
        </div>
      </fieldset>

      <fieldset class="calc-fieldset">
        <legend class="calc-legend">Room width</legend>
        <div class="input-pair">
          <div class="input-suffix">
            <input
              v-model="form.widthFt"
              class="input"
              type="number"
              min="0"
              inputmode="decimal"
              aria-label="Room width in feet"
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
              aria-label="Room width in inches"
            />
            <span class="suffix">in</span>
          </div>
        </div>
      </fieldset>

      <div class="field">
        <label class="label" for="wall-height">Wall height</label>
        <div class="input-suffix">
          <input
            id="wall-height"
            v-model="form.heightFt"
            class="input"
            type="number"
            min="0"
            inputmode="decimal"
          />
          <span class="suffix">ft</span>
        </div>
        <span class="field-hint">8 ft is standard · 9–10 ft in many newer homes</span>
      </div>

      <div class="field">
        <label class="label" for="doors">Doors</label>
        <input
          id="doors"
          v-model="form.doors"
          class="input"
          type="number"
          min="0"
          step="1"
          inputmode="numeric"
        />
        <span class="field-hint">21 sq ft deducted per standard 3×7 ft door</span>
      </div>

      <div class="field">
        <label class="label" for="windows">Windows</label>
        <input
          id="windows"
          v-model="form.windows"
          class="input"
          type="number"
          min="0"
          step="1"
          inputmode="numeric"
        />
        <span class="field-hint">15 sq ft deducted per average 3×5 ft window</span>
      </div>

      <div class="field">
        <label class="label" for="sheet-size">Sheet size</label>
        <select id="sheet-size" v-model="form.sheetArea" class="select">
          <option v-for="o in sheetOptions" :key="o.value" :value="o.value">
            {{ o.label }} — {{ o.hint }}
          </option>
        </select>
        <span class="field-hint">Walls only — order ~10% extra for cuts & damage</span>
      </div>
    </form>

    <!-- 结果区 -->
    <div class="calc-results">
      <template v-if="result">
        <ResultStat
          primary
          label="Sheets needed"
          :value="fmt(result.sheets, 0)"
          unit="sheets"
          :note="`${sheet.label} · ${sheet.hint}`"
        />
        <div class="calc-results-grid">
          <ResultStat label="Wall area" :value="fmt(result.wallArea)" unit="sq ft" note="after openings" />
          <ResultStat label="Sheet size" :value="sheet.label" :note="sheet.hint" />
          <ResultStat
            label="Openings deducted"
            :value="fmt(result.openingsDeducted, 0)"
            unit="sq ft"
            note="doors & windows"
          />
        </div>
      </template>
      <div v-else class="calc-empty">
        Enter room length, width and wall height to see how many drywall sheets you need.
      </div>
    </div>
  </div>
</template>
