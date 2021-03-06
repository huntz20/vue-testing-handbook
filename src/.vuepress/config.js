module.exports = {
  base: '/vue-testing-handbook/',
  title: 'Vue Testing Handbook',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-122389064-1',
      },
    ],
  ],
  head: [
    [
      'link',
      {
        rel: 'icon',
        href:
          'https://lmiller1990.github.io/vue-testing-handbook/img/favicon.png',
      },
    ],
    ['meta', { property: 'og:title', content: 'Vue Testing Handbook' }],
    ['meta', { property: 'og:description', content: 'Vue testing handbook' }],
    ['meta', { property: 'og:type', content: 'website' }],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://lmiller1990.github.io/vue-testing-handbook/',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content:
          'https://lmiller1990.github.io/vue-testing-handbook/img/og.png',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Testing Handbook',
    },
    '/v3/': {
      lang: 'en-AU',
      title: 'Vue Testing Handbook',
    },
    '/ja/': {
      lang: 'ja-JP',
      title: 'Vueテストハンドブック',
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Руководство по тестированию Vue приложений (Vue.js 2)',
    },
    '/v3/ru/': {
      lang: 'ru-UA',
      title: 'Руководство по тестированию Vue приложений (Vue.js 3)',
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      title: 'Vue测试指南',
    },
    '/ko/': {
      lang: 'ko',
      title: 'Vue 테스팅 핸드북',
    },
    '/id/': {
      lang: 'id',
      title: 'Panduan testing Vue',
    },
  },
  themeConfig: {
    repo: 'lmiller1990/vue-testing-handbook',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        sidebar: [
          ['/', 'Welcome'],
          ['/setting-up-for-tdd', 'Setting up for TDD'],
          ['/rendering-a-component', 'Rendering Components'],
          ['/components-with-props', 'Testing Props'],
          ['/computed-properties', 'Computed Properties'],
          ['/simulating-user-input', 'Simulating user input'],
          ['/testing-emitted-events', 'Testing emitted events'],
          ['/mocking-global-objects', 'Mocking global objects'],
          ['/stubbing-components', 'Stubbing components'],
          [
            '/finding-elements-and-components',
            'Finding elements and components',
          ],
          ['/testing-vuex', 'Testing Vuex'],
          ['/vuex-mutations', 'Vuex - Mutations'],
          ['/vuex-actions', 'Vuex - Actions'],
          ['/vuex-getters', 'Vuex - Getters'],
          ['/vuex-in-components', 'Vuex in components - $state and getters'],
          [
            '/vuex-in-components-mutations-and-actions',
            'Vuex in components - mutations and actions',
          ],
          ['/vue-router', 'Vue Router'],
          ['/composition-api', 'Composition API'],
          ['/reducing-boilerplate-in-tests', 'Reducing Boilerplate'],
          ['/jest-mocking-modules', 'Jest - mocking modules'],
        ],
      },
      '/v3/': {
        label: 'v3',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        sidebar: [
          ['/v3/', 'Welcome'],
          ['/v3/setting-up-for-tdd', 'Setting up for TDD'],
          ['/v3/rendering-a-component', 'Rendering Components'],
          ['/v3/components-with-props', 'Testing Props'],
          ['/v3/computed-properties', 'Computed Properties'],
          ['/v3/simulating-user-input', 'Simulating user input'],
          ['/v3/testing-emitted-events', 'Testing emitted events'],
          ['/v3/mocking-global-objects', 'Mocking global objects'],
          ['/v3/stubbing-components', 'Stubbing components'],
          [
            '/v3/finding-elements-and-components',
            'Finding elements and components',
          ],
          ['/v3/testing-vuex', 'Testing Vuex'],
          ['/v3/vuex-mutations', 'Vuex - Mutations'],
          ['/v3/vuex-actions', 'Vuex - Actions'],
          ['/v3/vuex-getters', 'Vuex - Getters'],
          ['/v3/vuex-in-components', 'Vuex in components - $state and getters'],
          [
            '/v3/vuex-in-components-mutations-and-actions',
            'Vuex in components - mutations and actions',
          ],
          ['/v3/vue-router', 'Vue Router'],
          ['/v3/composition-api', 'Composition API'],
          ['/v3/reducing-boilerplate-in-tests', 'Reducing Boilerplate'],
          ['/v3/jest-mocking-modules', 'Jest - mocking modules'],
        ],
      },
      '/ja/': {
        label: '日本語',
        selectText: '言語',
        lastUpdated: '更新',
        editLinkText: 'GitHub上で編集',
        sidebar: [
          ['/ja/', 'ようこそ'],
          ['/ja/setting-up-for-tdd', 'テスト駆動開発環境を準備'],
          ['/ja/rendering-a-component', 'コンポーネントをレンダー'],
          ['/ja/components-with-props', 'プロップスのテスト'],
          ['/ja/computed-properties', '算出プロパティ'],
          ['/ja/simulating-user-input', 'ユーザー入力をシミュレーション'],
          ['/ja/testing-emitted-events', '発生したイベントのテスト'],
          ['/ja/mocking-global-objects', 'グローバルオブジェクトのモック'],
          ['/ja/stubbing-components', 'コンポーネントをスタブする'],
          [
            '/ja/finding-elements-and-components',
            '要素とコンポーネントを検索する',
          ],
          ['/ja/testing-vuex', 'Vuexのテストの紹介'],
          ['/ja/vuex-mutations', 'Vuex - ミューテーション'],
          ['/ja/vuex-actions', 'Vuex - アクション'],
          ['/ja/vuex-getters', 'Vuex - ゲッター'],
          ['/ja/vuex-in-components', 'コンポーネントの中でVuexのテスト'],
          [
            '/ja/vuex-in-components-mutations-and-actions.md',
            'Vuex in components - mutations and actions',
          ],
          ['/ja/vue-router', 'Vueルーター'],
          ['/ja/jest-mocking-modules', 'Jestでモジュールをモック'],
          ['/ja/composition-api', 'Composition API'],
        ],
      },
      '/ru/': {
        label: 'Русский (Vue.js 2)',
        selectText: 'Переводы',
        lastUpdated: 'Последнее обновление',
        editLinkText: 'Редактировать эту страницу на GitHub',
        sidebar: [
          ['/ru/', 'Введение'],
          ['/ru/setting-up-for-tdd', 'Подготовка к TDD'],
          ['/ru/rendering-a-component', 'Отрисовка компонентов'],
          ['/ru/components-with-props', 'Тестирование входных параметров'],
          ['/ru/computed-properties', 'Вычисляемые свойства'],
          [
            '/ru/simulating-user-input',
            'Симулирование пользовательского ввода',
          ],
          [
            '/ru/testing-emitted-events',
            'Тестирование пользовательских событий',
          ],
          ['/ru/mocking-global-objects', 'Мокаем глобальные объекты'],
          ['/ru/stubbing-components', 'Заглушки для компонентов'],
          [
            '/ru/finding-elements-and-components',
            'Поиск элементов и компонентов',
          ],
          ['/ru/testing-vuex', 'Тестирование Vuex'],
          ['/ru/vuex-mutations', 'Vuex - Мутации'],
          ['/ru/vuex-actions', 'Vuex - Действия'],
          ['/ru/vuex-getters', 'Vuex - Геттеры'],
          ['/ru/vuex-in-components', 'Vuex в компонентах - $state и геттеры'],
          [
            '/ru/vuex-in-components-mutations-and-actions',
            'Vuex в компонентах - мутации и действия',
          ],
          ['/ru/vue-router', 'Vue Router'],
          ['/ru/composition-api', 'Composition API'],
          ['/ru/reducing-boilerplate-in-tests', 'Уменьшаем шаблонный код'],
          ['/ru/jest-mocking-modules', 'Jest - мокаем модули'],
        ],
      },
      '/v3/ru/': {
        label: 'Русский (Vue.js 3)',
        selectText: 'Переводы',
        lastUpdated: 'Последнее обновление',
        editLinkText: 'Редактировать эту страницу на GitHub',
        sidebar: [
          ['/v3/ru/', 'Введение'],
          ['/v3/ru/setting-up-for-tdd', 'Подготовка к TDD'],
          ['/v3/ru/rendering-a-component', 'Отрисовка компонентов'],
          ['/v3/ru/components-with-props', 'Тестирование входных параметров'],
          ['/v3/ru/computed-properties', 'Вычисляемые свойства'],
          [
            '/v3/ru/simulating-user-input',
            'Симулирование пользовательского ввода',
          ],
          [
            '/v3/ru/testing-emitted-events',
            'Тестирование пользовательских событий',
          ],
          ['/v3/ru/mocking-global-objects', 'Мокаем глобальные объекты'],
          ['/v3/ru/stubbing-components', 'Заглушки для компонентов'],
          [
            '/v3/ru/finding-elements-and-components',
            'Поиск элементов и компонентов',
          ],
          ['/v3/ru/testing-vuex', 'Тестирование Vuex'],
          ['/v3/ru/vuex-mutations', 'Vuex - Мутации'],
          ['/v3/ru/vuex-actions', 'Vuex - Действия'],
          ['/v3/ru/vuex-getters', 'Vuex - Геттеры'],
          ['/v3/ru/vuex-in-components', 'Vuex в компонентах - $state и геттеры'],
          [
            '/v3/ru/vuex-in-components-mutations-and-actions',
            'Vuex в компонентах - мутации и действия',
          ],
          ['/v3/ru/vue-router', 'Vue Router'],
          ['/v3/ru/composition-api', 'Composition API'],
          ['/v3/ru/reducing-boilerplate-in-tests', 'Уменьшаем шаблонный код'],
          ['/v3/ru/jest-mocking-modules', 'Jest - мокаем модули'],
        ],
      },
      '/zh-CN/': {
        label: '简体中文',
        selectText: '语言',
        lastUpdated: '更新',
        editLinkText: '在 GitHub 上编辑本页',
        sidebar: [
          ['/zh-CN/', '欢迎'],
          ['/zh-CN/setting-up-for-tdd', '设置 TDD'],
          ['/zh-CN/rendering-a-component', '渲染组件'],
          ['/zh-CN/components-with-props', '测试 Props'],
          ['/zh-CN/computed-properties', '计算属性'],
          ['/zh-CN/simulating-user-input', '模拟用户输入'],
          ['/zh-CN/testing-emitted-events', '测试已发出的事件'],
          ['/zh-CN/mocking-global-objects', 'mock 全局对象'],
          ['/zh-CN/stubbing-components', 'stub 组件'],
          ['/zh-CN/finding-elements-and-components', '找到元素和组件'],
          ['/zh-CN/testing-vuex', '测试 Vuex'],
          ['/zh-CN/vuex-mutations', 'Vuex - Mutations'],
          ['/zh-CN/vuex-actions', 'Vuex - Actions'],
          ['/zh-CN/vuex-getters', 'Vuex - Getters'],
          ['/zh-CN/vuex-in-components', '组件中的 Vuex - $state 和 getters'],
          [
            '/zh-CN/vuex-in-components-mutations-and-actions',
            '组件中的 Vuex - mutations 和 actions',
          ],
          ['/zh-CN/vue-router', 'Vue Router'],
          ['/zh-CN/composition-api', 'Composition API'],
          ['/zh-CN/jest-mocking-modules', 'Jest - mock 模块'],
        ],
      },
      '/ko/': {
        label: '한국어',
        selectText: '다른 언어로 보기',
        lastUpdated: '마지막 업데이트',
        editLinkText: 'Github에서 이 페이지 수정하기',
        sidebar: [
          ['/ko/', '환영합니다'],
          ['/ko/setting-up-for-tdd', 'TDD를 위한 설정하기'],
          ['/ko/rendering-a-component', '컴포넌트 렌더하기'],
          ['/ko/components-with-props', 'props 테스트하기'],
          ['/ko/computed-properties', 'computed 프로퍼티'],
          ['/ko/simulating-user-input', '사용자 입력 시연하기'],
          ['/ko/testing-emitted-events', 'emitted 이벤트 테스트하기'],
          ['/ko/mocking-global-objects', '전역 객체 모킹하기'],
          ['/ko/stubbing-components', '컴포넌트 스터빙'],
          ['/ko/finding-elements-and-components', '엘리먼트와 컴포넌트 찾기'],
          ['/ko/testing-vuex', 'Vuex 테스트하기'],
          ['/ko/vuex-mutations', 'Vuex - 뮤테이션'],
          ['/ko/vuex-actions', 'Vuex - 액션'],
          ['/ko/vuex-getters', 'Vuex - 게터'],
          ['/ko/vuex-in-components', '컴포넌트 내에 있는 Vuex - $state와 게터'],
          [
            '/ko/vuex-in-components-mutations-and-actions',
            '컴포넌트 내에 있는 Vuex - 뮤테이션과 액션',
          ],
          ['/ko/vue-router', 'Vue 라우터'],
          ['/ko/composition-api', '컴포지션 API'],
          ['/ko/reducing-boilerplate-in-tests', '보일러플레이트 줄이기'],
          ['/ko/jest-mocking-modules', 'Jest - 모듈 모킹하기'],
        ],
      },
      '/id/': {
        label: 'Indonesia',
        selectText: 'Bahasa',
        lastUpdated: 'Terakhir Diperbaharui',
        editLinkText: 'Rubah halaman ini di Github',
        sidebar: [
          ['/id/', 'Selamat Datang'],
          ['/id/setting-up-for-tdd', 'Persiapan TDD'],
          ['/id/rendering-a-component', 'Merender component'],
          ['/id/components-with-props', 'Pengetesan props'],
          ['/id/computed-properties', 'Properti computed'],
          ['/id/simulating-user-input', 'Mensimulasikan input user'],
          ['/id/testing-emitted-events', 'Test pemangilan event'],
          ['/id/mocking-global-objects', 'Mock objek global'],
          ['/id/stubbing-components', 'Stubbing components'],
          [
            '/id/finding-elements-and-components',
            'Mencari elemen dan component',
          ],
          ['/id/testing-vuex', 'Pengetesan Vuex'],
          ['/id/vuex-mutations', 'Vuex - Mutations'],
          ['/id/vuex-actions', 'Vuex - Actions'],
          ['/id/vuex-getters', 'Vuex - Getters'],
          ['/id/vuex-in-components', 'Vuex di component - $state dan getters'],
          [
            '/id/vuex-in-components-mutations-and-actions',
            'Vuex di component - mutations dan actions',
          ],
          ['/id/vue-router', 'Vue Router'],
          ['/id/composition-api', 'Composition API'],
          ['/id/reducing-boilerplate-in-tests', 'Mengurangi Boilerplate'],
          ['/id/jest-mocking-modules', 'Jest - mock modul'],
        ],
      },
      '/v3/id/': {
        label: 'v3',
        selectText: 'Bahasa',
        lastUpdated: 'Terakhir Diperbaharui',
        editLinkText: 'Rubah halaman ini di Github',
        sidebar: [
          ['/v3/id/', 'Selamat Datang'],
          ['/v3/id/setting-up-for-tdd', 'Persiapan TDD'],
          ['/v3/id/rendering-a-component', 'Merender component'],
          ['/v3/id/components-with-props', 'Pengetesan props'],
          ['/v3/id/computed-properties', 'Properti computed'],
          ['/v3/id/simulating-user-input', 'Mensimulasikan input user'],
          ['/v3/id/testing-emitted-events', 'Test pemangilan event'],
          ['/v3/id/mocking-global-objects', 'Mock objek global'],
          ['/v3/id/stubbing-components', 'Stubbing components'],
          [
            '/v3/id/finding-elements-and-components',
            'Mencari elemen dan component',
          ],
          ['/v3/id/testing-vuex', 'Pengetesan Vuex'],
          ['/v3/id/vuex-mutations', 'Vuex - Mutations'],
          ['/v3/id/vuex-actions', 'Vuex - Actions'],
          ['/v3/id/vuex-getters', 'Vuex - Getters'],
          ['/v3/id/vuex-in-components', 'Vuex di component - $state dan getters'],
          [
            '/v3/id/vuex-in-components-mutations-and-actions',
            'Vuex di component - mutations dan actions',
          ],
          ['/v3/id/vue-router', 'Vue Router'],
          ['/v3/id/composition-api', 'Composition API'],
          ['/v3/id/reducing-boilerplate-in-tests', 'Mengurangi Boilerplate'],
          ['/v3/id/jest-mocking-modules', 'Jest - mock modul'],
        ],
      },
    },
  },
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    },
  },
}
