# Array

선언하는 변수의 타입이 배열임을 나타낼 때, `타입명[]` 또는 `Array<타입명>`을 표기한다.

```typescript
const firstNumberArray: number[] = [1, 11, 111];

const secondNumberArray: Array<number> = [2, 22, 222];
```

하나 이상의 원소를 가진 배열이 초기값으로 할당되는 경우, 타입 추론을 이용할 수도 있다.

```typescript
// number[] 타입으로 추론된다.
const thirdNumberArray = [3, 33, 333];
```

초기값을 빈 배열로 할당해야 한다면, 적당한 타입을 표기하는 것이 안전하다.

```typescript
// Bad; 타입을 표기하지 않으면 any[] 타입으로 추론된다.
const emptyArray = [];

// Good
const emptyNumberArray: number[] = [];
```

배열의 원소 개수가 고정되어 있다면, 튜플 타입을 표기할 수도 있다. 튜플 타입은 추론되지 않는다.

```typescript
// Bad; 타입을 표기하지 않으면 number[] 타입으로 추론된다. 변수명을 잘 지으면 타입을 추측할 수 있으나, 원소 개수를 보장해주지 않는다.
const coordinate2D = [37.5759607, 126.9769124];

// Good
const geoCoordinate: [number, number] = [37.5759607, 126.9769124];
```
