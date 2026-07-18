<script setup lang="ts">
import { computed, reactive } from 'vue'
import { calcGravel } from '@/lib/gravel'
import { fmt, num } from '@/lib/units'
import ResultStat from '@/components/ResultStat.vue'

// 表单状态（字符串输入，计算时清洗为数字）
const form = reactive({
  lengthFt: '12',
  lengthIn: '0',
  widthFt: '20',
  widthIn: '0',
  depthIn: '4',
  wastePct: '5',
})

const result = computed(() =>
  calcGravel({
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
        <span class="field-hint">2–3" for walkways · 4" compacted for driveways</span>
      </div>

      <div class="field">
        <label class="label" for="waste">Waste allowance</label>
        <select id="waste" v-model="form.wastePct" class="select">
          <option value="0">None</option>
          <option value="5">5% — recommended</option>
          <option value="10">10% — compaction &amp; uneven ground</option>
        </select>
      </div>
    </form>

    <!-- 结果区 -->
    <div class="calc-results">
      <template v-if="result">
        <ResultStat
          primary
          label="Gravel needed"
          :value="fmt(result.tons)"
          unit="tons"
          :note="`${fmt(result.cubicYards)} cubic yards`"
        />
        <div class="calc-results-grid">
          <ResultStat label="Cubic yards" :value="fmt(result.cubicYards)" unit="cu yd" note="bulk order unit" />
          <ResultStat label="Cubic feet" :value="fmt(result.cubicFeet)" unit="cu ft" note="before waste" />
          <ResultStat
            label="50 lb bags"
            :value="fmt(result.bags50lb, 0)"
            note="0.5 cu ft per bag"
          />
        </div>
      </template>
      <div v-else class="calc-empty">
        Enter length, width and depth to see how much gravel you need.
      </div>
    </div>
  </div>
</template>
