<script setup lang="ts">
import { computed, reactive } from 'vue'
import { calcConcrete } from '@/lib/concrete'
import { fmt, num } from '@/lib/units'
import ResultStat from '@/components/ResultStat.vue'

// 表单状态（字符串输入，计算时清洗为数字）
const form = reactive({
  lengthFt: '12',
  lengthIn: '0',
  widthFt: '12',
  widthIn: '0',
  thicknessIn: '4',
  wastePct: '10',
})

const result = computed(() =>
  calcConcrete({
    lengthFt: num(form.lengthFt),
    lengthIn: num(form.lengthIn),
    widthFt: num(form.widthFt),
    widthIn: num(form.widthIn),
    thicknessIn: num(form.thicknessIn),
    wastePct: num(form.wastePct),
  }),
)
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
        <label class="label" for="thickness">Thickness</label>
        <div class="input-suffix">
          <input
            id="thickness"
            v-model="form.thicknessIn"
            class="input"
            type="number"
            min="0"
            inputmode="decimal"
          />
          <span class="suffix">in</span>
        </div>
        <span class="field-hint">4" for patios & walkways · 5–6" for driveways</span>
      </div>

      <div class="field">
        <label class="label" for="waste">Waste allowance</label>
        <select id="waste" v-model="form.wastePct" class="select">
          <option value="0">None</option>
          <option value="5">5% — small, simple slabs</option>
          <option value="10">10% — recommended</option>
          <option value="15">15% — uneven ground / complex shapes</option>
        </select>
      </div>
    </form>

    <!-- 结果区 -->
    <div class="calc-results">
      <template v-if="result">
        <ResultStat
          primary
          label="Concrete needed"
          :value="fmt(result.cubicYards)"
          unit="cu yd"
          :note="`${fmt(result.cubicFeet)} cubic feet`"
        />
        <div class="calc-results-grid">
          <ResultStat label="80 lb bags" :value="fmt(result.bags80, 0)" note="0.60 cu ft per bag" />
          <ResultStat label="60 lb bags" :value="fmt(result.bags60, 0)" note="0.45 cu ft per bag" />
          <ResultStat
            label="Total weight"
            :value="fmt(result.weightLb, 0)"
            unit="lb"
            :note="`${fmt(result.weightLb / 2000)} tons`"
          />
          <ResultStat label="Waste included" :value="`${form.wastePct}%`" note="bag counts only" />
        </div>
      </template>
      <div v-else class="calc-empty">
        Enter length, width and thickness to see how much concrete you need.
      </div>
    </div>
  </div>
</template>
