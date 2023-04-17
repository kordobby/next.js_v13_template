# Next.js v13 beta - 번역 글

- 직접 공식문서 번역하면서 공부하는 것이 좋을 것 같아 번역해봤습니다.
- 번역은 계속해서 올라올 예정입니다.

### Getting started

👉🏻 [서론 부분 번역글 바로가기] (https://leetrue-log.vercel.app/nextjs-13-getting-started)

### Routing

👉🏻 [Routing 섹션 번역글 바로가기] (https://leetrue-log.vercel.app/nextjs-13-routing)

### Rendering

👉🏻 [Rendering 섹션 번역글 바로가기] (https://leetrue-log.vercel.app/nextjs-13-rendering)

<hr/>

### 알고 갑시다!

#### special files

- 계층구조
  - `layout.js`
  - `template.js`
  - `error.js`
  - `loading.js`
  - `not-found.js`
  - `page.js` or nested `layout.js`

```javascript
    <Layout>
        <Template>
            <ErrorBoundary fallback={<Error />}>
                <Suspense fallback={<Loading>}>
                    <ErrorBoundary fallback={<NotFound/>}>
                        <Page/>
                    </ErrorBoundary>
                </Suspense>
            </ErrorBoundary>
        </Template>
    </Layout>
```

- `layout.tsx`

  - 모든 route 가 공유하는 UI
  - 기존 Next.js 의 `_app`, `_document` 의 역할

- `template.tsx`

  - layout 과 유사하지만 경로 이동 시 새로운 인스턴스를 생성
  - use case
    - CSS 또는 애니메이션 라이브러리를 사용해 애니메이션을 시작/종료할 때
    - `useEffect` 및 `useState` 에 의존하는 기능들이 있을 때
    - 기본 프레임워크의 동작을 변경할 때

- `error.tsx`

  - React Error Boundary 에서 route segment 와 중첩된 children 을 자동 랩핑
  - 나머지 앱 기능들을 유지하며 영향을 받는 segment 에 대한 에러를 격리시켜줌
  - 에러 복구를 시도하는 기능 추가 가능

- `loading.js`
  - segment 및 하위 노드들에 대한 loading UI 를 생성
  - route segment 에서 서버로부터 로드하는 동안의 loading state 를 보여줌
  - 렌더링 완료 시에는 완료된 UI 로 자동 교체
- `not-found.js`
  - notFound function 이 route segment 에 발생했거나, URL 이 어떤 경로와도 매칭되지 않을 때 UI를 생성해 보여줌
- `page.js`
  - 경로의 고유한 UI 를 생성
  - `route.js` : 경로에 대한 server-side API 엔드포인트를 생성
