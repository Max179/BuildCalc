<script setup lang="ts">
import { computed, reactive } from 'vue'
import { calcFlooring } from '@/lib/flooring'
import { fmt, num } from '@/lib/units'
import ResultStat from '@/components/ResultStat.vue'

// 表单状态（字符串输入，计算时清洗为数字）
const form = reactive({
  lengthFt: '12',
  lengthIn: '6',
  widthFt: '10',
  widthIn: '0',
  wastePct: '10',
  boxCoverage: '20',
})

const result = computed(() =>
  calcFlooring({
    lengthFt: num(form.lengthFt),
    lengthIn: num(form.lengthIn),
    widthFt: num(form.widthFt),
    widthIn: num(form.widthIn),
    wastePct: num(form.wastePct),
    boxCoverage: num(form.boxCoverage),
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
        <label class="label" for="waste">Waste allowance</label>
        <select id="waste" v-model="form.wastePct" class="select">
          <option value="5">5% — simple square room</option>
          <option value="10">10% — recommended</option>
          <option value="15">15% — diagonal / herringbone layout</option>
        </select>
      </div>

      <div class="field">
        <label class="label" for="box">Box coverage</label>
        <div class="input-suffix">
          <input
            id="box"
            v-model="form.boxCoverage"
            class="input"
            type="number"
            min="0"
            inputmode="decimal"
          />
          <span class="suffix">sq ft / box</span>
        </div>
        <span class="field-hint">Printed on the carton — often 18–24 sq ft</span>
      </div>
    </form>

    <!-- 结果区 -->
    <div class="calc-results">
      <template v-if="result">
        <ResultStat
          primary
          label="Flooring needed"
          :value="fmt(result.needed)"
          unit="sq ft"
          :note="`includes ${form.wastePct}% waste`"
        />
        <div class="calc-results-grid">
          <ResultStat label="Room area" :value="fmt(result.roomArea)" unit="sq ft" note="before waste" />
          <ResultStat
            label="Boxes needed"
            :value="fmt(result.boxes, 0)"
            :note="`${fmt(result.boxCoverage)} sq ft per box`"
          />
          <ResultStat
            label="Waste included"
            :value="`${form.wastePct}%`"
            note="for cuts & mistakes"
          />
        </div>
      </template>
      <div v-else class="calc-empty">
        Enter room length and width to see how much flooring you need.
      </div>
    </div>
  </div>
</template>
