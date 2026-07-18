<script setup lang="ts">
import { computed, reactive } from 'vue'
import { calcRoofing } from '@/lib/roofing'
import { fmt, num } from '@/lib/units'
import ResultStat from '@/components/ResultStat.vue'

// 表单状态（字符串输入，计算时清洗为数字）
const form = reactive({
  lengthFt: '30',
  lengthIn: '0',
  widthFt: '40',
  widthIn: '0',
  pitchMultiplier: '1.118',
  wastePct: '10',
})

const result = computed(() =>
  calcRoofing({
    lengthFt: num(form.lengthFt),
    lengthIn: num(form.lengthIn),
    widthFt: num(form.widthFt),
    widthIn: num(form.widthIn),
    pitchMultiplier: num(form.pitchMultiplier),
    wastePct: num(form.wastePct),
  }),
)
</script>

<template>
  <div class="calc-grid">
    <!-- 输入区 -->
    <form class="calc-form" @submit.prevent>
      <fieldset class="calc-fieldset">
        <legend class="calc-legend">Footprint length</legend>
        <div class="input-pair">
          <div class="input-suffix">
            <input
              v-model="form.lengthFt"
              class="input"
              type="number"
              min="0"
              inputmode="decimal"
              aria-label="Footprint length in feet"
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
              aria-label="Footprint length in inches"
            />
            <span class="suffix">in</span>
          </div>
        </div>
      </fieldset>

      <fieldset class="calc-fieldset">
        <legend class="calc-legend">Footprint width</legend>
        <div class="input-pair">
          <div class="input-suffix">
            <input
              v-model="form.widthFt"
              class="input"
              type="number"
              min="0"
              inputmode="decimal"
              aria-label="Footprint width in feet"
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
              aria-label="Footprint width in inches"
            />
            <span class="suffix">in</span>
          </div>
        </div>
      </fieldset>

      <div class="field">
        <label class="label" for="pitch">Roof pitch</label>
        <select id="pitch" v-model="form.pitchMultiplier" class="select">
          <option value="1">Flat / low slope — × 1.00</option>
          <option value="1.054">4:12 — × 1.054</option>
          <option value="1.118">6:12 — × 1.118</option>
          <option value="1.202">8:12 — × 1.202</option>
          <option value="1.302">10:12 — × 1.302</option>
          <option value="1.414">12:12 — × 1.414</option>
        </select>
        <span class="field-hint">Measure the building footprint — the pitch factor adds the slope</span>
      </div>

      <div class="field">
        <label class="label" for="waste">Waste allowance</label>
        <select id="waste" v-model="form.wastePct" class="select">
          <option value="10">10% — simple gable roof</option>
          <option value="15">15% — hip roof / valleys & dormers</option>
        </select>
      </div>
    </form>

    <!-- 结果区 -->
    <div class="calc-results">
      <template v-if="result">
        <ResultStat
          primary
          label="Squares"
          :value="fmt(result.squares)"
          unit="squares"
          note="1 square = 100 sq ft"
        />
        <div class="calc-results-grid">
          <ResultStat
            label="Shingle bundles"
            :value="fmt(result.bundles, 0)"
            note="3 bundles per square · incl. waste"
          />
          <ResultStat label="Roof area" :value="fmt(result.roofArea)" unit="sq ft" note="footprint × pitch factor" />
          <ResultStat
            label="Underlayment rolls"
            :value="fmt(result.underlaymentRolls, 0)"
            note="400 sq ft per roll"
          />
        </div>
      </template>
      <div v-else class="calc-empty">
        Enter the roof footprint dimensions and pitch to estimate shingles and underlayment.
      </div>
    </div>
  </div>
</template>
