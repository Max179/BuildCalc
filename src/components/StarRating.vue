<script setup lang="ts">
// 星级评分：金色五角星，支持半星（如 4.5）
const props = defineProps<{ rating: number; count?: number }>()

const fullStars = Math.floor(props.rating)
const hasHalf = props.rating % 1 >= 0.5
const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)
</script>

<template>
  <span class="star-rating" :aria-label="`Rated ${rating} out of 5 stars`">
    <span class="stars" aria-hidden="true">
      <svg
        v-for="i in fullStars"
        :key="`full-${i}`"
        class="star"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
      <svg v-if="hasHalf" class="star" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="half-fill">
            <stop offset="50%" stop-color="currentColor" />
            <stop offset="50%" stop-color="var(--line)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half-fill)"
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
      <svg
        v-for="i in emptyStars"
        :key="`empty-${i}`"
        class="star star-empty"
        viewBox="0 0 24 24"
        fill="var(--line)"
      >
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
    </span>
    <span class="rating-num">{{ rating.toFixed(1) }}</span>
    <span v-if="count" class="rating-count">({{ count.toLocaleString() }})</span>
  </span>
</template>

<style scoped>
.star-rating {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.stars {
  display: inline-flex;
  gap: 2px;
}

.star {
  width: 16px;
  height: 16px;
  color: #b8860b;
}

.star-empty {
  color: var(--line);
}

.rating-num {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink);
}

.rating-count {
  font-size: 0.8rem;
  color: var(--ink-faint);
}
</style>
