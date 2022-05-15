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

배열의 원소 개수와 원소들의 타입이 고정되어 있다면, 튜플 타입을 표기할 수도 있다. 튜플 타입은 추론되지 않는다.

```typescript
// Bad; 타입을 표기하지 않으면 number[] 타입으로 추론된다. 변수명을 잘 지으면 타입을 추측할 수 있으나, 원소 개수를 보장해주지 않는다.
const coordinate2D = [37.5759607, 126.9769124];

// Good
const geoCoordinate: [number, number] = [37.5759607, 126.9769124];
```

배열의 원소 개수와 원소들의 값이 고정되어 있다면, 상수 단언을 사용할 수도 있다. 이 경우 배열 리터럴은 읽기 전용 튜플로 취급된다.

```typescript
// readonly [10, 25, 50, 100] 타입으로 추론된다.
const rowsPerPageOptions = [10, 25, 50, 100] as const;
```

임의의 배열에 대해, 원소들의 타입으로 이루어진 유니언 타입을 얻을 수 있다.

```typescript
const primitiveArray: (string | number | boolean)[] = [];

// 배열의 타입을 명시적으로 표기한 경우, 초기값과 무관하게 해당 타입을 얻는다.
type SomePrimitive = typeof primitiveArray[number];


// (string | number)[] 타입으로 추론된다.
const oneDay = [2022, 'May 15th'];

// 타입 추론된 배열의 경우, 초기값 기반으로 추론된 타입을 얻는다. 이 경우에는 string | number 를 얻는다.
type DateSegment = typeof oneDay[number];


// 상수 단언을 사용한 배열의 경우 각 원소들이 리터럴 타입으로 취급되므로, 조금 더 구체적인 타입을 정의할 수 있다. 이 경우에는 10 | 25 | 50 | 100 을 얻는다.
type RowsPerPageOptions = typeof rowsPerPageOptions[number];
```
