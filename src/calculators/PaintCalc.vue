<script setup lang="ts">
import { computed, reactive } from 'vue'
import { calcPaint } from '@/lib/paint'
import { fmt, num } from '@/lib/units'
import ResultStat from '@/components/ResultStat.vue'

// 表单状态（字符串输入，计算时清洗为数字）
const form = reactive({
  lengthFt: '12',
  lengthIn: '0',
  widthFt: '12',
  widthIn: '0',
  heightFt: '8',
  doors: '1',
  windows: '2',
  coats: '2',
})

const result = computed(() =>
  calcPaint({
    lengthFt: num(form.lengthFt),
    lengthIn: num(form.lengthIn),
    widthFt: num(form.widthFt),
    widthIn: num(form.widthIn),
    heightFt: num(form.heightFt),
    doors: num(form.doors),
    windows: num(form.windows),
    coats: num(form.coats),
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
        <label class="label" for="height">Ceiling height</label>
        <div class="input-suffix">
          <input
            id="height"
            v-model="form.heightFt"
            class="input"
            type="number"
            min="0"
            inputmode="decimal"
          />
          <span class="suffix">ft</span>
        </div>
        <span class="field-hint">8 ft is standard · 9–10 ft in newer homes</span>
      </div>

      <fieldset class="calc-fieldset">
        <legend class="calc-legend">Openings</legend>
        <div class="input-pair">
          <div class="input-suffix">
            <input
              v-model="form.doors"
              class="input"
              type="number"
              min="0"
              step="1"
              inputmode="numeric"
              aria-label="Number of doors"
            />
            <span class="suffix">doors</span>
          </div>
          <div class="input-suffix">
            <input
              v-model="form.windows"
              class="input"
              type="number"
              min="0"
              step="1"
              inputmode="numeric"
              aria-label="Number of windows"
            />
            <span class="suffix">windows</span>
          </div>
        </div>
        <span class="field-hint">Subtracts 21 sq ft per door · 15 sq ft per window</span>
      </fieldset>

      <div class="field">
        <label class="label" for="coats">Number of coats</label>
        <select id="coats" v-model="form.coats" class="select">
          <option value="1">1 coat — same-color refresh</option>
          <option value="2">2 coats — recommended</option>
          <option value="3">3 coats — bold color change</option>
        </select>
      </div>
    </form>

    <!-- 结果区 -->
    <div class="calc-results">
      <template v-if="result">
        <ResultStat
          primary
          label="Paint needed"
          :value="fmt(result.gallons, 0)"
          unit="gal"
          :note="`${fmt(result.quarts, 0)} quarts`"
        />
        <div class="calc-results-grid">
          <ResultStat
            label="Wall area"
            :value="fmt(result.wallArea)"
            unit="sq ft"
            note="doors & windows subtracted"
          />
          <ResultStat label="Coats" :value="fmt(result.coats, 0)" note="per wall" />
          <ResultStat
            label="Quarts equivalent"
            :value="fmt(result.quarts, 0)"
            unit="qt"
            note="for trim & touch-ups"
          />
          <ResultStat
            label="Coverage rate"
            :value="fmt(result.coverageRate, 0)"
            unit="sq ft/gal"
            note="typical interior paint"
          />
        </div>
      </template>
      <div v-else class="calc-empty">
        Enter room dimensions and ceiling height to see how much paint you need.
      </div>
    </div>
  </div>
</template>
