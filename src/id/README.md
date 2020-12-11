:::tip Buku ini ditulis untuk Vue.js 2 dan Vue Test Utils v1.
Temukan untuk  Vue.js 3 [disni](/v3/id)
:::

## Panduan Apa Ini ?

Selamat datang di handbook testing Vue.js!


Ini adalah kumpulan contoh singkat dan terfokus tentang cara menguji komponen Vue. Ia menggunakan `vue-test-utils`, pustaka resmi untuk menguji komponen Vue, dan Jest, kerangka pengujian modern. Ini mencakup API `vue-test-utils`, serta praktik terbaik untuk menguji komponen.

Setiap bagian tidak bergantung pada yang lain. Kita mulai dengan menyiapkan lingkungan dengan `vue-cli` dan menulis tes sederhana. Berikutnya, dua cara untuk merender komponen dibahas - `mount` dan` shallowMount`. Perbedaan akan ditunjukkan dan dijelaskan.

Sejak saat itu, kami membahas cara menguji berbagai skenario yang muncul saat menguji komponen, seperti menguji komponen yang:

- menerima props
- mengunakan computed property
- render component lain
- emit events

Dan seterusnya. Kami kemudian beralih ke kasus yang lebih menarik, seperti:

- praktik terbaik untuk menguji Vuex (di component, dan secara independen)
- Vue router test
- pengujian yang melibatkan komponen pihak ketiga

Kami juga akan mempelajari cara menggunakan Jest API untuk membuat pengujian kami lebih kuat, seperti:

- meniru repon API
- meniru dan memata matai module
- mengunakan snapsot

## Bacaan Lebih Lanjut

Sumber daya berguna lainnya termasuk:

- [Dokumentasi Resmi](https://vue-test-utils.vuejs.org/)
- Saya membuat seri gratis di Vue Test Utils + Vue 3: [YouTube playlist](https://www.youtube.com/playlist?list=PLC2LZCNWKL9ahK1IoODqYxKu5aA9T5IOA)
- [Vue.js 3 + Unit Testing Course](https://vuejs-course.com). VUEJS_COURSE_10_OFF untuk diskon $10 !
- [Kursus dari VueSchool](https://vueschool.io/courses/learn-how-to-test-vuejs-components?friend=vth) oleh beberapa kontributor inti Vue
