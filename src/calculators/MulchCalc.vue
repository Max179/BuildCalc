<script setup lang="ts">
import { computed, reactive } from 'vue'
import { calcMulch } from '@/lib/mulch'
import { fmt, num } from '@/lib/units'
import ResultStat from '@/components/ResultStat.vue'

// 表单状态（字符串输入，计算时清洗为数字）
const form = reactive({
  lengthFt: '10',
  lengthIn: '0',
  widthFt: '10',
  widthIn: '0',
  depthIn: '3',
  wastePct: '5',
})

const result = computed(() =>
  calcMulch({
    lengthFt: num(form.lengthFt),
    lengthIn: num(form.lengthIn),
    widthFt: num(form.widthFt),
    widthIn: num(form.widthIn),
    depthIn: num(form.depthIn),
    wastePct: num(form.wastePct),
  }),
)
</script>

<template>
  <div class="calc-grid">
    <!-- 输入区 -->
    <form class="calc-form" @submit.prevent>
      <fieldset class="calc-fieldset">
        <legend class="calc-legend">Bed length</legend>
        <div class="input-pair">
          <div class="input-suffix">
            <input
              v-model="form.lengthFt"
              class="input"
              type="number"
              min="0"
              inputmode="decimal"
              aria-label="Bed length in feet"
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
              aria-label="Bed length in inches"
            />
            <span class="suffix">in</span>
          </div>
        </div>
      </fieldset>

      <fieldset class="calc-fieldset">
        <legend class="calc-legend">Bed width</legend>
        <div class="input-pair">
          <div class="input-suffix">
            <input
              v-model="form.widthFt"
              class="input"
              type="number"
              min="0"
              inputmode="decimal"
              aria-label="Bed width in feet"
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
              aria-label="Bed width in inches"
            />
            <span class="suffix">in</span>
          </div>
        </div>
      </fieldset>

      <div class="field">
        <label class="label" for="depth">Depth</label>
        <div class="input-suffix">
          <input
            id="depth"
            v-model="form.depthIn"
            class="input"
            type="number"
            min="0"
            inputmode="decimal"
          />
          <span class="suffix">in</span>
        </div>
        <span class="field-hint">2–3" to refresh existing beds · 3–4" for new beds</span>
      </div>

      <div class="field">
        <label class="label" for="waste">Waste allowance</label>
        <select id="waste" v-model="form.wastePct" class="select">
          <option value="0">None</option>
          <option value="5">5% — recommended</option>
          <option value="10">10% — uneven ground / curves</option>
        </select>
      </div>
    </form>

    <!-- 结果区 -->
    <div class="calc-results">
      <template v-if="result">
        <ResultStat
          primary
          label="Mulch needed"
          :value="fmt(result.cubicYards)"
          unit="cu yd"
          :note="`${fmt(result.cubicFeet)} cubic feet`"
        />
        <div class="calc-results-grid">
          <ResultStat label="Cubic feet" :value="fmt(result.cubicFeet)" unit="cu ft" note="before waste" />
          <ResultStat
            label="2 cu ft bags"
            :value="fmt(result.bags2cuft, 0)"
            note="standard bag size"
          />
          <ResultStat
            label="Depth"
            :value="fmt(result.depthIn, 0)"
            unit="in"
            note="1 cu yd covers 108 sq ft at 3&quot;"
          />
        </div>
      </template>
      <div v-else class="calc-empty">
        Enter bed length, width and depth to see how much mulch you need.
      </div>
    </div>
  </div>
</template>
