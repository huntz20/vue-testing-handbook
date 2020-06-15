(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{239:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue-cli-설치하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-설치하기"}},[t._v("#")]),t._v(" vue-cli 설치하기")]),t._v(" "),a("p",[a("code",[t._v("vue-test-utils")]),t._v("는 Vue의 공식 테스트 라이브러리이고, 이 가이드를 진행하는 동안 사용할 것입니다. 이 라이브러리는 브라우저와 Node.js 환경 양쪽에서 모두 작동합니다. 그리고 다른 테스트 러너(test runner)와 함께 사용할 수 있습니다. 이 가이드에서는 Node.js 환경에서 테스트를 실행하겠습니다.")]),t._v(" "),a("p",[a("code",[t._v("vue-cli")]),t._v("는 가장 간단하게 시작할 수 있는 방법입니다. 프로젝트를 준비해줄 뿐만 아니라 인기있는 테스트 프레임워크인 Jest의 환경도 설정해줍니다. 아래의 커맨드를 통해 설치해보겠습니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @vue/cli\n")])])]),a("p",[t._v("또는 npm에서 아래와 같이 입력합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @vue/cli\n")])])]),a("p",[a("code",[t._v("vue create [project-name]")]),t._v('을 실행해서 새로운 프로젝트를 만들어 보겠습니다. "Manually select features"를 선택하고 이어서 "Unit Testing" 선택, 테스트 러너로는 "Jest"를 선택합니다.')]),t._v(" "),a("p",[t._v("설치가 끝나고 나면, "),a("code",[t._v("cd")]),t._v("로 프로젝트에 들어가서 "),a("code",[t._v("yarn test:unit")]),t._v(" 커맨드를 실행합니다. 전부 잘 작동했다면, 아래와 같은 메세지가 나옵니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" PASS  tests/unit/HelloWorld.spec.js\n  HelloWorld.vue\n    ✓ renders props.msg when passed (26ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        2.074s\n")])])]),a("p",[t._v("축하합니다, 여러분은 첫 번째 통과하는 테스트를 실행했습니다.")]),t._v(" "),a("h2",{attrs:{id:"첫-번째-테스트-작성하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#첫-번째-테스트-작성하기"}},[t._v("#")]),t._v(" 첫 번째 테스트 작성하기")]),t._v(" "),a("p",[t._v("방금 전에는 프로젝트에 이미 존재하는 테스트를 실행했습니다. 직접 테스트를 작성해 보겠습니다. 컴포넌트를 작성하고, 작성한 컴포넌트를 테스트합니다. 전통적으로 TDD를 할 때, 실패하는 테스트를 먼저 작성하고나서, 테스트를 통과하는 코드를 구현합니다. 지금은 컴포넌트를 먼저 작성하겠습니다.")]),t._v(" "),a("p",[a("code",[t._v("src/components/HelloWorld.vue")]),t._v("나 "),a("code",[t._v("tests/unit/HelloWorld.spec.js")]),t._v("는 더 이상 필요 없으니까 지워도 됩니다.")]),t._v(" "),a("h2",{attrs:{id:"greeting-컴포넌트-생성하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#greeting-컴포넌트-생성하기"}},[t._v("#")]),t._v(" "),a("code",[t._v("Greeting")]),t._v(" 컴포넌트 생성하기")]),t._v(" "),a("p",[a("code",[t._v("src/components")]),t._v(" 안에 "),a("code",[t._v("Greeting.vue")]),t._v(" 파일을 만들어 보겠습니다. "),a("code",[t._v("Greeting.vue")]),t._v(" 안에 아래와 같은 내용을 추가합니다.")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ greeting }}\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"테스트-작성하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#테스트-작성하기"}},[t._v("#")]),t._v(" 테스트 작성하기")]),t._v(" "),a("p",[a("code",[t._v("Greeting")]),t._v("은 "),a("code",[t._v("greeting")]),t._v(" 값을 렌더(render) 하는 한 가지 책임만 가집니다. 아래와 같은 전략을 가지려고 합니다.")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("마운트")]),t._v("로 컴포넌트를 렌더합니다.")]),t._v(" "),a("li",[t._v('컴포넌트의 텍스트가 "Vue and TDD"를 포함하는지 어설트 합니다.')])]),t._v(" "),a("p",[a("code",[t._v("tests/unit")]),t._v(" 안에 "),a("code",[t._v("Greeting.spec.js")]),t._v("를 생성합니다. "),a("code",[t._v("Greeting.vue")]),t._v("와 "),a("code",[t._v("mount")]),t._v("를 import 합니다. 그러고 나서 테스트의 개요를 추가합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { mount } from '@vue/test-utils'\nimport Greeting from '@/components/Greeting.vue'\n\ndescribe('Greeting.vue', () => {\n  it('greeting을 렌더한다', () => {\n\n  })\n})\n")])])]),a("p",[t._v("TDD에서 사용하는 두 가지 문법이 있습니다. 여기서는 Jest에서 흔히 보이는 "),a("code",[t._v("describe")]),t._v("와 "),a("code",[t._v("it")]),t._v(" 문법을 사용하겠습니다. "),a("code",[t._v("describe")]),t._v("는 대부분의 경우에 어떤 것을 테스트할 지에 대한 개요를 나타냅니다. 이 경우에는 "),a("code",[t._v("Greeting.vue")]),t._v(" 입니다. "),a("code",[t._v("it")]),t._v("은 목표하는 테스트를 수행하기 위한 책임 중 한 부분을 나타냅니다. 컴포넌트에 기능을 추가할수록 "),a("code",[t._v("it")]),t._v(" 블록도 추가됩니다.")]),t._v(" "),a("p",[t._v("이제 "),a("code",[t._v("mount")]),t._v("로 컴포넌트를 렌더합니다. 일반적인 방법은 컴포넌트를 "),a("code",[t._v("wrapper")]),t._v("라는 변수에 할당하는 것입니다. 올바르게 작동하고 있는지 확인하기 위해서 결과도 출력하겠습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"테스트-실행하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#테스트-실행하기"}},[t._v("#")]),t._v(" 테스트 실행하기")]),t._v(" "),a("p",[t._v("터미널에서 "),a("code",[t._v("tarn test:unit")]),t._v("을 입력해서 테스트를 실행합니다. 파일이 "),a("code",[t._v("tests")]),t._v(" 폴더에 있고 파일 이름이 "),a("code",[t._v(".spec.js")]),t._v("로 끝나면 자동으로 테스트를 수행합니다. 잘 작동했다면, 아래와 같은 메시지를 보게됩니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PASS  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✓ renders a greeting (27ms)\n\nconsole.log tests/unit/Greeting.spec.js:7\n  <div>\n    Vue and TDD\n  </div>\n")])])]),a("p",[t._v("마크업이 정확하게 돼있는 것을 볼 수 있고, 테스트는 통과했습니다. 테스트가 실패하지 않았기때문에 통과하고 있습니다. 사실 이 테스트는 절대 실패할 수가 없어서, 유용한 방법은 아닙니다. "),a("code",[t._v("Greeting.vue")]),t._v("를 변경하고 템플릿에서 "),a("code",[t._v("greeting")]),t._v("을 지워도 여전히 통과합니다. 그럼 한번 수정해보겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"어설션-하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#어설션-하기"}},[t._v("#")]),t._v(" 어설션 하기")]),t._v(" "),a("p",[t._v("컴포넌트가 정확하게 작동하는지 확인하기 위해서 어설션(assertion) 하는 게 필요합니다. Jest에서 제공하는 API인 "),a("code",[t._v("expect")]),t._v("를 사용해서 어설션 할 수 있습니다. "),a("code",[t._v("expect(result).to [matcher] (actual)")]),t._v(" 와 같은 형태로 작성합니다.")]),t._v(" "),a("p",[a("em",[t._v("Matchers")]),t._v(" 는 값과 객체를 비교하는 메서드입니다. 예를들면 아래와 같습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Matchers의 전체 목록은 "),a("a",{attrs:{href:"https://jestjs.io/docs/en/expect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest 공식문서"),a("OutboundLink")],1),t._v("에서 확인할 수 있습니다. "),a("code",[t._v("vue-test-utils")]),t._v("는 어떤 matchers도 포함하지 않습니다. Jest에서 제공하는 것으로 충분합니다. "),a("code",[t._v("Greeting")]),t._v("에 있는 텍스트를 비교하고 싶습니다. 아래와 같이 작성합니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("그런데 "),a("code",[t._v("vue-test-utils")]),t._v("에는 마크업인 "),a("code",[t._v("wrapper.text")]),t._v("를 얻는 더 좋은 방법이 있습니다. 테스트의 마지막 부분을 마무리 하겠습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/test-utils'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Greeting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/Greeting.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Greeting.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'renders a greeting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("console.log")]),t._v("는 더 이상 필요 없습니다. 해당 부분은 삭제해도 됩니다. "),a("code",[t._v("yarn unit:test")]),t._v(" 명령어를 입력해서 테스트를 실행해보세요. 정상적으로 작동하면 아래와 같은 메세지가 나옵니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PASS  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✓ renders a greeting (15ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        1.477s, estimated 2s\n")])])]),a("p",[t._v("아주 좋아 보입니다. 그렇지만 정말로 잘 작동하는지 확인하려면, 항상 테스트를 실패하고나서 통과해야합니다. 전통적인 TDD에서는 실제로 기능하는 코드를 작성하기 전에 테스트 코드를 먼저 작성합니다. 테스트 코드의 실패를 보고, 실패 에러를 이용해서 코드를 어떻게 작성해야할지 도움을 받습니다. 이 테스트가 정말로 잘 작동하는지 확인해 보겠습니다. "),a("code",[t._v("Greeting.vue")]),t._v("를 아래와 같이 업데이트 해주세요.")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ greeting }}\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue without TDD"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("그리고 "),a("code",[t._v("yarn test:unit")]),t._v("으로 테스트를 실행해보세요.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('FAIL  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✕ renders a greeting (24ms)\n\n● Greeting.vue › renders a greeting\n\n  expect(received).toMatch(expected)\n\n  Expected value to match:\n    "Vue and TDD"\n  Received:\n    "Vue without TDD"\n\n     6 |     const wrapper = mount(Greeting)\n     7 |\n  >  8 |     expect(wrapper.text()).toMatch("Vue and TDD")\n       |                            ^\n     9 |   })\n    10 | })\n    11 |\n\n    at Object.<anonymous> (tests/unit/Greeting.spec.js:8:28)\n')])])]),a("p",[t._v("Jest가 좋은 피드백을 줍니다. 예상했던 결과와 실제 결과를 비교해서 볼 수 있습니다. 거기다가 어떤 라인에서 예상했던 테스트가 실패했는지도 볼 수 있습니다. 이 테스트는 예상대로 실패했습니다. "),a("code",[t._v("Greeting.vue")]),t._v("를 되돌리고 테스트가 통과하는지 다시 확인해보세요.")]),t._v(" "),a("p",[t._v("다음 챕터에서는 컴포넌트를 렌더링 하기 위해서 "),a("code",[t._v("vue-test-utils")]),t._v("에서 제공하는 "),a("code",[t._v("mount")]),t._v("와 "),a("code",[t._v("shallowMount")]),t._v("라는 두 가지 메서드를 살펴보겠습니다.")])])}),[],!1,null,null,null);s.default=e.exports}}]);