var app = Vue.createApp({
  data() {
    return {
      randomNumbers: [],
      size: 60,
      currentIndex: -1,
      compareIndex: -1,
    };
  },
  methods: {
    createRandomList: function () {
      let A = [];
      for (let i = 0; i < this.size; i++) {
        let r = Math.floor(Math.random() * this.size) + 1;
        A.push(r);
      }
      this.randomNumbers = A;
    },

    bubbleSort: async function (A) {
      let changes = true;
      while (changes) {
        changes = false;
        for (let i = 0; i < A.length - 1; i++) {
          this.currentIndex = i;
          this.compareIndex = i + 1;
          if (A[i] > A[i + 1]) {
            [A[i], A[i + 1]] = [A[i + 1], A[i]];
            changes = true;
            await new Promise((resolve) => setTimeout(resolve, 0));
          }
        }
      }
      this.currentIndex = -1;
      this.compareIndex = -1;
    },

    shakerSort: async function (A) {
      let changes = true;
      let start = 0;
      let end = A.length - 1;
      while (changes) {
        changes = false;
        for (let i = start; i < end; i++) {
          this.currentIndex = i;
          this.compareIndex = i + 1;
          if (A[i] > A[i + 1]) {
            [A[i], A[i + 1]] = [A[i + 1], A[i]];
            changes = true;
            await new Promise((resolve) => setTimeout(resolve, 0));
          }
        }
        if (!changes) break;
        changes = false;
        end--;
        for (let i = end; i > start; i--) {
          this.currentIndex = i;
          this.compareIndex = i - 1;
          if (A[i] < A[i - 1]) {
            [A[i], A[i - 1]] = [A[i - 1], A[i]];
            changes = true;
            await new Promise((resolve) => setTimeout(resolve, 0));
          }
        }
        start++;
      }
      this.currentIndex = -1;
      this.compareIndex = -1;
    },

    countingSort: async function (A) {
      let B = Array.from({ length: Math.max(...A) + 1 }, () => 0);
      for (let i of A) {
        B[i]++;
      }
      let k = 0;
      for (let i = 0; i < B.length; i++) {
        let v = i;
        let count = B[i];
        for (let j = 0; j < count; j++) {
          A[k] = v;
          k++;
          this.currentIndex = k - 1;
          await new Promise((resolve) => setTimeout(resolve, 0));
        }
        this.currentIndex = -1;
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
      this.currentIndex = -1;
      this.compareIndex = -1;
    },
    mergeSort: async function (A, low, high) {
      if (low < high) {
        let mid = Math.floor((low + high) / 2);
        await this.mergeSort(A, low, mid);
        await this.mergeSort(A, mid + 1, high);
        await this.merge(A, low, mid, high);
      }
    },

    merge: async function (A, low, mid, high) {
      let L = A.slice(low, mid + 1);
      let R = A.slice(mid + 1, high + 1);
      let i = 0,
        j = 0,
        k = low;
      while (i < L.length && j < R.length) {
        if (L[i] <= R[j]) {
          A[k++] = L[i++];
        } else {
          A[k++] = R[j++];
        }
        this.randomNumbers = A.slice();
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
      while (i < L.length) {
        A[k++] = L[i++];
        this.randomNumbers = A.slice();
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
      while (j < R.length) {
        A[k++] = R[j++];
        this.randomNumbers = A.slice();
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
    },

    quickSort: async function (A, low, high) {
      if (low < high) {
        let pivotIndex = await this.partition(A, low, high);
        await this.quickSort(A, low, pivotIndex - 1);
        await this.quickSort(A, pivotIndex + 1, high);
      }
    },

    partition: async function (A, low, high) {
      let pivot = A[high];
      let i = low - 1;
      for (let j = low; j <= high - 1; j++) {
        if (A[j] < pivot) {
          i++;
          [A[i], A[j]] = [A[j], A[i]];
        }
      }
      [A[i + 1], A[high]] = [A[high], A[i + 1]];
      this.randomNumbers = A.slice();
      await new Promise((resolve) => setTimeout(resolve, 0));
      return i + 1;
    },

    getColor(index) {
      if (index === this.currentIndex) {
        return "#fefae0";
      } else if (index === this.compareIndex) {
        return "#283618";
      } else {
        return "#bc6c25";
      }
    },
  },
}).mount("#app");
