## Builder Pattern

```typescript
class pizza {
  constructor(
    private size: string,
    private cheese?: boolean,
    private pepperoni?: boolean,
    private bacon?: boolean
  ) {}
}
```

이렇게 객체를 생성함에 있어서 경우의 수가 많은 경우 과정이 복잡해지며 특정 매개변수는 거의 사용하지 않을 수도 있다.

빌더 패턴을 사용해서 객체 생성을 단계적, 순차적으로 진행할 수 있다.

개인적으론 그다지 쓸 일 없을거같음
